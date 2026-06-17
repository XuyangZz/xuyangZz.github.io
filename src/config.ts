// Site-wide config. Imported by layouts and pages.
export const SITE = {
  title: "Xuyang's Notes",
  description:
    'Notes on AI, robotics, and the long road of learning in public. By Xuyang Zhou, M.Eng. student at UESTC.',
  author: 'Xuyang Zhou',
  url: 'https://xuyangZz.github.io',
  locale: 'en-US',
} as const;

export const NAV = [
  { href: '/', label: 'Posts' },
  { href: '/about', label: 'About' },
  { href: '/rss.xml', label: 'RSS' },
] as const;

export const SOCIAL = [
  { href: 'https://github.com/xuyangZz', label: 'GitHub' },
  {
    href: 'mailto:202521011742@std.uestc.edu.cn',
    label: 'Email',
  },
] as const;
