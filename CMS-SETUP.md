# GitHub CMS Authentication Setup Guide

## ✅ **Fixed Configuration**
- Changed backend from `git-gateway` to `github`
- Removed Netlify Identity dependency
- Configured for direct GitHub authentication

## 🔧 **GitHub OAuth App Setup Required**

To use the CMS with GitHub authentication, you need to create a GitHub OAuth App:

### **Step 1: Create GitHub OAuth App**
1. Go to GitHub Settings: https://github.com/settings/developers
2. Click "OAuth Apps" → "New OAuth App"
3. Fill in the details:
   - **Application name**: `Srinivas Portfolio CMS`
   - **Homepage URL**: `https://srinivas26k.github.io`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`

### **Step 2: Get Client ID**
- After creating the app, copy the **Client ID**
- Generate a **Client Secret** (keep this secure)

### **Step 3: Update CMS Config**
Add this to your `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: Srinivas26k/srinivas_nampalli
  branch: main
  auth_endpoint: https://api.netlify.com/auth
  # Add your OAuth App Client ID here
```

## 🚀 **Alternative: Simple File-Based Editing**

If you prefer to skip OAuth setup for now, you can:

1. **Edit files directly** in your GitHub repository
2. **Use VS Code** with the repository cloned locally
3. **Use GitHub Codespaces** for online editing

The content files are in the `content/` folder:
- `content/settings/site.json` - Site settings
- `content/home/index.md` - Homepage content
- `content/about/index.md` - About page content
- `content/services/index.md` - Services page content

## 📁 **Adding Images**
Upload images directly to:
- `public/assets/uploads/profile/` - Profile photos
- `public/assets/uploads/projects/` - Project images
- `public/assets/uploads/icons/` - Favicons, logos

## 🌐 **Your Site Status**
- **Live URL**: https://srinivas26k.github.io
- **Repository**: https://github.com/Srinivas26k/srinivas_nampalli
- **Deployment**: Automatic via GitHub Actions

Your site will be live once the GitHub Actions deployment completes!
