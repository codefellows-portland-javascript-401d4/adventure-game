import angular from 'angular';
import mainController from './main-controller';

const controllers = angular.module('controllers', []);

controllers.controller('mainController', mainController);

export default controllers.name;