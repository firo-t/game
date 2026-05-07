# Quick Start Guide - Game Portfolio

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
Open PowerShell or Terminal in the project folder and run:
```powershell
npm install
```
This will install all required packages (React, Framer Motion, GSAP, Tailwind CSS, etc.)

⏱️ This may take 2-3 minutes depending on your internet speed.

### Step 2: Start Development Server
```powershell
npm start
```
This will automatically open your browser to `http://localhost:3000`

### Step 3: You're Done!
Your portfolio is now live and ready to customize!

---

## 📝 What to Customize

### 1. Update Your Name (Hero Section)
   - File: `src/App.jsx`
   - Find: Line with `<motion.h1>Game</motion.h1>`
   - Change "Game" to your name

### 2. Update Skills
   - File: `src/App.jsx`
   - Find: `SkillsSection` component
   - Modify the skills array with your skills

### 3. Update Projects
   - File: `src/App.jsx`
   - Find: `ProjectsSection` component
   - Add/modify projects in the projects array

### 4. Update Contact Info
   - File: `src/App.jsx`
   - Find: `ContactSection` component
   - Update email, phone, and location

### 5. Update About Information
   - File: `src/App.jsx`
   - Find: `AboutSection` component
   - Update biography and education details

---

## 🎨 Change Colors

### Edit Color Scheme
File: `tailwind.config.js`

Find this section:
```javascript
colors: {
    'neon-blue': '#00d4ff',      // Primary glow color
    'neon-orange': '#ff6b35',    // Secondary accent
    'primary-dark': '#0a0e27',   // Main background
}
```

Replace hex codes with your preferred colors:
- [Color Picker Tool](https://htmlcolorcodes.com)
- Blue: #00d4ff (neon blue)
- Orange: #ff6b35 (neon orange)
- Dark: #0a0e27 (dark background)

---

## 📦 Project Structure

```
game/
├── src/
│   ├── App.jsx              # All components and content
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Colors & theme
├── postcss.config.js        # CSS processing
├── style.css                # Global animations
└── README.md                # Full documentation
```

---

## 🌐 Deploy to Web

### Option 1: Vercel (Easiest)
1. Create account at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. It automatically deploys!

### Option 2: Netlify
1. Run: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `build` folder

### Option 3: GitHub Pages
1. Run: `npm run build`
2. Push `build` folder to GitHub

---

## 🔧 Common Commands

```powershell
# Start development server
npm start

# Build for production
npm run build

# Clear cache and reinstall
npm cache clean --force
npm install

# Update all dependencies
npm update
```

---

## 💡 Tips

- **Animations**: All smooth animations are handled by Framer Motion
- **Performance**: Scroll-triggered animations use GSAP for efficiency
- **Responsive**: Works automatically on mobile, tablet, desktop
- **Dark Mode**: Always dark theme (no light mode toggle)
- **Loading**: 3-second animated loading screen on first visit

---

## ❓ Troubleshooting

### Port 3000 already in use?
```powershell
npm start -- --port 3001
```

### npm install fails?
```powershell
npm cache clean --force
# Delete node_modules folder manually
npm install
```

### Blank page after npm start?
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console (F12) for errors

### Animations not working?
- Hard refresh browser
- Check if Framer Motion is loaded in browser console

---

## 📞 Need Help?

- Check browser console (F12) for error messages
- Review the full README.md for more details
- Check animation libraries' documentation:
  - [Framer Motion Docs](https://www.framer.com/motion/)
  - [GSAP Docs](https://gsap.com/docs)
  - [Tailwind Docs](https://tailwindcss.com/docs)

---

## ✨ Next Steps

1. ✅ Install dependencies (`npm install`)
2. ✅ Start server (`npm start`)
3. 📝 Customize your information
4. 🎨 Adjust colors if needed
5. 🚀 Deploy to web when ready

**Your premium portfolio is ready to showcase your civil engineering skills!**
