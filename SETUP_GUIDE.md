# Portfolio Website Setup Guide

## 🚀 Quick Start

Your portfolio is deployed at: https://amitdixit9368.github.io/portfolio/

## ⚙️ Configuration Required

### 1. **Contact Form Setup (Formspree)**

Your contact form is configured to use Formspree but needs setup:

**Steps to Setup:**
1. Visit https://formspree.io
2. Sign up with your email
3. Create a new form
4. Name it "Portfolio Contact"
5. Copy the form ID (looks like: `xyzabc123`)
6. Open `src/components/Contact.jsx`
7. Find line 30 (the fetch URL)
8. Replace `https://formspree.io/f/xyzadmin` with `https://formspree.io/f/YOUR_FORM_ID`
9. Save and run `pnpm run build` then `pnpm run deploy`

**What it does:**
- Sends form submissions to your email
- No backend server needed
- Formspree handles email delivery
- Form includes success/error messages

### 2. **SEO Meta Tags**

All pages now have SEO meta tags. To optimize:

- Update domain URLs in each component's SEOHead:
  - `src/components/Home.jsx` (line 12)
  - `src/components/About.jsx` (line 13)
  - `src/components/Projects.jsx` (line 21)
  - `src/components/Contact.jsx` (line 79)

**Replace `amitdixit9368.github.io/portfolio` with your domain if you have one**

### 3. **Personal Information**

Update placeholder text throughout:
- [ ] Your name in `Home.jsx` (replace `[Your Name]`)
- [ ] Social media links in `Home.jsx` (lines 66-71)
- [ ] About section content in `About.jsx`
- [ ] Your email in the contact section

### 4. **Projects Data**

Update `src/data/projects.json`:
- Add your real projects
- Update project titles, descriptions
- Replace placeholder image URLs with real images
- Update GitHub and demo links
- Set `featured: true` for projects you want highlighted

Example project structure:
```json
{
  "id": 1,
  "title": "My Awesome Project",
  "description": "What this project does",
  "image": "https://url-to-image.jpg",
  "tech": ["React", "Node.js", "MongoDB"],
  "category": "fullstack",
  "featured": false,
  "github": "https://github.com/yourname/project",
  "demo": "https://project-demo.com"
}
```

### 5. **Images & Assets**

- [ ] Replace profile circle image in CSS
- [ ] Add Open Graph preview images:
  - `og-image.jpg` (home page preview)
  - `og-projects.jpg` (projects page preview)
  - Store in public folder and update URLs in components

### 6. **Social Media Links**

Update in `Home.jsx` (around line 66):
```jsx
<a href="https://github.com/yourprofile" target="_blank">
<a href="https://linkedin.com/in/yourprofile" target="_blank">
<a href="https://twitter.com/yourprofile" target="_blank">
```

## 📦 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Home.jsx          # Hero section
│   │   ├── About.jsx         # About me
│   │   ├── Projects.jsx      # Portfolio projects
│   │   ├── Skills.jsx        # Skills section
│   │   ├── Contact.jsx       # Contact form
│   │   ├── Testimonials.jsx  # Testimonials
│   │   ├── Footer.jsx        # Footer
│   │   ├── Navbar.jsx        # Navigation
│   │   └── ProjectModal.jsx  # Project details modal
│   ├── data/
│   │   └── projects.json     # Projects database
│   ├── utils/
│   │   └── SEO.jsx           # SEO meta tags utility
│   ├── ThemeContext.jsx      # Dark/light theme logic
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Features Included

- ✅ Dark/Light theme toggle with persistence
- ✅ Responsive mobile design with burger menu
- ✅ Smooth scroll animations (AOS)
- ✅ Typing animation on hero section
- ✅ Project cards with filtering
- ✅ Project modal details popup
- ✅ Back-to-top button
- ✅ Contact form with email backend
- ✅ Testimonials section
- ✅ SEO meta tags on all pages
- ✅ Featured project badges

## 🏗️ Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev
# Opens at http://localhost:5175/portfolio/

# Build for production
pnpm run build

# Deploy to GitHub Pages
pnpm run deploy

# Preview production build
pnpm run preview
```

## 🌐 Deployment

Deployed to GitHub Pages automatically via:
```bash
pnpm run deploy
```

- Builds the project
- Pushes to `gh-pages` branch
- Available at: https://amitdixit9368.github.io/portfolio/

**To deploy your changes:**
1. Make your edits
2. Run `pnpm run build` to verify no errors
3. Run `pnpm run deploy` to publish
4. Live in ~2 minutes

## 🔍 SEO Optimization

Each page includes:
- Page title and meta description
- Open Graph tags (social sharing)
- Twitter Card tags
- Canonical URLs
- Keywords

To add more:
1. Import SEOHead in component
2. Add at top of return: `<SEOHead ... />`
3. Customize for each route

## 🐛 Troubleshooting

**Contact form not working:**
- Verify Formspree form ID is correct
- Check browser console for errors
- Make sure form ID includes "f/" prefix

**Dark mode not persisting:**
- Check localStorage is enabled
- Clear browser cache

**Images not loading:**
- Ensure image URLs are absolute (https://)
- Check for CORS issues
- Use PNG/JPG format

**Deployment issues:**
- Verify GitHub Pages is enabled in repo settings
- Check branch is set to `gh-pages`
- Ensure `vite.config.js` has correct base path: `/portfolio/`

## 📞 Support

For Formspree issues: https://formspree.io/support
For React issues: https://react.dev/
For Vite issues: https://vitejs.dev/

## 🎯 Next Steps

1. [ ] Complete Formspree setup
2. [ ] Update personal information
3. [ ] Add real projects to JSON
4. [ ] Update social links
5. [ ] Test contact form
6. [ ] Customize colors/fonts if needed
7. [ ] Add your domain name if you have one
8. [ ] Monitor SEO with Google Search Console

---

**Tip:** Keep your projects.json updated - it's the source of truth for your portfolio!
