# Feedblocker

A Chrome extension that completely eliminates feeds on various social sites.

### Sites Supported

- Facebook
- Twitter
- Hacker News
- Medium

### How to Add a Site

1) Create a file in the "src" folder with the following code:

```
function blockSite() {
    var feed = $('.CLASS_NAME')
    feed.remove()
}

if (location.host === "DOMAIN_NAME") {
    window.setInterval(blockSite, 100)
}
```

2) Fill in the DOMAIN_NAME of the site.

3) Fill in the CLASS_NAME that corresponds to the DOM element that encapsulates the feed. You can use the chrome HTML inspector to determine this.

4) Update the "manifest.json" file by (a) including the domain name pattern in the "matches" list (b) including the name of the file in the "js" list.

### About

This project is fork of KillNewsFeed (http://killnewsfeed.com).
