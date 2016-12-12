import angular from 'angular';
import firstRoom from './firstRoom';
import secondRoom from './secondRoom';
import lastRoom from './lastRoom';
import main from './main';

const module = angular.module('controllers', []);

module.controller('firstRoom', firstRoom);
module.controller('secondRoom', secondRoom);
module.controller('lastRoom', lastRoom);
module.controller('main', main);

export default module.name;