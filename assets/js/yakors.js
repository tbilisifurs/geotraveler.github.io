
$('a.features-item-text').on('click', function (event) {
    var $anchor = $(this)
    $('html, body')
        .stop()
        .animate(
            {
                scrollTop: $($anchor.attr('href')).offset().top,
            },
            {
                duration: 2000,
                specialEasing: {
                    width: 'linear',
                    height: 'easseInOutCubic' 
                },
            }
        )
        event.preventDefault()
})