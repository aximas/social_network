import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "2b60792b-96a6-4574-9c78-03fd1414e6a4"
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
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(id);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status});
    }
}
