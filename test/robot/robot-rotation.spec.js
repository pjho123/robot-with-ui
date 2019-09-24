'use strict';

const assert = require('assert');
const RobotController = require('../../src/controller/robot-contoller');

describe('Robot rotation test', () => {
    describe('NORTH facing', () => {
        it('should rotate to EAST in RIGHT command', () => {
            RobotController.runCommand('PLACE 0,0,NORTH');
            RobotController.runCommand('RIGHT');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '0,0,EAST');
        });

        it('should rotate to WEST in LEFT command', () => {
            RobotController.runCommand('PLACE 0,0,NORTH');
            RobotController.runCommand('LEFT');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '0,0,WEST');
        });
    });

    describe('EAST facing', () => {
        it('should rotate to SOUTH in RIGHT command', () => {
            RobotController.runCommand('PLACE 0,0,EAST');
            RobotController.runCommand('RIGHT');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '0,0,SOUTH');
        });

        it('should rotate to NORTH in LEFT command', () => {
            RobotController.runCommand('PLACE 0,0,EAST');
            RobotController.runCommand('LEFT');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '0,0,NORTH');
        });
    });

    describe('SOUTH facing', () => {
        it('should rotate to WEST in RIGHT command', () => {
            RobotController.runCommand('PLACE 0,0,SOUTH');
            RobotController.runCommand('RIGHT');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '0,0,WEST');
        });

        it('should rotate to EAST in LEFT command', () => {
            RobotController.runCommand('PLACE 0,0,SOUTH');
            RobotController.runCommand('LEFT');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '0,0,EAST');
        });
    });

    describe('WEST facing', () => {
        it('should rotate to NORTH in RIGHT command', () => {
            RobotController.runCommand('PLACE 0,0,WEST');
            RobotController.runCommand('RIGHT');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '0,0,NORTH');
        });

        it('should rotate to SOUTH in LEFT command', () => {
            RobotController.runCommand('PLACE 0,0,WEST');
            RobotController.runCommand('LEFT');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '0,0,SOUTH');
        });
    });
});
