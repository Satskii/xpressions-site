import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { GamificationProvider, useGamification } from './context/GamificationContext';
import { ThemeProvider } from './context/ThemeContext';
import { ExperimentProvider } from './context/ExperimentContext';
import { recordCampaignVisit, trackPageView, trackGaEvent } from './utils/analytics';

import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import { SchedulePage } from './pages/SchedulePage';
import { ProNightsPage } from './pages/ProNightsPage';
import { PastEditionsPage } from './pages/PastEditionsPage';
import { SponsorsPage } from './pages/SponsorsPage';
import { ParticipatePage } from './pages/ParticipatePage';
import { FaqPage } from './pages/FaqPage';
import { CampaignPage } from './pages/CampaignPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { EventDetailModal } from './components/EventDetailModal';
import { InterestForm } from './components/InterestForm';
import { LightboxModal } from './components/LightboxModal';
import { ShareModal } from './components/ShareModal';

import { EventItem } from './types/festival';

export const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { awardXp } = useGamification();

  // Track pageviews & UTM campaign visits
  useEffect(() => {
    recordCampaignVisit(location.pathname, location.search);
    trackPageView(location.pathname);
  }, [location.pathname, location.search]);

  // Track Outbound External Link Clicks (GA4 event: 'click')
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;

      const isExternal =
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:');

      if (isExternal) {
        try {
          const url = new URL(href, window.location.href);
          if (url.hostname !== window.location.hostname) {
            trackGaEvent('click', {
              link_url: href,
              link_domain: url.hostname,
              link_text: (target.textContent || '').trim().slice(0, 100),
              outbound: true,
            });
          }
        } catch {
          trackGaEvent('click', {
            link_url: href,
            link_text: (target.textContent || '').trim().slice(0, 100),
            outbound: true,
          });
        }
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  // Modals state
  const [selectedEventModal, setSelectedEventModal] = useState<EventItem | null>(null);
  const [interestModalOpen, setInterestModalOpen] = useState(false);
  const [preselectedEventInterest, setPreselectedEventInterest] = useState<string>('');
  const [defaultCategoryInterest, setDefaultCategoryInterest] = useState<string>('');

  const [lightboxState, setLightboxState] = useState<{ isOpen: boolean; url: string; caption: string }>({
    isOpen: false,
    url: '',
    caption: '',
  });

  const [shareState, setShareState] = useState<{ isOpen: boolean; event: EventItem | null }>({
    isOpen: false,
    event: null,
  });

  const handleOpenEventModal = (event: EventItem) => {
    setSelectedEventModal(event);
    awardXp('rulebook_scout', 75, 'Inspected Event Rulebook!');
    // GA4: view_event
    trackGaEvent('view_event', {
      event_id: event.id,
      event_name: event.title,
      event_category: event.category,
      prizes: event.prizes?.amountOrDescription || 'TBA',
      participation_type: event.participationType,
    });
  };

  const handleOpenInterestModal = (preselectedEvent?: string, defaultCat?: string, sourceLocation?: string) => {
    // GA4: register_cta_click
    trackGaEvent('register_cta_click', {
      cta_location: sourceLocation || (preselectedEvent ? 'event_card' : 'general_cta'),
      event_title: preselectedEvent || 'all',
      category: defaultCat || 'all',
    });
    setPreselectedEventInterest(preselectedEvent || '');
    setDefaultCategoryInterest(defaultCat || '');
    setInterestModalOpen(true);
  };

  const handleOpenLightbox = (url: string, caption: string) => {
    setLightboxState({ isOpen: true, url, caption });
  };

  const handleOpenShare = (event: EventItem | null) => {
    setShareState({ isOpen: true, event });
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white dark:bg-plum-950 text-plum-950 dark:text-white font-inter antialiased flex flex-col selection:bg-orange-accent selection:text-white transition-colors duration-300">
      <ScrollProgressBar />
      <ScrollToTop />

      {/* Global Sticky Navigation */}
      <Navbar onOpenInterestModal={handleOpenInterestModal} />

      {/* Page Routing */}
      <main className="flex-1 pb-20 lg:pb-0 w-full max-w-full overflow-x-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenInterestModal={handleOpenInterestModal}
                onOpenEventModal={handleOpenEventModal}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/events"
            element={
              <EventsPage
                onOpenEventModal={handleOpenEventModal}
                onRegisterInterestForEvent={(title) => handleOpenInterestModal(title)}
              />
            }
          />
          <Route
            path="/schedule"
            element={
              <SchedulePage
                onRegisterInterest={() => handleOpenInterestModal('Schedule & Timetable Alerts', 'General Visitor')}
              />
            }
          />
          <Route
            path="/pro-nights"
            element={
              <ProNightsPage
                onRegisterInterest={() => handleOpenInterestModal('Pro Night Celebrity Concerts', 'General Visitor')}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/past-editions"
            element={
              <PastEditionsPage onOpenLightbox={handleOpenLightbox} />
            }
          />
          <Route
            path="/sponsors"
            element={
              <SponsorsPage
                onOpenInterestModal={handleOpenInterestModal}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/participate"
            element={
              <ParticipatePage
                onOpenInterestModal={(role) => handleOpenInterestModal('', role)}
                onNavigateCategory={(cat) => navigate(`/events?cat=${cat}`)}
              />
            }
          />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/campaign" element={<CampaignPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer onOpenInterestModal={() => handleOpenInterestModal()} />

      {/* Touch-Friendly Sticky Bottom Bar on Mobile Devices */}
      <MobileBottomBar onOpenInterestModal={() => handleOpenInterestModal()} />

      {/* Modals & Dialogs */}
      <EventDetailModal
        event={selectedEventModal}
        onClose={() => setSelectedEventModal(null)}
        onRegisterInterest={(title) => handleOpenInterestModal(title)}
        onShare={(event) => handleOpenShare(event)}
      />

      <InterestForm
        isOpen={interestModalOpen}
        onClose={() => setInterestModalOpen(false)}
        preselectedEvent={preselectedEventInterest}
        defaultCategory={defaultCategoryInterest}
      />

      <LightboxModal
        isOpen={lightboxState.isOpen}
        imageUrl={lightboxState.url}
        caption={lightboxState.caption}
        onClose={() => setLightboxState({ isOpen: false, url: '', caption: '' })}
      />

      <ShareModal
        isOpen={shareState.isOpen}
        event={shareState.event}
        onClose={() => setShareState({ isOpen: false, event: null })}
      />
    </div>
  );
};

export const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeProvider>
      <GamificationProvider>
        <ExperimentProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </ExperimentProvider>
      </GamificationProvider>
    </ThemeProvider>
  );
};

export default App;
