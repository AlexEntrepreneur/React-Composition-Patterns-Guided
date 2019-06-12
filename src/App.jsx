import React, { Component } from 'react';
import TestComponent from './components/TestComponent';
import LoginPage from './components/LoginPage';
import ContentPage from './components/ContentPage';
import './script';
import { withMagicProps } from './HOCs/HOCs';
import withAuthentication from './HOCs/Authentication';

// Another way of using a HOC
// We then invoke `EnhancedComponent` in the JSX below 
const EnhancedComponent = withMagicProps(TestComponent);

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  render() {
    // return (
    //   <>
    //     <TestComponent originalProp="Test Prop" data={this.state.datas} />
    //     <TestComponent originalProp="Test Prop" data={this.state.datas} />
    //     <TestComponent originalProp="Test Prop" data={this.state.datas} />
    //     <TestComponent originalProp="Test Prop" data={this.state.datas} />
    //     <TestComponent originalProp="Test Prop" data={this.state.datas} />
    //   </>
    // );
    return (
      <div className="App">
        <h1>App is Authenticated: { this.props.isAuthed }</h1>
          <LoginPage />
          <ContentPage />
      </div>
    );
  }
}

export default withAuthentication(App);
