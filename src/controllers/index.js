import angular from 'angular';
import character from 'character';
import game from 'game';
import items from 'items';
import monsters from 'monsters';
import rooms from 'rooms';

// create the module for controllers
const controllers = angular.module('controllers', []);

controllers.controller('character', character);
controllers.controller('game', game);
controllers.controller('items', items);
controllers.controller('monsters', monsters);
controllers.controller('rooms', rooms);

export default controllers.name;