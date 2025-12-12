# Oakland Wiffle League Website

A modern, responsive React website for the Oakland Wiffle League built with Tailwind CSS.

## Features

- **React + Tailwind CSS**: Modern stack with utility-first styling
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Enhanced navigation experience
- **Modern UI**: Clean, professional design with engaging animations
- **Instagram Integration**: Direct links to the league's Instagram account
- **Contact Form**: Easy way for players to get in touch
- **Component-Based**: Modular React components for easy maintenance
- **Sections**:
  - Hero section with call-to-action buttons
  - About section with league information and stats
  - Schedule section with upcoming games
  - Teams section showcasing all teams
  - Gallery section for photos
  - Contact section with form and social links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## File Structure

```
.
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main App component
│   ├── index.css          # Global styles and Tailwind directives
│   └── components/
│       ├── Navbar.jsx     # Navigation component
│       ├── Hero.jsx       # Hero section
│       ├── About.jsx      # About section
│       ├── Schedule.jsx   # Schedule section
│       ├── Teams.jsx      # Teams section
│       ├── Gallery.jsx    # Gallery section
│       ├── Contact.jsx    # Contact section
│       └── Footer.jsx     # Footer component
└── README.md              # This file
```

## Customization

- Update colors in `tailwind.config.js` under the `theme.extend.colors` section
- Modify component content in `src/components/`
- Adjust animations in `src/index.css` or component styles

## Technologies

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Instagram

Follow the Oakland Wiffle League on Instagram: [@oakland_wiffle_league](https://www.instagram.com/oakland_wiffle_league/?hl=en)
