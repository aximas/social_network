const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Ravshan',
            imgSrc: 'https://im0-tub-com.yandex.net/i?id=23b94df5e98eb882d2f269987bc0ad1d&n=13'
        },
        {id: 2, name: 'Said', imgSrc: 'https://i07.fotocdn.net/s122/7bef5945d72617b0/user_xl/2791376161.jpg'},
        {
            id: 3,
            name: 'Andrei',
            imgSrc: 'https://im0-tub-com.yandex.net/i?id=a4898d8cf961392cac92762cd4f9ed02&n=13'
        },
        {
            id: 4,
            name: 'Malik',
            imgSrc: 'https://im0-tub-com.yandex.net/i?id=1ff06261289d8c6df5a6bff260fbf3bf&n=13'
        }
    ],
    messages: [
        {text: "Hello", id: 1},
        {text: "Bye", id: 2},
        {text: "Hello I am Ravshan", id: 3}
    ],
    newMessage: 'It is new message'
};

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {text: state.newMessage, id: 4}],
                newMessage: ''
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessage: action.newText
            }
        }
        default:
            return state;

    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});
export default messagesReducer;

