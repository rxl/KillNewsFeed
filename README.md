# Feedblocker

A Chrome extension that completely eliminates feeds on various social sites.

### Sites Supported

- Facebook
- Twitter
- Hacker News
- Medium

### How to Add a Site

1) Create a script file in the "src" folder and name it according to the name of the site (e.g. "medium.js").

2) Add the following code to the file:

```
if (location.host === "DOMAIN_NAME") {
    window.setInterval(function() {
        $('HTML_SELECTOR').remove()
    }, 100)
}
```

3) Fill in the DOMAIN_NAME of the site (e.g. "medium.com").

4) Fill in the HTML_SELECTOR that corresponds to the DOM element that encapsulates the feed. You can use the chrome HTML inspector to determine this (e.g. ".js-homeStream").

5) Add the domain name to the "matches" list in the "manifest.json" file (e.g. "*://medium.com/*").

6) Add the name of the script file to the "js" list in the "manifest.json" file (e.g. "src/medium.js").

### About

This project is fork of KillNewsFeed (http://killnewsfeed.com).
