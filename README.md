# SoftSell SaaS Marketing Website

## Features Implemented
- **Modern, visually appealing, and mobile-responsive single-page design** using React and Tailwind CSS
- **Dark mode support** with smooth transitions
- **Consistent color palette** and branding (custom SVG logo)
- **Responsive Navbar** with smooth scroll to sections and hamburger menu for mobile
- **Hero Section** with background image, animated logo, and strong CTA
- **How It Works** and **Why Choose Us** sections with animated cards and icons
- **Comparison Table**: SoftSell vs. traditional resale
- **Trust Badges**: SSL, GDPR, ISO, Satisfaction
- **Testimonials**: Carousel with animated cards and profile images
- **Blog/Resources Section**: Animated cards, modern layout
- **Newsletter Signup**: Modern, animated, accessible, with localStorage persistence
- **Contact Form**: Modern, animated, accessible, async-ready (POSTs to backend)
- **FAQ**: Collapsible, animated, dark mode-aware
- **Footer**: Responsive, dark mode-aware, standard links
- **Floating AI Chat Widget**: Gemini API integration, real-time chat, answer rating, accessible, dark mode-aware
- **SEO meta tags** and custom favicon/logo

## Design Choices
- **React + Vite** for fast development and HMR
- **Tailwind CSS** for rapid, consistent, and responsive styling
- **Custom SVG logo** for brand consistency (used as favicon, in navbar, and hero)
- **Animations and microinteractions** throughout (fade, slide, bounce, scale, shake, etc.)
- **Section IDs and smooth scroll** for navigation
- **Accessibility**: ARIA roles, keyboard navigation, focus management, color contrast
- **No sensitive logic (like nodemailer) in frontend**; all email sending is expected to be handled by a backend API
- **LocalStorage** for newsletter opt-in persistence
- **All forms ready for backend integration** (fetch POST to /api/contact, etc.)

## Time Spent
- Planning and design: 1 hour
- Component development and styling: 3 hours
- Animations, microinteractions, and accessibility: 2 hours
- AI chat widget integration and polish: 1 hour
- Testing, bugfixes, and documentation: 1 hour

**Total: ~8 hours**

---

For backend email delivery, connect the ContactForm and NewsletterSignup to your own API endpoint (see code comments for details). All frontend code is ready for production deployment with a backend.