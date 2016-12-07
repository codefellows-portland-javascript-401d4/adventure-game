import angular from 'angular';
import game from './game';

const controllers = angular.module('controllers', []);

controllers.controller('game', game);

export default controllers.name;
