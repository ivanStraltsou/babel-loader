import MainController from './controllers/MainController'
import MainService from './services/MainService'
import mainDirective from './directives/mainDirective'
import rowDirective from './directives/rowDirective'

angular.module('app', [])
    .controller('MainController', MainController)
    .service('MainService', MainService)
    .directive('mainDirective', mainDirective.directiveFactory)
    .directive('rowDirective', rowDirective.directiveFactory)