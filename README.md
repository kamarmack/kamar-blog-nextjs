# mackbook-io-nextjs

![mackbook.io homepage](https://github.com/kamarmack/markdown-imgs/blob/master/images/mackbook-io-homepage.jpg?raw=true)

## Demo

View the site live at [https://mackbook.io](https://mackbook.io)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Description](#description)
- [Running the Site Locally](#running-the-site-locally)
- [Customizing Styles](#customizing-styles)
- [Author](#author)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

This repo contains my lean and clean portfolio and blog site.

Stack:

- **Framework**: [Next.js](https://nextjs.org/)
- **Theme**: [nextjs-mdx-blog-theme](https://github.com/alexcarpenter/nextjs-mdx-blog-theme)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Hosting**: [Firebase](https://firebase.google.com)

## Running the Site Locally

```bash
$ git clone https://github.com/kamarmack/mackbook-io-nextjs
$ cd mackbook-io-nextjs
$ npm i
$ npm run dev:watch
```

## Customizing Styles

Use the `cx` utility to organize Tailwind CSS light and dark styles on elements.

```jsx
import { cx } from '@/lib/utils'

<div
  className={cx(
    'p-4', // base styles
    'text-gray-900', // light mode styles
    'dark:text-gray-50'. // dark mode styles
  )}
/>
```

- The first string contains the base styles,
- The second string contains light mode styles, and
- The third string is for dark mode styling.

## Author

- [Kamar Mack](https://github.com/kamarmack)

## License

MIT
