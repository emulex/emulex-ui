'use strict';


angular
    .module('config')
    .constant('apiConfig', {
        "address": "http://127.0.0.1:4227",
        "ws":"ws://127.0.0.1:4227/emulex"
    });
