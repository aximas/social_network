const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    newPostText: 'Hello Bro'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: 4, text: state.newPostText,
                    likesCounter: 12,
                    img_url: 'https://талисман-ростов.рф/wp-content/uploads/2020/09/1dcf2483e42611e98903000000000000_fce35a4b36f611eba99f000000000000.png'
                }],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const addNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;

