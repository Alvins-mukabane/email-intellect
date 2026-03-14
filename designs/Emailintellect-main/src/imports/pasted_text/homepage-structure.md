Complete Homepage Structure (Real SaaS Layout)
Homepage
│
├── Navbar
│
├── Hero Section
│
├── Social Proof
│
├── Features
│
├── How It Works
│
├── Product Preview
│
├── Call To Action
│
└── Footer

Each of these becomes a component.

1. Navbar

Top navigation bar.

Elements

Logo

Features

How It Works

Pricing (later)

Login

Get Started button

Example
[Logo]     Features   How It Works   Docs

                    Login   Get Started

Component:

components/Navbar.tsx
2. Hero Section

This is the first thing users see.

Elements

Big title

Short description

Connect Gmail button

Illustration (AI agent image)

Example content:

AI Email Intelligent Agent

Turn your inbox into insights.

Let AI summarize emails, detect tasks,
and highlight opportunities automatically.

[ Connect Gmail ]

Component:

components/Hero.tsx
3. Social Proof

Shows credibility.

Example:

Trusted by early users

⭐ 4.8 rating from testers
⚡ 500+ emails analyzed
📈 Productivity improved

Component:

components/SocialProof.tsx
4. Features Section

Cards explaining the main product value.

Example Cards

Email Summarization

AI summarizes long emails instantly.

Task Detection

Detects action items hidden in emails.

Opportunity Alerts

Find business opportunities automatically.

Component:

components/Features.tsx

Layout:

[ Feature Card ] [ Feature Card ] [ Feature Card ]
5. How It Works

Step-by-step flow.

1. Connect Gmail
2. AI scans your emails
3. Get insights in dashboard

Visual layout:

Connect Gmail → AI Analysis → Smart Dashboard

Component:

components/HowItWorks.tsx
6. Product Preview

Shows what the dashboard looks like.

Example:

See your email insights in one place

Display:

dashboard screenshot

AI summaries

detected tasks

Component:

components/ProductPreview.tsx
7. Call To Action

Encourages signups.

Example:

Ready to upgrade your inbox?

[ Connect Gmail ]

Component:

components/CTA.tsx
8. Footer

This is the bottom container you asked for earlier.

Sections:

Product

Features

Roadmap

Pricing

Resources

Documentation

API

Blog

Company

About

Careers

Contact

Support

Help Center

Email support

Example:

AI Email Intelligent Agent

Product
Features
Pricing

Resources
Docs
Blog

Company
About
Careers

Support
support@emailagent.ai

Component:

components/Footer.tsx