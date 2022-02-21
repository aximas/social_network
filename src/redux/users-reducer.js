import {usersAPI} from "../api/api";

const LOAD_MORE = 'LOAD-MORE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_FETCHING = 'IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS';


const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                // ...state, users: [...state.users, ...action.users]
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentP
            }
        case SET_TOTAL_USERS:
            return {
                ...state, totalUsersCount: action.totalUsers
            }
        case TOGGLE_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingProgress:
                    action.isFetching ?
                        [...state.isFollowingProgress, action.userId] :
                        state.isFollowingProgress.filter(userId => userId !== action.userId)
            }
        default:
            return state
    }
}

export const followF = (userId) => ({type: FOLLOW, userId});
export const unFollowF = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentP) => ({type: SET_CURRENT_PAGE, currentP});
export const setTotalUsersCount = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});
export const ToggleIsFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const ToggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize, isSetCurrentPage = false) => {
    return (dispatch) => {

        if (isSetCurrentPage) {
            dispatch(setCurrentPage(currentPage))
        }

        dispatch(ToggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize)
            .then(
                response => {
                    dispatch(ToggleIsFetching(false));
                    dispatch(setUsers(response.items));
                    dispatch(setTotalUsersCount(response.totalCount));
                }
            )
    }
}

export const followUsers = (userId) => {
    return (dispatch) => {
        dispatch(ToggleFollowingProgress(true, userId))
        usersAPI.followTheUser(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(ToggleFollowingProgress(false, userId));
                dispatch(followF(userId));
            }
        })
    }
}

export const unFollowUsers = (userId) => {
    return (dispatch) => {
        dispatch(ToggleFollowingProgress(true, userId))
        usersAPI.unFollowTheUser(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(ToggleFollowingProgress(false, userId));
                dispatch(unFollowF(userId));
            }
        })
    }
}




export default usersReducer;