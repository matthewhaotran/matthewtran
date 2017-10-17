(function(){
    'use strict';

    angular
        .module('app.projects')
        .controller('ProjectsController', ProjectsController)

    // ProjectsController.$inject = [''];

    function ProjectsController() {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();