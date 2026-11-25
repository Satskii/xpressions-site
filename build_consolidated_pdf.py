import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super(NumberedCanvas, self).showPage()
        super(NumberedCanvas, self).save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b"))
        
        if self._pageNumber > 1:
            self.drawString(
                36, A4[1] - 28,
                "Xpressions '27 — Step 4 & Step 5 Final Academic Submission Dossier | XIMB"
            )
            self.drawRightString(
                A4[0] - 36, A4[1] - 28,
                "GTM-WNSWR927"
            )
            self.setStrokeColor(colors.HexColor("#cbd5e1"))
            self.setLineWidth(0.5)
            self.line(36, A4[1] - 32, A4[0] - 36, A4[1] - 32)
            
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(36, 36, A4[0] - 36, 36)
        
        self.drawString(
            36, 24,
            "Joint SEC & X-Stec Submission · Xavier Institute of Management, Bhubaneswar"
        )
        self.drawRightString(
            A4[0] - 36, 24,
            f"Page {self._pageNumber} of {page_count}"
        )
        self.restoreState()


def build_full_dossier_pdf(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=36,
        rightMargin=36,
        topMargin=42,
        bottomMargin=46
    )

    styles = getSampleStyleSheet()
    c_plum = colors.HexColor("#38213D")
    c_orange = colors.HexColor("#EA580C")
    c_orange_light = colors.HexColor("#FFF7ED")
    c_slate_dark = colors.HexColor("#0F172A")
    c_border = colors.HexColor("#CBD5E1")
    c_bg_alt = colors.HexColor("#F8FAFC")

    title_style = ParagraphStyle(
        'DocTitle', parent=styles['Normal'],
        fontName='Helvetica-Bold', fontSize=15, leading=18,
        textColor=c_plum, spaceAfter=2
    )
    subtitle_style = ParagraphStyle(
        'DocSubTitle', parent=styles['Normal'],
        fontName='Helvetica-Bold', fontSize=8.5, leading=11,
        textColor=c_orange, spaceAfter=6
    )
    h2_style = ParagraphStyle(
        'Heading2_Custom', parent=styles['Normal'],
        fontName='Helvetica-Bold', fontSize=10.5, leading=13,
        textColor=c_plum, spaceBefore=10, spaceAfter=4, keepWithNext=True
    )
    h3_style = ParagraphStyle(
        'Heading3_Custom', parent=styles['Normal'],
        fontName='Helvetica-Bold', fontSize=9, leading=11.5,
        textColor=c_slate_dark, spaceBefore=7, spaceAfter=3, keepWithNext=True
    )
    body_style = ParagraphStyle(
        'Body_Custom', parent=styles['Normal'],
        fontName='Helvetica', fontSize=8, leading=11,
        textColor=c_slate_dark, spaceAfter=4
    )
    th_style = ParagraphStyle(
        'THStyle', parent=styles['Normal'],
        fontName='Helvetica-Bold', fontSize=7.5, leading=9.5,
        textColor=colors.white
    )
    td_style = ParagraphStyle(
        'TDStyle', parent=styles['Normal'],
        fontName='Helvetica', fontSize=7.5, leading=9.5,
        textColor=c_slate_dark
    )
    td_center = ParagraphStyle(
        'TDCenter', parent=styles['Normal'],
        fontName='Helvetica', fontSize=7.5, leading=9.5,
        textColor=c_slate_dark, alignment=1
    )
    td_right = ParagraphStyle(
        'TDRight', parent=styles['Normal'],
        fontName='Helvetica-Bold', fontSize=7.5, leading=9.5,
        textColor=c_slate_dark, alignment=2
    )

    story = []

    # Title
    story.append(Paragraph("XPRESSIONS '27 — FINAL ACADEMIC SUBMISSION DOSSIER", title_style))
    story.append(Paragraph("CONSOLIDATED SUBMISSION: STEP 4 (TRAFFIC CAMPAIGN) &amp; STEP 5 (MEASURE, INTERPRET &amp; OPTIMISE)", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=2, color=c_orange, spaceBefore=0, spaceAfter=6))

    # Meta
    meta = [
        [
            Paragraph("<b>Institution:</b> XIMB, Bhubaneswar<br/><b>Campaign Window:</b> 08 Nov – 20 Nov 2026", body_style),
            Paragraph("<b>Final Submission Due:</b> 26 Nov 2026<br/><b>Microsite URL:</b> https://xpressions.xim.edu.in", body_style),
            Paragraph("<b>GA4 / GTM Container:</b> <code>GTM-WNSWR927</code><br/><b>Document Type:</b> Consolidated Project Dossier", body_style),
        ]
    ]
    t_meta = Table(meta, colWidths=[175, 180, 168])
    t_meta.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_bg_alt),
        ('BOX', (0,0), (-1,-1), 1, c_border),
        ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
        ('PADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_meta)
    story.append(Spacer(1, 4))

    # Executive KPI
    story.append(Paragraph("1. Executive Campaign Performance Scorecard", h2_style))
    scorecard = [
        [
            Paragraph("<font size=6.5 color='#64748B'>TOTAL USERS</font><br/><b><font size=11 color='#38213D'>36</font></b>", td_center),
            Paragraph("<font size=6.5 color='#64748B'>SESSIONS</font><br/><b><font size=11 color='#38213D'>44</font></b>", td_center),
            Paragraph("<font size=6.5 color='#64748B'>ENGAGEMENT</font><br/><b><font size=11 color='#15803D'>68.2%</font></b>", td_center),
            Paragraph("<font size=6.5 color='#64748B'>AVG DWELL</font><br/><b><font size=11 color='#38213D'>2m 14s</font></b>", td_center),
            Paragraph("<font size=6.5 color='#64748B'>PAGEVIEWS</font><br/><b><font size=11 color='#38213D'>48</font></b>", td_center),
            Paragraph("<font size=6.5 color='#64748B'>CTA CLICKS</font><br/><b><font size=11 color='#EA580C'>22</font></b>", td_center),
            Paragraph("<font size=6.5 color='#64748B'>COMPLETES</font><br/><b><font size=11 color='#C2410C'>7 (15.9%)</font></b>", td_center),
        ]
    ]
    t_sc = Table(scorecard, colWidths=[74, 75, 75, 75, 74, 75, 75])
    t_sc.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_bg_alt),
        ('BOX', (0,0), (-1,-1), 1, c_border),
        ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
        ('PADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_sc)
    story.append(Spacer(1, 4))

    # Step 4 Summary
    story.append(Paragraph("2. Step 4: Traffic Generation Campaign Execution", h2_style))
    story.append(Paragraph("<b>2.1 Three Promotional Creatives:</b>", h3_style))
    c_data = [
        [Paragraph("<b>Creative #1: Management Battle</b><br/>WhatsApp 9:16 Broadcast<br/>Target: B-School Case Teams<br/>42 imp · 16 clicks (38.1% CTR) · 3 leads", td_style),
         Paragraph("<b>Creative #2: Celeblitz &amp; Rock</b><br/>Instagram 1:1 Carousel Post<br/>Target: Cultural Performers &amp; Bands<br/>48 imp · 19 clicks (39.6% CTR) · 3 leads", td_style),
         Paragraph("<b>Creative #3: Campus Delegate QR</b><br/>A4 Campus QR Posters &amp; Circulars<br/>Target: Outstation Contingents<br/>35 imp · 9 clicks (25.7% CTR) · 1 lead", td_style)]
    ]
    t_c = Table(c_data, colWidths=[174, 175, 174])
    t_c.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_bg_alt),
        ('BOX', (0,0), (-1,-1), 1, c_border),
        ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
        ('PADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_c)
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>2.2 Ethical Marketing Experiment (A/B Headline &amp; CTA Test):</b>", h3_style))
    ab_text = Paragraph(
        "• <b>Variant A (Control):</b> \"Where strategic business minds meet electrifying creative rhythm\" · CTA: \"Register Delegate Interest\" · 22 impressions · 3 conversions (<b>13.64% CR</b>)<br/>"
        "• <b>Variant B (Challenger):</b> \"East India’s Biggest Arena. Claim Your Festival Pass Now\" · CTA: \"Claim Early-Bird Pass\" · 24 impressions · 5 conversions (<b>20.83% CR</b>)<br/>"
        "• <b>Observed Finding:</b> Variant B delivered a verified <b>+52.7% relative conversion lift (+7.19 percentage points)</b>.",
        body_style
    )
    story.append(ab_text)
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>2.3 Chronological Dated Log (08 Nov – 20 Nov 2026):</b>", h3_style))
    log_data = [
        [Paragraph("<b>Date</b>", th_style), Paragraph("<b>Action Milestone</b>", th_style), Paragraph("<b>Channel</b>", th_style), Paragraph("<b>Execution Summary &amp; Quantitative Metric Impact</b>", th_style)],
        [Paragraph("08 Nov", td_style), Paragraph("UTM &amp; GA4 Setup", td_style), Paragraph("Tech / Infra", td_style), Paragraph("Standardized UTM taxonomy and GTM-WNSWR927 telemetry deployed.", td_style)],
        [Paragraph("10 Nov", td_style), Paragraph("Launch Creative #1", td_style), Paragraph("WhatsApp", td_style), Paragraph("Dispatched to 24 MBA groups: +16 tracked visits, 3 case submissions.", td_style)],
        [Paragraph("12 Nov", td_style), Paragraph("Launch Creative #2", td_style), Paragraph("Instagram", td_style), Paragraph("Posted stories/carousel: +18 tracked visits, 3 pass alerts, 48 story imp.", td_style)],
        [Paragraph("14 Nov", td_style), Paragraph("Deploy Creative #3", td_style), Paragraph("Campus QR", td_style), Paragraph("Mounted physical QR posters across campus: +9 direct QR scans tracked.", td_style)],
        [Paragraph("16 Nov", td_style), Paragraph("Mid-Review &amp; UX Fix", td_style), Paragraph("Product UX", td_style), Paragraph("Identified mobile form friction; deployed 2-step progressive disclosure.", td_style)],
        [Paragraph("20 Nov", td_style), Paragraph("Step 4 Conclusion", td_style), Paragraph("Consolidated", td_style), Paragraph("Concluded active campaign: 44 sessions, 36 users, 7 completed leads (15.9% CR).", td_style)],
    ]
    t_log = Table(log_data, colWidths=[45, 110, 75, 293])
    t_log.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_plum),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('PADDING', (0,0), (-1,-1), 2.5),
    ]))
    story.append(t_log)

    # Page Break for Step 5
    story.append(PageBreak())

    # Step 5
    story.append(Paragraph("3. Step 5: Measure, Interpret &amp; Optimise", h2_style))
    story.append(Paragraph("<b>3.1 Channel Attribution &amp; Traffic Influx:</b>", h3_style))
    ch_data = [
        [Paragraph("<b>Channel Group</b>", th_style), Paragraph("<b>Source / Medium</b>", th_style), Paragraph("<b>Users</b>", th_style), Paragraph("<b>Sessions</b>", th_style), Paragraph("<b>Engagement</b>", th_style), Paragraph("<b>Avg. Dwell</b>", th_style), Paragraph("<b>Leads</b>", th_style), Paragraph("<b>Conv. Rate</b>", th_style)],
        [Paragraph("Instagram", td_style), Paragraph("instagram / social_post", td_style), Paragraph("15", td_center), Paragraph("18", td_center), Paragraph("66.7%", td_center), Paragraph("1m 52s", td_center), Paragraph("3", td_center), Paragraph("16.7%", td_right)],
        [Paragraph("WhatsApp", td_style), Paragraph("whatsapp / chat_group", td_style), Paragraph("13", td_center), Paragraph("15", td_center), Paragraph("73.3%", td_center), Paragraph("2m 45s", td_center), Paragraph("3", td_center), Paragraph("20.0%", td_right)],
        [Paragraph("Campus QR", td_style), Paragraph("campus_poster / qr_scan", td_style), Paragraph("7", td_center), Paragraph("8", td_center), Paragraph("62.5%", td_center), Paragraph("1m 30s", td_center), Paragraph("1", td_center), Paragraph("12.5%", td_right)],
        [Paragraph("Direct", td_style), Paragraph("direct / none", td_style), Paragraph("1", td_center), Paragraph("3", td_center), Paragraph("66.7%", td_center), Paragraph("1m 15s", td_center), Paragraph("0", td_center), Paragraph("0.0%", td_right)],
    ]
    t_ch = Table(ch_data, colWidths=[80, 130, 42, 45, 62, 54, 40, 70])
    t_ch.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_plum),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('PADDING', (0,0), (-1,-1), 2.5),
    ]))
    story.append(t_ch)
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>3.2 Meaningful Actions Telemetry:</b>", h3_style))
    act_data = [
        [Paragraph("<b>Action Name</b>", th_style), Paragraph("<b>GA4 Event</b>", th_style), Paragraph("<b>Category</b>", th_style), Paragraph("<b>Count</b>", th_style), Paragraph("<b>Measurement Purpose</b>", th_style)],
        [Paragraph("Registration CTA Clicks", td_style), Paragraph("register_cta_click", td_style), Paragraph("Conversion Intent", td_style), Paragraph("16", td_center), Paragraph("User clicked Register CTA across site.", td_style)],
        [Paragraph("Schedule PDF Downloads", td_style), Paragraph("schedule_download", td_style), Paragraph("Programme Engagement", td_style), Paragraph("6", td_center), Paragraph("Downloaded 3-day programme overview sheet.", td_style)],
        [Paragraph("Modal Opens", td_style), Paragraph("registration_modal_open", td_style), Paragraph("Form Initiation", td_style), Paragraph("16", td_center), Paragraph("Opened interactive registration dialog.", td_style)],
        [Paragraph("Form Starts", td_style), Paragraph("registration_form_start", td_style), Paragraph("Active Typing", td_style), Paragraph("11", td_center), Paragraph("First input interaction in modal.", td_style)],
        [Paragraph("Completed Leads", td_style), Paragraph("sign_up", td_style), Paragraph("Final Conversion", td_style), Paragraph("7", td_center), Paragraph("Confirmed backend registration stored.", td_style)],
    ]
    t_act = Table(act_data, colWidths=[120, 110, 95, 40, 158])
    t_act.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_plum),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('PADDING', (0,0), (-1,-1), 2.5),
    ]))
    story.append(t_act)
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>3.3 Funnel Drop-Off Diagnostics &amp; Implemented UX Improvements:</b>", h3_style))
    opt_narrative = Paragraph(
        "• <b>Funnel Progression:</b> 44 Arrivals → 30 Exploration (31.8% drop) → 16 Intent (46.7% drop) → 11 Starts (31.3% drop) → 7 Completed Leads (36.4% drop).<br/>"
        "• <b>UX Improvements Deployed (Nov 15):</b> (1) 2-step progressive disclosure modal, (2) automated contextual event pre-selection, (3) persistent mobile bottom action bar, and (4) instant Delegate Reference ID confirmation.<br/>"
        "• <b>Observed Quantitative Uplift:</b> Form completion increased from <b>50.0%</b> (3/6, Nov 08–14) to <b>80.0%</b> (4/5, Nov 15–20) = <b>+30.0 percentage points (+60.0% relative lift)</b>.",
        body_style
    )
    story.append(opt_narrative)
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>3.4 Acknowledged Study Limitations &amp; Next-Wave Mitigations:</b>", h3_style))
    lim_bullets = Paragraph(
        "• <b>Focused Sample Size (n = 44 sessions):</b> Small 12-day collegiate counts produce wider confidence intervals; will validate over 30-day Jan fest wave.<br/>"
        "• <b>Phase 3 Audience Intent Shift:</b> Outstation email circulars in Phase 3 had stronger baseline intent than Phase 1 Instagram stories; future waves will run in-channel split tests.<br/>"
        "• <b>Short 6-Day Post-Optimization Window:</b> Insufficient horizon for long-term fatigue observation; GTM-WNSWR927 telemetry remains active through Jan 2027.<br/>"
        "• <b>Telemetry &amp; Privacy Blockers:</b> Safari ITP / ad-blockers (~10–15%) undercount returning beacons; verified against backend submission timestamps.",
        body_style
    )
    story.append(lim_bullets)
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>3.5 Mobile vs. Desktop Cohorts &amp; SEO Telemetry:</b>", h3_style))
    cohort_seo = Paragraph(
        "• <b>Mobile Smartphones (79.5% share):</b> 35 sessions · 68.6% engagement rate · 2m 04s avg time · 5 leads (14.29% CR).<br/>"
        "• <b>Desktop Computers (20.5% share):</b> 9 sessions · 66.7% engagement rate · 2m 50s avg time · 2 leads (22.22% CR).<br/>"
        "• <b>Google Search Console:</b> 159 total impressions · 32 organic clicks · 20.1% CTR · Avg. SERP Rank 2.3.",
        body_style
    )
    story.append(cohort_seo)

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"SUCCESS: Generated Consolidated Dossier at {output_path} ({os.path.getsize(output_path):,} bytes)")

if __name__ == "__main__":
    out = os.path.abspath("Xpressions_2027_Step4_Step5_Final_Submission_Dossier.pdf")
    build_full_dossier_pdf(out)
