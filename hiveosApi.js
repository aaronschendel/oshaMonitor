const axios = require('axios').default;


class HiveosApi {

    constructor(bearerToken) {
        this.bearerToken = bearerToken;
        this.farmId = this.getFarmId();
    }

    getFarmId(){
        // https://api2.hiveos.farm/api/v2/farms
        axios.get('https://api2.hiveos.farm/api/v2/farms', {
            headers: {
                'Authorization': this.bearerToken
            }
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.error(error)
            }
        )
    }

    getWorkers(farmId) {

    }

}
