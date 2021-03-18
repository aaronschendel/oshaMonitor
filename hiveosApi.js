const req = require('request');


class HiveosApi {

    constructor(bearerToken) {
        this.bearerToken = bearerToken;
        this.farmId = this.getFarmId();
    }

    getFarmId(){
        const options = {
            url: 'https://api2.hiveos.farm/api/v2/farms',
            method: 'GET',
            headers: { 'Authorization': `Bearer ${this.bearerToken}` }
        };
        
        req(options, function(err, res, body) {
            let json = JSON.parse(body);
            const myVar = json.data[0].id;
            console.log(myVar);
        });
    }

    isOnline() {
        const options = {
            url: `https://api2.hiveos.farm/api/v2/farms/481439/workers`,
            method: 'GET',
            headers: { 'Authorization': `Bearer ${this.bearerToken}` }
        };
        req(options, function(err, res, body) {
            let json = JSON.parse(body);
            const myVar = json.data[0].stats.online;
            console.log(myVar);
            return myVar;
        });
    }

}

module.exports = { HiveosApi };
