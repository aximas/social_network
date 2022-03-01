import React from 'react';
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.userStatus
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.userStatus !== this.props.userStatus) {
            this.setState({status: this.props.userStatus})
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.userStatus || 'Empty status'}
                    </span>
                </div>
                }

                {this.state.editMode &&
                <div>
                    <input type="text"
                           value={this.state.status}
                           onBlur={this.deActivateEditMode}
                           onChange={(e) => {
                               this.setState({status: e.currentTarget.value})
                           }}
                           autoFocus={true}/>
                </div>
                }
            </div>
        );

    }
}

export default ProfileStatus;