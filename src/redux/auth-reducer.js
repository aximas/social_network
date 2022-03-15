import {authAPI, usersAPI} from "../api/api";

const SET_AUTH_DATA = 'SET-AUTH-DATA';
const SET_AUTH_USER_IMG = 'SET_AUTH_USER_IMG';
const DEL_AUTH_USER = 'DEL-AUTH-USER';

const initialState = {
    userId: null,
    login: null,
    email: null,
    imgSrc: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        case SET_AUTH_USER_IMG:
            return {
                ...state,
                imgSrc: action.imgSrc,
            }
        case DEL_AUTH_USER:
            return {
                ...state,
                ...action.payload,
                isAuth: false
            }
        default:
            return {
                ...state
            }
    }
}

export const setAuthData = (userId, login, email) => ({type: SET_AUTH_DATA, payload: {userId, login, email}})
export const delAuthData = (userId = null, login = null, email = null) => ({
    type: DEL_AUTH_USER,
    payload: {userId, login, email}
})
export const setAuthUserImg = (imgSrc) => ({type: SET_AUTH_USER_IMG, imgSrc})

export const authUser = () => (dispatch) => {
    authAPI.authUser()
        .then(response => {
            if (response.resultCode === 0) {
                const {id, login, email} = response.data
                dispatch(setAuthData(id, login, email));

                usersAPI.getUserProfile(id)
                    .then(response => {
                        dispatch(setAuthUserImg(response.data.photos.small));
                    })
            }
        })

}

export const loginUser = (email, password, rememberMe) => (dispatch) => {
    authAPI.loginProfile(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authUser())
            }
        })
}

export const logoutUser = () => (dispatch) => {
    authAPI.unLoginProfile()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(delAuthData())
            }
        })
}

export default authReducer;