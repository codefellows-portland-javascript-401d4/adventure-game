import angular from 'angular';
import firstRoom from './firstRoom';
import secondRoom from './secondRoom';
import thirdRoom from './thirdRoom';

const module = angular.module('controllers', []);

module.controller('firstRoom', firstRoom);
module.controller('secondRoom', secondRoom);
module.controller('thirdRoom', thirdRoom);

export default module.name;