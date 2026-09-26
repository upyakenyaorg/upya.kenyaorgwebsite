# ElimuPlus website

A responsive, static multi-page frontend prototype for the ElimuPlus learning platform.

## Start locally

Open `index.html` in a browser, or publish this folder with GitHub Pages.

## Pages

- `index.html` — public homepage
- `courses.html` — course discovery and learning-path concept
- `practice.html` — practice and examination experience
- `teachers.html` — verified-teacher discovery
- `pricing.html` — student membership and teacher recruitment
- `ai-assistant.html` — ElimuPlus AI study companion and external-material search
- `about.html` and `contact.html` — public information pages
- `news.html` — news, study tips and community updates
- `student-dashboard.html` — learner portal prototype
- `teacher-portal.html` — teacher workspace prototype
- `admin-portal.html` — administration workspace prototype

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder (not the ZIP itself) to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Select **Deploy from a branch**, then choose `main` and `/ (root)`.
5. Save. GitHub will provide the public site address in a minute or two.

## Next development stage

This frontend is ready to connect to a Supabase backend for authentication, role-based permissions, course data, secure resources, payments and M-Pesa integration.

The About and Contact footers include TikTok, Facebook, YouTube and Instagram placeholders. Replace each `href="#"` with your official social-media profile URL before publishing.

## ElimuPlus AI

The AI page includes a local demonstration chat and working browser searches of public Open Library and Wikipedia results. A production conversational AI must call OpenAI from a protected server-side function (for example, a Supabase Edge Function); never put an OpenAI API key in `elimu-ai.js` or any GitHub Pages file. That function should authenticate the user, check permissions, pass relevant course context, and return the response to this page.
