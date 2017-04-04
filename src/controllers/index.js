import angular from 'angular';
import character from './characterController';
import game from './gameController';

// create the module for controllers
const controllers = angular.module('controllers', []);

controllers.controller('gameController', game);
controllers.controller('characterController', character);

export default controllers.name;