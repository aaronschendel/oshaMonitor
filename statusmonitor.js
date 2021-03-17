const fs = require('fs');
const AsyncPolling = require('async-polling');
const hiveApi = require('hiveosApi');
const axios = require('axios').default;

const bearerToken = authorize();

beginPolling(bearerToken);




function authorize() {
    var configJson = JSON.parse(fs.readFileSync('hiveos_config.json', 'utf8'));
    const bearerToken = configJson.bearer_token;

    return bearerToken
}


function beginPolling(bearerToken) {
    AsyncPolling(function(end) {
        
    })
}