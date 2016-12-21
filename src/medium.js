if (location.host === "medium.com") {
  window.setInterval(function() {
      $('.js-homeStream').remove() // feed
      $('.js-sidebarContent').remove() // sidebar
  }, 100)
}