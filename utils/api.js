import axios from 'axios';

const API_URL = "";

export default {
    request(method, path, params) {
        const url = API_URL + path + params;

        const error = () => {
            console.log("エラー");
        };

        // Execute request api changed by request method.
        switch (method) {
            case "post":
                return axios.post(url, { params }).catch(error);
            case "get":
                return axios.get(url, { params }).catch(error);
            default:
                break;
        }
    },
    post(path, params) {
				return this.request("post", path, params);
    },
    get(path, params) {
        const paramaters = params ? params : '';
        return this.request("get", path, paramaters);
    }
};