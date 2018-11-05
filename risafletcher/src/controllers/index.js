import angular  from 'angular';
import food from './food';
import sharing from './sharing';

//controllers will go into this 'bucket'
const controllers = angular.module('controllers',[]);

controllers.controller('food', food);
controllers.controller('sharing', sharing);

export default controllers.name;
