import {connect} from 'react-redux';
import Friends from "../Friends";
import {compose} from "redux";
import {withAuthRedirectHOC} from "../../../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
   return {
       friends: state.sidebar.friends
   }
}

export default compose(connect(mapStateToProps), withAuthRedirectHOC)(Friends);