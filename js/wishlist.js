"use strict";

let $ = require("../lib/node_modules/jquery"),
    firebase = require("./fb-config"),
    wishlist = require('./wishlist');

   
// Add to Firebase    
function addToWishlist(wishlistObject) {
    console.log("wishlistObject", wishlistObject);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/wishlist.json`,
        type: 'POST',
        data: JSON.stringify(wishlistObject),
        dataType: 'json'
    }).done((fbID) => {
        return fbID;
    });
}

function getWishList() {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/wishlist.json`,
        type: 'GET',
        dataType: 'json'
    }).done((fbID) => {
        return fbID;
    });
}

function deleteFromWishlist(fbID) {
    console.log("fbid", fbID);
    return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/wishlist/${fbID}.json`,
      method: 'DELETE'  
    }).done((fbData) => {
        return fbData;
    });
}



module.exports = {deleteFromWishlist, addToWishlist, getWishList};