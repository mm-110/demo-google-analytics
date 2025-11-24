---
title: 'Understanding GA4 Events'
description: 'A deep dive into how Google Analytics 4 handles events and how to structure them.'
pubDate: 'Nov 25 2025'
heroImage: '/blog-placeholder-2.jpg'
---

Google Analytics 4 (GA4) is entirely event-based. Unlike Universal Analytics, which had different hit types (pageview, event, social, etc.), everything in GA4 is an event.

## The Event Structure

A GA4 event consists of:

1.  **Event Name:** What happened (e.g., `page_view`, `click`, `form_submit`).
2.  **Event Parameters:** Additional details about the event (e.g., `page_location`, `link_url`, `form_id`).

### Automatically Collected Events

GA4 automatically collects certain events if you have the Enhanced Measurement feature enabled. These include:

*   `page_view`
*   `scroll`
*   `outbound_click`
*   `site_search`
*   `video_engagement`
*   `file_download`

### Recommended Events

Google provides a list of recommended events for different business verticals (Retail, Jobs, Travel, Games, etc.). Using these ensures that you can take advantage of built-in reports.

Examples:
*   `login`
*   `purchase`
*   `sign_up`
*   `share`

### Custom Events

If the automatic or recommended events don't fit your needs, you can create custom events. However, be careful with the naming conventions and try to stick to the recommended ones whenever possible to ensure future compatibility.

## Testing Events

You can test your events using:

1.  **GTM Preview Mode:** See the tags firing before they go live.
2.  **GA4 DebugView:** A real-time view in the GA4 interface that shows events coming in from your debug device.

This demo site is configured to let you test these exact scenarios!
