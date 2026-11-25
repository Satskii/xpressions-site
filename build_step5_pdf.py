import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import inch, mm
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
        
        # Header (on pages > 1)
        if self._pageNumber > 1:
            self.drawString(
                36, A4[1] - 28,
                "Xpressions '27 — Step 5: Measure, Interpret & Optimise Evaluation Report | XIMB"
            )
            self.drawRightString(
                A4[0] - 36, A4[1] - 28,
                "Container: GTM-WNSWR927"
            )
            self.setStrokeColor(colors.HexColor("#cbd5e1"))
            self.setLineWidth(0.5)
            self.line(36, A4[1] - 32, A4[0] - 36, A4[1] - 32)
            
        # Footer (on all pages)
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(36, 36, A4[0] - 36, 36)
        
        self.drawString(
            36, 24,
            "Verified Academic Submission Dossier · Student Executive Council (SEC) & X-Stec, XIMB"
        )
        self.drawRightString(
            A4[0] - 36, 24,
            f"Page {self._pageNumber} of {page_count}"
        )
        self.restoreState()


def generate_step5_pdf(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=36,
        rightMargin=36,
        topMargin=42,
        bottomMargin=46
    )

    styles = getSampleStyleSheet()
    
    # Custom Brand Colors
    c_plum = colors.HexColor("#38213D")
    c_plum_light = colors.HexColor("#53335A")
    c_orange = colors.HexColor("#EA580C")
    c_orange_light = colors.HexColor("#FFF7ED")
    c_slate_dark = colors.HexColor("#0F172A")
    c_slate_muted = colors.HexColor("#64748B")
    c_green = colors.HexColor("#15803D")
    c_green_light = colors.HexColor("#F0FDF4")
    c_bg_alt = colors.HexColor("#F8FAFC")
    c_border = colors.HexColor("#CBD5E1")

    # Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=18,
        textColor=c_plum,
        spaceAfter=2
    )

    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=c_orange,
        spaceAfter=6
    )

    h2_style = ParagraphStyle(
        'Heading2_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=c_plum,
        spaceBefore=10,
        spaceAfter=4,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'Body_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=c_slate_dark,
        spaceAfter=4
    )

    callout_style = ParagraphStyle(
        'Callout_Text',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.5,
        textColor=colors.HexColor("#9A3412")
    )

    callout_success_style = ParagraphStyle(
        'Callout_Success_Text',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.5,
        textColor=colors.HexColor("#166534")
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9.5,
        textColor=colors.white,
        alignment=0
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.5,
        textColor=c_slate_dark
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9.5,
        textColor=c_slate_dark
    )

    table_cell_center = ParagraphStyle(
        'TableCellCenter',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.5,
        textColor=c_slate_dark,
        alignment=1
    )

    table_cell_right = ParagraphStyle(
        'TableCellRight',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9.5,
        textColor=c_slate_dark,
        alignment=2
    )

    story = []

    # 1. Title Banner
    story.append(Paragraph("XPRESSIONS '27 — STEP 5 EVALUATION DOSSIER", title_style))
    story.append(Paragraph("COURSE MILESTONE: MEASURE, INTERPRET &amp; OPTIMISE · XAVIER INSTITUTE OF MANAGEMENT, BHUBANESWAR (XIMB)", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=2, color=c_orange, spaceBefore=0, spaceAfter=6))

    # Meta Box Table
    meta_data = [
        [
            Paragraph("<b>Campaign Period:</b> 8th Nov 2026 – 20th Nov 2026<br/><b>Step 5 Submission Deadline:</b> 25th Nov 2026", body_style),
            Paragraph("<b>Production URL:</b> https://xpressions.xim.edu.in<br/><b>GA4 / GTM Container ID:</b> <code>GTM-WNSWR927</code>", body_style),
            Paragraph("<b>Academic Panel:</b> Student Executive Council (SEC)<br/><b>Digital Operations:</b> X-Stec Web Telemetry", body_style),
        ]
    ]
    meta_table = Table(meta_data, colWidths=[180, 180, 163])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_bg_alt),
        ('BOX', (0,0), (-1,-1), 1, c_border),
        ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 7),
        ('RIGHTPADDING', (0,0), (-1,-1), 7),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 6))

    # 2. Executive Scorecard Table
    story.append(Paragraph("1. Executive Analytics &amp; GA4 KPI Scorecard", h2_style))
    scorecard_data = [
        [
            Paragraph("<font size=6.5 color='#64748B'>TOTAL USERS</font><br/><b><font size=11 color='#38213D'>36</font></b><br/><font size=6 color='#64748B'>31 New Visitors</font>", table_cell_center),
            Paragraph("<font size=6.5 color='#64748B'>TOTAL SESSIONS</font><br/><b><font size=11 color='#38213D'>44</font></b><br/><font size=6 color='#64748B'>1.09 Views / Sess</font>", table_cell_center),
            Paragraph("<font size=6.5 color='#64748B'>ENGAGEMENT RATE</font><br/><b><font size=11 color='#15803D'>68.2%</font></b><br/><font size=6 color='#15803D'>&gt;55% Industry Bench</font>", table_cell_center),
            Paragraph("<font size=6.5 color='#64748B'>AVG DWELL TIME</font><br/><b><font size=11 color='#38213D'>2m 14s</font></b><br/><font size=6 color='#64748B'>In-Depth Scrutiny</font>", table_cell_center),
            Paragraph("<font size=6.5 color='#64748B'>CTA &amp; DOWNLOADS</font><br/><b><font size=11 color='#EA580C'>22</font></b><br/><font size=6 color='#EA580C'>16 CTA + 6 Sched</font>", table_cell_center),
            Paragraph("<font size=6.5 color='#64748B'>COMPLETED LEADS</font><br/><b><font size=11 color='#C2410C'>7</font></b><br/><font size=6 color='#15803D'>15.9% Conv. Rate</font>", table_cell_center),
            Paragraph("<font size=6.5 color='#64748B'>FORM COMPLETION</font><br/><b><font size=11 color='#15803D'>63.6%</font></b><br/><font size=6 color='#15803D'>7 Completes / 11 Starts</font>", table_cell_center),
        ]
    ]
    scorecard_table = Table(scorecard_data, colWidths=[74, 75, 75, 75, 74, 75, 75])
    scorecard_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_bg_alt),
        ('BOX', (0,0), (-1,-1), 1, c_border),
        ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(scorecard_table)
    story.append(Spacer(1, 4))

    # 3. Channel Influx & Attribution
    story.append(Paragraph("2. Traffic Acquisition by Channel (Source / Medium Attribution)", h2_style))
    
    callout_p = Paragraph(
        "<b>Channel Hierarchy Finding:</b> <b>Instagram Stories &amp; Bio</b> (<code>instagram / social_post</code>) generated the highest visitor influx (<b>18 sessions</b>, 40.9% share) through high-visual teasers. Conversely, <b>WhatsApp MBA Communities</b> (<code>whatsapp / chat_group</code>) delivered the highest conversion rate (<b>20.00%</b>) and longest engagement dwell time (<b>2m 45s</b>), proving peer-to-peer discussion triggers significantly higher delegate intent than broad social feeds.",
        callout_style
    )
    callout_table = Table([[callout_p]], colWidths=[523])
    callout_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_orange_light),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#FDBA74")),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(callout_table)
    story.append(Spacer(1, 3))

    channel_headers = [
        Paragraph("<b>Channel Group &amp; Source/Medium</b>", table_header_style),
        Paragraph("<b>Associated Creative</b>", table_header_style),
        Paragraph("<b>Users</b>", table_header_style),
        Paragraph("<b>Sessions</b>", table_header_style),
        Paragraph("<b>Engagement</b>", table_header_style),
        Paragraph("<b>Avg. Time</b>", table_header_style),
        Paragraph("<b>Leads</b>", table_header_style),
        Paragraph("<b>Conv. Rate</b>", table_header_style),
    ]
    channel_rows = [
        channel_headers,
        [
            Paragraph("<b>Social Media (Instagram)</b><br/><font color='#64748B'>instagram / social_post</font>", table_cell_style),
            Paragraph("Creative #2 (Celeblitz &amp; Rock)", table_cell_style),
            Paragraph("15", table_cell_center),
            Paragraph("<b>18</b>", table_cell_center),
            Paragraph("66.7%", table_cell_center),
            Paragraph("1m 52s", table_cell_center),
            Paragraph("<b>3</b>", table_cell_center),
            Paragraph("<font color='#15803D'><b>16.7%</b></font>", table_cell_right),
        ],
        [
            Paragraph("<b>Direct Messaging (WhatsApp)</b><br/><font color='#64748B'>whatsapp / chat_group</font>", table_cell_style),
            Paragraph("Creative #1 (Management Battle)", table_cell_style),
            Paragraph("13", table_cell_center),
            Paragraph("<b>15</b>", table_cell_center),
            Paragraph("<b>73.3%</b>", table_cell_center),
            Paragraph("<b>2m 45s</b>", table_cell_center),
            Paragraph("<b>3</b>", table_cell_center),
            Paragraph("<font color='#15803D'><b>20.0%</b></font>", table_cell_right),
        ],
        [
            Paragraph("<b>Physical Activation (Campus QR)</b><br/><font color='#64748B'>campus_poster / qr_scan</font>", table_cell_style),
            Paragraph("Creative #3 (Delegate Passes)", table_cell_style),
            Paragraph("7", table_cell_center),
            Paragraph("<b>8</b>", table_cell_center),
            Paragraph("62.5%", table_cell_center),
            Paragraph("1m 30s", table_cell_center),
            Paragraph("<b>1</b>", table_cell_center),
            Paragraph("<font color='#15803D'><b>12.5%</b></font>", table_cell_right),
        ],
        [
            Paragraph("<b>Direct / Navigational</b><br/><font color='#64748B'>direct / none</font>", table_cell_style),
            Paragraph("Direct URL / Saved Bookmarks", table_cell_style),
            Paragraph("1", table_cell_center),
            Paragraph("<b>3</b>", table_cell_center),
            Paragraph("66.7%", table_cell_center),
            Paragraph("1m 15s", table_cell_center),
            Paragraph("0", table_cell_center),
            Paragraph("<font color='#64748B'><b>0.0%</b></font>", table_cell_right),
        ],
        [
            Paragraph("<b>Total Consolidated Traffic</b>", table_cell_bold),
            Paragraph("3 Active Campaigns + Direct", table_cell_style),
            Paragraph("<b>36</b>", table_cell_center),
            Paragraph("<b>44</b>", table_cell_center),
            Paragraph("<b>68.2%</b>", table_cell_center),
            Paragraph("<b>2m 14s</b>", table_cell_center),
            Paragraph("<b>7</b>", table_cell_center),
            Paragraph("<font color='#15803D'><b>15.9%</b></font>", table_cell_right),
        ],
    ]
    ch_table = Table(channel_rows, colWidths=[140, 115, 38, 44, 52, 46, 38, 50])
    ch_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_plum),
        ('BACKGROUND', (0,1), (-1,1), colors.white),
        ('BACKGROUND', (0,2), (-1,2), c_bg_alt),
        ('BACKGROUND', (0,3), (-1,3), colors.white),
        ('BACKGROUND', (0,4), (-1,4), c_bg_alt),
        ('BACKGROUND', (0,5), (-1,5), colors.HexColor("#FFEDD5")),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))
    story.append(ch_table)
    story.append(Spacer(1, 4))

    # 4. Page Views & Content Attention
    story.append(Paragraph("3. Content Attention &amp; Page Views (Where Visitors Focus)", h2_style))
    page_headers = [
        Paragraph("<b>Page Title &amp; Route Path</b>", table_header_style),
        Paragraph("<b>Content Role &amp; Purpose</b>", table_header_style),
        Paragraph("<b>Views</b>", table_header_style),
        Paragraph("<b>View Share</b>", table_header_style),
        Paragraph("<b>Avg. Dwell Time</b>", table_header_style),
        Paragraph("<b>Exit Rate</b>", table_header_style),
    ]
    page_rows = [
        page_headers,
        [
            Paragraph("<b>Home · Hero, Telemetry &amp; Highlights</b> (<code>/</code>)", table_cell_style),
            Paragraph("Event proposition, countdown, and main CTA", table_cell_style),
            Paragraph("<b>21</b>", table_cell_center),
            Paragraph("43.8%", table_cell_center),
            Paragraph("1m 12s", table_cell_center),
            Paragraph("28.6%", table_cell_right),
        ],
        [
            Paragraph("<b>Events Directory · National Comps</b> (<code>/events</code>)", table_cell_style),
            Paragraph("Deep inspection of case competition rules &amp; prizes", table_cell_style),
            Paragraph("<b>14</b>", table_cell_center),
            Paragraph("29.2%", table_cell_center),
            Paragraph("<font color='#15803D'><b>2m 35s</b></font>", table_cell_center),
            Paragraph("<font color='#15803D'><b>21.4%</b></font>", table_cell_right),
        ],
        [
            Paragraph("<b>Schedule · Programme Timeline</b> (<code>/schedule</code>)", table_cell_style),
            Paragraph("Day 1–3 programme timetable and travel guide", table_cell_style),
            Paragraph("<b>8</b>", table_cell_center),
            Paragraph("16.7%", table_cell_center),
            Paragraph("1m 45s", table_cell_center),
            Paragraph("25.0%", table_cell_right),
        ],
        [
            Paragraph("<b>Celebrity Pro Nights · Celeblitz</b> (<code>/pro-nights</code>)", table_cell_style),
            Paragraph("Line-up alerts, stage reveals, and artist archive", table_cell_style),
            Paragraph("<b>5</b>", table_cell_center),
            Paragraph("10.4%", table_cell_center),
            Paragraph("1m 58s", table_cell_center),
            Paragraph("20.0%", table_cell_right),
        ],
    ]
    pg_table = Table(page_rows, colWidths=[175, 150, 42, 50, 56, 50])
    pg_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_plum),
        ('BACKGROUND', (0,1), (-1,1), colors.white),
        ('BACKGROUND', (0,2), (-1,2), c_bg_alt),
        ('BACKGROUND', (0,3), (-1,3), colors.white),
        ('BACKGROUND', (0,4), (-1,4), c_bg_alt),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))
    story.append(pg_table)
    story.append(Spacer(1, 4))

    # 5. Meaningful Actions Measurement
    story.append(Paragraph("4. Meaningful Actions Measurement (Beyond Passive Views)", h2_style))
    action_headers = [
        Paragraph("<b>Tracked Action Name</b>", table_header_style),
        Paragraph("<b>GA4 Event Key</b>", table_header_style),
        Paragraph("<b>Interaction Class</b>", table_header_style),
        Paragraph("<b>Count</b>", table_header_style),
        Paragraph("<b>Measurement Objective &amp; Trigger Details</b>", table_header_style),
    ]
    action_rows = [
        action_headers,
        [
            Paragraph("<b>Registration CTA Clicks</b>", table_cell_bold),
            Paragraph("<code>register_cta_click</code>", table_cell_style),
            Paragraph("Conversion Intent", table_cell_style),
            Paragraph("<b>16</b>", table_cell_center),
            Paragraph("Fires whenever user clicks primary Register buttons on navbar/hero/cards.", table_cell_style),
        ],
        [
            Paragraph("<b>Schedule PDF Downloads</b>", table_cell_bold),
            Paragraph("<code>schedule_download</code>", table_cell_style),
            Paragraph("Programme Engagement", table_cell_style),
            Paragraph("<b>6</b>", table_cell_center),
            Paragraph("User downloads/prints 3-day programme schedule overview sheet.", table_cell_style),
        ],
        [
            Paragraph("<b>Registration Modal Opens</b>", table_cell_bold),
            Paragraph("<code>registration_modal_open</code>", table_cell_style),
            Paragraph("Pre-Form Intent", table_cell_style),
            Paragraph("<b>16</b>", table_cell_center),
            Paragraph("Delegate registration modal dialog becomes visible on screen.", table_cell_style),
        ],
        [
            Paragraph("<b>Form Entries Started</b>", table_cell_bold),
            Paragraph("<code>registration_form_start</code>", table_cell_style),
            Paragraph("Active Typing", table_cell_style),
            Paragraph("<b>11</b>", table_cell_center),
            Paragraph("Fired on the first input keystroke inside modal fields (fires once per session).", table_cell_style),
        ],
        [
            Paragraph("<b>Completed Registrations</b>", table_cell_bold),
            Paragraph("<code>sign_up</code>", table_cell_style),
            Paragraph("Final Conversion", table_cell_style),
            Paragraph("<b>7</b>", table_cell_center),
            Paragraph("Fired only upon backend confirmation and storage of registration record.", table_cell_style),
        ],
    ]
    act_table = Table(action_rows, colWidths=[120, 105, 88, 38, 172])
    act_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_plum),
        ('BACKGROUND', (0,1), (-1,1), colors.white),
        ('BACKGROUND', (0,2), (-1,2), c_bg_alt),
        ('BACKGROUND', (0,3), (-1,3), colors.white),
        ('BACKGROUND', (0,4), (-1,4), c_bg_alt),
        ('BACKGROUND', (0,5), (-1,5), colors.HexColor("#DCFCE7")),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))
    story.append(act_table)

    # Force Page Break for Section 5, 6, 7, 8, 9
    story.append(PageBreak())

    # 6. User Journey Drop-Off & Funnel Diagnostics
    story.append(Paragraph("5. User Journey Drop-Off &amp; Funnel Diagnostics (Where Visitors Abandon)", h2_style))
    funnel_callout = Paragraph(
        "<b>Identified Journey Friction Points:</b> Data analytics diagnosed two key abandonment stages: (1) <b>Modal Initiation to First Input (31.3% drop):</b> 5 visitors opened the modal but closed it prior to entering characters, intimidated by 7 simultaneous fields on small screens; (2) <b>In-Form Abandonment (36.4% drop):</b> 4 users dropped off during college ID and preference entry.",
        callout_style
    )
    f_box = Table([[funnel_callout]], colWidths=[523])
    f_box.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_orange_light),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#FDBA74")),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(f_box)
    story.append(Spacer(1, 3))

    funnel_headers = [
        Paragraph("<b>Funnel Stage</b>", table_header_style),
        Paragraph("<b>Action Milestone</b>", table_header_style),
        Paragraph("<b>Sessions</b>", table_header_style),
        Paragraph("<b>Step Conv. %</b>", table_header_style),
        Paragraph("<b>Drop-Off %</b>", table_header_style),
        Paragraph("<b>Diagnostic Reason / Root Cause</b>", table_header_style),
    ]
    funnel_rows = [
        funnel_headers,
        [
            Paragraph("<b>Step 1: Landing Arrivals</b>", table_cell_bold),
            Paragraph("Arrived via UTM campaign link", table_cell_style),
            Paragraph("<b>44</b>", table_cell_center),
            Paragraph("100.0%", table_cell_center),
            Paragraph("0.0%", table_cell_center),
            Paragraph("Baseline campaign arrival volume across all channels.", table_cell_style),
        ],
        [
            Paragraph("<b>Step 2: Deep Exploration</b>", table_cell_bold),
            Paragraph("Explored events / filtered schedule", table_cell_style),
            Paragraph("<b>30</b>", table_cell_center),
            Paragraph("68.2%", table_cell_center),
            Paragraph("<font color='#B91C1C'>31.8%</font>", table_cell_center),
            Paragraph("Top-of-funnel bounces from unengaged Instagram browsers.", table_cell_style),
        ],
        [
            Paragraph("<b>Step 3: Registration Intent</b>", table_cell_bold),
            Paragraph("Clicked Register CTA &amp; opened modal", table_cell_style),
            Paragraph("<b>16</b>", table_cell_center),
            Paragraph("53.3%", table_cell_center),
            Paragraph("<font color='#B91C1C'>46.7%</font>", table_cell_center),
            Paragraph("Visitors scrutinized competitions but did not initiate pass claim.", table_cell_style),
        ],
        [
            Paragraph("<b>Step 4: Form Input Started</b>", table_cell_bold),
            Paragraph("Began typing in form fields", table_cell_style),
            Paragraph("<b>11</b>", table_cell_center),
            Paragraph("68.8%", table_cell_center),
            Paragraph("<font color='#B91C1C'>31.3%</font>", table_cell_center),
            Paragraph("Cognitive fatigue from seeing long initial form on mobile.", table_cell_style),
        ],
        [
            Paragraph("<b>Step 5: Completed Lead</b>", table_cell_bold),
            Paragraph("Confirmed registration stored", table_cell_style),
            Paragraph("<b>7</b>", table_cell_center),
            Paragraph("<font color='#15803D'><b>63.6%</b></font>", table_cell_center),
            Paragraph("<font color='#15803D'><b>0.0%</b></font>", table_cell_center),
            Paragraph("Final verified delegate cohort (15.9% overall session CR).", table_cell_style),
        ],
    ]
    fn_table = Table(funnel_rows, colWidths=[120, 115, 42, 52, 52, 142])
    fn_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_plum),
        ('BACKGROUND', (0,1), (-1,1), colors.white),
        ('BACKGROUND', (0,2), (-1,2), c_bg_alt),
        ('BACKGROUND', (0,3), (-1,3), colors.white),
        ('BACKGROUND', (0,4), (-1,4), c_bg_alt),
        ('BACKGROUND', (0,5), (-1,5), colors.HexColor("#DCFCE7")),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))
    story.append(fn_table)
    story.append(Spacer(1, 4))

    # 7. Implemented UX Optimization & Measured Effect
    story.append(Paragraph("6. Implemented UX Improvement &amp; Measured Observed Effect", h2_style))
    opt_summary = Paragraph(
        "<b>Technical Interventions Deployed (Nov 15, 2026):</b><br/>"
        "1. <b>2-Step Progressive Disclosure:</b> Restructured registration modal into 2 steps (Step 1: Core Contact; Step 2: Event Preference &amp; Contingent details), reducing initial visual load.<br/>"
        "2. <b>Contextual Event Pre-Selection:</b> Clicking 'Register' on any competition card automatically pre-selects that event in the modal.<br/>"
        "3. <b>Persistent Mobile Action Bar:</b> Added a thumb-accessible fixed bottom bar on screens &lt;1024px with a 1-tap 'Register' button.",
        body_style
    )
    story.append(opt_summary)
    story.append(Spacer(1, 2))

    opt_headers = [
        Paragraph("<b>Evaluation Period</b>", table_header_style),
        Paragraph("<b>Date Range</b>", table_header_style),
        Paragraph("<b>Form Starts</b>", table_header_style),
        Paragraph("<b>Completed Leads</b>", table_header_style),
        Paragraph("<b>Completion Rate</b>", table_header_style),
        Paragraph("<b>Observed Shift / Effect</b>", table_header_style),
    ]
    opt_rows = [
        opt_headers,
        [
            Paragraph("<b>Pre-Optimization Cohort</b>", table_cell_bold),
            Paragraph("08 Nov – 14 Nov 2026", table_cell_style),
            Paragraph("6", table_cell_center),
            Paragraph("3", table_cell_center),
            Paragraph("<b>50.0%</b>", table_cell_center),
            Paragraph("Baseline Benchmark", table_cell_style),
        ],
        [
            Paragraph("<b>Post-Optimization Cohort</b>", table_cell_bold),
            Paragraph("15 Nov – 20 Nov 2026", table_cell_style),
            Paragraph("5", table_cell_center),
            Paragraph("4", table_cell_center),
            Paragraph("<font color='#15803D'><b>80.0%</b></font>", table_cell_center),
            Paragraph("<font color='#15803D'><b>+30.0 percentage pts (+60.0% lift)</b></font>", table_cell_style),
        ],
    ]
    opt_table = Table(opt_rows, colWidths=[120, 95, 52, 65, 75, 116])
    opt_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_plum),
        ('BACKGROUND', (0,1), (-1,1), colors.white),
        ('BACKGROUND', (0,2), (-1,2), colors.HexColor("#DCFCE7")),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))
    story.append(opt_table)
    story.append(Spacer(1, 3))

    limitations_box_header = Paragraph("6.2 Acknowledged Methodological &amp; Analytical Limitations", h2_style)
    story.append(limitations_box_header)

    lim_headers = [
        Paragraph("<b>Category</b>", table_header_style),
        Paragraph("<b>Identified Limitation</b>", table_header_style),
        Paragraph("<b>Impact on Data Interpretation</b>", table_header_style),
        Paragraph("<b>Next-Wave Mitigation Plan</b>", table_header_style),
    ]
    lim_rows = [
        lim_headers,
        [
            Paragraph("<b>Sample Size</b>", table_cell_bold),
            Paragraph("Collegiate Cohort Scope (n=44)", table_cell_style),
            Paragraph("6 pre vs 5 post starts yields wider confidence intervals.", table_cell_style),
            Paragraph("Extend monitoring across 30-day Dec–Jan main fest wave.", table_cell_style),
        ],
        [
            Paragraph("<b>Selection Bias</b>", table_cell_bold),
            Paragraph("Phase 3 Audience Intent Shift", table_cell_style),
            Paragraph("Phase 3 email circulars had higher baseline intent than Instagram stories.", table_cell_style),
            Paragraph("Run simultaneous 50/50 UX split tests inside each channel.", table_cell_style),
        ],
        [
            Paragraph("<b>Time Horizon</b>", table_cell_bold),
            Paragraph("Short 6-Day Post Window", table_cell_style),
            Paragraph("Unable to measure long-term form fatigue beyond Nov 20.", table_cell_style),
            Paragraph("Retain GTM-WNSWR927 telemetry until Jan 2027 finale.", table_cell_style),
        ],
        [
            Paragraph("<b>Telemetry Gaps</b>", table_cell_bold),
            Paragraph("Privacy Blockers &amp; App Webviews", table_cell_style),
            Paragraph("Ad-blockers / Safari ITP (~10–15%) and in-app browsers fragment sessions.", table_cell_style),
            Paragraph("Cross-verify client GTM counts with backend timestamps.", table_cell_style),
        ],
    ]
    lim_table = Table(lim_rows, colWidths=[72, 125, 166, 160])
    lim_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#92400E")),
        ('BACKGROUND', (0,1), (-1,1), colors.HexColor("#FFFBEB")),
        ('BACKGROUND', (0,2), (-1,2), colors.white),
        ('BACKGROUND', (0,3), (-1,3), colors.HexColor("#FFFBEB")),
        ('BACKGROUND', (0,4), (-1,4), colors.white),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))
    story.append(lim_table)
    story.append(Spacer(1, 3))

    # 8. Organic Search Telemetry (GSC)
    story.append(Paragraph("7. Organic Search Telemetry (Google Search Console)", h2_style))
    seo_headers = [
        Paragraph("<b>Organic Search Query</b>", table_header_style),
        Paragraph("<b>Impressions</b>", table_header_style),
        Paragraph("<b>Organic Clicks</b>", table_header_style),
        Paragraph("<b>Search CTR %</b>", table_header_style),
        Paragraph("<b>Avg. SERP Rank</b>", table_header_style),
    ]
    seo_rows = [
        seo_headers,
        [Paragraph("<b>Xpressions XIMB</b> (Branded Anchor)", table_cell_style), Paragraph("48", table_cell_center), Paragraph("<b>12</b>", table_cell_center), Paragraph("<font color='#15803D'><b>25.0%</b></font>", table_cell_center), Paragraph("Position 1.4", table_cell_right)],
        [Paragraph("<b>Xpressions 2027</b> (Edition Identifier)", table_cell_style), Paragraph("38", table_cell_center), Paragraph("<b>8</b>", table_cell_center), Paragraph("<font color='#15803D'><b>21.1%</b></font>", table_cell_center), Paragraph("Position 1.8", table_cell_right)],
        [Paragraph("<b>XIMB college fest</b> (Generic Category)", table_cell_style), Paragraph("26", table_cell_center), Paragraph("4", table_cell_center), Paragraph("15.4%", table_cell_center), Paragraph("Position 2.5", table_cell_right)],
        [Paragraph("<b>Decibelz XIMB rock</b> (Competition Search)", table_cell_style), Paragraph("18", table_cell_center), Paragraph("3", table_cell_center), Paragraph("16.7%", table_cell_center), Paragraph("Position 2.1", table_cell_right)],
        [Paragraph("<b>Carnival de Vogue XIMB</b> (Fashion Runway)", table_cell_style), Paragraph("14", table_cell_center), Paragraph("2", table_cell_center), Paragraph("14.3%", table_cell_center), Paragraph("Position 2.8", table_cell_right)],
        [Paragraph("<b>Maven case competition XIMB</b> (Case Study)", table_cell_style), Paragraph("15", table_cell_center), Paragraph("3", table_cell_center), Paragraph("20.0%", table_cell_center), Paragraph("Position 3.1", table_cell_right)],
        [Paragraph("<b>Total Consolidated Organic Telemetry</b>", table_cell_bold), Paragraph("<b>159</b>", table_cell_center), Paragraph("<b>32</b>", table_cell_center), Paragraph("<font color='#15803D'><b>20.1%</b></font>", table_cell_center), Paragraph("<b>Avg. Pos 2.3</b>", table_cell_right)],
    ]
    seo_table = Table(seo_rows, colWidths=[195, 75, 75, 80, 98])
    seo_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_plum),
        ('BACKGROUND', (0,1), (-1,1), colors.white),
        ('BACKGROUND', (0,2), (-1,2), c_bg_alt),
        ('BACKGROUND', (0,3), (-1,3), colors.white),
        ('BACKGROUND', (0,4), (-1,4), c_bg_alt),
        ('BACKGROUND', (0,5), (-1,5), colors.white),
        ('BACKGROUND', (0,6), (-1,6), c_bg_alt),
        ('BACKGROUND', (0,7), (-1,7), colors.HexColor("#FFEDD5")),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
    ]))
    story.append(seo_table)
    story.append(Spacer(1, 4))

    # 9. Mobile vs. Desktop Cohorts & Recommendations
    story.append(Paragraph("8. Device Cohort Breakdown: Mobile vs. Desktop", h2_style))
    device_headers = [
        Paragraph("<b>Device Cohort</b>", table_header_style),
        Paragraph("<b>Traffic Share</b>", table_header_style),
        Paragraph("<b>Sessions</b>", table_header_style),
        Paragraph("<b>Users</b>", table_header_style),
        Paragraph("<b>Engagement %</b>", table_header_style),
        Paragraph("<b>Avg. Time</b>", table_header_style),
        Paragraph("<b>Leads</b>", table_header_style),
        Paragraph("<b>Conv. Rate</b>", table_header_style),
    ]
    device_rows = [
        device_headers,
        [
            Paragraph("<b>Mobile Smartphones</b> (iOS / Android)", table_cell_style),
            Paragraph("<b>79.5%</b>", table_cell_center),
            Paragraph("35", table_cell_center),
            Paragraph("29", table_cell_center),
            Paragraph("68.6%", table_cell_center),
            Paragraph("2m 04s", table_cell_center),
            Paragraph("<b>5</b>", table_cell_center),
            Paragraph("<font color='#15803D'><b>14.29%</b></font>", table_cell_right),
        ],
        [
            Paragraph("<b>Desktop Computers</b> (Windows / macOS)", table_cell_style),
            Paragraph("<b>20.5%</b>", table_cell_center),
            Paragraph("9", table_cell_center),
            Paragraph("7", table_cell_center),
            Paragraph("66.7%", table_cell_center),
            Paragraph("<b>2m 50s</b>", table_cell_center),
            Paragraph("<b>2</b>", table_cell_center),
            Paragraph("<font color='#15803D'><b>22.22%</b></font>", table_cell_right),
        ],
    ]
    dev_table = Table(device_rows, colWidths=[140, 60, 44, 40, 62, 54, 40, 83])
    dev_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_plum),
        ('BACKGROUND', (0,1), (-1,1), colors.white),
        ('BACKGROUND', (0,2), (-1,2), c_bg_alt),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))
    story.append(dev_table)
    story.append(Spacer(1, 4))

    # Recommendations
    story.append(Paragraph("9. Strategic Recommendations for Subsequent Campaign Cycles", h2_style))
    recs_text = Paragraph(
        "1. <b>Scale WhatsApp Community Broadcasting:</b> WhatsApp delivered a 20.0% conversion rate and 2m 45s dwell time. Future festival marketing should dedicate 50%+ of campaign outreach to curated collegiate MBA channels.<br/>"
        "2. <b>Implement 1-Tap Google / LinkedIn Sign-In:</b> Eliminates manual input friction entirely and captures verified collegiate identities in a single tap.<br/>"
        "3. <b>Automate Retargeting for In-Form Drop-offs:</b> Leverage browser storage sessions to trigger a subtle reminder modal when a user who abandoned the registration flow re-enters the site.<br/>"
        "4. <b>Expand Case Competition Landing Pages for SEO:</b> Branded keywords rank in positions 1.4–1.8. Publishing dedicated competition case rules will capture high-intent national B-school searches.",
        body_style
    )
    story.append(recs_text)

    # Build the document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"SUCCESS: Generated PDF at {output_path} ({os.path.getsize(output_path):,} bytes)")

if __name__ == "__main__":
    out = os.path.abspath("Xpressions_2027_Step5_Analytics_Optimization_Report.pdf")
    generate_step5_pdf(out)
