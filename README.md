# EZ Labs Frontend Assignment

A responsive single-page web application built with React.js and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Tech Stack

- React.js 18.3
- Vite
- Tailwind CSS 3.4

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Contact Form API

**Endpoint:** `POST https://vernanbackend.ezlab.in/api/contact-us/`

**Request:**
```json
{
  "name": "Test user",
  "email": "testuser@gmail.com",
  "phone": "908765498",
  "message": "This is a message"
}
```

**Validation:**
- All fields required
- Email must be valid format
- Shows "Form Submitted" message on success (status 200)

## Build

```bash
npm run build
```

Output in `dist/` folder.
