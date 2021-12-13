import {connect} from 'react-redux';
import Friends from "../Friends";

let mapStateToProps = (state) => {
   return {
       friends: state.sidebar.friends
   }
}

const FriendContainer = connect(mapStateToProps)(Friends);

export default FriendContainer;

