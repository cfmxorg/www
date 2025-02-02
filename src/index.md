---
layout: default.html
title: 
---

This is a static site hosted on [GitHub Page](https://pages.github.com/) and built with [Eleventy](https://www.11ty.dev) and [Simple CSS](https://simplecss.org) which gets it's dynamic content, using htmx, from [{{ site.domain }}](https://{{ site.domain }}) powered by Lucee.

<button hx-get="https://{{ site.domain }}/healthcheck/" hx-target="#healthcheck">
	Click this button to see the contents below change
</button>

<div id="healthcheck">
	<p>I will be replaced with content from the Lucee server when the button above is clicked.</p>
</div>

### HTML

The following is the html and htmx used to render the button and the initial text.

```
<button hx-get="https://{{ site.domain }}/healthcheck/" hx-target="#healthcheck">
  Click this button to see the contents below change
</button>

<div id="healthcheck">
  <p>I will be replaced with content from the Lucee
  server when the button above is clicked.</p>
</div>
```

### CFML

The following is the cfml that renders the current date and time in ISO8601 format.

```
<cfoutput>
  <p>The current time on the server is #now().dateTimeFormat( 'iso8601' )#</p>
</cfoutput>
```

#### Notes:

By default htmx doesn't allow requests to be made to domains other than the current host. This is considered a CORS ([Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)) vulnerability. To counter this, the following meta tag should be added to the html `<head>...</head>` of the page.

```
<meta name="htmx-config" content='{"selfRequestsOnly": false}'>
```

On the server side, CORS will also need to be supported to allow requests from other domains to be allowed.
