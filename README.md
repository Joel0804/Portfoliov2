# Joel Dsilva — Portfolio

Personal developer portfolio built with Django REST Framework + React.

## Tech Stack

**Backend:** Django, Django REST Framework, PostgreSQL
**Frontend:** React (Vite), Axios, AOS
**Deploy:** Render

## Features

- REST API serving projects, skills, and contact form data
- Contact form with Gmail email notifications
- Scroll animations with AOS
- Fully responsive (mobile + desktop)

## Local Setup

### Backend

```bash
cd portfolio-v2
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file:
```
SECRET_KEY=your_secret_key
DB_NAME=portfolio
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=your_app_password
```

```bash
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/projects/ | List all projects |
| GET | /api/skills/ | List all skills |
| POST | /api/contacts/ | Submit contact form |

## Environment Variables

Never commit `.env` to GitHub. All secrets are stored in environment variables.