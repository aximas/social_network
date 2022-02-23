import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirectHOC} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newMessage: state.messagePage.newMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        updateNewMessage: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action)
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirectHOC)(Dialogs)