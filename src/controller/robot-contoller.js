'use strict';

const Robot = require('./../class/robot');

const COMMAND_PLACE = 'PLACE';
const COMMAND_MOVE = 'MOVE';
const COMMAND_LEFT = 'LEFT';
const COMMAND_RIGHT = 'RIGHT';
const COMMAND_REPORT = 'REPORT';
const VALIDATION_PATTERN_PLACE = /^PLACE [0-5],[0-5],(NORTH|SOUTH|EAST|WEST)$/;

const newRobot = new Robot();

const RobotController = {
    runCommand: (command, consoleEnabled = true, returnReport = false) => {
        if (VALIDATION_PATTERN_PLACE.test(command)) {
            const parameters = command.replace(`${COMMAND_PLACE} `, '').split(',');
            const xPosition = Number(parameters[0]);
            const yPosition = Number(parameters[1]);
            const face = parameters[2];

            newRobot.place(xPosition, yPosition, face);
        }

        switch (command) {
            case COMMAND_MOVE:
                newRobot.move();
                break;
            case COMMAND_RIGHT:
                newRobot.rotateRight();
                break;
            case COMMAND_LEFT:
                newRobot.rotateLeft();
                break;
            case COMMAND_REPORT:
                const report = newRobot.getReport();

                if (report && consoleEnabled) {
                    console.log('\nOutput:');
                    console.log(report);
                    console.log('\n-----------------');
                }

                if (returnReport) {
                    return report;
                }
        }

        return newRobot.getPosition();
    }
};

module.exports = RobotController;
