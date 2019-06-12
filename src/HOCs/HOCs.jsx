import React from 'react';

//====== Demo 1 ======//
// Demonstrate a HOC that injects simple props
export function withMagicProps(Component) {
  return function(props) {
    return <Component 
      someProp="magical!"
      magicProp="wizardry!"
      {...props}
    />;
  } 
}

//====== Exercise A ======//
// Build a HOC called `withTimeStamp` that injects 
// a "timestamp" prop into the provided component
export function withTimeStamp(Component) {

}

//====== Demo 2 ======//
// Demonstrate a HOC that injects values from a private state
// and enhances the functionality of the provided component
export function withEnhancedFunctionality(Component) {
  return class Enhanced extends React.Component {
    state = {
      data: ["test", "data"],
      counter: 0
    }

    increaseCounter = () => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1
      }));
    }

    render() {
      return (
        <Component 
          data={this.state.data}
          increaseCounter={this.increaseCounter}
          {...this.props} /* Passes the original props along */
          {...this.state} /* Passes private state along as props */
        />
      );
    }
  }
}

//====== Exercise B ======//
// Build a HOC called `randomNumberGenerator` that
// enhances the functionality of the provided component
// using a Wrapper component.
// Create a function that generates random numbers + sets
// them to the component's private state. Inject the state as props.
export function randomNumberGenerator() {

}