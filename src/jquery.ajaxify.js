;(function ($, window, document, undefined) {

    var name = 'ajaxify',
        defaults = {

            // {String} jQuery Object for the main content
            content: 'main',
            // {Bool} Activate animation on page change
            animation: false,

            // {Function} Callback before page change
            beforeLoad: function() {},
            // {Function} Callback after page change
            afterLoad: function() {},

        };

    /**
     * Ajaxify Constructor
     * @param {Object} parent
     * @param {Object} options
     */
    function Ajaxify(parent, options) {

        // Cache this
        var self = this;

        // Extend options
        this.options = $.extend({}, defaults, options);

        // Callbacks before plugin init
        this.options.beforeInit.call(this);

        // Initialize
        this.init();

        // Callback after plugin init
        this.options.afterInit.call(this);

        /**
         * API
         * Returning slider methods
         */
        return {

            /**
             * Get current slide number
             * @return {Int}
             */
            current: function() {
                return -(self.currentSlide) + 1;
            },
        };

    };

    Ajaxify.prototype.init = function() {

        console.log('test');

    };

    $.fn[name] = function(options) {

        new Ajaxify($(this), options)

    };

})(jQuery, window, document);