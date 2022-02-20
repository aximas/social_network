import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "f55235a4-2de6-4ed8-8d44-6d4f47e4c38a"
    }
})

export const usersAPI = {

    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    followTheUser: (userId) => {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },

    unFollowTheUser: (userId) => {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },

    authUser: () => {
      return instance.get(`auth/me`).then(response => response.data)
    },

    getUserProfile: (id) => {
        return instance.get(`profile/` + id)
    }
};

