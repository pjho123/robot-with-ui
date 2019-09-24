'use strict';

const assert = require('assert');
const RobotController = require('../../src/controller/robot-contoller');

describe('Robot command test', () => {
    it('should discard all commands in the sequence until a valid PLACE command has been executed.', () => {
        RobotController.runCommand('PLACE');
        RobotController.runCommand('PLACE 3,3');
        RobotController.runCommand('PLACE 2,NORTH');
        RobotController.runCommand('PLACE NORTH');
        RobotController.runCommand('MOVE');
        RobotController.runCommand('LEFT');
        RobotController.runCommand('MOVE');
        RobotController.runCommand('RIGHT');
        RobotController.runCommand('MOVE');
        const result = RobotController.runCommand('REPORT', false, true);

        assert.equal(result, '');
    });

    it('should allow all commands after valid PLACE command executed.', () => {
        RobotController.runCommand('PLACE 3,3,NORTH');
        RobotController.runCommand('MOVE');
        RobotController.runCommand('LEFT');
        RobotController.runCommand('MOVE');
        RobotController.runCommand('RIGHT');
        RobotController.runCommand('MOVE');
        const result = RobotController.runCommand('REPORT', false, true);

        assert.equal(result, '2,4,NORTH');
    });
});
