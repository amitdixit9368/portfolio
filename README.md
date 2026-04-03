# React Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations, dark mode, and advanced UI components.

## 🚀 Features

- **Dark/Light Mode Toggle**: Automatic theme switching with local storage persistence
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Powered by Framer Motion and AOS (Animate on Scroll)
- **Typing Animation**: Dynamic text animation on the home page
- **Multiple Sections**: Home, About, Projects, Skills, Contact, Footer
- **Advanced Projects Section**: Filterable projects with hover effects and image overlays
- **Skills Visualization**: Categorized skills with animated progress bars and icons
- **Contact Form**: Enhanced contact form with loading states and validation
- **Modern UI**: Clean and professional design with gradients and shadows
- **Fast Loading**: Built with Vite for optimal performance
- **SEO Ready**: Proper meta tags and semantic HTML

## 🛠️ Technologies Used

- **React** - Frontend framework
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **AOS** - Animate on scroll library
- **React Type Animation** - Typing effect
- **React Icons** - Icon library
- **Vite** - Build tool
- **CSS3** - Styling with CSS variables for theming
- **GitHub Pages** - Deployment

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx/css     # Navigation with theme toggle
│   ├── Home.jsx/css       # Hero section with typing animation
│   ├── About.jsx/css      # About section with stats
│   ├── Projects.jsx/css   # Projects with filtering
│   ├── Skills.jsx/css     # Skills with categories and icons
│   ├── Contact.jsx/css    # Contact form and info
│   └── Footer.jsx/css     # Footer with links
├── ThemeContext.jsx       # Dark/light theme context
├── App.jsx/css            # Main app component
└── main.jsx               # App entry point
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm run dev
   ```

4. **Build for production**
   ```bash
   pnpm run build
   ```

5. **Deploy to GitHub Pages**
   ```bash
   pnpm run deploy
   ```

## 🎨 Customization

- **Personal Information**: Update content in component files
- **Colors**: Modify CSS variables in theme styles
- **Projects**: Add your projects in `Projects.jsx`
- **Skills**: Update skills data in `Skills.jsx`
- **Contact**: Change contact information in `Contact.jsx`
- **Social Links**: Update social media links throughout components

## 🌐 Deployment

The project is configured for deployment to GitHub Pages:

1. Update `vite.config.js` with your repository name:
   ```js
   base: "/your-repo-name/"
   ```

2. Update `package.json` deploy script if needed

3. Push to GitHub and run:
   ```bash
   pnpm run deploy
   ```

Your site will be live at: `https://your-username.github.io/your-repo-name/`

## 📱 Features in Detail

### Dark Mode
- Automatic detection of system preference
- Manual toggle in navbar
- Smooth transitions
- Persistent across sessions

### Animations
- Page transitions with Framer Motion
- Scroll-triggered animations with AOS
- Hover effects on interactive elements
- Loading states and micro-interactions

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Optimized for all screen sizes
- Touch-friendly interactions

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
