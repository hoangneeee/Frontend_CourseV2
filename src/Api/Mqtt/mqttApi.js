import axiosClient from "../rootApi";

const PATH_URL = 'mqtt';

class MqttApi {
    async getMessage() {
        const url = PATH_URL + '/message';
        return axiosClient.get(url)
    };

    async sendMessage(data) {
        const url = PATH_URL + '/send-message';
        return axiosClient.post(url, data)
    };
}

const mqttApi = new MqttApi();

export default mqttApi;
