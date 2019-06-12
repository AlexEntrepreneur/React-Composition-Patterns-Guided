import React, { Component } from 'react';
import Authentication from './HOCs/Authentication';
import TestComponent from './components/TestComponent';
import {
  withEnhancedFunctionality,
} from './HOCs/HOCs';
import LoginPage from './components/LoginPage';
import ContentPage from './components/ContentPage';
import './script';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  render() {
    const props = this.props;
    return (
      <div className="App">
        <h1>App is Authenticated: { props.isAuthed.toString() }</h1>
        {
          props.isAuthed === false &&
          <LoginPage 
            login={props.login}
          />
        }
        {
          props.isAuthed === true &&
          <ContentPage 
            logout={props.logout}
          />
        }
      </div>
    );
    // return (
    //   <>
    //     <TestComponent name="Test Prop" />
    //   </>
    // );
  }
}

export default Authentication(App);
