# Deployment Guide

This document provides detailed instructions for deploying your portfolio website to various hosting platforms.

## Vercel Deployment (Recommended)

Vercel is the easiest platform for deploying Next.js applications.

### Steps:

1. **Create a Vercel Account**:
   - Go to [vercel.com](https://vercel.com) and sign up or log in

2. **Connect Your Repository**:
   - Click "Add New" > "Project"
   - Import your GitHub/GitLab/Bitbucket repository
   - If you haven't pushed your code yet, do so with:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/yourusername/your-repo-name.git
     git push -u origin main

