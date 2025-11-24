---
title: 'How to Integrate Google Tag Manager in Astro'
description: 'A step-by-step guide on how we integrated GTM and GA4 into this Astro project using a reusable BaseLayout.'
pubDate: 'Nov 24 2025'
heroImage: '../../assets/blog-placeholder-about.jpg'
---

Integrating **Google Tag Manager (GTM)** into an Astro project is a straightforward process, but doing it correctly ensures that your tracking is robust and doesn't clutter your codebase. In this project, we took a component-based approach.

## The Strategy

Instead of pasting the GTM snippets directly into every page, we created reusable components. This allows us to manage the GTM ID in one place and ensures consistency.

### 1. The Components

We created two components:

*   **`GTMHead.astro`**: This component contains the script that needs to go as high as possible in the `<head>`. It accepts an `id` prop, making it flexible.
*   **`GTMBody.astro`**: This component contains the `<noscript>` iframe that should be placed immediately after the opening `<body>` tag.

### 2. The Base Layout

To avoid repeating code, we created a `BaseLayout.astro`. This layout serves as the shell for every page on the site.

```astro
---
import GTMHead from '../components/GTMHead.astro';
import GTMBody from '../components/GTMBody.astro';
// ... other imports
---

<!doctype html>
<html lang="en">
	<head>
		<GTMHead />
		<!-- ... other head elements -->
	</head>
	<body>
		<GTMBody />
		<!-- ... content -->
	</body>
</html>
```

### 3. Usage

Now, every page (like `index.astro`, `about.astro`, and blog posts) simply uses `<BaseLayout>`:

```astro
<BaseLayout title="My Page">
  <p>Content goes here...</p>
</BaseLayout>
```

## Why this matters

By centralizing the GTM logic:

1.  **Maintainability:** If we need to change the GTM ID or update the snippet, we do it in one place.
2.  **Performance:** Astro handles the HTML generation efficiently.
3.  **Clean Code:** Our pages focus on content, not infrastructure.

This project serves as a live demo of this architecture. Feel free to explore the source code!
