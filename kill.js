function blockFacebookFeed() {
    var feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]')
    feed.children().remove()
    $('.ticker_stream').remove()
    $('.ego_column').remove()
    $('#pagelet_games_rhc').remove()
    $('#pagelet_trending_tags_and_topics').remove()
    $('#pagelet_canvas_nav_content').remove()
}

function blockTwitterFeed() {
    var feed = $('.content-main .stream-container.conversations-enabled')
    feed.children().remove()
    $('.Trends').remove()
    $('.Footer').remove()
    $('.roaming-module').remove()
    $('.MomentsGuidePage-content').remove()
}

function blockHackerNewsFeed() {
    var rows = $('#hnmain tr')
    if (rows.length > 4) {
        var stories = $('#hnmain tr')[3]
        var footer = $('#hnmain tr')[4]
        stories.remove()
        footer.remove()
    }
}

function blockMediumFeed() {
    var feed = $('.js-homeStream')
    var sidebar = $('.js-sidebarContent')
    feed.remove()
    sidebar.remove()
}

if (location.host === "www.facebook.com") {
    window.setInterval(blockFacebookFeed, 100)
}

if (location.host === "twitter.com") {
    if (location.pathname === '/' || location.pathname === '/news') {
        window.setInterval(blockTwitterFeed, 100)
    }
}

if (location.host === "news.ycombinator.com") {
    if (location.pathname === '/') {
        window.setInterval(blockHackerNewsFeed, 100)
    }
}

if (location.host === "medium.com") {
    window.setInterval(blockMediumFeed, 100)
}