'use strict';

const assert = require('assert');
const RobotController = require('../../src/controller/robot-contoller');

describe('Robot moving test', () => {
    describe('NORTH facing', () => {
        it('should move 1 forward to NORTH in 1 MOVE command', () => {
            RobotController.runCommand('PLACE 0,0,NORTH');
            RobotController.runCommand('MOVE');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '0,1,NORTH');
        });

        it('should avoid falling off the table in 4 MOVE command', () => {
            RobotController.runCommand('PLACE 0,0,NORTH');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '0,4,NORTH');
        });
    });

    describe('EAST facing', () => {
        it('should move 1 forward to EAST in 1 MOVE command', () => {
            RobotController.runCommand('PLACE 0,0,EAST');
            RobotController.runCommand('MOVE');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '1,0,EAST');
        });

        it('should avoid falling off the table in 5 MOVE command', () => {
            RobotController.runCommand('PLACE 0,0,EAST');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '4,0,EAST');
        });
    });

    describe('SOUTH facing', () => {
        it('should move 1 forward to SOUTH in 1 MOVE command', () => {
            RobotController.runCommand('PLACE 4,4,SOUTH');
            RobotController.runCommand('MOVE');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '4,3,SOUTH');
        });

        it('should avoid falling off the table in 5 MOVE command', () => {
            RobotController.runCommand('PLACE 4,4,SOUTH');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '4,0,SOUTH');
        });
    });

    describe('WEST facing', () => {
        it('should move 1 forward to WEST in 1 MOVE command', () => {
            RobotController.runCommand('PLACE 4,4,WEST');
            RobotController.runCommand('MOVE');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '3,4,WEST');
        });

        it('should avoid falling off the table in 5 MOVE command', () => {
            RobotController.runCommand('PLACE 4,4,WEST');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            RobotController.runCommand('MOVE');
            const result = RobotController.runCommand('REPORT', false, true);

            assert.equal(result, '0,4,WEST');
        });
    });
});
