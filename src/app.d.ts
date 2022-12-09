// See https://kit.svelte.dev/docs/types#app
declare namespace App {
  interface Locals {
    userid: string;
    count: number;
  }

  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}

interface MenuItem {
  label: string;
  title?: string;
  handle?: (event?: Event) => void;
  dark?: boolean;
}

interface NavLink extends MenuItem {
  href: string;
  links?: NavLink[];
}

declare module '*?webp' {
  const value: any;
  export = value;
}

declare module '*&webp' {
  const value: any;
  export = value;
}

declare module '*?avif' {
  const value: any;
  export = value;
}

declare module '*&avif' {
  const value: any;
  export = value;
}

declare module '*.gif' {
  const value: any;
  export = value;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}

declare module '*.jpeg' {
  const value: any;
  export = value;
}

declare module '*.png' {
  const value: any;
  export = value;
}
declare module '*.webp' {
  const value: any;
  export = value;
}

declare module '*.avif' {
  const value: any;
  export = value;
}

/*
interface WebPage {
  itemtype?: string = 'WebPage';
  path: string;
  canonical: string;
}

interface Infographic {
  text: string;
  icon: any;
  max?: number;
  count?: number;
  node?: HTMLElement;
}
*/
