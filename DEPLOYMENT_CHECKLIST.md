# 🚀 SafetyNet Nigeria - Deployment Checklist

## ✅ Pre-Deployment Tasks

### 1. Files to Create/Update

- [ ] Create `index.css` in root directory (from artifact)
- [ ] Create `vercel.json` in root directory (from artifact)
- [ ] Create `.env.example` (from artifact)
- [ ] Update `package.json` if needed
- [ ] Create `public/_redirects` file
- [ ] Make sure `.gitignore` excludes `.env.local`

### 2. Get API Keys

- [ ] **Gemini API Key**
  - Visit: https://ai.google.dev/
  - Click "Get API Key"
  - Create new project
  - Copy key

- [ ] **Mapbox Token**
  - Visit: https://account.mapbox.com/
  - Sign up/login
  - Copy default public token
  - Or create new token

### 3. Local Testing

- [ ] Create `.env.local` file:
  ```bash
  VITE_GEMINI_API_KEY=your_key_here
  VITE_MAPBOX_ACCESS_TOKEN=your_token_here
  ```
- [ ] Test locally: `npm run dev`
- [ ] Test build: `npm run build`
- [ ] Test auth: Sign up, login, logout
- [ ] Test map: Check if tiles load
- [ ] Test AI chat: Send message to Guardian

---

## 🚀 Deployment Steps

### Option 1: Vercel Dashboard (Easiest)

1. **Prepare Git**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - [ ] Go to [vercel.com](https://vercel.com)
   - [ ] Click "Add New Project"
   - [ ] Import your GitHub repo
   - [ ] Wait for auto-detect (Vite)
   - [ ] Click "Deploy"

3. **Add Environment Variables**
   - [ ] Go to Settings → Environment Variables
   - [ ] Add `VITE_GEMINI_API_KEY`
   - [ ] Add `VITE_MAPBOX_ACCESS_TOKEN`
   - [ ] Select all environments (Production, Preview, Development)
   - [ ] Save

4. **Redeploy**
   - [ ] Go to Deployments tab
   - [ ] Click "..." on latest deployment
   - [ ] Click "Redeploy"

### Option 2: Vercel CLI

```bash
# Make executable (Mac/Linux)
chmod +x deploy.sh

# Run deployment script
./deploy.sh

# Or manually:
npm install -g vercel
vercel login
vercel
```

---

## 🔧 Post-Deployment

### 1. Configure Supabase

- [ ] Go to Supabase project
- [ ] Navigate to Authentication → URL Configuration
- [ ] Add Site URL: `https://your-app.vercel.app`
- [ ] Add Redirect URL: `https://your-app.vercel.app/**`
- [ ] Save changes

### 2. Test Production

Visit your Vercel URL and test:

- [ ] Homepage loads
- [ ] Login/Signup works
- [ ] Map displays correctly
- [ ] AI chat responds
- [ ] Reports can be submitted
- [ ] Profile page accessible
- [ ] Mobile responsive
- [ ] No console errors

### 3. Performance Check

- [ ] Run Lighthouse audit
- [ ] Check Web Vitals in Vercel
- [ ] Test on 3G/4G connection
- [ ] Test on multiple devices

---

## 🐛 Troubleshooting

### Build Fails on Vercel

**Check:**
- [ ] All dependencies in package.json
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] Build works locally (`npm run build`)

**Fix:**
```bash
# Clear cache and rebuild
vercel --force
```

### App Works Locally But Not on Vercel

**Check:**
- [ ] Environment variables are set in Vercel
- [ ] Variables have correct names (VITE_ prefix)
- [ ] No hardcoded localhost URLs
- [ ] Supabase URL configured correctly

**View logs:**
```bash
vercel logs
```

### Map Not Loading

**Check:**
- [ ] `VITE_MAPBOX_ACCESS_TOKEN` is set
- [ ] Token is public (starts with `pk.`)
- [ ] No browser console errors

**Test token:**
Visit: `https://api.mapbox.com/v4/mapbox.streets.json?access_token=YOUR_TOKEN`

### AI Chat Not Working

**Check:**
- [ ] `VITE_GEMINI_API_KEY` is set
- [ ] Key is valid (test on ai.google.dev)
- [ ] No API quota exceeded
- [ ] Check browser console for errors

### Authentication Errors

**Check:**
- [ ] Supabase redirect URLs configured
- [ ] Site URL matches deployment URL
- [ ] Google OAuth credentials (if using)
- [ ] Email verification enabled

---

## 📱 Mobile Testing

Test on real devices:

- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Different screen sizes
- [ ] Portrait and landscape
- [ ] Touch interactions
- [ ] Form inputs
- [ ] Bottom navigation

---

## 🎯 Production Optimizations (Optional)

### Performance

- [ ] Install Tailwind locally (remove CDN)
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
- [ ] Enable Vercel Analytics
- [ ] Configure caching headers
- [ ] Optimize images
- [ ] Enable compression

### Security

- [ ] Add security headers in vercel.json
- [ ] Enable HTTPS only
- [ ] Configure CSP (Content Security Policy)
- [ ] Add rate limiting (via Supabase)

### Monitoring

- [ ] Set up error tracking (Sentry)
- [ ] Configure uptime monitoring
- [ ] Enable performance monitoring
- [ ] Set up alerts for errors

---

## 🌐 Custom Domain (Optional)

1. **In Vercel:**
   - [ ] Go to Settings → Domains
   - [ ] Add your domain
   - [ ] Copy DNS records

2. **In DNS Provider:**
   - [ ] Add A record or CNAME
   - [ ] Wait for propagation (up to 24h)
   - [ ] SSL auto-configures

3. **Update Supabase:**
   - [ ] Add custom domain to Site URL
   - [ ] Add to Redirect URLs

---

## 📊 Analytics Setup (Optional)

### Vercel Analytics (Built-in)
```bash
npm install @vercel/analytics
```

Add to `App.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// In your App component
<Analytics />
```

### Google Analytics
Add to `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✨ Success Criteria

Your deployment is successful when:

- ✅ Build completes without errors
- ✅ App accessible at Vercel URL
- ✅ Authentication flow works
- ✅ Map loads with tiles
- ✅ AI chat responds
- ✅ Reports can be submitted
- ✅ Mobile responsive
- ✅ No critical console errors
- ✅ Lighthouse score > 80
- ✅ Page load < 3 seconds

---

## 🎉 Launch!

Once everything is checked:

1. **Announce:**
   - Share URL with beta testers
   - Post on social media
   - Notify emergency services

2. **Monitor:**
   - Watch Vercel logs
   - Check error reports
   - Monitor user feedback

3. **Iterate:**
   - Fix reported bugs
   - Deploy updates
   - Improve based on usage

---

## 📞 Support

**Vercel:**
- Docs: https://vercel.com/docs
- Discord: https://vercel.com/discord
- Support: support@vercel.com

**Supabase:**
- Docs: https://supabase.com/docs
- Discord: https://discord.supabase.com
- GitHub: https://github.com/supabase/supabase

---

## 🚨 Emergency Contacts

If production breaks:

1. **Rollback:** Vercel Dashboard → Deployments → Promote previous
2. **Logs:** `vercel logs` or dashboard
3. **Status:** Check vercel.status.io
4. **Support:** Open ticket in dashboard

---

## Bismillah - May your deployment succeed! 🙏

**Remember:** Every deployment is a step toward saving lives in Nigeria.

Alhamdulillah! 🚀🇳🇬