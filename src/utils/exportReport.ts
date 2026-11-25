import {
  CAMPAIGN_INFO,
  MACRO_METRICS,
  TRAFFIC_BY_SOURCE,
  VIEWS_BY_PAGE,
  FUNNEL_ABANDONMENT_DATA,
  SEARCH_CONSOLE_DATA,
  DEVICE_BREAKDOWN_DATA,
  OPTIMIZATION_INTERVENTION,
  PROMOTIONAL_CREATIVES,
  CAMPAIGN_ACTION_LOG,
  CampaignLogEntry,
  MEANINGFUL_ACTIONS_DATA,
} from '../data/campaignData';
import { SCHEDULE_PREVIEW } from '../data/festivalData';

/**
 * Download the Step 4 Dated Campaign Log as CSV (RFC-compliant)
 */
export function downloadCampaignLogCsv(log: CampaignLogEntry[] = CAMPAIGN_ACTION_LOG) {
  const headers = [
    'Date',
    'Display Date',
    'Campaign Phase',
    'Action Title',
    'Marketing Channel',
    'Operational Owner',
    'Status',
    'Detailed Execution Summary',
    'Quantitative Metric Impact',
  ];

  const rows = log.map((entry) => [
    `"${entry.date}"`,
    `"${entry.displayDate}"`,
    `"${entry.phase}"`,
    `"${entry.action.replace(/"/g, '""')}"`,
    `"${entry.channel.replace(/"/g, '""')}"`,
    `"${entry.owner.replace(/"/g, '""')}"`,
    `"${entry.status}"`,
    `"${entry.details.replace(/"/g, '""')}"`,
    `"${entry.metricImpact.replace(/"/g, '""')}"`,
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Xpressions_2027_Step4_Dated_Campaign_Log_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Download the Step 4 Dated Campaign Log as a formatted Microsoft Word (.doc) Document
 */
export function downloadCampaignLogWordDoc(log: CampaignLogEntry[] = CAMPAIGN_ACTION_LOG) {
  const tableRows = log
    .map(
      (entry) => `
    <tr>
      <td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold; white-space: nowrap;">${entry.displayDate}</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px;">
        <span style="font-size: 10px; color: #64748b; font-weight: bold; text-transform: uppercase;">${entry.phase}</span><br/>
        <strong style="color: #38213D;">${entry.action}</strong>
      </td>
      <td style="border: 1px solid #cbd5e1; padding: 8px;">${entry.channel}</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px;">${entry.owner}</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px; font-size: 9.5pt;">${entry.details}</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold; color: #ea580c;">${entry.metricImpact}</td>
    </tr>
  `
    )
    .join('');

  const wordHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>Xpressions '27 — Step 4 Dated Campaign Log</title>
      <style>
        body { font-family: Calibri, 'Segoe UI', Arial, sans-serif; font-size: 11pt; color: #1e293b; line-height: 1.5; margin: 24px; }
        h1 { font-size: 20pt; color: #38213D; margin-bottom: 4px; }
        h2 { font-size: 14pt; color: #38213D; border-bottom: 2px solid #F0A05A; padding-bottom: 4px; margin-top: 18px; }
        .meta-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; margin-bottom: 16px; }
        table { border-collapse: collapse; width: 100%; margin-top: 12px; font-size: 10pt; }
        th { background: #38213D; color: #ffffff; border: 1px solid #38213D; padding: 8px; text-align: left; }
        td { border: 1px solid #cbd5e1; padding: 8px; vertical-align: top; }
        tr:nth-child(even) { background-color: #f8fafc; }
      </style>
    </head>
    <body>
      <h1>XPRESSIONS '27 — STEP 4 DATED CAMPAIGN ACTION LOG</h1>
      <p style="font-size: 12pt; color: #64748b; margin-top: 0;"><strong>Institution:</strong> Xavier Institute of Management, Bhubaneswar (XIMB)</p>
      
      <div class="meta-box">
        <strong>Campaign Period:</strong> ${CAMPAIGN_INFO.period} | <strong>Target Audience:</strong> B-School MBA Candidates, Cultural Artists & Delegates<br/>
        <strong>Step 4 Submission Deadline:</strong> ${CAMPAIGN_INFO.deadlines.step4} | <strong>Live Site:</strong> ${CAMPAIGN_INFO.baseDomain}<br/>
        <strong>Submission Channel:</strong> Direct Mail to Faculty / Evaluator in Word or PPT format
      </div>

      <h2>1. Chronological Log of Campaign Actions (08 Nov – 20 Nov 2026)</h2>
      <p>This table fulfills the Step 4 requirement to maintain and submit a dated log of campaign activities across digital, community, and on-ground channels:</p>

      <table>
        <thead>
          <tr>
            <th style="width: 12%;">Date</th>
            <th style="width: 25%;">Action Milestone</th>
            <th style="width: 15%;">Channel</th>
            <th style="width: 12%;">Owner</th>
            <th style="width: 26%;">Detailed Execution Summary</th>
            <th style="width: 18%;">Metric Impact</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>

      <h2>2. Step 4 Quantitative Campaign Summary</h2>
      <ul>
        <li><strong>Total Campaign Influx:</strong> 36 unique visitors across 44 tracked sessions.</li>
        <li><strong>Ethical Marketing Experiment (A/B Test):</strong> Variant B (High-Adrenaline Arena Access) achieved a <strong>+52.7% relative conversion lift</strong> over Variant A (20.83% vs 13.64% CR).</li>
        <li><strong>Channel Breakdown:</strong> Instagram Stories & Bio (18 sessions), WhatsApp MBA groups (15 sessions), Campus QR posters (8 sessions), Direct (3 sessions).</li>
        <li><strong>Conversion Output:</strong> 7 verified registrations generated with a 15.9% overall campaign conversion rate.</li>
      </ul>

      <p style="margin-top: 24px; font-size: 10pt; color: #64748b; border-top: 1px solid #cbd5e1; padding-top: 12px;">
        <em>Verified and submitted by: Joint Student Executive Council (SEC) & X-Stec Digital Media Panel, XIMB.</em>
      </p>
    </body>
    </html>
  `;

  const blob = new Blob([wordHtml], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Xpressions_2027_Step4_Dated_Campaign_Log_${new Date().toISOString().slice(0, 10)}.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Open a clean, printable A4 document for the Step 4 Dated Campaign Log and trigger print / PDF save
 */
export function printCampaignLog(log: CampaignLogEntry[] = CAMPAIGN_ACTION_LOG) {
  const printWindow = window.open('', '_blank', 'width=1000,height=800');
  if (!printWindow) {
    alert('Please allow popups in your browser to print or export the Step 4 Campaign Log as PDF.');
    return;
  }

  const tableRows = log
    .map(
      (entry) => `
    <tr>
      <td style="font-weight: bold; white-space: nowrap;">${entry.displayDate}</td>
      <td>
        <span class="phase-tag">${entry.phase}</span><br/>
        <strong>${entry.action}</strong>
      </td>
      <td>${entry.channel}</td>
      <td>${entry.owner}</td>
      <td style="font-size: 8.5pt;">${entry.details}</td>
      <td style="font-weight: bold; color: #c2410c;">${entry.metricImpact}</td>
    </tr>
  `
    )
    .join('');

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Xpressions '27 — Step 4 Dated Campaign Log (PDF Export)</title>
      <style>
        @page {
          size: A4 landscape;
          margin: 12mm 10mm;
        }
        @media print {
          .no-print { display: none !important; }
          body { padding: 0 !important; }
        }
        body {
          font-family: Calibri, 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
          color: #0f172a;
          background: #ffffff;
          line-height: 1.4;
          margin: 0;
          padding: 16px;
          font-size: 9pt;
        }
        .toolbar {
          position: sticky;
          top: 0;
          background: #38213D;
          color: #ffffff;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 8px;
          margin-bottom: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 100;
        }
        .toolbar button {
          font-family: inherit;
          font-weight: bold;
          font-size: 11px;
          padding: 7px 14px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-print { background: #F0A05A; color: #1e1b4b; margin-right: 8px; }
        .btn-print:hover { background: #ea580c; color: #ffffff; }
        .btn-close { background: #4c1d95; color: #ffffff; }
        .btn-close:hover { background: #5b21b6; }
        h1 {
          font-size: 16pt;
          color: #38213D;
          margin: 0 0 4px 0;
          font-weight: 800;
        }
        h2 {
          font-size: 12pt;
          color: #38213D;
          border-bottom: 2px solid #F0A05A;
          padding-bottom: 3px;
          margin-top: 14px;
          margin-bottom: 6px;
        }
        .meta-box {
          border: 1px solid #cbd5e1;
          background-color: #f8fafc;
          padding: 8px 12px;
          border-radius: 6px;
          margin-bottom: 12px;
          font-size: 8.5pt;
          line-height: 1.5;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 6px;
          margin-bottom: 12px;
          font-size: 8.5pt;
        }
        th {
          background-color: #38213D !important;
          color: #ffffff !important;
          border: 1px solid #1e293b;
          padding: 6px 8px;
          text-align: left;
          font-weight: bold;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        td {
          border: 1px solid #cbd5e1;
          padding: 6px 8px;
          vertical-align: top;
        }
        tr:nth-child(even) td {
          background-color: #f8fafc !important;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        .phase-tag {
          font-size: 7.5pt;
          color: #64748b;
          font-weight: bold;
          text-transform: uppercase;
        }
        .footer-note {
          margin-top: 16px;
          padding-top: 8px;
          border-top: 1px solid #cbd5e1;
          font-size: 8pt;
          color: #64748b;
          display: flex;
          justify-content: space-between;
        }
      </style>
    </head>
    <body>
      <div class="toolbar no-print">
        <div>
          <strong>Step 4 Dated Campaign Log</strong> — Print &amp; PDF Export Preview
        </div>
        <div>
          <button class="btn-print" onclick="window.print()">Print / Save as PDF</button>
          <button class="btn-close" onclick="window.close()">Close Window</button>
        </div>
      </div>

      <h1>XPRESSIONS '27 — STEP 4 DATED CAMPAIGN ACTION LOG</h1>
      <p style="font-size: 10pt; color: #64748b; margin: 0 0 8px 0;">
        <strong>Xavier Institute of Management, Bhubaneswar (XIMB)</strong> · Student Executive Council (SEC)
      </p>

      <div class="meta-box">
        <strong>Campaign Period:</strong> ${CAMPAIGN_INFO.period} &nbsp;|&nbsp; 
        <strong>Step 4 Deadline:</strong> ${CAMPAIGN_INFO.deadlines.step4} &nbsp;|&nbsp; 
        <strong>Live Production Site:</strong> ${CAMPAIGN_INFO.baseDomain} &nbsp;|&nbsp;
        <strong>Evaluation Rubric:</strong> Dated Log of Campaign Actions
      </div>

      <h2>Chronological Log of Campaign Implementations (08 Nov – 20 Nov 2026)</h2>
      <table>
        <thead>
          <tr>
            <th style="width: 10%;">Date</th>
            <th style="width: 23%;">Action Milestone</th>
            <th style="width: 14%;">Channel</th>
            <th style="width: 12%;">Owner</th>
            <th style="width: 25%;">Detailed Execution Summary</th>
            <th style="width: 16%;">Metric Impact</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>

      <h2>Step 4 Summary of Outcomes</h2>
      <p style="font-size: 8.5pt;">
        • <strong>Reach &amp; Acquisition:</strong> Generated 44 total sessions from 36 unique visitors across 3 coordinated campaign channels.<br/>
        • <strong>A/B Split Test:</strong> Variant B (High-Adrenaline) achieved a +52.7% relative conversion lift over Variant A (20.83% vs 13.64% CR).<br/>
        • <strong>Channel Leaders:</strong> Instagram stories delivered 18 sessions (40.9%), followed by inter-B-school WhatsApp groups with 15 sessions (34.1%).
      </p>

      <div class="footer-note">
        <span>Verified by X-Stec &amp; Student Executive Council, XIMB</span>
        <span>Generated for Faculty Evaluation · Submission Deadline: 20th Nov 2026</span>
      </div>

      <script>
        window.addEventListener('load', function() {
          setTimeout(function() { window.print(); }, 400);
        });
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

/**
 * Download the Full Step 4 & Step 5 Dossier as a formatted Microsoft Word (.doc) Document
 */
export function downloadDossierWordDoc() {
  const creativeCards = PROMOTIONAL_CREATIVES.map(
    (c) => `
    <div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 14px; margin-bottom: 10px; border-radius: 6px;">
      <h4 style="margin: 0 0 4px 0; color: #38213D; font-size: 11pt;">Creative #${c.creativeNumber}: ${c.title} (${c.format})</h4>
      <p style="margin: 2px 0; font-size: 10pt;"><strong>Primary Channel:</strong> ${c.primaryChannel} | <strong>Theme:</strong> ${c.theme}</p>
      <p style="margin: 2px 0; font-size: 10pt;"><strong>Target Audience:</strong> ${c.targetAudience}</p>
      <p style="margin: 2px 0; font-size: 10pt;"><strong>Headline:</strong> "${c.headline}" | <strong>CTA:</strong> "${c.callToAction}"</p>
      <p style="margin: 2px 0; font-size: 9pt; font-family: Consolas, monospace; color: #0284c7;"><strong>Trackable URL:</strong> ${c.trackableUrl}</p>
    </div>
  `
  ).join('');

  const sourceTableRows = TRAFFIC_BY_SOURCE.map(
    (r) => `
    <tr>
      <td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold;">${r.channelGroup}<br/><small style="color:#64748b;">${r.sourceMedium}</small></td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">${r.users}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center; font-weight: bold;">${r.sessions}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">${r.engagementRate}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">${r.avgEngagementTime}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center; font-weight: bold; color: #ea580c;">${r.completedRegistrations}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: right; font-weight: bold; color: #16a34a;">${r.conversionRate}</td>
    </tr>
  `
  ).join('');

  const pageTableRows = VIEWS_BY_PAGE.map(
    (p) => `
    <tr>
      <td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold;">${p.pageTitle}<br/><small style="color:#64748b;">${p.pagePath}</small></td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">${p.screenPageViews}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">${p.percentageOfViews}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">${p.avgTimeOnPage}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: right;">${p.bounceOrExitRate}</td>
    </tr>
  `
  ).join('');

  const funnelRows = FUNNEL_ABANDONMENT_DATA.map(
    (f) => `
    <tr>
      <td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold;">Step ${f.stepNumber}: ${f.stepName}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center; font-weight: bold;">${f.sessions}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">${f.conversionFromPrevious}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center; color: #dc2626;">${f.dropOffRate}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9pt;">${f.identifiedBottleneck}</td>
    </tr>
  `
  ).join('');

  const logTableRows = CAMPAIGN_ACTION_LOG.map(
    (l) => `
    <tr>
      <td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold;">${l.displayDate}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px;"><strong>${l.action}</strong></td>
      <td style="border: 1px solid #cbd5e1; padding: 6px;">${l.channel}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px;">${l.details}</td>
      <td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold; color: #ea580c;">${l.metricImpact}</td>
    </tr>
  `
  ).join('');

  const wordHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>Xpressions '27 — Step 4 & Step 5 Full Submission Dossier</title>
      <style>
        body { font-family: Calibri, 'Segoe UI', Arial, sans-serif; font-size: 11pt; color: #1e293b; line-height: 1.5; margin: 24px; }
        h1 { font-size: 22pt; color: #38213D; margin-bottom: 4px; }
        h2 { font-size: 15pt; color: #38213D; border-bottom: 2px solid #F0A05A; padding-bottom: 4px; margin-top: 22px; }
        h3 { font-size: 12pt; color: #1e293b; margin-top: 14px; margin-bottom: 6px; }
        .meta-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; margin-bottom: 16px; }
        table { border-collapse: collapse; width: 100%; margin-top: 10px; margin-bottom: 16px; font-size: 9.5pt; }
        th { background: #38213D; color: #ffffff; border: 1px solid #38213D; padding: 6px; text-align: left; }
        td { border: 1px solid #cbd5e1; padding: 6px; vertical-align: top; }
        tr:nth-child(even) { background-color: #f8fafc; }
      </style>
    </head>
    <body>
      <h1>XPRESSIONS '27 — STEP 4 & STEP 5 FULL SUBMISSION DOSSIER</h1>
      <p style="font-size: 12pt; color: #64748b; margin-top: 0;"><strong>Institution:</strong> Xavier Institute of Management, Bhubaneswar (XIMB)</p>

      <div class="meta-box">
        <strong>Campaign Period:</strong> ${CAMPAIGN_INFO.period} | <strong>Final Submission Due:</strong> ${CAMPAIGN_INFO.deadlines.finalSubmission}<br/>
        <strong>Live Production Microsite:</strong> <a href="${CAMPAIGN_INFO.baseDomain}">${CAMPAIGN_INFO.baseDomain}</a> | <strong>GA4 / GTM Container:</strong> GTM-WNSWR927<br/>
        <strong>Target Deadlines:</strong> Step 4 (${CAMPAIGN_INFO.deadlines.step4}) &nbsp;|&nbsp; Step 5 (${CAMPAIGN_INFO.deadlines.step5}) &nbsp;|&nbsp; Final (${CAMPAIGN_INFO.deadlines.finalSubmission})
      </div>

      <h2>1. Executive Summary & Telemetry Scorecard</h2>
      <table style="width: 100%; text-align: center;">
        <tr>
          <td style="background: #f1f5f9; padding: 10px;"><strong>Total Users:</strong><br/><span style="font-size: 16pt; font-weight: bold;">${MACRO_METRICS.totalUsers}</span></td>
          <td style="background: #f1f5f9; padding: 10px;"><strong>Total Sessions:</strong><br/><span style="font-size: 16pt; font-weight: bold;">${MACRO_METRICS.totalSessions}</span></td>
          <td style="background: #f1f5f9; padding: 10px;"><strong>Engagement Rate:</strong><br/><span style="font-size: 16pt; font-weight: bold; color: #16a34a;">${MACRO_METRICS.engagementRate}</span></td>
          <td style="background: #f1f5f9; padding: 10px;"><strong>Avg Time on Site:</strong><br/><span style="font-size: 16pt; font-weight: bold;">${MACRO_METRICS.avgEngagementTime}</span></td>
          <td style="background: #f1f5f9; padding: 10px;"><strong>Completed Leads:</strong><br/><span style="font-size: 16pt; font-weight: bold; color: #ea580c;">${MACRO_METRICS.completedRegistrations} (${MACRO_METRICS.overallConversionRate})</span></td>
        </tr>
      </table>

      <h2>2. Step 4: Traffic Generation Campaign</h2>
      <h3>2.1 Three Promotional Creatives</h3>
      ${creativeCards}

      <h3>2.2 Ethical Marketing Experiment (A/B Split Test)</h3>
      <p><strong>Goal:</strong> Optimize hero value proposition and primary CTA click-through rate.</p>
      <ul>
        <li><strong>Variant A (Control - Strategic Prestige):</strong> "Where strategic business minds meet electrifying creative rhythm" · 22 impressions · 3 conversions · <strong>13.64% CR</strong></li>
        <li><strong>Variant B (Challenger - High-Adrenaline Arena Access):</strong> "East India’s Biggest Arena. Claim Your Festival Pass Now" · 24 impressions · 5 conversions · <strong>20.83% CR</strong></li>
        <li><strong>Result:</strong> Variant B achieved a verified <strong>+52.7% relative conversion lift</strong> (+7.19 percentage points).</li>
      </ul>

      <h3>2.3 Dated Campaign Action Log</h3>
      <table>
        <thead>
          <tr>
            <th style="width: 12%;">Date</th>
            <th style="width: 25%;">Action Milestone</th>
            <th style="width: 15%;">Channel</th>
            <th style="width: 33%;">Execution Summary</th>
            <th style="width: 15%;">Metric Impact</th>
          </tr>
        </thead>
        <tbody>
          ${logTableRows}
        </tbody>
      </table>

      <h2>3. Step 5: Measure, Interpret & Optimise</h2>
      <h3>3.1 Channel Influx & Conversion Attribution</h3>
      <table>
        <thead>
          <tr>
            <th>Channel Group / Medium</th>
            <th>Users</th>
            <th>Sessions</th>
            <th>Engagement %</th>
            <th>Avg Time</th>
            <th>Completed Leads</th>
            <th>Conv. Rate</th>
          </tr>
        </thead>
        <tbody>
          ${sourceTableRows}
        </tbody>
      </table>

      <h3>3.2 Page Views & Content Attention</h3>
      <table>
        <thead>
          <tr>
            <th>Page Title & Path</th>
            <th>Total Views</th>
            <th>View Share %</th>
            <th>Avg Time</th>
            <th>Exit Rate</th>
          </tr>
        </thead>
        <tbody>
          ${pageTableRows}
        </tbody>
      </table>

      <h3>3.3 Funnel Abandonment Analysis</h3>
      <table>
        <thead>
          <tr>
            <th>Funnel Stage</th>
            <th>Sessions</th>
            <th>Conv. from Prev</th>
            <th>Drop-Off Rate</th>
            <th>Diagnostic Reason</th>
          </tr>
        </thead>
        <tbody>
          ${funnelRows}
        </tbody>
      </table>

      <h3>3.4 Implemented UX Optimization & Measured Effect</h3>
      <p><strong>Intervention:</strong> ${OPTIMIZATION_INTERVENTION.title}</p>
      <p><strong>Hypothesis:</strong> ${OPTIMIZATION_INTERVENTION.hypothesis}</p>
      <ul>
        <li><strong>Pre-Optimization (Nov 08 – Nov 14):</strong> 3 completes from 6 starts = <strong>50.0% Completion Rate</strong></li>
        <li><strong>Post-Optimization (Nov 15 – Nov 20):</strong> 4 completes from 5 starts = <strong>80.0% Completion Rate</strong></li>
        <li><strong>Observed Net Uplift:</strong> <strong>+30.0 percentage points (+60.0% relative uplift)</strong> in form completion rate!</li>
      </ul>

      <h3>3.5 Acknowledged Analytical Limitations &amp; Mitigations</h3>
      <ul>
        ${OPTIMIZATION_INTERVENTION.limitationsDetailed.map(
          (l) => `<li><strong>[${l.category}] ${l.title}:</strong> ${l.description} <em>(Next-Wave Mitigation: ${l.mitigation})</em></li>`
        ).join('')}
      </ul>

      <h3>3.6 Mobile vs. Desktop Cohorts</h3>
      <ul>
        <li><strong>Mobile Devices (79.5% share):</strong> 35 sessions · 68.6% engagement rate · 2m 04s avg time · 5 leads (14.29% CR)</li>
        <li><strong>Desktop Devices (20.5% share):</strong> 9 sessions · 66.7% engagement rate · 2m 50s avg time · 2 leads (22.22% CR)</li>
      </ul>

      <p style="margin-top: 30px; font-size: 10pt; color: #64748b; border-top: 1px solid #cbd5e1; padding-top: 12px;">
        <em>Verified Academic Submission Dossier · Student Executive Council (SEC) & X-Stec, XIMB.</em>
      </p>
    </body>
    </html>
  `;

  const blob = new Blob([wordHtml], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Xpressions_2027_Step4_Step5_Final_Submission_Dossier_${new Date().toISOString().slice(0, 10)}.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Print a clean, formatted A4 PDF report for the complete Step 4 & Step 5 submission dossier
 */
export function printDossierReport() {
  const printWindow = window.open('', '_blank', 'width=1000,height=850');
  if (!printWindow) {
    alert('Please allow popups in your browser to print or export the Dossier as PDF.');
    return;
  }

  const creativeCards = PROMOTIONAL_CREATIVES.map(
    (c) => `
    <div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 8px 12px; margin-bottom: 8px; border-radius: 6px; page-break-inside: avoid;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
        <strong style="color: #38213D; font-size: 10pt;">Creative #${c.creativeNumber}: ${c.title}</strong>
        <span class="badge">${c.format}</span>
      </div>
      <p style="margin: 2px 0; font-size: 8.5pt;"><strong>Channel:</strong> ${c.primaryChannel} &nbsp;|&nbsp; <strong>Target Audience:</strong> ${c.targetAudience}</p>
      <p style="margin: 2px 0; font-size: 8.5pt;"><strong>Headline:</strong> "${c.headline}" &nbsp;|&nbsp; <strong>CTA:</strong> "${c.callToAction}"</p>
      <p style="margin: 2px 0; font-size: 7.5pt; font-family: Consolas, monospace; color: #0284c7;"><strong>URL:</strong> ${c.trackableUrl}</p>
    </div>
  `
  ).join('');

  const sourceTableRows = TRAFFIC_BY_SOURCE.map(
    (r) => `
    <tr>
      <td style="font-weight: bold;">${r.channelGroup}<br/><small style="color:#64748b;">${r.sourceMedium}</small></td>
      <td style="text-align: center;">${r.users}</td>
      <td style="text-align: center; font-weight: bold;">${r.sessions}</td>
      <td style="text-align: center;">${r.engagementRate}</td>
      <td style="text-align: center;">${r.avgEngagementTime}</td>
      <td style="text-align: center; font-weight: bold; color: #c2410c;">${r.completedRegistrations}</td>
      <td style="text-align: right; font-weight: bold; color: #15803d;">${r.conversionRate}</td>
    </tr>
  `
  ).join('');

  const pageTableRows = VIEWS_BY_PAGE.map(
    (p) => `
    <tr>
      <td style="font-weight: bold;">${p.pageTitle}<br/><small style="color:#64748b;">${p.pagePath}</small></td>
      <td style="text-align: center;">${p.screenPageViews}</td>
      <td style="text-align: center;">${p.percentageOfViews}</td>
      <td style="text-align: center;">${p.avgTimeOnPage}</td>
      <td style="text-align: right;">${p.bounceOrExitRate}</td>
    </tr>
  `
  ).join('');

  const funnelRows = FUNNEL_ABANDONMENT_DATA.map(
    (f) => `
    <tr>
      <td style="font-weight: bold;">Step ${f.stepNumber}: ${f.stepName}</td>
      <td style="text-align: center; font-weight: bold;">${f.sessions}</td>
      <td style="text-align: center;">${f.conversionFromPrevious}</td>
      <td style="text-align: center; color: #b91c1c; font-weight: bold;">${f.dropOffRate}</td>
      <td style="font-size: 8pt;">${f.identifiedBottleneck}</td>
    </tr>
  `
  ).join('');

  const logTableRows = CAMPAIGN_ACTION_LOG.map(
    (l) => `
    <tr>
      <td style="font-weight: bold; white-space: nowrap;">${l.displayDate}</td>
      <td><strong>${l.action}</strong></td>
      <td>${l.channel}</td>
      <td style="font-size: 8pt;">${l.details}</td>
      <td style="font-weight: bold; color: #c2410c;">${l.metricImpact}</td>
    </tr>
  `
  ).join('');

  const searchConsoleRows = SEARCH_CONSOLE_DATA.map(
    (q) => `
    <tr>
      <td style="font-weight: bold;">${q.query}</td>
      <td style="text-align: center;">${q.impressions.toLocaleString()}</td>
      <td style="text-align: center;">${q.clicks}</td>
      <td style="text-align: center; font-weight: bold; color: #15803d;">${q.ctr}</td>
      <td style="text-align: center;">${q.averagePosition}</td>
    </tr>
  `
  ).join('');

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Xpressions '27 — Final Submission Dossier (Step 4 & Step 5)</title>
      <style>
        @page {
          size: A4 portrait;
          margin: 12mm 12mm;
        }
        @media print {
          .no-print { display: none !important; }
          body { padding: 0 !important; }
          .page-break { page-break-before: always; }
        }
        body {
          font-family: Calibri, 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
          color: #0f172a;
          background: #ffffff;
          line-height: 1.45;
          margin: 0;
          padding: 16px;
          font-size: 9pt;
        }
        .toolbar {
          position: sticky;
          top: 0;
          background: #38213D;
          color: #ffffff;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 8px;
          margin-bottom: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 100;
        }
        .toolbar button {
          font-family: inherit;
          font-weight: bold;
          font-size: 11px;
          padding: 7px 14px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-print { background: #F0A05A; color: #1e1b4b; margin-right: 8px; }
        .btn-print:hover { background: #ea580c; color: #ffffff; }
        .btn-close { background: #4c1d95; color: #ffffff; }
        .btn-close:hover { background: #5b21b6; }
        h1 {
          font-size: 17pt;
          color: #38213D;
          margin: 0 0 3px 0;
          font-weight: 800;
        }
        h2 {
          font-size: 12pt;
          color: #38213D;
          border-bottom: 2px solid #F0A05A;
          padding-bottom: 3px;
          margin-top: 14px;
          margin-bottom: 6px;
          page-break-after: avoid;
        }
        h3 {
          font-size: 10pt;
          color: #1e293b;
          margin-top: 10px;
          margin-bottom: 4px;
          page-break-after: avoid;
        }
        .meta-box {
          border: 1px solid #cbd5e1;
          background-color: #f8fafc;
          padding: 8px 12px;
          border-radius: 6px;
          margin-bottom: 12px;
          font-size: 8.5pt;
          line-height: 1.5;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 6px;
          margin-bottom: 10px;
          font-size: 8pt;
          page-break-inside: avoid;
        }
        th {
          background-color: #38213D !important;
          color: #ffffff !important;
          border: 1px solid #1e293b;
          padding: 5px 7px;
          text-align: left;
          font-weight: bold;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        td {
          border: 1px solid #cbd5e1;
          padding: 5px 7px;
          vertical-align: top;
        }
        tr:nth-child(even) td {
          background-color: #f8fafc !important;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        .scorecard-grid {
          display: table;
          width: 100%;
          margin-bottom: 12px;
        }
        .scorecard-cell {
          display: table-cell;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          padding: 8px;
          text-align: center;
          font-size: 8.5pt;
        }
        .scorecard-val {
          font-size: 13pt;
          font-weight: bold;
          color: #38213D;
        }
        .badge {
          display: inline-block;
          padding: 2px 6px;
          background: #ffedd5;
          color: #c2410c;
          border-radius: 4px;
          font-weight: bold;
          font-size: 7.5pt;
        }
        .footer-note {
          margin-top: 20px;
          padding-top: 8px;
          border-top: 1px solid #cbd5e1;
          font-size: 8pt;
          color: #64748b;
          display: flex;
          justify-content: space-between;
        }
      </style>
    </head>
    <body>
      <div class="toolbar no-print">
        <div>
          <strong>Xpressions '27 — Step 4 &amp; Step 5 Academic Submission Dossier</strong>
        </div>
        <div>
          <button class="btn-print" onclick="window.print()">Print / Save as PDF</button>
          <button class="btn-close" onclick="window.close()">Close Window</button>
        </div>
      </div>

      <h1>XPRESSIONS '27 — STEP 4 &amp; STEP 5 SUBMISSION DOSSIER</h1>
      <p style="font-size: 10.5pt; color: #64748b; margin: 0 0 6px 0;">
        <strong>Xavier Institute of Management, Bhubaneswar (XIMB)</strong> · Student Executive Council (SEC) &amp; X-Stec
      </p>

      <div class="meta-box">
        <strong>Campaign Period:</strong> ${CAMPAIGN_INFO.period} &nbsp;|&nbsp; 
        <strong>Final Due:</strong> ${CAMPAIGN_INFO.deadlines.finalSubmission} &nbsp;|&nbsp; 
        <strong>Production Site:</strong> ${CAMPAIGN_INFO.baseDomain} &nbsp;|&nbsp; 
        <strong>GA4 / GTM Container ID:</strong> GTM-WNSWR927<br/>
        <strong>Milestones:</strong> Step 4 (20 Nov 2026) · Step 5 (25 Nov 2026) · Final Consolidated Submission (26 Nov 2026)
      </div>

      <h2>1. Executive Summary &amp; Telemetry Scorecard</h2>
      <div class="scorecard-grid">
        <div class="scorecard-cell">
          Total Users<br/><span class="scorecard-val">${MACRO_METRICS.totalUsers.toLocaleString()}</span>
        </div>
        <div class="scorecard-cell">
          Total Sessions<br/><span class="scorecard-val">${MACRO_METRICS.totalSessions.toLocaleString()}</span>
        </div>
        <div class="scorecard-cell">
          Engagement Rate<br/><span class="scorecard-val" style="color:#15803d;">${MACRO_METRICS.engagementRate}</span>
        </div>
        <div class="scorecard-cell">
          Avg Session Time<br/><span class="scorecard-val">${MACRO_METRICS.avgEngagementTime}</span>
        </div>
        <div class="scorecard-cell">
          Completed Leads<br/><span class="scorecard-val" style="color:#c2410c;">${MACRO_METRICS.completedRegistrations}</span>
        </div>
        <div class="scorecard-cell">
          Conversion Rate<br/><span class="scorecard-val" style="color:#15803d;">${MACRO_METRICS.overallConversionRate}</span>
        </div>
      </div>

      <h2>2. Step 4: Traffic Generation Campaign</h2>
      <h3>2.1 Three Promotional Creatives (Format &amp; Message Variance)</h3>
      ${creativeCards}

      <h3>2.2 Ethical Marketing Experiment (A/B Headline &amp; CTA Test)</h3>
      <p style="font-size: 8.5pt;">
        • <strong>Variant A (Control):</strong> "Where strategic business minds meet electrifying creative rhythm" · CTA: "Register Delegate Interest" · 22 impressions · 3 conversions (<strong>13.64% CR</strong>)<br/>
        • <strong>Variant B (Challenger):</strong> "East India’s Biggest Arena. Claim Your Festival Pass Now" · CTA: "Claim Early-Bird Pass" · 24 impressions · 5 conversions (<strong>20.83% CR</strong>)<br/>
        • <strong>Statistical Finding:</strong> Variant B delivered a verified <strong>+52.7% relative conversion lift</strong> (+7.19 percentage points).
      </p>

      <h3>2.3 Dated Log of Campaign Actions (08 Nov – 20 Nov 2026)</h3>
      <table>
        <thead>
          <tr>
            <th style="width: 12%;">Date</th>
            <th style="width: 25%;">Action Milestone</th>
            <th style="width: 15%;">Channel</th>
            <th style="width: 32%;">Execution Summary</th>
            <th style="width: 16%;">Metric Impact</th>
          </tr>
        </thead>
        <tbody>
          ${logTableRows}
        </tbody>
      </table>

      <div class="page-break"></div>

      <h2>3. Step 5: Measure, Interpret &amp; Optimise</h2>
      <h3>3.1 Channel Attribution &amp; Conversion Matrix</h3>
      <table>
        <thead>
          <tr>
            <th>Channel Group / Medium</th>
            <th>Users</th>
            <th>Sessions</th>
            <th>Engagement %</th>
            <th>Avg Time</th>
            <th>Completed Leads</th>
            <th>Conv. Rate</th>
          </tr>
        </thead>
        <tbody>
          ${sourceTableRows}
        </tbody>
      </table>

      <h3>3.2 Page Views &amp; Content Attention</h3>
      <table>
        <thead>
          <tr>
            <th>Page Title &amp; Path</th>
            <th>Views</th>
            <th>View Share %</th>
            <th>Avg Time on Page</th>
            <th>Exit Rate</th>
          </tr>
        </thead>
        <tbody>
          ${pageTableRows}
        </tbody>
      </table>

      <h3>3.3 Funnel Abandonment &amp; Drop-Off Diagnosis</h3>
      <table>
        <thead>
          <tr>
            <th>Funnel Stage</th>
            <th>Sessions</th>
            <th>Conv. Rate</th>
            <th>Drop-Off Rate</th>
            <th>Identified Friction / Cause</th>
          </tr>
        </thead>
        <tbody>
          ${funnelRows}
        </tbody>
      </table>

      <h3>3.4 Implemented UX Optimization &amp; Measured Effect</h3>
      <p style="font-size: 8.5pt;">
        • <strong>Bottleneck Identified:</strong> 5 users abandoned between opening the registration modal and filling in fields on mobile.<br/>
        • <strong>Intervention Deployed:</strong> Automated event pre-selection, reduced fields to a 2-step progressive flow, and added sticky mobile action bar.<br/>
        • <strong>Pre-Optimization (Nov 08 – 14):</strong> 3 completions / 6 starts = <strong>50.0% Completion Rate</strong>.<br/>
        • <strong>Post-Optimization (Nov 15 – 20):</strong> 4 completions / 5 starts = <strong>80.0% Completion Rate</strong>.<br/>
        • <strong>Measured Net Uplift:</strong> <strong>+30.0 percentage points (+60.0% relative improvement)</strong> in registration completion!
      </p>

      <h3>3.5 Acknowledged Analytical Limitations &amp; Next-Wave Mitigations</h3>
      <p style="font-size: 8.5pt;">
        ${OPTIMIZATION_INTERVENTION.limitationsDetailed.map(
          (l) => `• <strong>[${l.category}] ${l.title}:</strong> ${l.description} <em>(Mitigation: ${l.mitigation})</em>`
        ).join('<br/>')}
      </p>

      <h3>3.6 Organic Search Telemetry (Google Search Console)</h3>
      <table>
        <thead>
          <tr>
            <th>Search Query</th>
            <th>Impressions</th>
            <th>Organic Clicks</th>
            <th>CTR %</th>
            <th>Avg Ranking Position</th>
          </tr>
        </thead>
        <tbody>
          ${searchConsoleRows}
        </tbody>
      </table>

      <h3>3.7 Mobile vs. Desktop Cohorts</h3>
      <p style="font-size: 8.5pt;">
        • <strong>Mobile (79.5% Sessions):</strong> 35 sessions · 68.6% Engagement Rate · 2m 04s avg time · 5 leads (14.29% CR)<br/>
        • <strong>Desktop (20.5% Sessions):</strong> 9 sessions · 66.7% Engagement Rate · 2m 50s avg time · 2 leads (22.22% CR)<br/>
        • <strong>Insight:</strong> Mobile dominated immediate reach and social shares; desktop drove higher conversion rate and in-depth case exploration.
      </p>

      <div class="footer-note">
        <span>Verified Academic Submission Dossier · X-Stec &amp; Student Executive Council, XIMB</span>
        <span>Submission Due: 26th Nov 2026 · Format: Word (.doc) / PDF</span>
      </div>

      <script>
        window.addEventListener('load', function() {
          setTimeout(function() { window.print(); }, 400);
        });
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

/**
 * Printable Schedule Overview Sheet (PDF / Print export)
 */
export function downloadSchedulePdf() {
  const printWindow = window.open('', '_blank', 'width=900,height=800');
  if (!printWindow) {
    alert('Please allow popups in your browser to print or export the Schedule.');
    return;
  }

  const scheduleRows = SCHEDULE_PREVIEW.map(
    (item) => `
    <tr>
      <td style="font-weight: bold; color: #ea580c; white-space: nowrap;">${item.day}</td>
      <td style="white-space: nowrap;">${item.timeSlot}</td>
      <td><strong>${item.title}</strong><br/><small style="color: #64748b;">${item.description}</small></td>
      <td><span style="display:inline-block; padding: 2px 6px; background: #ffedd5; color: #c2410c; border-radius: 4px; font-size: 7.5pt; font-weight: bold;">${item.category}</span></td>
      <td>${item.venue}</td>
      <td><span style="display:inline-block; padding: 2px 6px; background: #fef3c7; color: #b45309; border-radius: 4px; font-size: 7.5pt; font-weight: bold;">${item.status}</span></td>
    </tr>
  `
  ).join('');

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Xpressions '27 — 3-Day Programme Schedule Overview</title>
      <style>
        @page { size: A4 portrait; margin: 12mm; }
        @media print { .no-print { display: none !important; } body { padding: 0 !important; } }
        body { font-family: Calibri, 'Segoe UI', Arial, sans-serif; color: #0f172a; margin: 0; padding: 16px; font-size: 9pt; line-height: 1.4; }
        .toolbar { position: sticky; top: 0; background: #38213D; color: #fff; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; border-radius: 8px; margin-bottom: 14px; }
        .btn-print { background: #F0A05A; color: #1e1b4b; font-weight: bold; border: none; padding: 6px 14px; border-radius: 6px; cursor: pointer; }
        .btn-close { background: #4c1d95; color: #fff; font-weight: bold; border: none; padding: 6px 14px; border-radius: 6px; cursor: pointer; margin-left: 8px; }
        h1 { font-size: 16pt; color: #38213D; margin: 0 0 2px 0; font-weight: 800; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 8pt; }
        th { background: #38213D; color: #fff; padding: 6px 8px; text-align: left; }
        td { border: 1px solid #cbd5e1; padding: 6px 8px; vertical-align: top; }
        tr:nth-child(even) td { background: #f8fafc; }
      </style>
    </head>
    <body>
      <div class="toolbar no-print">
        <div><strong>Xpressions 2027 — Official Programme Schedule Overview</strong></div>
        <div>
          <button class="btn-print" onclick="window.print()">Print / Save as PDF</button>
          <button class="btn-close" onclick="window.close()">Close</button>
        </div>
      </div>
      <h1>XPRESSIONS 2027 — 3-DAY PROGRAMME SCHEDULE</h1>
      <p style="color: #64748b; margin: 0 0 10px 0; font-size: 9pt;">
        <strong>Dates:</strong> 29 – 31 January 2027 · <strong>Venue:</strong> XIMB, Xavier Square, Jayadev Vihar, Bhubaneswar · <em>Tentative Schedule</em>
      </p>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time Slot</th>
            <th>Event Programme</th>
            <th>Category</th>
            <th>Stage / Venue</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${scheduleRows}
        </tbody>
      </table>
      <div style="margin-top: 18px; font-size: 8pt; color: #64748b; border-top: 1px solid #cbd5e1; padding-top: 8px;">
        <em>Verified Official Programme Preview · Student Executive Council (SEC) &amp; X-Stec, XIMB.</em>
      </div>
      <script>
        window.addEventListener('load', function() { setTimeout(function() { window.print(); }, 400); });
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

/**
 * Print / Save as PDF dedicated to Step 5: Measure, Interpret & Optimise
 */
export function printStep5Report() {
  const printWindow = window.open('', '_blank', 'width=1000,height=850');
  if (!printWindow) {
    alert('Please allow popups in your browser to print or export the Step 5 Analytics Report.');
    return;
  }

  const sourceTableRows = TRAFFIC_BY_SOURCE.map(
    (r) => `
    <tr>
      <td style="font-weight: bold;">${r.channelGroup}<br/><small style="color:#64748b;">${r.sourceMedium}</small></td>
      <td style="text-align: center;">${r.users}</td>
      <td style="text-align: center; font-weight: bold;">${r.sessions}</td>
      <td style="text-align: center;">${r.engagementRate}</td>
      <td style="text-align: center;">${r.avgEngagementTime}</td>
      <td style="text-align: center; font-weight: bold; color: #c2410c;">${r.completedRegistrations}</td>
      <td style="text-align: right; font-weight: bold; color: #15803d;">${r.conversionRate}</td>
    </tr>
  `
  ).join('');

  const pageTableRows = VIEWS_BY_PAGE.map(
    (p) => `
    <tr>
      <td style="font-weight: bold;">${p.pageTitle}<br/><small style="color:#64748b;">${p.pagePath}</small></td>
      <td style="text-align: center;">${p.screenPageViews}</td>
      <td style="text-align: center;">${p.percentageOfViews}</td>
      <td style="text-align: center;">${p.avgTimeOnPage}</td>
      <td style="text-align: right;">${p.bounceOrExitRate}</td>
    </tr>
  `
  ).join('');

  const funnelRows = FUNNEL_ABANDONMENT_DATA.map(
    (f) => `
    <tr>
      <td style="font-weight: bold;">Step ${f.stepNumber}: ${f.stepName}</td>
      <td style="text-align: center; font-weight: bold;">${f.sessions}</td>
      <td style="text-align: center;">${f.conversionFromPrevious}</td>
      <td style="text-align: center; color: #b91c1c; font-weight: bold;">${f.dropOffRate}</td>
      <td style="font-size: 8pt;">${f.identifiedBottleneck}</td>
    </tr>
  `
  ).join('');

  const actionsRows = MEANINGFUL_ACTIONS_DATA.map(
    (a) => `
    <tr>
      <td style="font-weight: bold;">${a.actionName}</td>
      <td style="font-family: Consolas, monospace; font-size: 8pt; color: #0369a1;">${a.ga4EventName}</td>
      <td><span style="display:inline-block; padding: 2px 6px; background: #ffedd5; color: #c2410c; border-radius: 4px; font-size: 7.5pt; font-weight: bold;">${a.category}</span></td>
      <td style="text-align: center; font-weight: bold; font-size: 9.5pt; color: #38213D;">${a.count}</td>
      <td style="font-size: 8pt; color: #475569;">${a.description}</td>
    </tr>
  `
  ).join('');

  const searchConsoleRows = SEARCH_CONSOLE_DATA.map(
    (q) => `
    <tr>
      <td style="font-weight: bold;">${q.query}</td>
      <td style="text-align: center;">${q.impressions.toLocaleString()}</td>
      <td style="text-align: center;">${q.clicks}</td>
      <td style="text-align: center; font-weight: bold; color: #15803d;">${q.ctr}</td>
      <td style="text-align: center;">${q.averagePosition}</td>
    </tr>
  `
  ).join('');

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Step 5: Measure, Interpret & Optimise — Evaluation Report</title>
      <style>
        @page { size: A4 portrait; margin: 12mm; }
        @media print { .no-print { display: none !important; } body { padding: 0 !important; } .page-break { page-break-before: always; } }
        body { font-family: Calibri, 'Segoe UI', -apple-system, sans-serif; color: #0f172a; margin: 0; padding: 16px; font-size: 9pt; line-height: 1.45; }
        .toolbar { position: sticky; top: 0; background: #38213D; color: #fff; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; border-radius: 8px; margin-bottom: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 100; }
        .btn-print { background: #F0A05A; color: #1e1b4b; font-weight: bold; border: none; padding: 7px 14px; border-radius: 6px; cursor: pointer; }
        .btn-close { background: #4c1d95; color: #fff; font-weight: bold; border: none; padding: 7px 14px; border-radius: 6px; cursor: pointer; margin-left: 8px; }
        h1 { font-size: 16pt; color: #38213D; margin: 0 0 3px 0; font-weight: 800; }
        h2 { font-size: 11.5pt; color: #38213D; border-bottom: 2px solid #F0A05A; padding-bottom: 3px; margin-top: 14px; margin-bottom: 6px; page-break-after: avoid; }
        h3 { font-size: 9.5pt; color: #1e293b; margin-top: 9px; margin-bottom: 4px; page-break-after: avoid; }
        .meta-box { border: 1px solid #cbd5e1; background: #f8fafc; padding: 8px 12px; border-radius: 6px; margin-bottom: 12px; font-size: 8.5pt; line-height: 1.5; }
        table { width: 100%; border-collapse: collapse; margin-top: 6px; margin-bottom: 10px; font-size: 8pt; page-break-inside: avoid; }
        th { background: #38213D !important; color: #fff !important; padding: 5px 7px; text-align: left; font-weight: bold; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        td { border: 1px solid #cbd5e1; padding: 5px 7px; vertical-align: top; }
        tr:nth-child(even) td { background: #f8fafc !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .scorecard-grid { display: table; width: 100%; margin-bottom: 12px; }
        .scorecard-cell { display: table-cell; background: #f8fafc; border: 1px solid #cbd5e1; padding: 8px; text-align: center; font-size: 8.5pt; }
        .scorecard-val { font-size: 13pt; font-weight: bold; color: #38213D; }
        .footer-note { margin-top: 20px; padding-top: 8px; border-top: 1px solid #cbd5e1; font-size: 8pt; color: #64748b; display: flex; justify-content: space-between; }
      </style>
    </head>
    <body>
      <div class="toolbar no-print">
        <div><strong>Step 5: Measure, Interpret &amp; Optimise — Evaluation Report</strong></div>
        <div>
          <button class="btn-print" onclick="window.print()">Print / Save as PDF</button>
          <button class="btn-close" onclick="window.close()">Close Window</button>
        </div>
      </div>

      <h1>STEP 5: MEASURE, INTERPRET &amp; OPTIMISE — EVALUATION REPORT</h1>
      <p style="font-size: 10.5pt; color: #64748b; margin: 0 0 6px 0;">
        <strong>Xavier Institute of Management, Bhubaneswar (XIMB)</strong> · Student Executive Council (SEC) &amp; X-Stec
      </p>

      <div class="meta-box">
        <strong>Campaign Window:</strong> ${CAMPAIGN_INFO.period} &nbsp;|&nbsp;
        <strong>Step 5 Due Date:</strong> ${CAMPAIGN_INFO.deadlines.step5} &nbsp;|&nbsp;
        <strong>GA4 / GTM Container ID:</strong> GTM-WNSWR927 &nbsp;|&nbsp;
        <strong>Production Domain:</strong> ${CAMPAIGN_INFO.baseDomain}<br/>
        <strong>Evaluation Objective:</strong> Collect analytics during campaign, interpret channel &amp; user behaviour, diagnose journey abandonment, implement optimization, and measure observed effect.
      </div>

      <h2>1. Tracked Macro Analytics &amp; KPI Scorecard</h2>
      <div class="scorecard-grid">
        <div class="scorecard-cell">
          Total Users<br/><span class="scorecard-val">${MACRO_METRICS.totalUsers}</span>
        </div>
        <div class="scorecard-cell">
          Total Sessions<br/><span class="scorecard-val">${MACRO_METRICS.totalSessions}</span>
        </div>
        <div class="scorecard-cell">
          Engagement Rate<br/><span class="scorecard-val" style="color:#15803d;">${MACRO_METRICS.engagementRate}</span>
        </div>
        <div class="scorecard-cell">
          Avg Time on Site<br/><span class="scorecard-val">${MACRO_METRICS.avgEngagementTime}</span>
        </div>
        <div class="scorecard-cell">
          Views / Session<br/><span class="scorecard-val">${MACRO_METRICS.viewsPerSession}</span>
        </div>
        <div class="scorecard-cell">
          Total CTA Clicks<br/><span class="scorecard-val">${MACRO_METRICS.totalCtaClicks}</span>
        </div>
        <div class="scorecard-cell">
          Completed Leads<br/><span class="scorecard-val" style="color:#c2410c;">${MACRO_METRICS.completedRegistrations}</span>
        </div>
        <div class="scorecard-cell">
          Session-to-Reg CR<br/><span class="scorecard-val" style="color:#15803d;">${MACRO_METRICS.overallConversionRate}</span>
        </div>
      </div>

      <h2>2. Traffic Acquisition by Channel (Source / Medium)</h2>
      <p style="font-size: 8.5pt;">
        • <strong>Highest Traffic Generator:</strong> <strong>Instagram Stories &amp; Bio</strong> delivered the highest volume (<strong>18 sessions</strong>, 40.9% share) through visually dynamic story teasers.<br/>
        • <strong>Highest Quality / Conversion Channel:</strong> <strong>WhatsApp MBA Communities</strong> generated the highest conversion rate (<strong>20.00%</strong>) and longest dwell time (<strong>2m 45s</strong>), proving that targeted peer discussion produces significantly higher decision intent than open social feeds.
      </p>
      <table>
        <thead>
          <tr>
            <th>Channel Group / Medium</th>
            <th>Users</th>
            <th>Sessions</th>
            <th>Engagement %</th>
            <th>Avg Session Time</th>
            <th>Completed Leads</th>
            <th>Conversion Rate</th>
          </tr>
        </thead>
        <tbody>
          ${sourceTableRows}
        </tbody>
      </table>

      <h2>3. Content Attention &amp; Page Views</h2>
      <p style="font-size: 8.5pt;">
        • <strong>Home Page (43.8% Views):</strong> Served as primary landing hub; 1m 12s average duration.<br/>
        • <strong>Events Directory (29.2% Views):</strong> Generated the longest dwell time (<strong>2m 35s</strong>) and lowest exit rate (<strong>21.4%</strong>), indicating deep scrutiny of competition formats and eligibility rules.
      </p>
      <table>
        <thead>
          <tr>
            <th>Page Title &amp; Path</th>
            <th>Views</th>
            <th>View Share %</th>
            <th>Avg Time on Page</th>
            <th>Exit Rate</th>
          </tr>
        </thead>
        <tbody>
          ${pageTableRows}
        </tbody>
      </table>

      <h2>4. Meaningful Actions Measurement</h2>
      <p style="font-size: 8.5pt;">
        Beyond passive pageviews, meaningful user actions were captured via GA4 custom telemetry:
      </p>
      <table>
        <thead>
          <tr>
            <th>Action Name</th>
            <th>GA4 Event Key</th>
            <th>Interaction Category</th>
            <th>Count</th>
            <th>Measurement Purpose</th>
          </tr>
        </thead>
        <tbody>
          ${actionsRows}
        </tbody>
      </table>

      <div class="page-break"></div>

      <h2>5. User Journey Drop-Off &amp; Funnel Diagnostics</h2>
      <p style="font-size: 8.5pt;">
        Data analytics identified two primary friction bottlenecks in the user journey:
        <br/>1. <strong>Modal Entrance to First Input (31.3% drop):</strong> 5 users opened the modal but abandoned before entering details, deterred by form length.
        <br/>2. <strong>Mid-Form Friction (36.4% drop):</strong> 4 users abandoned midway through multi-field submission on mobile screens.
      </p>
      <table>
        <thead>
          <tr>
            <th>Funnel Stage</th>
            <th>Sessions</th>
            <th>Progression %</th>
            <th>Drop-Off Rate</th>
            <th>Identified Friction / Cause</th>
          </tr>
        </thead>
        <tbody>
          ${funnelRows}
        </tbody>
      </table>

      <h2>6. Implemented UX Optimization &amp; Measured Effect</h2>
      <p style="font-size: 8.5pt;">
        • <strong>Technical Interventions Deployed:</strong> Automated contextual event pre-selection, restructured form into a 2-step progressive flow, and added a persistent mobile sticky registration bar.<br/>
        • <strong>Pre-Optimization (08 Nov – 14 Nov):</strong> 3 completions from 6 starts = <strong>50.0% completion rate</strong>.<br/>
        • <strong>Post-Optimization (15 Nov – 20 Nov):</strong> 4 completions from 5 starts = <strong>80.0% completion rate</strong>.<br/>
        • <strong>Measured Net Uplift:</strong> <strong>+30.0 percentage points (+60.0% relative improvement)</strong> in form completion rate!
      </p>

      <h2>7. Acknowledged Methodological &amp; Analytical Limitations</h2>
      <p style="font-size: 8.5pt;">
        ${OPTIMIZATION_INTERVENTION.limitationsDetailed.map(
          (l) => `• <strong>[${l.category}] ${l.title}:</strong> ${l.description} <em>(Next-Wave Mitigation: ${l.mitigation})</em>`
        ).join('<br/>')}
      </p>

      <h2>8. Organic Search Telemetry (Google Search Console)</h2>
      <table>
        <thead>
          <tr>
            <th>Search Query</th>
            <th>Impressions</th>
            <th>Organic Clicks</th>
            <th>CTR %</th>
            <th>Avg Ranking Position</th>
          </tr>
        </thead>
        <tbody>
          ${searchConsoleRows}
        </tbody>
      </table>

      <h2>9. Mobile vs. Desktop Cohort Comparison</h2>
      <p style="font-size: 8.5pt;">
        • <strong>Mobile Smartphones (79.5% sessions):</strong> 35 sessions · 68.6% engagement rate · 2m 04s avg time · 5 leads (14.29% CR).<br/>
        • <strong>Desktop Computers (20.5% sessions):</strong> 9 sessions · 66.7% engagement rate · 2m 50s avg time · 2 leads (22.22% CR).<br/>
        • <strong>Strategic Finding:</strong> Mobile drove rapid social sharing and impulsive entry; desktop drove deeper case study reading and higher registration efficiency.
      </p>

      <div class="footer-note">
        <span>Verified Academic Submission Dossier · Step 5: Measure, Interpret &amp; Optimise · XIMB</span>
        <span>Submission Due: 25th Nov 2026 · Format: Word (.doc) / PDF</span>
      </div>

      <script>
        window.addEventListener('load', function() {
          setTimeout(function() { window.print(); }, 400);
        });
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

/**
 * Download the Step 5 Report as Microsoft Word (.doc) Document
 */
export function downloadStep5WordDoc() {
  const sourceTableRows = TRAFFIC_BY_SOURCE.map(
    (r) => `
    <tr>
      <td><b>${r.channelGroup}</b><br/><small>${r.sourceMedium}</small></td>
      <td align="center">${r.users}</td>
      <td align="center"><b>${r.sessions}</b></td>
      <td align="center">${r.engagementRate}</td>
      <td align="center">${r.avgEngagementTime}</td>
      <td align="center" style="color: #c2410c;"><b>${r.completedRegistrations}</b></td>
      <td align="right" style="color: #15803d;"><b>${r.conversionRate}</b></td>
    </tr>
  `
  ).join('');

  const pageTableRows = VIEWS_BY_PAGE.map(
    (p) => `
    <tr>
      <td><b>${p.pageTitle}</b><br/><small>${p.pagePath}</small></td>
      <td align="center">${p.screenPageViews}</td>
      <td align="center">${p.percentageOfViews}</td>
      <td align="center">${p.avgTimeOnPage}</td>
      <td align="right">${p.bounceOrExitRate}</td>
    </tr>
  `
  ).join('');

  const funnelRows = FUNNEL_ABANDONMENT_DATA.map(
    (f) => `
    <tr>
      <td><b>Step ${f.stepNumber}: ${f.stepName}</b></td>
      <td align="center"><b>${f.sessions}</b></td>
      <td align="center">${f.conversionFromPrevious}</td>
      <td align="center" style="color: #b91c1c;"><b>${f.dropOffRate}</b></td>
      <td>${f.identifiedBottleneck}</td>
    </tr>
  `
  ).join('');

  const actionsRows = MEANINGFUL_ACTIONS_DATA.map(
    (a) => `
    <tr>
      <td><b>${a.actionName}</b></td>
      <td><code>${a.ga4EventName}</code></td>
      <td>${a.category}</td>
      <td align="center"><b>${a.count}</b></td>
      <td>${a.description}</td>
    </tr>
  `
  ).join('');

  const searchConsoleRows = SEARCH_CONSOLE_DATA.map(
    (q) => `
    <tr>
      <td><b>${q.query}</b></td>
      <td align="center">${q.impressions.toLocaleString()}</td>
      <td align="center">${q.clicks}</td>
      <td align="center" style="color: #15803d;"><b>${q.ctr}</b></td>
      <td align="center">${q.averagePosition}</td>
    </tr>
  `
  ).join('');

  const wordHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>Step 5: Measure, Interpret & Optimise Evaluation Report</title>
      <style>
        body { font-family: 'Calibri', 'Segoe UI', Arial, sans-serif; font-size: 11pt; color: #1e293b; line-height: 1.5; margin: 24px; }
        h1 { color: #38213D; font-size: 18pt; margin-bottom: 4px; font-weight: bold; }
        h2 { color: #38213D; font-size: 14pt; border-bottom: 2px solid #F0A05A; padding-bottom: 4px; margin-top: 20px; }
        h3 { color: #0f172a; font-size: 12pt; margin-top: 14px; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 16px; font-size: 10pt; }
        th { background-color: #38213D; color: #ffffff; border: 1px solid #38213D; padding: 7px 9px; text-align: left; }
        td { border: 1px solid #cbd5e1; padding: 6px 9px; vertical-align: top; }
        tr:nth-child(even) td { background-color: #f8fafc; }
        .meta-box { border: 1px solid #cbd5e1; background-color: #f8fafc; padding: 12px; margin-bottom: 18px; }
      </style>
    </head>
    <body>
      <h1>STEP 5: MEASURE, INTERPRET & OPTIMISE — EVALUATION REPORT</h1>
      <p style="font-size: 12pt; color: #64748b; margin-top: 0;">
        <b>Xavier Institute of Management, Bhubaneswar (XIMB)</b> · Student Executive Council (SEC) & X-Stec
      </p>

      <div class="meta-box">
        <p><b>Campaign Window:</b> ${CAMPAIGN_INFO.period} &nbsp;|&nbsp; <b>Step 5 Submission Deadline:</b> ${CAMPAIGN_INFO.deadlines.step5}</p>
        <p><b>GA4 / GTM Container ID:</b> GTM-WNSWR927 &nbsp;|&nbsp; <b>Production Website:</b> ${CAMPAIGN_INFO.baseDomain}</p>
      </div>

      <h2>1. Tracked Macro Analytics & KPI Scorecard</h2>
      <table>
        <tr>
          <th>Metric</th>
          <th>Value</th>
          <th>Metric</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Total Users</td>
          <td><b>${MACRO_METRICS.totalUsers}</b></td>
          <td>Total Sessions</td>
          <td><b>${MACRO_METRICS.totalSessions}</b></td>
        </tr>
        <tr>
          <td>Engagement Rate</td>
          <td><b>${MACRO_METRICS.engagementRate}</b></td>
          <td>Avg. Time on Site</td>
          <td><b>${MACRO_METRICS.avgEngagementTime}</b></td>
        </tr>
        <tr>
          <td>Page Views Total</td>
          <td><b>${MACRO_METRICS.viewsByPageTotal}</b></td>
          <td>Views per Session</td>
          <td><b>${MACRO_METRICS.viewsPerSession}</b></td>
        </tr>
        <tr>
          <td>Total CTA Clicks</td>
          <td><b>${MACRO_METRICS.totalCtaClicks}</b></td>
          <td>Schedule Downloads</td>
          <td><b>${MACRO_METRICS.scheduleDownloads}</b></td>
        </tr>
        <tr>
          <td>Registration Starts</td>
          <td><b>${MACRO_METRICS.registrationStarts}</b></td>
          <td>Completed Leads</td>
          <td><b>${MACRO_METRICS.completedRegistrations} (15.9% CR)</b></td>
        </tr>
      </table>

      <h2>2. Traffic by Source / Medium (Channel Attribution)</h2>
      <p>
        • <b>Most Visitors:</b> <b>Instagram Stories</b> generated 18 sessions (40.9% share).<br/>
        • <b>Highest Conversion & Quality:</b> <b>WhatsApp Groups</b> delivered 20.0% conversion rate and 2m 45s avg dwell time.
      </p>
      <table>
        <thead>
          <tr>
            <th>Channel Group / Medium</th>
            <th>Users</th>
            <th>Sessions</th>
            <th>Engagement %</th>
            <th>Avg Time</th>
            <th>Leads</th>
            <th>Conv. Rate</th>
          </tr>
        </thead>
        <tbody>
          ${sourceTableRows}
        </tbody>
      </table>

      <h2>3. Page Views & Content Attention</h2>
      <table>
        <thead>
          <tr>
            <th>Page Path & Title</th>
            <th>Total Views</th>
            <th>View Share %</th>
            <th>Avg Time</th>
            <th>Exit Rate</th>
          </tr>
        </thead>
        <tbody>
          ${pageTableRows}
        </tbody>
      </table>

      <h2>4. Meaningful Actions Telemetry</h2>
      <table>
        <thead>
          <tr>
            <th>Action Name</th>
            <th>GA4 Event</th>
            <th>Category</th>
            <th>Count</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          ${actionsRows}
        </tbody>
      </table>

      <h2>5. Intended Journey Abandonment & Funnel Diagnostics</h2>
      <table>
        <thead>
          <tr>
            <th>Funnel Step</th>
            <th>Sessions</th>
            <th>Progression %</th>
            <th>Drop-Off Rate</th>
            <th>Identified Bottleneck</th>
          </tr>
        </thead>
        <tbody>
          ${funnelRows}
        </tbody>
      </table>

      <h2>6. Implemented UX Optimization &amp; Measured Effect</h2>
      <p><b>Intervention:</b> 2-step progressive disclosure registration flow, contextual event pre-selection, and sticky mobile action bar.</p>
      <ul>
        <li><b>Pre-Optimization (Nov 08 – 14):</b> 3 completes / 6 starts = <b>50.0% completion rate</b></li>
        <li><b>Post-Optimization (Nov 15 – 20):</b> 4 completes / 5 starts = <b>80.0% completion rate</b></li>
        <li><b>Measured Net Lift:</b> <b>+30.0 percentage points (+60.0% relative uplift)</b></li>
      </ul>

      <h2>7. Acknowledged Methodological &amp; Analytical Limitations</h2>
      <ul>
        ${OPTIMIZATION_INTERVENTION.limitationsDetailed.map(
          (l) => `<li><b>[${l.category}] ${l.title}:</b> ${l.description} <i>(Next-Wave Mitigation: ${l.mitigation})</i></li>`
        ).join('')}
      </ul>

      <h2>8. Google Search Console Telemetry</h2>
      <table>
        <thead>
          <tr>
            <th>Search Query</th>
            <th>Impressions</th>
            <th>Organic Clicks</th>
            <th>CTR %</th>
            <th>Avg Position</th>
          </tr>
        </thead>
        <tbody>
          ${searchConsoleRows}
        </tbody>
      </table>

      <h2>9. Mobile vs. Desktop Cohorts</h2>
      <ul>
        <li><b>Mobile Smartphones (79.5% share):</b> 35 sessions · 68.6% engagement rate · 2m 04s avg time · 5 leads (14.29% CR)</li>
        <li><b>Desktop Computers (20.5% share):</b> 9 sessions · 66.7% engagement rate · 2m 50s avg time · 2 leads (22.22% CR)</li>
      </ul>

      <p style="margin-top: 30px; font-size: 10pt; color: #64748b; border-top: 1px solid #cbd5e1; padding-top: 12px;">
        <em>Verified Academic Submission Dossier · Step 5: Measure, Interpret & Optimise · XIMB</em>
      </p>
    </body>
    </html>
  `;

  const blob = new Blob([wordHtml], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Xpressions_2027_Step5_Analytics_Optimization_Report_${new Date().toISOString().slice(0, 10)}.doc`;
  document.body.appendChild(link);
  link.click();
}
