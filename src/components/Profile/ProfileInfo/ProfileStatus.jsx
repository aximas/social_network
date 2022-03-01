import React from 'react';
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.userStatus
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
        console.log('state status in activateMode', this.state.status);
        console.log('store status in activateMode', this.props.userStatus);
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
        console.log('state status in deActivateEditMode', this.state.status);
        console.log('store status in deActivateEditMode', this.props.userStatus);
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.props.userStatus !== this.state.status) {
    //         this.state.status = this.props.userStatus;
    //     }
    // }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.userStatus.length > 0 ? this.props.userStatus : 'Empty status'}
                        {/*{this.state.status}*/}
                    </span>
                </div>
                }

                {this.state.editMode &&
                <div>
                    <input type="text"
                           value={this.state.status}
                           onBlur={this.deActivateEditMode}
                           onChange={(e) => {this.setState({status: e.currentTarget.value})}}
                           autoFocus={true}/>
                </div>
                }
            </div>
        );

    }
}
export default ProfileStatus;