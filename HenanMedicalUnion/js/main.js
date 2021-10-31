$(function() {
    var $topLink = $('.top-link');
    var $topLinks = $('.top-links');
    var $itembg = $('.itembg');
    var bgleft = $itembg[0].offsetLeft,
        bgtop = $itembg[0].offsetTop;

    $topLink.mouseover(function() {
        $itembg.stop()
        $itembg.animate({
            left: this.offsetLeft,
            top: this.offsetTop
        }, 300)
    })
    $topLinks.mouseleave(function() {
            $itembg.animate({
                left: bgleft,
                top: bgtop
            }, 300)
        })
        // 顶部导航滑动件事
    function _scroll() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop < 10) {
            $('.position-fixed').css('opacity', 1);
        } else {
            $('.position-fixed').css({
                opacity: 0.6
            });
        }
    }
    $(window).on('scroll', function() {
        _scroll()
    });
})