# PsycheSync

PsycheSync bridges the gap between DSM-5-TR clinical diagnoses and ICD-10-CM billing codes. Search the full 2026 code dataset by term or code, drill into sub-diagnoses and Excludes notes, and save frequently used codes to Favorites. Built with FastAPI and React — deployed on Render and Vercel.

**Live:** [psyche-sync.vercel.app](https://psyche-sync.vercel.app) · **API:** [psyche-sync.onrender.com](https://psyche-sync.onrender.com)

---

## What It Does

Translating DSM-5-TR diagnoses into ICD-10-CM billing codes is tedious and error-prone. PsycheSync is the digital bridge — search by clinical term or code, drill into sub-diagnoses, review Excludes notes, and save frequently used codes to Favorites.

### Features

- **Instant search** — fuzzy match on code and description across the full 2026 ICD-10-CM dataset
- **Code drill-down** — parent/child hierarchy, Excludes 1 & 2 clinical notes, DSM-5-TR cross-reference
- **Favorites** — star codes in the detail view, persisted to localStorage
- **Dark mode** — Sun/Moon toggle, full dark palette throughout
- **Copy to clipboard** — one-tap code copy from the detail sheet
- **PWA-ready** — works on phone, tablet, or desktop

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript, Vite, Tailwind v4 |
| UI Components | shadcn/ui, Radix UI |
| Data Fetching | TanStack Query |
| Toasts | Sonner |
| Backend | Python 3.11, FastAPI, Uvicorn |
| ICD-10-CM Data | `simple-icd-10-cm` 1.5.0 |
| Validation | Pydantic v2 |
| Frontend Deploy | Vercel |
| Backend Deploy | Render (Python runtime) |

---

## Project Structure

```
psyche_sense/
├── backend/
│   ├── main.py              # FastAPI app — health, search, details endpoints
│   ├── requirements.txt
│   └── .python-version      # Pins Python 3.11 for Render
├── frontend/
│   └── psycheSync/
│       ├── src/
│       │   ├── App.tsx                      # Root — tabs, search, state
│       │   ├── components/
│       │   │   ├── SearchCard.tsx           # Result card with bookmark
│       │   │   ├── CodeDetailSheet.tsx      # Radix Dialog detail modal
│       │   │   └── AboutPage.tsx            # About tab content
│       │   ├── hooks/
│       │   │   ├── useCodeDetails.ts        # TanStack Query detail fetcher
│       │   │   └── useFavorites.ts          # localStorage favorites
│       │   ├── types/icd.ts                 # CodeResult, ICDCodeDetail types
│       │   └── lib/constants.ts            # API_BASE env var
│       └── vercel.json                      # SPA rewrite rules
└── render.yaml                              # Render IaC config
```

---

## API Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/` | Health check |
| `GET` | `/search/{query}` | Search by code or description (max 100 results) |
| `GET` | `/details/{code}` | Full details — parent, children, excludes |

---

## Running Locally

**Backend**
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
# API available at http://localhost:8000
```

**Frontend**
```bash
cd frontend/psycheSync
npm install
npm run dev
# App available at http://localhost:5173
```

---

## Deployment

| Service | Platform | Config |
|---|---|---|
| Backend | Render (Python 3.11) | `render.yaml` |
| Frontend | Vercel | `frontend/psycheSync/vercel.json` |

**Environment variables:**

| Variable | Where | Value |
|---|---|---|
| `ALLOWED_ORIGINS` | Render | Your Vercel URL |
| `VITE_API_BASE` | Vercel | Your Render URL |

---

## Disclaimer

PsycheSync is an educational reference tool and is not affiliated with the WHO or APA. It does not contain proprietary DSM-5-TR text and is not a substitute for professional clinical judgment or formal diagnostic manuals.
