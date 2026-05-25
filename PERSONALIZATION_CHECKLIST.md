# 🎨 Portfolio Personalization Checklist

Complete this checklist to make the portfolio your own after deployment.

## Step 1: Update `package.json`

Replace the placeholder GitHub username in the homepage field:

```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/react-portfolio-starter"
```

**Your GitHub username:** [Fill this in]

---

## Step 2: Update Files with Your Details

### 📄 `src/components/Navbar.jsx`

- [ ] Change the brand name from "DevPortfolio" to your name

**Current:**

```jsx
<Link to="/" className={styles.brand} aria-label="Homepage">
  DevPortfolio
</Link>
```

**Update to:**

```jsx
<Link to="/" className={styles.brand} aria-label="Homepage">
  Your Name
</Link>
```

---

### 🏠 `src/pages/Home.jsx`

- [ ] Update the hero title
- [ ] Update the subtitle with your professional tagline
- [ ] Update button links if needed

**Key fields to update:**

- Title: "Hi, I'm a developer..." → "Hi, I'm [Your Name]..."
- Subtitle: Replace with your bio
- Tagline: Update "Beginner-friendly portfolio starter"

---

### 👤 `src/pages/About.jsx`

- [ ] Replace "About Me" section with your bio
- [ ] Update "My Focus" section
- [ ] Update "What I Enjoy" section

**Make it personal:**

- Share your learning journey
- Highlight your interests and passions
- Mention your career goals

---

### 💪 `src/pages/Skills.jsx`

- [ ] Update skill categories to match your expertise
- [ ] Add your actual skills in each category

**Example structure:**

```jsx
const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "VS Code"],
  },
];
```

---

### 🚀 `src/pages/Projects.jsx`

- [ ] Replace placeholder projects with your real projects
- [ ] Add real screenshot URLs
- [ ] Update GitHub links
- [ ] Update live demo links

**For each project, gather:**

- Project title
- Project description (2-3 sentences)
- Screenshot URL (use Imgur or similar)
- Technologies used
- GitHub repository link
- Live demo URL (if available)

**Example project structure:**

```jsx
{
  title: 'E-Commerce Platform',
  description: 'A full-stack MERN application with Stripe payment integration and user authentication.',
  image: 'https://imgur.com/YOUR-IMAGE-ID.jpg',
  techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  github: 'https://github.com/your-username/ecommerce-project',
  demo: 'https://your-ecommerce-demo.com',
}
```

---

### 📧 `src/pages/Contact.jsx`

- [ ] Update email address
- [ ] Update GitHub profile link
- [ ] Add LinkedIn profile link (optional)
- [ ] Add Twitter/X profile link (optional)

**Suggested links to add:**

```jsx
{
  title: 'Email',
  link: 'mailto:your-email@gmail.com'
}

{
  title: 'GitHub',
  link: 'https://github.com/your-username'
}

{
  title: 'LinkedIn',
  link: 'https://linkedin.com/in/your-profile'
}

{
  title: 'Twitter',
  link: 'https://twitter.com/your-handle'
}
```

---

### 🌐 `index.html`

- [ ] Update page title
- [ ] Update meta description
- [ ] Update meta keywords

**Current:**

```html
<title>React Portfolio Starter</title>
<meta
  name="description"
  content="A beginner-friendly React portfolio starter"
/>
```

**Update to:**

```html
<title>Your Name - Portfolio</title>
<meta
  name="description"
  content="Full-stack developer portfolio showcasing [your focus area] projects"
/>
```

---

## Step 3: Add Optional Enhancements

### Add a Profile Picture

1. Create a `public/` folder (if not exists)
2. Add your profile image as `public/profile.jpg`
3. Use it in Home or About section:

```jsx
<img src="/profile.jpg" alt="Your Name" className={styles.profileImage} />
```

### Add Social Media Icons

Update `src/pages/Contact.jsx` to include more platforms:

```jsx
const socialLinks = [
  { name: "GitHub", url: "https://github.com/your-username", icon: "🐙" },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-profile", icon: "💼" },
  { name: "Twitter", url: "https://twitter.com/your-handle", icon: "𝕏" },
  { name: "Email", url: "mailto:your-email@gmail.com", icon: "✉️" },
];
```

---

## Step 4: Deploy Your Personalized Portfolio

### Create a Feature Branch

```bash
git checkout -b feature/personalize-portfolio
```

### Make All Your Changes

Edit all the files listed above with your personal details.

### Commit Your Changes

```bash
git add src/
git add index.html
git commit -m "feat: personalize portfolio with my details"
```

### Push to GitHub

```bash
git push -u origin feature/personalize-portfolio
```

### Create & Merge PR on GitHub

1. Go to your GitHub repository
2. Click "Pull requests" → "New pull request"
3. Review your changes
4. Click "Create pull request"
5. Merge to main

### Deploy

```bash
npm run deploy
```

---

## Step 5: Verify & Share

- [ ] Visit your live site: `https://YOUR-USERNAME.github.io/react-portfolio-starter`
- [ ] Test all links and buttons
- [ ] Test on mobile device
- [ ] Share with friends and colleagues!

---

## 🔗 Quick Reference: What to Update

| File                        | Fields to Update         | Status |
| --------------------------- | ------------------------ | ------ |
| `package.json`              | `homepage` URL           | [ ]    |
| `src/components/Navbar.jsx` | Brand name               | [ ]    |
| `src/pages/Home.jsx`        | Title, subtitle, tagline | [ ]    |
| `src/pages/About.jsx`       | Bio, focus, interests    | [ ]    |
| `src/pages/Skills.jsx`      | Skill categories & items | [ ]    |
| `src/pages/Projects.jsx`    | All project details      | [ ]    |
| `src/pages/Contact.jsx`     | Email, GitHub, LinkedIn  | [ ]    |
| `index.html`                | Title, description       | [ ]    |

---

## 📚 Resources

- **Deployment Guide:** See `DEPLOYMENT_GUIDE.md`
- **React Router Docs:** https://reactrouter.com
- **Vite Docs:** https://vitejs.dev
- **GitHub Pages:** https://pages.github.com

---

**You've got this! 🎉 Make your portfolio reflect who you are!**
