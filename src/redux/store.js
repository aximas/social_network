import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _callSubscriber() {
        console.log('_state is changed');
    },
    _state: {
        messagePage: {
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
        },
        profilePage: {
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
        },
        sidebar: {
            friends: [
                {name: 'Sasha', imgSrc: 'https://static.trendme.net/user_avatar/avatar_full_41185.jpg'},
                {
                    name: 'Bella',
                    imgSrc: 'https://im0-tub-ru.yandex.net/i?id=bff5661be3e783b9dafe1a9db8aecda4-l&ref=rim&n=13&w=640&h=640'
                },
                {name: 'Maria', imgSrc: 'http://watch.keeno.tv/upload/iblock/a4a/a4a91af3a04ca38f6fdf3c1bee27cd0d.jpg'}
            ]
        }
    },
    getState() {
        return this._state;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messagesReducer(this._state.messagePage, action);
        this.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}



window.store = store;

export default store;
