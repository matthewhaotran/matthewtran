(function(){
    'use strict';

    angular
        .module('app.about')
        .controller('AboutController', AboutController)

    // AboutController.$inject = [''];

    function AboutController() {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();