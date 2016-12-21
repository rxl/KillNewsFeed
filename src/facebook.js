function blockFacebookFeed() {
    var feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]')
    feed.children().remove()
    $('.ticker_stream').remove()
    $('.ego_column').remove()
    $('#pagelet_games_rhc').remove()
    $('#pagelet_trending_tags_and_topics').remove()
    $('#pagelet_canvas_nav_content').remove()
}

if (location.host === "www.facebook.com") {
    window.setInterval(blockFacebookFeed, 100)
}