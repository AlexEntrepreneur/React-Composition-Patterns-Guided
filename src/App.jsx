import React, { Component } from 'react';
import TestComponent from './components/TestComponent';
// import LoginPage from './components/LoginPage';
// import ContentPage from './components/ContentPage';
import './script';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  render() {
    return (
      <>
        <TestComponent name="Test Prop" />
      </>
    );
    // return (
    //   <div className="App">
    //     <h1>App is Authenticated: {  }</h1>
    //       <LoginPage />
    //       <ContentPage />
    //   </div>
    // );
  }
}

export default App;
