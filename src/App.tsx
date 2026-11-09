import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ThemeProvider } from './context/ThemeContext';

import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import { SchedulePage } from './pages/SchedulePage';
import { ProNightsPage } from './pages/ProNightsPage';
import { PastEditionsPage } from './pages/PastEditionsPage';
import { ParticipatePage } from './pages/ParticipatePage';
import { FaqPage } from './pages/FaqPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { EventDetailModal } from './components/EventDetailModal';
import { InterestForm } from './components/InterestForm';
import { LightboxModal } from './components/LightboxModal';
import { ShareModal } from './components/ShareModal';

import { EventItem, EventCategory } from './types/festival';

export const AppContent: React.FC = () => {
  const navigate = useNavigate();

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

  const handleOpenInterestModal = (preselectedEvent?: string, defaultCat?: string) => {
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
                onOpenEventModal={setSelectedEventModal}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/events"
            element={
              <EventsPage
                onOpenEventModal={setSelectedEventModal}
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
            path="/participate"
            element={
              <ParticipatePage
                onOpenInterestModal={(role) => handleOpenInterestModal('', role)}
                onNavigateCategory={(cat) => navigate(`/events?cat=${cat}`)}
              />
            }
          />
          <Route path="/faqs" element={<FaqPage />} />
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
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
