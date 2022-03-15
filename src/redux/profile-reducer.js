import {authAPI, profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SET_PROFILE_ID = 'SET-PROFILE-ID';

const initialState = {
    posts: [
        {
            id: 1,
            text: 'Hello it\'s my first post',
            likesCounter: 2,
            img_url: 'https://avatars.mds.yandex.net/get-pdb/1337375/082ac2bf-5ef2-4d35-a6f2-8f291d5c9dde/s1200?webp=false'
        },
        {
            id: 2,
            text: 'Hello it\'s my second post',
            likesCounter: 3,
            img_url: 'https://w-dog.ru/wallpapers/1/93/292169328627663/avatar-nejtiri-na-39-vi.jpg'
        },
        {
            id: 3,
            text: 'Hello it\'s my third post',
            likesCounter: 10,
            img_url: 'https://i.pinimg.com/736x/19/99/cc/1999cc3fd1013c39eae4682162ad2d27--avatar-james-cameron-avatar-fan-art.jpg'
        },
    ],
    profile: null,
    profileID: '',
    status: ''
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: Math.round(Math.random()*100), text: action.myPostText,
                    likesCounter: 12,
                    img_url: 'https://талисман-ростов.рф/wp-content/uploads/2020/09/1dcf2483e42611e98903000000000000_fce35a4b36f611eba99f000000000000.png'
                }],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case SET_PROFILE_ID: {
            return {
                ...state, profileID: action.profileID
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = (myPostText) => ({type: ADD_POST, myPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const setProfileId = (profileID) => ({type: SET_PROFILE_ID, profileID});

export const getUserProfileThunk = (userId) => (dispatch) => {
    return usersAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}

export const getUserStatusThunk = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })
}

export const updateUserStatusThunk = (status) => (dispatch) => {
    return profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}

export const loginProfileThunk = (email, password, rememberMe) => (dispatch) => {
    return authAPI.loginProfile(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setProfileId(response.data.data.userId))
            }
        })
}

export default profileReducer;

