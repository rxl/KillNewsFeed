function blockTwitterFeed() {
    var feed = $('.content-main .stream-container.conversations-enabled')
    feed.children().remove()
    $('.Trends').remove()
    $('.Footer').remove()
    $('.roaming-module').remove()
    $('.MomentsGuidePage-content').remove()
}

if (location.host === "twitter.com") {
    if (location.pathname === '/') {
        window.setInterval(blockTwitterFeed, 100)
    }
}