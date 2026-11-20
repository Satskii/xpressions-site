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
} from '../data/campaignData';

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
        <li><strong>Total Campaign Influx:</strong> 1,428 unique visitors across 1,894 tracked sessions.</li>
        <li><strong>Ethical Marketing Experiment (A/B Test):</strong> Variant B (High-Adrenaline Arena Access) achieved a <strong>+45.7% relative conversion lift</strong> over Variant A (20.05% vs 13.76% CR).</li>
        <li><strong>Channel Breakdown:</strong> Instagram Stories & Bio (645 sessions), WhatsApp MBA groups (462 sessions), Campus QR posters (334 sessions), Direct (275 sessions), LinkedIn (178 sessions).</li>
        <li><strong>Conversion Output:</strong> 246 verified registrations generated with a 13.0% overall campaign conversion rate.</li>
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
        • <strong>Reach &amp; Acquisition:</strong> Generated 1,894 total sessions from 1,428 unique visitors across 5 coordinated channels.<br/>
        • <strong>A/B Split Test:</strong> Variant B (High-Adrenaline) achieved a +45.7% relative conversion lift over Variant A (20.05% vs 13.76% CR).<br/>
        • <strong>Channel Leaders:</strong> Instagram bio/stories delivered 645 sessions (34.1%), followed by inter-B-school WhatsApp groups with 462 sessions (24.4%).
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
        <li><strong>Variant A (Control - Strategic Prestige):</strong> "Where strategic business minds meet electrifying creative rhythm" · 712 impressions · 98 conversions · <strong>13.76% CR</strong></li>
        <li><strong>Variant B (Challenger - High-Adrenaline Arena Access):</strong> "East India’s Biggest Arena. Claim Your Festival Pass Now" · 708 impressions · 142 conversions · <strong>20.05% CR</strong></li>
        <li><strong>Result:</strong> Variant B achieved a statistically significant <strong>+45.7% relative conversion lift</strong> (94.2% confidence).</li>
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
        <li><strong>Pre-Optimization (Nov 08 – Nov 14):</strong> 118 completes from 246 starts = <strong>48.0% Completion Rate</strong></li>
        <li><strong>Post-Optimization (Nov 15 – Nov 20):</strong> 128 completes from 202 starts = <strong>63.4% Completion Rate</strong></li>
        <li><strong>Observed Net Uplift:</strong> <strong>+15.4 percentage points (+32.1% relative uplift)</strong> in form completion rate!</li>
      </ul>
      <p><strong>Acknowledged Limitations:</strong> Short 6-day observation window, channel composition shift, and mobile vs. desktop variance.</p>

      <h3>3.5 Mobile vs. Desktop Cohorts</h3>
      <ul>
        <li><strong>Mobile Devices (78.4% share):</strong> 1,485 sessions · 66.8% engagement rate · 2m 04s avg time · 194 leads (13.06% CR)</li>
        <li><strong>Desktop Devices (21.6% share):</strong> 409 sessions · 74.2% engagement rate · 3m 08s avg time · 52 leads (12.71% CR)</li>
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
        • <strong>Variant A (Control):</strong> "Where strategic business minds meet electrifying creative rhythm" · CTA: "Register Delegate Interest" · 712 impressions · 98 conversions (<strong>13.76% CR</strong>)<br/>
        • <strong>Variant B (Challenger):</strong> "East India’s Biggest Arena. Claim Your Festival Pass Now" · CTA: "Claim Early-Bird Pass" · 708 impressions · 142 conversions (<strong>20.05% CR</strong>)<br/>
        • <strong>Statistical Finding:</strong> Variant B delivered a verified <strong>+45.7% relative conversion lift</strong> (94.2% confidence interval).
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
        • <strong>Bottleneck Identified:</strong> 124 users abandoned between opening the registration modal and filling in fields on mobile.<br/>
        • <strong>Intervention Deployed:</strong> Automated event pre-selection, reduced fields to a 2-step progressive flow, and added sticky mobile action bar.<br/>
        • <strong>Pre-Optimization (Nov 08 – 14):</strong> 118 completions / 246 starts = <strong>48.0% Completion Rate</strong>.<br/>
        • <strong>Post-Optimization (Nov 15 – 20):</strong> 128 completions / 202 starts = <strong>63.4% Completion Rate</strong>.<br/>
        • <strong>Measured Net Uplift:</strong> <strong>+15.4 percentage points (+32.1% relative improvement)</strong> in registration completion!<br/>
        • <strong>Limitations Acknowledged:</strong> 6-day evaluation window; shift in audience composition toward higher-intent direct emails during Phase 3.
      </p>

      <h3>3.5 Organic Search Telemetry (Google Search Console)</h3>
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

      <h3>3.6 Mobile vs. Desktop Cohorts</h3>
      <p style="font-size: 8.5pt;">
        • <strong>Mobile (78.4% Sessions):</strong> 1,485 sessions · 66.8% Engagement Rate · 2m 04s avg time · 194 leads (13.06% CR)<br/>
        • <strong>Desktop (21.6% Sessions):</strong> 409 sessions · 74.2% Engagement Rate · 3m 08s avg time · 52 leads (12.71% CR)<br/>
        • <strong>Insight:</strong> Mobile dominated immediate reach and social shares; desktop drove in-depth case study exploration and extended reading.
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
