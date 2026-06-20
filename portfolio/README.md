# Sunil Kulali — Portfolio

React portfolio with multiple pages and a resume-powered chatbot.

## Features

- **7 pages**: Home, About, Skills, Projects, Experience, Education, Contact
- **Black & gold theme** with animated UI
- **Role switcher** on Skills page (Data Analyst, BA, DE, SQL)
- **Bottom-right chatbot** — answers questions from resume data
- **Responsive** mobile-friendly design

## Run locally

```bash
cd portfolio
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Chatbot

Ask about skills, projects, experience, education, certifications, or contact info. The assistant uses keyword matching against your resume data in `src/data/resumeData.js`.
