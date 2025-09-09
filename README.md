# Counter Mini App

A simple counter application built as a Base Mini App using Next.js 15, MiniKit, and OnchainKit.

## Features

- ➕ Increment counter
- ➖ Decrement counter  
- 🔄 Reset to zero
- 📊 Track min/max values and total steps
- 📱 Mobile-first responsive design
- 🔗 Base Mini App integration with MiniKit

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```
Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/products/onchainkit).

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 15** - App Router
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **MiniKit** - Base Mini App integration
- **OnchainKit** - Base ecosystem components

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── providers.tsx       # MiniKit & OnchainKit providers
│   ├── loading.tsx         # Loading UI
│   ├── error.tsx           # Error boundary
│   └── globals.css         # Global styles
├── components/
│   ├── Counter.tsx         # Main counter component
│   ├── Header.tsx          # App header
│   └── LoadingSpinner.tsx  # Loading component
└── public/
    └── manifest.json       # Mini App manifest
```

## Deployment

This app can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **Heroku**

Make sure to set the `NEXT_PUBLIC_ONCHAINKIT_API_KEY` environment variable in your deployment platform.

## Mini App Integration

This app is configured as a Base Mini App and can be integrated into Base App and other Farcaster clients that support Mini Apps.

The manifest is located at `/public/manifest.json` and defines the app's metadata and capabilities.
