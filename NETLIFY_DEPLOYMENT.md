# Netlify Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio to Netlify with optimal performance and configuration.

## 🚀 Quick Start

### Option 1: Connect Git Repository (Recommended)

1. **Sign up for Netlify**: Go to [netlify.com](https://netlify.com) and create an account
2. **New Site from Git**: Click "New site from Git" on your dashboard
3. **Choose Git Provider**: Select GitHub, GitLab, or Bitbucket
4. **Select Repository**: Choose your `Sahin-portfolio` repository
5. **Configure Build Settings**:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build` (auto-detected from netlify.toml)
   - **Publish directory**: `dist` (auto-detected from netlify.toml)
6. **Deploy**: Click "Deploy site"

### Option 2: Manual Deploy

1. **Build the project locally**:
   ```bash
   npm install
   npm run build:netlify
   ```

2. **Deploy via Netlify CLI**:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Deploy
   netlify deploy --prod --dir=dist
   ```

3. **Or drag and drop**: 
   - Build locally and drag the `dist` folder to [netlify.com/drop](https://netlify.com/drop)

## ⚙️ Configuration Details

### Build Settings

The project is configured via `netlify.toml` with these optimizations:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 20.x
- **NPM Version**: 10.x+

### Environment Variables

If you need to set environment variables in Netlify:

1. Go to **Site settings** → **Environment variables**
2. Add these variables:
   ```
   NODE_ENV=production
   VITE_APP_ENVIRONMENT=production
   VITE_APP_NAME=Sahin Sultan Portfolio
   ```

### Performance Optimizations

The configuration includes:

1. **Asset Caching**: Static assets cached for 1 year
2. **Security Headers**: XSS protection, content type options, frame options
3. **SPA Routing**: Proper redirects for React Router
4. **Code Splitting**: Optimized chunks for faster loading
5. **Compression**: Gzip/Brotli compression enabled

## 🎯 Post-Deployment Setup

### 1. Custom Domain (Optional)

1. **Purchase a domain** or use an existing one
2. **Add domain in Netlify**:
   - Go to **Site settings** → **Domain management**
   - Click **Add custom domain**
   - Enter your domain name
3. **Update DNS settings** at your domain provider:
   - Add CNAME record: `www` → `your-site-name.netlify.app`
   - Add A record: `@` → `104.198.14.52`
4. **Enable HTTPS**: Netlify automatically provides SSL certificates

### 2. Form Handling (If needed)

If you have contact forms, enable Netlify Forms:

1. Add `netlify` attribute to your form:
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

2. Add hidden input:
   ```html
   <input type="hidden" name="form-name" value="contact" />
   ```

### 3. Analytics (Optional)

Enable Netlify Analytics:
1. Go to **Site settings** → **Analytics**
2. Enable **Netlify Analytics** (paid feature)

## 🔧 Build Scripts

Available npm scripts:

- `npm run dev` - Start development server
- `npm run build` - Production build (includes type checking)
- `npm run build:netlify` - Optimized build for Netlify
- `npm run preview` - Preview production build locally
- `npm run analyze` - Analyze bundle size

## 📁 File Structure

```
dist/                    # Built files (auto-generated)
├── assets/
│   ├── css/            # Stylesheets with hashes
│   ├── js/             # JavaScript bundles
│   ├── images/         # Optimized images
│   └── fonts/          # Web fonts
├── index.html          # Main HTML file
└── _redirects          # SPA routing rules
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check Node.js version (requires 20+)
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Check TypeScript errors: `npm run check`

2. **404 on Refresh**:
   - Ensure `_redirects` file exists in `public/`
   - Check `netlify.toml` redirect rules

3. **Assets Not Loading**:
   - Verify `base` path in `vite.config.ts` is set to `/`
   - Check asset paths in built files

4. **Performance Issues**:
   - Run `npm run analyze` to check bundle sizes
   - Enable compression in Netlify (usually automatic)

### Build Logs

To debug build issues:
1. Go to **Deploys** in Netlify dashboard
2. Click on the failed deploy
3. Check **Deploy log** for errors

## 🔄 Continuous Deployment

With Git integration, every push to the main branch automatically:
1. Triggers a new build
2. Runs tests and type checking
3. Deploys if build succeeds
4. Updates your live site

## 📊 Monitoring

### Performance Monitoring

1. **Lighthouse**: Automatically runs on every deploy
2. **Core Web Vitals**: Monitored in Netlify dashboard
3. **Bundle Analysis**: Use `npm run analyze` locally

### Error Tracking

Consider integrating:
- **Sentry** for error tracking
- **LogRocket** for session replay
- **Google Analytics** for user analytics

## 🎉 Success!

Your portfolio is now optimized for Netlify with:
- ✅ Fast loading times
- ✅ SEO optimization
- ✅ Security headers
- ✅ SPA routing support
- ✅ Asset caching
- ✅ Automatic deployments

Your site will be available at: `https://your-site-name.netlify.app`

## 📞 Support

If you encounter issues:
1. Check [Netlify documentation](https://docs.netlify.com/)
2. Review build logs in Netlify dashboard
3. Check [Vite documentation](https://vitejs.dev/) for build issues
4. Open an issue in the repository

---

**Happy deploying! 🚀**