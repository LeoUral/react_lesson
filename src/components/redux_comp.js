import React from 'react';



export default class ReduxComponent extends React.Component {

    render() {
        return (
            <div>
                STORE = {this.props.tech}
            </div>
        );
    }
}
