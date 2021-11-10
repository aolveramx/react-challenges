'use strict';
const _ = require('lodash');
const db = require('./db.js');

const userProducts = db.itemsOfUserByUsername
const usersObject = db.usersById
const userProductsCounter = 0


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (product) => {

    try {

        const getAges = function(matchedUsers) {
            let count = {}
            matchedUsers.forEach(element => {
                
                _.forEach(usersObject, userInfo => {
                    if(userInfo.username === element) {
                        if(count[userInfo.age] === undefined) {
                            count[userInfo.age] = 1
                    } else {
                        count[userInfo.age] = count[userInfo.age] + 1
                    }
                }
            })
        })
            return [count]
        }
    
        const dataAccessMethod = () => {
            const matchedUsers = []
    
            for(const user in userProducts) {
                if (userProducts[user].indexOf(product) >= userProductsCounter) {
                    matchedUsers.push(user)
                }
            }
            return getAges(matchedUsers)
        }
    
        return mockDBCall(dataAccessMethod)
        
    } catch (error) {
        throw new Error(error.message)
    }

}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith
};