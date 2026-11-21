"""Build both public, text-selectable CV PDFs from one maintained source.

Run: python3 scripts/build_cv.py
Requires: reportlab. The design intentionally stays simple for ATS parsing.
"""

from pathlib import Path
from shutil import copyfile

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer


REPO = Path(__file__).resolve().parents[1]
OUTPUT = REPO / "public" / "Francisco_Vitar_CV_ATS_V1.pdf"
ALIAS = REPO / "public" / "CV_FV.pdf"

FONT_ROOT = Path("/usr/share/fonts/truetype/dejavu")
if (FONT_ROOT / "DejaVuSans.ttf").is_file():
    pdfmetrics.registerFont(TTFont("CVSans", str(FONT_ROOT / "DejaVuSans.ttf")))
    pdfmetrics.registerFont(TTFont("CVSans-Bold", str(FONT_ROOT / "DejaVuSans-Bold.ttf")))
    pdfmetrics.registerFontFamily("CVSans", normal="CVSans", bold="CVSans-Bold")
    font, bold = "CVSans", "CVSans-Bold"
else:
    font, bold = "Helvetica", "Helvetica-Bold"

INK = colors.HexColor("#181914")
MUTED = colors.HexColor("#474a46")
RULE = colors.HexColor("#c6c6c0")
ACCENT = colors.HexColor("#243e98")

styles = {
    "name": ParagraphStyle(
        "Name", fontName=bold, fontSize=18, leading=23, textColor=INK, spaceAfter=1
    ),
    "role": ParagraphStyle(
        "Role", fontName=bold, fontSize=9.3, leading=13, textColor=INK, spaceAfter=1
    ),
    "contact": ParagraphStyle(
        "Contact", fontName=font, fontSize=8.05, leading=11.2, textColor=MUTED
    ),
    "section": ParagraphStyle(
        "Section", fontName=bold, fontSize=9, leading=12.5,
        textColor=ACCENT, spaceBefore=11, spaceAfter=4.6
    ),
    "body": ParagraphStyle(
        "Body", fontName=font, fontSize=8.15, leading=11.8, textColor=INK,
        spaceAfter=1.5, alignment=TA_LEFT
    ),
    "item": ParagraphStyle(
        "Item", fontName=font, fontSize=8.05, leading=11.6, textColor=INK,
        leftIndent=10, firstLineIndent=-7, spaceAfter=3.4
    ),
    "project": ParagraphStyle(
        "Project", fontName=bold, fontSize=8.45, leading=12.4,
        textColor=INK, spaceBefore=5.3, spaceAfter=1.4
    ),
    "detail": ParagraphStyle(
        "Detail", fontName=font, fontSize=8.05, leading=11.6,
        textColor=MUTED, spaceAfter=0
    ),
}


def paragraph(text, style="body"):
    return Paragraph(text, styles[style])


def section(title):
    return paragraph(title.upper(), "section")


def project(name, stack, detail):
    return KeepTogether(
        [
            paragraph(f"{name}  |  {stack}", "project"),
            paragraph(detail, "detail"),
        ]
    )


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT), pagesize=letter,
        leftMargin=43, rightMargin=43, topMargin=35, bottomMargin=34,
        title="Francisco Vitar | Software Engineer CV",
        author="Francisco Vitar",
    )

    content = [
        paragraph("Francisco Vitar", "name"),
        paragraph("Software Engineer  |  Full-Stack Product Engineer", "role"),
        paragraph(
            'Córdoba, Argentina  |  franvitar15@gmail.com  |  '
            '<link href="https://www.linkedin.com/in/franciscovitar/" color="#243e98">LinkedIn</link>  |  '
            '<link href="https://github.com/franciscovitar" color="#243e98">GitHub</link>  |  '
            '<link href="https://franciscovitar.genovasite.com/" color="#243e98">Portfolio</link>',
            "contact",
        ),
        Spacer(1, 8),
        HRFlowable(width="100%", thickness=0.7, color=RULE),
        section("Professional summary"),
        paragraph(
            "Fourth-year Systems Engineering student at UTN and software engineer building "
            "full-stack products, PostgreSQL-backed applications and AI-assisted engineering workflows. "
            "Experience delivering client web projects, with an emphasis on transactional correctness, "
            "automated verification, privacy and explicit system boundaries."
        ),
        section("Technical skills"),
        paragraph("<b>Languages:</b> TypeScript, JavaScript, Python, SQL, HTML, CSS/SCSS"),
        paragraph("<b>Product and data:</b> React, Next.js, FastAPI, PostgreSQL, Supabase, relational models, REST APIs"),
        paragraph("<b>Quality and tools:</b> Vitest, Playwright, Docker, Git/GitHub, CI, regression testing"),
        paragraph("<b>AI-assisted engineering:</b> agents, tool orchestration, evidence and verification workflows"),
        section("Experience"),
        paragraph("<b>Founder &amp; Software Engineer - Genova</b>  |  Córdoba, Argentina  |  2022-present"),
        paragraph("&#8226; Delivered third-party websites and software products, from requirements and UI to integrations and deployment.", "item"),
        paragraph("&#8226; Built and maintained React/Next.js applications with increasingly rigorous tests and release checks.", "item"),
        section("Selected projects"),
        project(
            "Vida 2.0", "Next.js, TypeScript, APIs",
            "Private-data personal system integrating Notion, Sheets and Calendar. Source authority, fail-closed "
            "behavior, bounded writes and preflight verification.",
        ),
        project(
            "La Mediterránea Store", "Next.js, Supabase, RLS",
            "Persistent catalog and order data, admin authorization and server-validated checkout. "
            "Payment integration prepared, not live.",
        ),
        project(
            "Library Network API", "Python, FastAPI, PostgreSQL",
            "Public local backend lab: interlibrary loans with row locking, constraints, idempotency, "
            "rollback and a linked 129-test CI run.",
        ),
        project(
            "Webhook Recovery Lab", "TypeScript, Fastify, PostgreSQL",
            "Private synthetic lab: signed webhooks, durable inbox, worker leases, retries, dead-letter "
            "and replay. In progress; not production.",
        ),
        project(
            "Personal AI System", "Python, GitHub, AI tooling",
            "Private AI control layer for canonical context, scoped tools, provenance, evaluation "
            "and verification; public architecture is sanitized.",
        ),
        section("Education"),
        paragraph(
            "<b>Universidad Tecnológica Nacional (UTN) - Systems Engineering</b>  |  2023-present, fourth year (2026)"
        ),
        paragraph(
            "Selected grades: Software Development, Databases, Backend Applications, "
            "Programming Paradigms: 9/10; Operating Systems, Algorithms, Architecture "
            "and Data Communications: 8/10."
        ),
        section("Languages"),
        paragraph("Spanish: native  |  English: working proficiency (strong reading/listening, conversational speaking)"),
    ]

    doc.build(content)
    copyfile(OUTPUT, ALIAS)
    print(f"Built {OUTPUT} and {ALIAS}")


if __name__ == "__main__":
    main()
