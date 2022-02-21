import {usersAPI} from "../api/api";

const SET_AUTH_DATA = 'SET-AUTH-DATA';
const SET_AUTH_USER_IMG = 'SET_AUTH_USER_IMG';

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
                ...action.data,
                isAuth: true
            }
        case SET_AUTH_USER_IMG:
            return {
                ...state,
                imgSrc: action.imgSrc,
            }
        default:
            return {
                ...state
            }
    }
}

export const setAuthData = (userId, login, email) => ({type: SET_AUTH_DATA, data: {userId, login, email}})
export const setAuthUserImg = (imgSrc) => ({type: SET_AUTH_USER_IMG, imgSrc})

export const authUser = () => (dispatch) => {

    return  usersAPI.authUser()
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

export default authReducer;