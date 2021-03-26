const fs = require('fs');
const AsyncPolling = require('async-polling');
const hapi = require('./hiveosApi');


const bearerToken = authorize();

const hiveOsApi = new hapi.HiveosApi(bearerToken);


beginPolling(bearerToken);




function authorize() {
    var configJson = JSON.parse(fs.readFileSync('hiveos_config.json', 'utf8'));
    const bearerToken = configJson.credentials.bearer_token;

    return bearerToken;
}


async function beginPolling(bearerToken) {
    try {
        AsyncPolling(function(end) { // change what I'm using for my own thing and then await on isOnline
            let online = hiveOsApi.isOnline().then(function() {
                if (online === 'true') {
                    console.log('Nice!');
                }
                else {
                    console.log(online);
                }
            });
            
            end();
        }, 1000).run();
    }
    catch(e) {
        console.log(e);
    }
    
}