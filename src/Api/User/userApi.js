import axiosClient from "../rootApi";

const PATH_URL = '/user';

class UserApi {
     getCourse(data) {
        const url = PATH_URL + '/course_get';
        return axiosClient.post(url, data)
    };
}

const userApi = new UserApi();

export default userApi;