# Personal Portfolio

A modern, interactive personal portfolio website showcasing my work as a Fullstack & GenAI Developer. Built with Next.js, featuring smooth animations, a Star Wars-inspired background, and a fully responsive design.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, and TypeScript
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Star Wars Theme**: Unique animated starfield background
- **Responsive Design**: Fully responsive across all devices
- **Component-Based Architecture**: Organized feature-based structure
- **UI Components**: Built with shadcn/ui and Radix UI primitives
- **Performance Optimized**: Leveraging Next.js App Router for optimal performance

## 📋 Sections

- **Navigation**: Smooth scrolling navigation with active section highlighting
- **Hero**: Animated introduction with typing effects and particle animations
- **About**: Personal introduction and background
- **Skills**: Categorized skills showcase (Frontend, Backend, GenAI, Mobile, Cloud)
- **Experience**: Professional experience timeline
- **Projects**: Featured projects with technology stack and links
- **Contact**: Contact form and social links
- **Footer**: Additional information and links

## 🛠️ Tech Stack

### Core
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework

### Libraries & Tools
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Re-usable component library
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional class utilities

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
personal-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── features/              # Feature-based modules
│   └── portfolio/         # Portfolio-specific features
│       └── components/    # Portfolio components
│           ├── About.tsx
│           ├── Contact.tsx
│           ├── Experience.tsx
│           ├── Footer.tsx
│           ├── Hero.tsx
│           ├── Navigation.tsx
│           ├── Projects.tsx
│           ├── Skills.tsx
│           └── StarWarsBackground.tsx
├── components/            # Shared UI components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🎨 Customization

### Updating Personal Information

1. **Metadata**: Edit `app/layout.tsx` to update site metadata
2. **Hero Section**: Modify `features/portfolio/components/Hero.tsx`
3. **About Section**: Update `features/portfolio/components/About.tsx`
4. **Skills**: Edit the `skillCategories` array in `features/portfolio/components/Skills.tsx`
5. **Experience**: Update the `experiences` array in `features/portfolio/components/Experience.tsx`
6. **Projects**: Modify the `projects` array in `features/portfolio/components/Projects.tsx`
7. **Contact**: Update `features/portfolio/components/Contact.tsx`

### Styling

The project uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens in `app/globals.css` or by modifying Tailwind configuration.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚢 Deployment

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

For other deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📝 License

This project is private and personal.

## 👨‍💻 Author

**Sabbir Alam**
- Fullstack & GenAI Developer
- 2+ years of experience
- Specialized in Next.js, React, Node.js, Spring, FastAPI, Flutter, AWS, and GenAI development

---

Built with ❤️ using Next.js and React
