import angular from 'angular';
import mainController from './main-controller';
import clearingController from './clearing-controller';

const controllers = angular.module('controllers', []);

controllers.controller('mainController', mainController);
controllers.controller('clearingController', clearingController);

export default controllers.name;