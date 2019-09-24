'use strict';

const FACING_NORTH = 'NORTH';
const FACING_EAST = 'EAST';
const FACING_SOUTH = 'SOUTH';
const FACING_WEST = 'WEST';
const DIRECTION_RIGHT = 'RIGHT';
const DIRECTION_LEFT = 'LEFT';

class Robot {
    place(x, y, face) {
        this.positionX = x;
        this.positionY = y;
        this.face = face;
        this.isPlaced = true;
    }

    move() {
        if (!this.isPlaced) {
            return;
        }

        const moveValue = [FACING_NORTH, FACING_EAST].includes(this.face) ? 1 : -1;
        let newPositionX = this.positionX;
        let newPositionY = this.positionY;

        if ([FACING_NORTH, FACING_SOUTH].includes(this.face)) {
            newPositionY += moveValue;
        } else {
            newPositionX += moveValue;
        }

        this.positionY = (newPositionY <= 4 && newPositionY >= 0) ? newPositionY : this.positionY;
        this.positionX = (newPositionX <= 4 && newPositionX >= 0) ? newPositionX : this.positionX;
    }

    rotateRight() {
        this.rotate(DIRECTION_RIGHT);
    }

    rotateLeft() {
        this.rotate(DIRECTION_LEFT);
    }

    rotate(direction) {
        if (!this.isPlaced) {
            return;
        }

        let newFacing = this.face;

        switch (this.face) {
            case FACING_NORTH:
                newFacing = direction === DIRECTION_RIGHT ? FACING_EAST : FACING_WEST;
                break;
            case FACING_SOUTH:
                newFacing = direction === DIRECTION_LEFT ? FACING_EAST : FACING_WEST;
                break;
            case FACING_EAST:
                newFacing = direction === DIRECTION_RIGHT ? FACING_SOUTH : FACING_NORTH;
                break;
            case FACING_WEST:
                newFacing = direction === DIRECTION_LEFT ? FACING_SOUTH : FACING_NORTH;
                break;
        }

        this.face = newFacing;
    }

    getReport() {
        if (!this.isPlaced) {
            return '';
        }
        this.isPlaced = false;

        return `${this.positionX},${this.positionY},${this.face}`;
    }

    getPosition() {
        if (!this.isPlaced) {
            return '';
        }

        return {
            positionX: this.positionX,
            positionY: this.positionY,
            face: this.face
        };
    }
}

module.exports = Robot;
