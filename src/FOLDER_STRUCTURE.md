# Project Structure

```
src/
├── assets/              # Static files (images, icons, etc.)
├── components/
│   ├── layout/          # Layout components (Navigation, Footer)
│   ├── common/          # Reusable components (PhoneMockup)
│   └── ui/              # Shadcn/ui components
├── pages/               # Page components (HomePage, AboutPage, etc.)
├── hooks/               # Custom React hooks
├── utils/               # Utility functions and helpers
├── constants/           # App constants and data
├── types/               # TypeScript types and interfaces
├── styles/              # Global CSS
├── vite-env.d.ts        # TypeScript declarations for Vite
├── main.tsx             # App entry point
├── App.tsx              # Root component
└── index.css            # Global styles
```

## Folder Descriptions

### `/components/layout`
Contains layout components that structure the page:
- `Navigation.tsx` - Top navigation bar
- `Footer.tsx` - Footer section

### `/components/common`
Reusable components used across multiple pages:
- `PhoneMockup.tsx` - Phone device mockup display

### `/components/ui`
UI components from Shadcn (accordion, button, dialog, etc.)

### `/pages`
Page components for different routes:
- `HomePage.tsx`
- `AboutPage.tsx`
- `FeaturesPage.tsx`
- `DownloadPage.tsx`
- `PartnershipPage.tsx`
- `ContactPage.tsx`

### `/hooks`
Custom React hooks for reusable logic

### `/utils`
Utility functions and helpers

### `/constants`
Application constants and static data

### `/types`
TypeScript type definitions and interfaces

### `/assets`
Static assets (images, icons, etc.)

## Import Paths

Use absolute imports with `@/` alias for cleaner imports:

```typescript
// ✅ Good
import { PhoneMockup } from '@/components/common';
import { Navigation } from '@/components/layout';

// ❌ Avoid
import { PhoneMockup } from '../../../components/common/PhoneMockup';
```
