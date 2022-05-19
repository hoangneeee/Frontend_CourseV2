import axiosClient from "../rootApi";

const PATH_URL = '/auth';

class AuthApi {
     login(data) {
        const url = PATH_URL + '/login';
        return axiosClient.post(url, data)
    };
}

const authApi = new AuthApi();

export default authApi;