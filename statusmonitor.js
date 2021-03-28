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
        setInterval(async function() {
            let online = await hiveOsApi.isOnline();

            if (online === true) {
                console.log('Nice!');
            }
            else {
                console.log(online);
                clearInterval();
            }
        }, 5000);
    }
    catch(e) {
        console.log(e);
    }
    
}