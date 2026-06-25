/**
 * Legacy Header.tsx — re-exports the canonical layout header.
 *
 * Issue #740: components/Header.tsx and components/layout/header.tsx
 * diverged. The canonical implementation lives in layout/header.tsx.
 * This file is kept as a thin re-export so any existing imports continue
 * to resolve without needing a broad refactor, while ensuring a single
 * source of truth for the header markup and behaviour.
 *
 * @deprecated Import from '@/components/layout/header' directly.
 */
export { Header } from '@/components/layout/header';
