'use strict';

// Global Dependencies
require('jquery');


// Angular
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';
import ngSanitize from 'angular-sanitize';
require('angular-jwt');


// Application
var app = angular.module('ss', [
    ngAnimate,
    ngCookies,
    ngResource,
    ngRoute,
    ngSanitize,
    'angular-jwt'
]);

// Load Application Components
require('./api')(app);
require('./components')(app);
require('./pages')(app);
require('./routing')(app);
require('./services')(app);
