# MONSTER MANSION
## a Javascript fueled adventure game - lab for Code Fellows 401.

### Collaborators
  - Gloria Anholt
  - Tim Combs
  - Steven Jackson


### Project Functionality
  - This is a Code Fellows Project to create an adventure game that uses Angular.
  - Players start in the foyer of a magic mansion full of monsters.
  - Game ends when the character's hit points reach zero.

### Game Play
  - A map graphic with 4 doors is the playing field.
  - Clicking on a door moves character to next room.
    - If room has not been visited before a random room is instantiated.
    - New rooms may be populated by a monster and/or items
    - Going back into a room DOES NOT repopulate the room.
  - Clicking on the monster causes damage to the character.
  - Clicking on an item puts it into the character's inventory.
  - Once item is in inventory, clicking on an it uses the item.
    - If item is a basic item then character hp either increased or decreased AND item removed from inventory.
    - If item is a weapon:
      - a) monster present and weapon matches monster weakness then monster dies AND item removed from inventory.
      - b) monster present and weapon DOES NOT match monster weakness then character hp decreased.
      - c) monser not present nothing happens.

### Technologies used
  - For app
    - Javascript
    - Angular

  - For development
    - Chai
    - Mocha
    - Karma
    - Webpack
    - Eslint

  - Make sure to run npm install from the directory root to install dependencies
  - Please refer to the package.json for more info


### Directions to run locally
  - Download the files
  - Set up project
    - Open a terminal window, `npm start`
    - Then open a browser window and navigate to the address localhost:8080

  - Please refer to the package.json for info about scripts


### Testing
  - Set Up
    - To run the test suite at cli at root of the project directory type:
      ```
      $ npm test
      ```
    - this will first run eslint - for more info look at .eslintrc
    - then karma uses mocha to run Angular unit tests


### Code Shape
  - The code has been vetted using eslint & Travis-CI

### Collborations/Questions/issues
  - Not currently looking for collaborators at this time
  - Always looking for suggestions
  - Any questions and concerns can be handled by opening an issue on the codebase

### License
  - Licensed under the Creative Commons Non Commercial license - see LICENSE.md for more info
