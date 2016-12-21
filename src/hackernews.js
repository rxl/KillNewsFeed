function blockHackerNewsFeed() {
    var rows = $('#hnmain tr')
    if (rows.length > 4) {
        var stories = $('#hnmain tr')[3]
        var footer = $('#hnmain tr')[4]
        stories.remove()
        footer.remove()
    }
}

if (location.host === "news.ycombinator.com") {
    if (location.pathname === '/' || location.pathname === '/news') {
        window.setInterval(blockHackerNewsFeed, 100)
    }
}