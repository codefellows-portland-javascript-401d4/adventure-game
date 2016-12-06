import angular from 'angular';
//TODO: make a css file and require it in
import controllers from './controllers';
import 'normalize.css';
import './style.css';

angular.module('myApp', [
  controllers
]); 

