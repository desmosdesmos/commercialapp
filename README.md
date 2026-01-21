# Art Detailing - Telegram Mini App

A premium Telegram Mini App for "Art Detailing" service with a futuristic iOS aesthetic featuring glassmorphism design and smooth animations.

## Features

- **Premium Glass & Neon Design**: Glassmorphism UI with animated radial gradient background
- **Responsive Layout**: Optimized for mobile devices as a Telegram Mini App
- **Four Main Tabs**:
  - Home: Showroom with services and loyalty program
  - Booking: Form for scheduling appointments
  - Portfolio: Gallery of completed work
  - Contacts: Business information and contact options
- **Smooth Animations**: Using Framer Motion for fluid transitions
- **Glassmorphism UI**: Modern translucent UI elements

## Tech Stack

- React (Vite)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- clsx / tailwind-merge

## Installation

1. Clone the repository:
```bash
git clone https://github.com/desmosdesmos/commercialapp.git
cd commercialapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Telegram Bot Integration

The bot is configured with the token provided. To run the bot separately:

```bash
npm run bot
```

## Deployment

To build the app for production:
```bash
npm run build
```

## Project Structure

```
src/
├── App.tsx                 # Main application component with navigation
├── index.css              # Tailwind and custom styles
├── pages/                 # Individual page components
│   ├── HomePage.tsx       # Home tab with services
│   ├── BookingPage.tsx    # Booking form
│   ├── PortfolioPage.tsx  # Gallery
│   └── ContactsPage.tsx   # Contact information
└── utils/
    └── cn.ts              # Utility for class names
```

## Design Elements

- **Color Scheme**: Dark theme with purple, blue, and silver accents
- **Glass Cards**: `bg-white/5`, `backdrop-blur-xl`, `border border-white/10`
- **Typography**: Clean sans-serif with wide letter spacing
- **Animations**: Smooth transitions and interactive elements
- **Responsive**: Mobile-first design for Telegram Mini App

## Customization

To customize the app for your own business:

1. Update business information in the Contacts page
2. Modify service offerings in the Home page
3. Adjust colors in `tailwind.config.js`
4. Change images in the Portfolio page

## License

This project is for educational purposes. Feel free to use and modify as needed.