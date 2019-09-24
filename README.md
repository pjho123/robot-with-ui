# Robot with ui

Using websocket to communicate node server and client side.

> Frontend url: {currentDirectory}/index.html

> Websocket host: http://localhost:3000

## Setup

* Install dependencies using `npm install` command

## Available scripts

* Run the robot script using standard input form
> `npm start`

* Run the robot script with ui
> `npm start --show-movement`

It will open a new tab on the browser and show the realtime movement of the robot for every valid commands. 

Note: Once the page is already opened, you can now use the command `npm start` or `npm start --from-file` to avoid opening new tab.
 
* Run the robot script using test data from `./data/test-data.js`
> `npm start --from-file`

Note: There will be a 1 sec delay for every commands, just to see the movement of the robot when the browser tab is opened.

* Run the unit tests via mocha and will execute all `*.spec.js` files in `./test` directory
> `npm test`

## Allowed commands to move the robot

* PLACE X,Y,F
* MOVE
* LEFT
* RIGHT
* REPORT

The X and Y should be replace with the numbers from 0 to 4, these will be the initial position of the robot in the table.
 
And F should be replace with either NORTH, EAST, SOUTH or WEST and this will be the facing direction of the robot.

# Example command:

```
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT

Output:
3,3,NORTH

-----------------

```
