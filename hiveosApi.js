const req = require('request');


class HiveosApi {

    constructor(bearerToken) {
        this.bearerToken = bearerToken;
    }

    async getFarmId(){
        try {
            let myVar = '';
            const options = {
                url: 'https://api2.hiveos.farm/api/v2/farms',
                method: 'GET',
                headers: { 'Authorization': `Bearer ${this.bearerToken}` }
            };
            
            let body = await this.doRequest(options);
            let json = JSON.parse(body);
            myVar = json.data[0].id;
            console.log(myVar);
            // req(options, function (err, res, body) {
            //     let json = JSON.parse(body);
            //     myVar = json.data[0].id;
            //     console.log(myVar);
            // });

            return myVar;
        }
        catch (e) {
            console.log('Catch an error: ', e)
            return '1111111';
        }
    }

    async isOnline() {
        let farmId = await this.getFarmId().then(console.log('Got a result from getFarmId'));
        const options = {
            url: `https://api2.hiveos.farm/api/v2/farms/${farmId}/workers`,
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


    async doRequest(options) {
        return new Promise(function (resolve, reject) {
          req(options, function (error, res, body) {
            if (!error && res.statusCode == 200) {
              resolve(body);
            } else {
              reject(error);
            }
          });
        });
      }

}

module.exports = { HiveosApi };
