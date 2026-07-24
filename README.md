# Financial Success Academy

A responsive static website MVP for a financial literacy and investment education platform.

## Included pages
- Home page
- Course overview
- Free lesson with interactive quiz
- About page
- Contact form demo
- Student login placeholder
- Financial education disclaimer
- Privacy policy placeholder

## Run locally
Open `index.html` in a browser, or use a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages
1. Create a new GitHub repository.
2. Upload all files in this folder.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save and wait for the website URL to appear.

## Important before accepting students or payments
This version is a front-end prototype. It does not yet include:
- Secure student authentication
- A course database or progress tracking backend
- Payment processing
- Real email submission
- Video hosting
- Legally reviewed privacy/terms documents

Recommended next integrations: Supabase for user accounts and data, Stripe for payments, and Vimeo or another secure video host.
