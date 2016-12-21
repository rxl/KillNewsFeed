function blockMediumFeed() {
    var feed = $('.js-homeStream')
    var sidebar = $('.js-sidebarContent')
    feed.remove()
    sidebar.remove()
}

if (location.host === "medium.com") {
    window.setInterval(blockMediumFeed, 100)
}