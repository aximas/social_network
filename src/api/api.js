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
    },
    loginProfile(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    unLoginProfile() {
        return instance.delete(`auth/login`);
    }
}
