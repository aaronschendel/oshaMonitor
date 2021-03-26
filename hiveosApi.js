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

            return myVar;
        }
        catch (e) {
            console.log('Catch an error: ', e)
        }
    }

    async isOnline() {
        let farmId = await this.getFarmId();
        const options = {
            url: `https://api2.hiveos.farm/api/v2/farms/${farmId}/workers`,
            method: 'GET',
            headers: { 'Authorization': `Bearer ${this.bearerToken}` }
        };

        let body = await this.doRequest(options);
        let json = JSON.parse(body);
        const myVar = json.data[0].stats.online;
        return myVar;
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
