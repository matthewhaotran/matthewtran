(function(){
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController)

    // HomeController.$inject = [''];

    function HomeController() {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();