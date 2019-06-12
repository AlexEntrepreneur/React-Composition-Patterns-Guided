import React from 'react';

export default function withAuthentication(Component) {
    return class Authentication extends React.Component {
        constructor() {
            super();
            this.state = {
                isAuthed: false
            }
        }

        componentDidMount() {
            if (localStorage.getItem('is_authed')) {
                this.setState({ isAuthed: true });
            }
        }

        render() {
            return(
                <Component 
                    isAuthed={this.state.isAuthed}
                />
            );
        }
    }
}