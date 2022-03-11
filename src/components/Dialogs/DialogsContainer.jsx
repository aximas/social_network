import {
    addMessage,
} from "../../redux/messages-reducer";
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

export default compose(connect(mapStateToProps, {addMessage}), withAuthRedirectHOC)(Dialogs)