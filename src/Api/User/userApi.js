import axiosClient from "../rootApi";

const PATH_URL = '/user';

class UserApi {
     getCourse(data) {
        const url = PATH_URL + '/course_get';
        return axiosClient.post(url, data)
    };

     register(data) {
        const url = PATH_URL + '/register';
        return axiosClient.post(url, data)
    };

     addCart(data) {
        const url = PATH_URL + '/add_cart';
        return axiosClient.post(url, data)
    };
}

const userApi = new UserApi();

export default userApi;