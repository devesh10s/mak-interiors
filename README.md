# MAK Interiors - Premium Interior Design Website

A modern, responsive website built for MAK Interiors, a premium interior design company based in Mumbai. The website showcases their portfolio, services, and provides an easy way for potential clients to get in touch.

## 🌟 Features

- **Modern Design**: Clean, professional design that reflects the luxury interior design brand
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Portfolio**: Filterable project gallery with detailed project pages
- **Service Showcase**: Comprehensive overview of all interior design services
- **Process Visualization**: Step-by-step breakdown of the design process
- **Contact Forms**: Multiple ways for clients to get in touch
- **SEO Optimized**: Proper meta tags, sitemap, and structured data
- **Performance Optimized**: Fast loading times and smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component
- **Deployment Ready**: Vercel-optimized

## 📁 Project Structure

```
mak-interiors/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio pages
│   ├── process/           # Process page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── cards/            # Card components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/               # UI components
├── lib/                  # Utilities and data
│   ├── data/            # Static data files
│   ├── constants.ts     # App constants
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

## 📱 Pages Overview

### Home Page
- Hero section with image slider
- Featured projects showcase
- Services preview
- Why choose us section
- Client testimonials

### About Page
- Company story and mission
- Core values
- Timeline of milestones
- Team information

### Services Page
- Detailed service descriptions
- Process overview
- FAQ section
- Call-to-action sections

### Portfolio Page
- Filterable project grid
- Individual project detail pages
- Project categories and tags

### Process Page
- Interactive step-by-step process
- Timeline visualization
- Project duration estimates

### Contact Page
- Contact form with validation
- Multiple contact methods
- Business information
- Location details

## 🎨 Design System

### Colors
- **Primary**: Accent blue (#0ea5e9)
- **Neutral**: Gray scale for text and backgrounds
- **Success/Error**: Standard semantic colors

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- Consistent button styles
- Card layouts with hover effects
- Form components with validation
- Responsive navigation

## 📊 SEO & Performance

- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine crawling instructions
- **Image Optimization**: Next.js Image component with lazy loading
- **Performance**: Optimized bundle size and loading times

## 🔧 Customization

### Adding New Projects
Edit `/lib/data/projects.ts` to add new portfolio items.

### Updating Services
Modify `/lib/data/services.ts` to update service offerings.

### Changing Contact Information
Update `/lib/constants.ts` with new contact details.

### Adding Testimonials
Add new testimonials in `/lib/data/testimonials.ts`.

## 📞 Contact Information

- **Phone**: +91 98765 43210
- **Email**: hello@makinteriors.com
- **Location**: Mumbai, Maharashtra, India
- **Instagram**: @makx.interiors

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with automatic builds on push

For other platforms, build the project and serve the `out` directory.

## 📄 License

This project is proprietary and confidential. All rights reserved by MAK Interiors.

---

Built with ❤️ for MAK Interiors
