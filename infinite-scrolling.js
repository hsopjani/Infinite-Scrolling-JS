$.fn.setInfiniteScroll = function (o = null) {
    let i = this, r = $(this);
    let offset = o.offset || 0;

    let shouldScroll = o.shouldHandle;
    let callback = o.handler;

    $(document).on('scroll', function () {
        onScroll(elementPosition(i));
    });

    r.data('scroll-status', false);

    function elementPosition(el) {

        let w = $(window), e = $(el);

        let x = e.offset().left,
            y = e.offset().top - w.scrollTop();

        return { top: y, left: x}
    }
    function onScroll(position) {
        let s = r.data('scroll-status');

        if (s) return;

        let h = r.height(), dis = h + position.top - $(window).height(), a = dis - offset;

        if (a > 0) return;

        if(typeof shouldScroll === "function") {
            if (!shouldScroll()) return;
        }

        r.data('scroll-status', true);

        if (callback) {
            callback(i);
        }
    }
};

$.fn.finishScroll = function () {
    $(this).data('scroll-status', false);
}