import angular from 'angular';
import mainController from './main-controller';
import locationController from './location-controller';

// import clearingController from './clearing-controller';
// import streamController from './stream-controller';
// import caveController from './cave-controller';


const controllers = angular.module('controllers', []);

controllers.controller('mainController', mainController);
controllers.controller('locationController', locationController);

// controllers.controller('clearingController', clearingController);
// controllers.controller('streamController', streamController);
// controllers.controller('caveController', caveController);

export default controllers.name;