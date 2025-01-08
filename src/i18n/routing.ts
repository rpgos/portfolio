import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
 
const locales = ['en', 'pt']

export const routing = defineRouting({
  locales,
  defaultLocale: 'en'
});
 

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
