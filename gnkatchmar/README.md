![cf](http://i.imgur.com/7v5ASc8.png) Angular Adventure Game
====

Create a "text" based adventure game! For this assignment you'll be creating a
text based adventure game ala Zork or choose your own adventure.

**Work in teams of 2-3 for this project**

* This game should have at least three rooms or scenes that the player can move between.

* Have at least one item that the player can interact and at least one monster or character
the player defeats or interacts with.

* You need to provide ways for user to specify what they want to do (button, input, etc)

* No need to try and persist the data (though you can put on localStorage if you want)

* Test your controllers. Remember test the code you wrote, not Angular!

* For a choose your own adventure style game, you will need to use `ng-if`, `ng-show`, to change scenes, etc.

* A text adventure will likely retain state.

* The goal is to jump into Angular and try and build something more complex than first assignment.

* To share state ($scope data) across controllers, you need to introduce the data in a parent that encompases those
child controllers. (Yes, controllers in angular can be nested. Child $scope prototypically inherits the $scope of the parent)

## Rubric
* Templating directives, design, features: 10pts
* Controllers: 5pts
* Project Org: 5pts
* Testing: 10pts
