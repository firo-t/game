# Game - Premium Civil Engineering Portfolio

A modern, premium, highly animated personal portfolio website with a dark futuristic theme built for a Civil Engineering student. This portfolio features cutting-edge animations, glassmorphism effects, and interactive elements using React, Framer Motion, and GSAP.

## 🎨 Features

### Design & Aesthetics
- **Dark Futuristic Theme** - Black and dark gray color palette with neon blue and orange accents
- **Glassmorphism Effects** - Modern frosted glass design elements
- **Glow Effects** - Neon glowing borders and text shadows
- **Animated Gradients** - Smooth gradient animations throughout
- **Floating Particles** - Ambient particle system in background
- **Mouse-Follow Glow** - Interactive glow that follows your mouse
- **Responsive Design** - Fully responsive for desktop, tablet, and mobile

### Sections
1. **Loading Screen** - Animated loading screen with spinner
2. **Hero Section** - Eye-catching hero with animated title, animated typing skills, and CTA buttons
3. **About Section** - Bio, education, statistics counters, and skill progress bars
4. **Skills Section** - 8 technical skills with animated cards and icons
5. **Projects Section** - 6 featured projects with hover effects and tool tags
6. **Timeline/Journey Section** - Educational and professional timeline with animated nodes
7. **Services Section** - 6 service offerings with rotating icons
8. **Testimonials Section** - Sliding testimonial carousel with navigation
9. **Contact Section** - Contact form with floating labels and contact information
10. **Footer** - Premium footer with social links and back-to-top button

### Animations
- Smooth fade-in and slide-up animations for sections
- Hover effects on all interactive elements (cards, buttons, images)
- Animated counters for statistics
- Scroll-triggered animations with Framer Motion
- Parallax scrolling effects
- 3D rotations and transforms
- Glowing pulse animations
- Floating and rotating elements

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd c:\Users\hp\Desktop\game
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to that URL

### Development

The project uses:
- **React 18** - UI framework
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations and scroll triggers
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool

### File Structure
```
game/
├── src/
│   ├── App.jsx          # Main React component with all sections
│   └── main.jsx         # React entry point
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── style.css            # Global styles and animations
```

## 🎯 Customization

### Update Your Information

Edit `src/App.jsx` and find these sections:

- **Name/Title**: Look for the hero section and replace "Game" with your name
- **Description**: Update the bio text in the About section
- **Skills**: Modify the skills array in the `SkillsSection`
- **Projects**: Update the projects array in the `ProjectsSection`
- **Timeline**: Edit the timeline events in the `TimelineSection`
- **Services**: Modify services in the `ServicesSection`
- **Testimonials**: Update testimonials in the `TestimonialsSection`
- **Contact Info**: Update email, phone, and location in the `ContactSection`

### Color Customization

Edit `tailwind.config.js` to change the color scheme:
```javascript
extend: {
  colors: {
    'neon-blue': '#00d4ff',      // Change this
    'neon-orange': '#ff6b35',    // Change this
    'primary-dark': '#0a0e27',   // Change this
  }
}
```

### Animation Speed

Adjust animation timing in component transitions:
```javascript
transition={{ duration: 0.6 }}  // Change duration value
```

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `build/` directory ready for deployment.

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys on every push

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### Deploy to GitHub Pages
1. Update `package.json` with your repository URL
2. Run: `npm run build`
3. Push to GitHub

## 📝 Notes

- All content is placeholder and can be updated anytime
- The portfolio automatically adapts to screen size
- Animations are optimized for performance
- The loading screen displays for 3 seconds on first visit
- All sections are scroll-triggered for smooth animations

## 🔧 Troubleshooting

### Dependencies won't install
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 is already in use
```bash
npm start -- --port 3001
```

### Animations not working
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh the page (Ctrl+Shift+R)
- Check browser console for errors

## 📄 License

This portfolio template is open source and free to use for personal projects.

## 🤝 Support

For questions or issues, refer to the documentation of:
- [React Documentation](https://react.dev)
- [Framer Motion](https://www.framer.com/motion)
- [GSAP Documentation](https://gsap.com)
- [Tailwind CSS](https://tailwindcss.com)

---

**Created with ❤️ for civil engineering professionals**
