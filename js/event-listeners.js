"use strict";
let search = require("./search-api");
let $ = require("../lib/node_modules/jquery");


$(".search-btn").on("click", function(event) {
    search.searchInputValue();
    event.preventDefault();
});
