(function($){
    var searchService = {
        el: {
            win: $(window),
            spinner: $('.spinner-container'),
            introText: $('.js-intro-text'),
            navbarToggle: $('.navbar-toggle')
        },
        init: function() {
            this.bind();
        },
        bind: function() {
            this.el.win.on('load', this.handle.windowLoaded.bind(this));
            this.el.navbarToggle.on('click', this.handle.navbarToggle);
            console.log(this.el.navbarToggle);
        },
        handle: {
            windowLoaded: function() {
                this.el.spinner.remove();
                this.el.introText.addClass('scaleIn');
            },
            navbarToggle: function() {
                var $this = $(this);
                console.log(this);
                $this.toggleClass('collapsed');
                $($this.data().target).toggleClass('collapse in');
            }
        }
    };
    searchService.init();
})(jQuery);