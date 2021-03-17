const axios = require('axios').default;


class HiveosApi {

    constructor(bearerToken) {
        this.bearerToken = bearerToken;
        this.farmId = this.getFarmId();
    }

    getFarmId(){
        // https://api2.hiveos.farm/api/v2/farms
        axios.get('https://api2.hiveos.farm/api/v2/farms', auth: Autho) // add bearer token
        
    }

    getWorkers(farmId)

}