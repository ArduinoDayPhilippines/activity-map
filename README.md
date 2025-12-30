# 🗺️ Activity Map

**A comprehensive event activity management and queue system for large-scale events**

Activity Map is a real-time web application designed to streamline event activity management, visitor navigation, and queue coordination for conferences, exhibitions, and community events for Arduino Day Philippines. The platform provides an interactive floor map, dynamic activity listings, and intelligent queue management to enhance both organizer efficiency and attendee experience.

[![Next.js](https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=Next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)](https://tailwindcss.com/)

---

## 🎯 Overview

Activity Map is designed for mapping out all activities in large-scale events such as **Arduino Day Philippines**. The platform provides a comprehensive website that displays:

- **📍 Venue Floor Plans**: Interactive maps showing all floors and booth locations
- **📋 Activity Information**: Detailed information about each activity including descriptions, activities, and what visitors can expect
- **⏱️ Queue Management**: Real-time queue status, position tracking, and estimated wait times
- **🎯 Activity Discovery**: Browse, search, and filter activities across different floors and categories

Whether you're an event organizer managing multiple activity stations or an attendee looking to navigate the venue efficiently, Activity Map streamlines the entire experience from discovery to participation.

---

## 📌 Table of Contents

- [🎯 Overview](#-overview)
- [📚 System Documentation](#-system-documentation)
- [🛠 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
  - [📁 Project Structure](#-project-structure)
  - [Issue \& Project Workflow](#issue--project-workflow)
    - [1. Find an Issue](#1-find-an-issue)
    - [2. Create a Branch](#2-create-a-branch)
    - [3. Submit a Pull Request (PR)](#3-submit-a-pull-request-pr)
    - [4. Code Review \& Merge](#4-code-review--merge)
  - [Branching \& Git Workflow](#branching--git-workflow)
    - [Branch Naming Convention](#branch-naming-convention)
      - [1. Switch to develop branch](#1-switch-to-develop-branch)
      - [2. Create a feature branch linked to an issue](#2-create-a-feature-branch-linked-to-an-issue)
      - [3. Make your changes in the code](#3-make-your-changes-in-the-code)
      - [4. Once you're done with your changes, commit](#4-once-youre-done-with-your-changes-commit)
      - [5. Push to remote branch](#5-push-to-remote-branch)
      - [6. Create a pull request (PR)](#6-create-a-pull-request-pr)
  - [Commit Message Guidelines](#commit-message-guidelines)
    - [Commit Message Format](#commit-message-format)
    - [Allowed Commit Types](#allowed-commit-types)
      - [Examples](#examples)
  - [📋 Pull Request Guidelines](#-pull-request-guidelines)
    - [PR Title Format:](#pr-title-format)
    - [PR Description Template](#pr-description-template)

---

## � System Documentation
> We maintain detailed documentation for the system architecture, logic flows, and database schema in the `docs/` folder.

| Document | Description |
| :--- | :--- |
| **[🏗️ System Architecture](./docs/ARCHITECTURE.md)** | High-level system overview, component breakdown, and integration points. |
| **[🔄 Application Flowchart](./docs/FLOWCHART.md)** | Detailed logic flow from authentication to queue management. |
| **[💾 Database Schema (ERD)](./docs/ERD.md)** | Entity relationship diagrams and table definitions. |

---

## �🛠 Tech Stack

![Next.js](https://img.shields.io/badge/-Next.js-555555?style=for-the-badge&logo=Next.js)&nbsp;
![React](https://img.shields.io/badge/-React-555555?style=for-the-badge&logo=react)&nbsp;
![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-555555?style=for-the-badge&logo=TailwindCSS)&nbsp;
![TypeScript](https://img.shields.io/badge/-TypeScript-555555?style=for-the-badge&logo=typescript)&nbsp;

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/) or npm

1. Create a New folder where you can store the project file to be referred as the **Project Folder**

2. Open command prompt, change current directory to as the **Project Folder**

```bash
cd <PATH TO PROJECT FOLDER>
```

3. Clone the repository, add `.` on the end to extract files to current directory.

```bash
git clone https://github.com/ArduinoDayPH2025/activity-map.git .
```

4. Install dependencies

```bash
npm install
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📁 Project Structure

```
📦 Project Name
├── 📂 .next
├── 📂 node_modules
├── 📂 public               # Static assets
├── 📂 src
│   ├── 📂 app              # Next.js app directory (routing & pages)
│   │   ├── 📂 components   # Reusable UI components
│   │   │   ├── 📂 features # Feature-specific components
│   │   │   └── 📂 ui       # Generic, reusable UI components
│   │   ├── 📂 context      # Global state management (React context)
│   │   ├── 📂 lib          # Utility functions and helpers
│   │   └── 📂 types        # TypeScript types and interfaces
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md               # Project documentation
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── .prettierrc.json        # Prettier configuration
├── package-lock.json

```

---

## Issue & Project Workflow

We use **GitHub Projects** to manage tasks and issues. Follow these steps when working on issues:

#### 1. Find an Issue

- Go to the [GitHub Issues](https://github.com/ArduinoDayPH2025/arduino-ph-2025/issues) page.
- Assign issue to yourself.
- Move the issue to "In Progress" in the project board.

#### 2. Create a Branch

- Use the [branching convention](#branching--git-workflow).
- Start coding!

#### 3. Submit a Pull Request (PR)

- Reference the issue in the PR description (e.g., `Closes #123`).
- Move the issue to "Review" in the project board.

#### 4. Code Review & Merge

- Once approved, the PR gets merged into `develop`.
- The issue is moved to "Done."

---

## Branching & Git Workflow

### Branch Naming Convention

| Branch Type     | Naming Convention               | Example                 |
| --------------- | ------------------------------- | ----------------------- |
| **Main**        | `main`                          | `main`                  |
| **Development** | `dev`                           | `dev`                   |
| **Feature**     | `feature/ISSUE-ID-feature-name` | `feature/123-add-auth`  |
| **Bugfix**      | `bugfix/ISSUE-ID-issue-name`    | `bugfix/234-fix-footer` |
| **Hotfix**      | `hotfix/ISSUE-ID-critical-fix`  | `hotfix/345-fix-login`  |

#### 1. Switch to develop branch

```bash
git checkout dev
git pull origin dev
```

#### 2. Create a feature branch linked to an issue

```bash
git checkout -b feature/ISSUE-ID-feature-name
```

Example:

```bash
git checkout -b feature/123-add-login-auth
```

#### 3. Make your changes in the code

#### 4. Once you're done with your changes, commit

```bash
git add .
git commit -m "feat(auth): add login authentication (Closes #123)"
```

#### 5. Push to remote branch

```bash
git push origin feature/ISSUE-ID-feature-name
```

#### 6. Create a pull request (PR)

- Go to GitHub
- Open a new PR from feature/ISSUE-ID-feature-name → develop
- Use the [PR Template](<(#pull-request-description-format)>) below

---

## Commit Message Guidelines

### Commit Message Format

```
<type>(<scope>): <description>
```

### Allowed Commit Types

This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

| Type         | Description                                           |
| ------------ | ----------------------------------------------------- |
| **feat**     | A new feature                                         |
| **fix**      | A bug fix                                             |
| **docs**     | Documentation changes                                 |
| **style**    | Code style changes (formatting, etc.)                 |
| **refactor** | Code changes that neither fix a bug nor add a feature |
| **perf**     | Performance improvements                              |
| **test**     | Adding or modifying tests                             |
| **chore**    | Maintenance and other minor tasks                     |

#### Examples

```
git commit -m "feat(auth): add user authentication with JWT "
git commit -m "fix(navbar): resolve mobile responsiveness issue "
git commit -m "docs(readme): update contribution guide "
```

---

## 📋 Pull Request Guidelines

### PR Title Format:

```
<type>(<scope>): <short description>
```

Example

```
feat(auth): add user login functionality
fix(navbar): resolve mobile responsiveness issue
```

### PR Description Template

```
✨ What’s New?
- [x] Briefly explain what was added

📷 Screenshots of website (IMPORTANT)
_Add relevant screenshots/gifs_

🔗 Related Issues
Closes #ISSUE_NUMBER

✅ Checklist (from issue)
- [ ] Code follows project conventions
- [ ] Linted & formatted
- [ ] Tested locally
```
