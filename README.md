# Primacy Lending - Multi-Page Mortgage Website

A complete, responsive mortgage lending website built for Primacy Lending, featuring multiple specialized landing pages for different loan types.

## 🏠 Pages Included

- **Home Page** (`index.html`) - Main landing page with service overview
- **Refinance Page** (`refinance.html`) - Dedicated refinance landing page
- **FHA Loans Page** (`fha.html`) - FHA loan information and benefits
- **VA Loans Page** (`va.html`) - VA loan benefits for veterans
- **USDA Loans Page** (`usda.html`) - Rural development loans

## 🎨 Design Features

- **Professional Design**: Clean, modern aesthetic with blue/gold color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Conversion Optimized**: Multiple CTAs and strategic placement of booking widgets
- **Accessibility**: Proper semantic HTML, focus states, and keyboard navigation
- **Performance**: Optimized CSS and JavaScript for fast loading

## 🔧 GoHighLevel Integration Points

Each page includes clearly marked placeholder areas for GoHighLevel calendar widgets:

### Calendar Widget Locations

1. **Home Page**:
   - `#home-calendar` - Hero section booking widget
   - `#cta-calendar` - Secondary CTA section widget

2. **Refinance Page**:
   - `#refinance-calendar` - Hero section refinance consultation booking

3. **FHA Page**:
   - `#fha-calendar` - FHA loan pre-approval booking

4. **VA Page**:
   - `#va-calendar` - VA loan consultation booking

5. **USDA Page**:
   - `#usda-calendar` - USDA loan consultation booking

### Integration Instructions

To embed your GoHighLevel calendar widgets:

1. **Locate the placeholder div** with the appropriate ID (e.g., `#home-calendar`)
2. **Replace the entire placeholder div** with your GHL embed code
3. **Maintain the same styling classes** if needed for consistent appearance

Example replacement:
```html
<!-- Replace this placeholder -->
<div class="ghl-calendar-placeholder" id="home-calendar">
  <!-- placeholder content -->
</div>

<!-- With your GHL embed code -->
<div id="home-calendar">
  <!-- Your GoHighLevel calendar embed code here -->
</div>
```

## 📁 File Structure

```
/
├── index.html              # Home page
├── refinance.html          # Refinance landing page
├── fha.html               # FHA loans page
├── va.html                # VA loans page
├── usda.html              # USDA loans page
├── assets/
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   └── js/
│       └── main.js        # JavaScript functionality
└── README.md              # This file
```

## 🚀 Deployment

This website is ready for deployment to any static hosting service:

### Netlify Deployment
1. Connect your repository to Netlify
2. Set build command: (none needed for static site)
3. Set publish directory: `/` (root)
4. Deploy!

### Other Hosting Options
- GitHub Pages
- Vercel
- AWS S3 + CloudFront
- Any web hosting service

## 📱 Features

### Responsive Design
- Mobile-first approach
- Breakpoints at 480px, 768px, 1024px
- Touch-friendly navigation and buttons

### Interactive Elements
- Smooth scrolling navigation
- Mobile hamburger menu
- Tabbed content sections (USDA page)
- Hover effects and animations
- Form handling and CTA tracking

### SEO Optimized
- Semantic HTML structure
- Meta descriptions for each page
- Proper heading hierarchy
- Alt text for images (when added)

## 🎯 Conversion Features

### Multiple CTAs
- Primary booking buttons in hero sections
- Secondary CTAs throughout content
- Phone number prominently displayed
- Strategic placement of calendar widgets

### Trust Building Elements
- Professional testimonials
- Detailed FAQ sections
- Legal disclaimers and NMLS information
- Service process explanations

### Lead Capture
- Multiple calendar widget integration points
- Phone call tracking ready
- Form submission handling

## 🛠 Customization

### Colors
The color scheme can be easily modified in `assets/css/styles.css`:
- Primary Blue: `#2563eb`
- Secondary Gold: `#f59e0b`
- Text: `#1f2937`
- Background: `#ffffff`

### Content Updates
- Update contact information in all HTML files
- Modify NMLS numbers and legal disclaimers
- Replace placeholder testimonials with real reviews
- Update service areas and loan limits

### Branding
- Replace logo placeholders with actual logo files
- Update company name throughout all files
- Modify meta descriptions and titles

## 📞 Contact Information

Current placeholder contact information:
- Phone: (256) 555-0123
- Company: Primacy Lending
- Loan Officer: Cameron Reed
- NMLS: #123456 (placeholder)

**Remember to update all contact information and NMLS numbers before going live!**

## 🔒 Legal Compliance

The website includes proper legal disclaimers and NMLS information in the footer of each page. Ensure all licensing information is accurate before deployment.

## 📈 Analytics Ready

The website is structured to easily integrate with:
- Google Analytics
- Facebook Pixel
- GoHighLevel tracking
- Call tracking services

Add your tracking codes to the `<head>` section of each HTML file.

---

**Built for Primacy Lending - Professional Mortgage Solutions**