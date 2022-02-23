import React from 'react';
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'Bro'
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
        // this.state.editMode = true;
        // this.forceUpdate()
        console.log(this.state.editMode)
    }

    deActivateEditMode() {
        this.setState({ // work async
            editMode: false
        })
        console.log(this.state.editMode)
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>
                        {this.props.userStatus}
                    </span>
                </div>
                }

                {this.state.editMode &&
                <div>
                    <input type="text" value={this.props.userStatus} onBlur={this.deActivateEditMode.bind(this)} autoFocus={true}/>
                </div>
                }
            </div>
        );

    }
}
export default ProfileStatus;