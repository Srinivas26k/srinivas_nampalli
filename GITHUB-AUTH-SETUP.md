# 🔧 GitHub OAuth Setup for CMS Access

## ⚠️ Current Issue
The CMS is trying to use Netlify Identity instead of GitHub auth, causing the 405 error.

## ✅ **SOLUTION: GitHub OAuth App Setup**

### Step 1: Create GitHub OAuth App
1. Go to: https://github.com/settings/developers
2. Click "OAuth Apps" → "New OAuth App"
3. Fill in these details:
   - **Application name**: `Srinivas Portfolio CMS`
   - **Homepage URL**: `https://srinivas26k.github.io`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`

### Step 2: Get Client ID
- Copy the **Client ID** from your newly created OAuth app
- Keep the **Client Secret** secure (you'll need it later)

### Step 3: Update Config (I'll do this automatically)
- The auth_endpoint is already configured
- Just need to add your Client ID when you have it

## 🚀 **IMMEDIATE WORKAROUND: Local Development**

Instead of dealing with OAuth right now, use local development:

```bash
# Terminal 1: Start your dev server
bun dev

# Terminal 2: Start local CMS proxy
npx @netlify/cli cms-proxy-server

# Then access: http://localhost:3000/admin
```

## 📝 **ALTERNATIVE: Direct File Editing**

You can edit content files directly:
- Edit `content/settings/site.json` for site settings
- Edit `content/home/index.md` for homepage content
- Upload images to `public/assets/uploads/`

## 🎯 **Next Steps**
1. Try the local development approach first
2. If you want full CMS access, set up GitHub OAuth
3. Or continue with direct file editing (works great!)

The OAuth setup is optional - you can manage content without it!
