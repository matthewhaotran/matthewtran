(function () {
    'use strict';

    angular.module('app', [
        // Angular modules
        

        // Custom modules
        'app.home',
        'app.about',

        // 3rd Party Modules
        'ui.router'

    ]).config(appConfig);

    appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

    function appConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            controller: 'HomeController as homeCtrl',
            templateUrl: 'app/home/home.template.html'
        });

        $stateProvider.state('about', {
            url: '/about',
            controller: 'AboutController as aboutCtrl',
            templateUrl: 'app/about/about.template.html'
        });

        $stateProvider.state('projects', {
            url: '/projects',
            controller: 'ProjectsController as projectsCtrl',
            templateUrl: 'app/projects/projects.template.html'
        });

        $stateProvider.state('contact', {
            url: '/contact',
            controller: 'ContactController as contactCtrl',
            templateUrl: 'app/contact/contact.template.html'
        });

    };
})();
