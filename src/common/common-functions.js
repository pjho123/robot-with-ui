'use strict';

const CommonFunctions = {
    waitForTime: (sec) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, sec * 1000)
        })
    }
};

module.exports = CommonFunctions;
