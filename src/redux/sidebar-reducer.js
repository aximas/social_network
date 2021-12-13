
const initialState = {
    friends: [
        {name: 'Sasha', imgSrc: 'https://static.trendme.net/user_avatar/avatar_full_41185.jpg'},
        {
            name: 'Bella',
            imgSrc: 'https://im0-tub-ru.yandex.net/i?id=bff5661be3e783b9dafe1a9db8aecda4-l&ref=rim&n=13&w=640&h=640'
        },
        {name: 'Maria', imgSrc: 'http://watch.keeno.tv/upload/iblock/a4a/a4a91af3a04ca38f6fdf3c1bee27cd0d.jpg'}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}


export default sidebarReducer;
