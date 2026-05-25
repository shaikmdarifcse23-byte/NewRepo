# React Portfolio Deployment & Git Workflow Guide

This guide explains how to deploy your React portfolio to GitHub Pages and master Git workflows.

---

## 📋 Table of Contents

1. [GitHub Pages Deployment](#github-pages-deployment)
2. [Git Initialization & Setup](#git-initialization--setup)
3. [Git Workflow: Step-by-Step](#git-workflow-step-by-step)
4. [Best Practices](#best-practices)
5. [Personalizing Your Portfolio](#personalizing-your-portfolio)

---

## 🚀 GitHub Pages Deployment

### Step 1: Update `package.json` for GitHub Pages

Add `homepage` field to your `package.json`:

```json
{
  "name": "react-portfolio-starter",
  "homepage": "https://YOUR-USERNAME.github.io/react-portfolio-starter",
  "private": true,
  ...
}
```

**Note:** Replace `YOUR-USERNAME` with your actual GitHub username and `react-portfolio-starter` with your repository name.

### Step 2: Install `gh-pages` Package

```bash
npm install --save-dev gh-pages
```

### Step 3: Add Deploy Scripts to `package.json`

Update the `scripts` section:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

**What these do:**

- `predeploy`: Runs `build` automatically before deploying
- `deploy`: Deploys the `dist/` folder to `gh-pages` branch

### Step 4: Commit & Push Changes

```bash
git add package.json
git commit -m "chore: configure GitHub Pages deployment"
git push origin main
```

### Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:

1. Build your React app (`npm run build`)
2. Create a `gh-pages` branch
3. Push the `dist/` folder to that branch

### Step 6: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** > **Pages**
3. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **gh-pages** and **/root**
4. Click **Save**

Your site will be live at `https://YOUR-USERNAME.github.io/react-portfolio-starter` within 1-2 minutes.

---

## 🔧 Git Initialization & Setup

### Already Initialized

Your repository is already set up with Git:

```bash
git status
# On branch main
# Your branch is up to date with 'origin/main'.
```

### For New Projects (Reference)

If starting from scratch, initialize Git:

```bash
git init                    # Initialize local repository
git add .                   # Stage all files
git commit -m "Initial commit"
git branch -M main          # Rename to main branch
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main     # Push to GitHub
```

---

## 📝 Git Workflow: Step-by-Step

### 1. Check Current Status

```bash
git status
```

**Output shows:**

- Current branch
- Files modified, staged, or untracked
- How many commits ahead/behind remote

### 2. Create a New Branch

Create a branch for each feature:

```bash
git branch feature/add-animations
git checkout feature/add-animations
```

Or create and switch in one command:

```bash
git checkout -b feature/add-animations
```

**Naming convention:**

- `feature/feature-name` - New features
- `bugfix/bug-name` - Bug fixes
- `docs/documentation-name` - Documentation
- `chore/task-name` - Maintenance tasks

### 3. Make Changes & Stage Files

Edit your files, then stage them:

```bash
git add src/components/Navbar.jsx       # Stage single file
git add src/                            # Stage all files in folder
git add .                               # Stage all changes
```

### 4. Commit with a Message

```bash
git commit -m "feat: add hamburger menu animation to navbar"
```

**Commit message format:**

```
<type>: <subject>

<body (optional)>

<footer (optional)>
```

**Types:**

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvement
- `test:` - Tests
- `chore:` - Build, dependencies, etc.

**Good examples:**

```bash
git commit -m "feat: implement project filtering by technology"
git commit -m "fix: correct email validation regex"
git commit -m "docs: add deployment guide"
git commit -m "refactor: extract form validation logic"
```

### 5. View Commit History

```bash
git log                       # Show all commits
git log --oneline             # Compact view
git log --oneline -5          # Last 5 commits
git log --graph --all --decorate --oneline  # Visual branch tree
```

### 6. Push Branch to GitHub

```bash
git push origin feature/add-animations
```

First time pushing a branch:

```bash
git push -u origin feature/add-animations  # Sets upstream
```

### 7. Create a Pull Request (PR)

On GitHub:

1. Go to your repository
2. Click **Pull requests**
3. Click **New pull request**
4. Select base branch: `main` and compare branch: `feature/add-animations`
5. Add title and description
6. Click **Create pull request**

**Good PR description:**

```
## What does this PR do?
Adds smooth scroll animations to the navbar hamburger menu icon.

## Type of change
- [x] New feature
- [ ] Bug fix
- [ ] Documentation

## How to test?
1. Resize browser to mobile width
2. Click hamburger menu
3. Verify the three lines animate into an X shape

## Screenshots
[Add screenshots if applicable]
```

### 8. Merge Branch to Main

**Option A: Via GitHub (Recommended)**

1. In the PR, click **Squash and merge** or **Create a merge commit**
2. Click **Confirm merge**
3. Delete the feature branch

**Option B: Via Command Line**

```bash
git checkout main
git merge feature/add-animations
git push origin main
git branch -d feature/add-animations  # Delete local branch
git push origin --delete feature/add-animations  # Delete remote branch
```

---

## 🔀 Handling Merge Conflicts

### When Conflicts Occur

If two branches modify the same file, Git can't auto-merge:

```bash
Auto-merging src/pages/Projects.jsx
CONFLICT (content): Merge conflict in src/pages/Projects.jsx
Automatic merge failed; fix conflicts and then commit the result.
```

### View Conflicted Files

```bash
git status                              # Lists files with conflicts
git diff src/pages/Projects.jsx         # Show differences
```

### Resolve Conflicts Manually

Open the conflicted file. You'll see markers:

```jsx
<<<<<<< HEAD
const projects = [
  { title: 'Old Project' }
]
=======
const projects = [
  { title: 'New Project', image: '...' }
]
>>>>>>> feature/add-projects
```

**Markers:**

- `<<<<<<< HEAD` - Your current branch changes
- `=======` - Separator
- `>>>>>>> branch-name` - Incoming branch changes

**Resolve by:**

1. Keep HEAD changes only: Delete the incoming section
2. Keep incoming changes only: Delete HEAD section
3. Keep both: Combine manually
4. Delete entire conflict if unwanted

Example after resolving:

```jsx
const projects = [{ title: "New Project", image: "..." }];
```

### Complete the Merge

```bash
git add src/pages/Projects.jsx          # Stage resolved file
git commit -m "fix: resolve merge conflict in Projects.jsx"
git push origin main                    # Or your branch
```

---

## ✅ Best Practices

### 1. Commit Frequently & Meaningfully

```bash
# ❌ Bad
git commit -m "updates"
git commit -m "stuff"

# ✅ Good
git commit -m "feat: add project card hover animations"
git commit -m "fix: correct email regex pattern in form validation"
```

### 2. Write Clear Commit Messages

Use present tense ("add" not "added"), imperative mood ("move" not "moves").

```bash
# ✅ Good format
git commit -m "refactor: extract validation logic to utils"
```

### 3. Keep Branches Focused

One feature per branch:

```bash
# ✅ Good
git checkout -b feature/add-contact-form
git checkout -b bugfix/navbar-mobile-layout

# ❌ Avoid
git checkout -b fix-everything-add-features
```

### 4. Pull Before Push

Always update local repo before pushing:

```bash
git pull origin main     # Fetch and merge remote changes
git push origin main     # Push your changes
```

### 5. Use `.gitignore`

Your `.gitignore` should include:

```
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
```

### 6. Review Before Committing

```bash
git diff                            # See all changes
git diff src/components/Navbar.jsx  # See changes in one file
git add -p                          # Interactive staging
```

---

## 🎨 Personalizing Your Portfolio

After deployment, update these files with your personal details:

### 1. **Update `src/components/Navbar.jsx`**

Change the brand name:

```jsx
<Link to="/" className={styles.brand} aria-label="Homepage">
  Your Name {/* Change from DevPortfolio */}
</Link>
```

### 2. **Update `src/pages/Home.jsx`**

Replace hero content:

```jsx
<h1 className={styles.title}>
  Hi, I'm Your Name, a Full-Stack Developer.
</h1>
<p className={styles.subtitle}>
  I build modern web applications with React and Node.js.
  Currently exploring AI/ML opportunities.
</p>
```

### 3. **Update `src/pages/About.jsx`**

Add your bio and story:

```jsx
<p className={styles.sectionText}>
  I'm a passionate developer with 2 years of experience... [Your story]
</p>
```

### 4. **Update `src/pages/Skills.jsx`**

Customize your skill categories:

```jsx
const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS", "Figma"],
  },
];
```

### 5. **Update `src/pages/Projects.jsx`**

Add your real projects:

```jsx
const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack MERN app with Stripe integration",
    image: "https://your-image-url.com/project1.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/your-username/ecommerce-app",
    demo: "https://your-ecommerce-app.com",
  },
  // ... more projects
];
```

### 6. **Update `src/pages/Contact.jsx`**

Replace with your contact details:

```jsx
<a className={styles.contactLink} href="mailto:your-email@gmail.com">
  your-email@gmail.com
</a>

<a className={styles.contactLink} href="https://github.com/your-username">
  github.com/your-username
</a>

<a className={styles.contactLink} href="https://linkedin.com/in/your-profile">
  linkedin.com/in/your-profile
</a>
```

### 7. **Update `index.html`**

Update meta information:

```html
<title>Your Name - Portfolio</title>
<meta
  name="description"
  content="Full-stack developer portfolio showcasing web projects."
/>
<meta name="keywords" content="developer, react, javascript, full-stack" />
```

### 8. **Add Your Profile Picture**

Create `public/` folder (if not exists):

```bash
mkdir public
```

Place your image at `public/profile.jpg`, then use it:

```jsx
<img src="/profile.jpg" alt="Your Name" className={styles.profileImage} />
```

---

## 📤 Complete Deployment Workflow

### Step-by-Step Example

```bash
# 1. Create feature branch
git checkout -b feature/personalize-portfolio

# 2. Update your details in multiple files
# (Edit Home.jsx, About.jsx, Skills.jsx, Projects.jsx, Contact.jsx)

# 3. Stage changes
git add src/pages/

# 4. Commit
git commit -m "feat: personalize portfolio with my details"

# 5. Push branch
git push -u origin feature/personalize-portfolio

# 6. Create PR on GitHub, review, merge

# 7. Deploy
npm run deploy

# 8. Verify site live at: https://YOUR-USERNAME.github.io/react-portfolio-starter
```

---

## 🐛 Common Git Issues & Solutions

### Issue: Forgot to stage a file before committing

```bash
git add forgotten-file.jsx
git commit --amend --no-edit          # Add to previous commit
git push origin branch-name --force   # Push amended commit
```

### Issue: Need to undo last commit

```bash
git reset --soft HEAD~1               # Keep changes, unstage
git reset --mixed HEAD~1              # Keep changes, unstaged
git reset --hard HEAD~1               # Discard changes
```

### Issue: Accidentally committed to main instead of feature branch

```bash
git log --oneline                     # Find commit hash
git revert COMMIT-HASH                # Create undo commit
git push origin main
```

### Issue: Need to switch branches with uncommitted changes

```bash
git stash                             # Save changes
git checkout other-branch
git checkout original-branch
git stash pop                         # Restore changes
```

---

## 📚 Useful Git Commands Reference

```bash
# Viewing
git log                               # See commit history
git show COMMIT-HASH                  # View specific commit
git diff                              # View unstaged changes
git diff --staged                     # View staged changes

# Branching
git branch                            # List local branches
git branch -a                         # List all branches
git branch -d branch-name             # Delete branch
git branch -m old-name new-name       # Rename branch

# Undoing
git restore file.jsx                  # Discard changes in file
git restore --staged file.jsx         # Unstage file
git revert COMMIT-HASH                # Create undo commit

# Syncing
git fetch                             # Download changes (no merge)
git pull                              # Fetch + merge
git pull --rebase                     # Fetch + rebase
git push                              # Push to remote
```

---

## 🎯 Next Steps

1. **Personalize your portfolio** (follow section above)
2. **Test locally**: `npm run dev`
3. **Create feature branch**: `git checkout -b feature/personalize`
4. **Make changes** to Home, About, Skills, Projects, Contact
5. **Commit**: `git commit -m "feat: update portfolio with my details"`
6. **Push**: `git push -u origin feature/personalize`
7. **Create PR** and merge on GitHub
8. **Deploy**: `npm run deploy`
9. **Share your portfolio!** 🎉

---

**Happy coding! 🚀**
