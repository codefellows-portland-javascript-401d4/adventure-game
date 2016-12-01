import angular from 'angular';
import mainController from './main-controller';
import clearingController from './clearing-controller';
import streamController from './stream-controller';

const controllers = angular.module('controllers', []);

controllers.controller('mainController', mainController);
controllers.controller('clearingController', clearingController);
controllers.controller('streamController', streamController);

export default controllers.name;