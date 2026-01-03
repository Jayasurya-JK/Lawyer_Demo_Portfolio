# Deployment Guide

## 🚀 Quick Start Deployment

This website is production-ready and can be deployed to any static hosting service.

## Static Build Generated

The production build has already been generated in the `out/` directory with:
- **14 HTML pages** (including 5 blog posts)
- Optimized CSS and JavaScript bundles
- Dynamic sitemap.xml
- robots.txt for SEO

## Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment.

### Option 2: Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod --dir=out
```

### Option 3: GitHub Pages

1. Push the repository to GitHub
2. Go to Settings → Pages
3. Select "GitHub Actions" as the source
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v2
        id: deployment
```

### Option 4: AWS S3 + CloudFront

1. Create an S3 bucket
2. Enable static website hosting
3. Upload the `out/` directory contents
4. Set up CloudFront distribution
5. Configure custom domain

### Option 5: Any Static Host

Simply upload the contents of the `out/` directory to your hosting provider.

## Environment Variables

Before deploying, update the following in `lib/constants.ts`:

- `SITE_CONFIG.url` - Your production domain
- `SITE_CONFIG.name` - Lawyer's name
- `SITE_CONFIG.contact.email` - Contact email
- `SITE_CONFIG.contact.phone` - Contact phone

## Post-Deployment Checklist

- [ ] Update domain in `lib/constants.ts`
- [ ] Test all pages load correctly
- [ ] Verify contact form works
- [ ] Check sitemap.xml is accessible
- [ ] Verify robots.txt is accessible
- [ ] Test responsive design on mobile
- [ ] Run Lighthouse audit (target >90)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Configure custom domain DNS
- [ ] Set up SSL certificate

## Performance Optimization

The site is already optimized with:
- ✅ Static Site Generation (SSG)
- ✅ Minimal JavaScript bundle
- ✅ Optimized CSS with Tailwind
- ✅ Lazy loading where appropriate
- ✅ Font optimization

Expected Lighthouse scores:
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

## Maintenance

To update content:
1. Edit `lib/constants.ts`
2. Run `npm run build`
3. Deploy the new `out/` directory

To add blog posts:
1. Add to `BLOG_POSTS` array in `lib/constants.ts`
2. Rebuild and deploy

## Support

For deployment issues or questions, refer to:
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- Vercel Documentation: https://vercel.com/docs
- Netlify Documentation: https://docs.netlify.com/
