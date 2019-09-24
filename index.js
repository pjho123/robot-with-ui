'use strict';

const RobotController = require('./src/controller/robot-contoller');
const CommonFunctions = require('./src/common/common-functions');
const TestDataInput = require('./data/test-data');
const process = require('process');
const Websocket = require('./server/websocket');
const standardInput = process.stdin;
const open = require('open');

const wss = Websocket.runServer();
const instruction = `Robot commands:
    PLACE {X},{Y},{F} 
    MOVE  = move forward
    LEFT  = rotate to left
    RIGHT = rotate to right

X and Y are position and values can be 0 to 4
F is facing and values can be NORTH, EAST, SOUTH, WEST

The (0,0) position is the SOUTH, WEST corner

Start with PLACE {X},{Y},{F} command to put the robot on the table
`;

if (typeof process.env['npm_config_show_movement'] !== 'undefined') {
    (async () => {
        await open('./index.html');
    })();
} else {
    console.log(`Open this path on the web browser to continue...`);
    console.log(`${process.cwd()}/index.html \n`);
}


if (typeof process.env['npm_config_from_file'] !== 'undefined') {
    (async () => {
        await wss;
        console.log('Connected to client! \n');

        for (const commandList of TestDataInput) {
            await CommonFunctions.waitForTime(1);

            for (const command of commandList) {
                console.log(command);
                const result = RobotController.runCommand(command);

                Websocket.sendEvent(result);
                await CommonFunctions.waitForTime(1);
            }
        }
        process.exit();
    })();

    return;
}

wss.then(() => {
    console.log('Connected to client! \n');
    console.log(instruction);

    standardInput.setEncoding('utf-8');
    standardInput.on('data', (data) => {
        const result = RobotController.runCommand(data.trim());

        Websocket.sendEvent(result);
    });

});
