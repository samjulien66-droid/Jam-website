# JAM Website - Sam Julien

A personal website for musician Sam Julien, featuring music, investigative blog posts, research resources, and product recommendations.

Built with **Next.js**, **Tailwind CSS**, and **Sanity CMS**.

---

## 🚀 Deployment Guide (Step-by-Step)

### Prerequisites
You'll need accounts on:
- [GitHub](https://github.com) ✅
- [Sanity](https://sanity.io) ✅
- [Vercel](https://vercel.com) ✅

---

### Step 1: Create a Sanity Project

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Click **"Create new project"**
3. Name it `jam-website`
4. Choose **"Create empty project"**
5. Select the **Free** plan
6. Once created, note your **Project ID** (looks like `abc123xy`)

---

### Step 2: Push Code to GitHub

1. Go to [github.com/new](https://github.com/new)
2. Name the repository `jam-website`
3. Keep it **Public** or **Private** (your choice)
4. Click **"Create repository"**
5. Follow GitHub's instructions to push this code:

```bash
# In terminal, navigate to the jam-website folder
cd jam-website

# Initialize git
git init
git add .
git commit -m "Initial commit"

# Connect to your GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/jam-website.git
git branch -M main
git push -u origin main
```

---

### Step 3: Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your `jam-website` repository
4. Before deploying, add **Environment Variables**:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity Project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |

5. Click **"Deploy"**
6. Wait for the build to complete (~2-3 minutes)
7. You'll get a URL like `jam-website.vercel.app` 🎉

---

### Step 4: Set Up Sanity Studio (Content Editor)

The easiest way to manage content is through Sanity's hosted Studio:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your `jam-website` project
3. Click **"Studio"** in the sidebar
4. Click **"Deploy Studio"**
5. You'll get a URL like `jam-website.sanity.studio`

**To deploy with your schemas:**

```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Login to Sanity
sanity login

# In the jam-website folder, deploy the studio
sanity deploy
```

---

### Step 5: Add Your First Content

1. Go to your Sanity Studio URL
2. Click **"Blog Post"** → **"Create"**
3. Fill in:
   - **Title**: The Epstein Files: What We Know
   - **Slug**: Click "Generate"
   - **Category**: Elite Networks
   - **Published At**: Today's date
   - **Excerpt**: Your summary
   - **Body**: Write your post!
4. Click **"Publish"**

Your website will automatically update with the new content.

---

## 📁 Project Structure

```
jam-website/
├── app/                    # Next.js pages
│   ├── page.js            # Homepage
│   ├── blog/page.js       # Blog listing
│   ├── research/page.js   # Research page
│   ├── music/page.js      # Music page
│   ├── products/page.js   # Products page
│   ├── tour/page.js       # Tour page
│   └── support/page.js    # Support page
├── components/            # Reusable components
│   ├── Nav.js
│   └── Footer.js
├── sanity/
│   ├── schemas/           # Content types
│   │   ├── blogPost.js
│   │   ├── researchItem.js
│   │   └── product.js
│   └── lib/
│       └── client.js      # Sanity connection
└── ...config files
```

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color palette. The site uses the "sky" palette by default.

### Fonts
Fonts are loaded from Google Fonts in `app/globals.css`:
- **Bebas Neue** - Headlines
- **Space Mono** - UI elements
- **Crimson Pro** - Body text

### Content Categories
Edit the schema files in `sanity/schemas/` to change the category options.

---

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Create .env.local file
cp .env.local.example .env.local
# Edit .env.local with your Sanity Project ID

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## 📝 Content Management Cheat Sheet

### Adding a Blog Post
1. Sanity Studio → Blog Post → Create
2. Fill in title, category, date, excerpt
3. Write body content (supports headings, links, images)
4. Toggle "Featured" to show on homepage
5. Publish

### Adding Research
1. Sanity Studio → Research Item → Create
2. Add title, source, year, category, type
3. Add URL if available online
4. Toggle "Featured" to show on Research page
5. Publish

### Adding Products
1. Sanity Studio → Product → Create
2. Add name, artist, price, category
3. Upload product image
4. Add purchase URL
5. Publish

---

## 🆘 Troubleshooting

**Site not updating after publishing content?**
- Vercel caches pages. Go to Vercel dashboard → your project → Settings → Functions → Purge Cache

**Sanity Studio not showing schemas?**
- Make sure you ran `sanity deploy` after creating the project

**Build failing on Vercel?**
- Check that environment variables are set correctly
- Check the build logs for specific errors

---

## 📧 Support

Built with ❤️ for Sam Julien's music and mission.
