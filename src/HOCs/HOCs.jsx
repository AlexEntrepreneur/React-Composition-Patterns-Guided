import React from 'react';

// Code Starts Here
export function withMagicProps(Component) {
    return function Wrapper(props) {
        return (
            <Component 
                someProp="Magical!"
                magicProp="Wizardry!"
                {...props}
            />
        )
    }
}

//====== Exercise A ======//
// Build a HOC called `withTimeStamp` that injects 
// a "timestamp" prop into the provided component
// export function withTimeStamp(Component) {
//     return function (props) {
//         return <Component
//             timeStamp={Date.now()}
//             {...props}
//         />
//     }
// }

// Petar's Example
export function withTimeStamp(Component) {
    return function AnotherWrapper(props) {
        return <Component date="12.06.2019" {...props} />
    }
}

// Enhanced Functionality
export function withEnhancedFunctionality(Component) {
    return class Enhanced extends React.Component {
        constructor() {
            super();
            this.state = {
                counter: 0
            }
        }

        increaseCounter = () => {
            this.setState((prevState) => {
                return {
                    counter: prevState.counter + 1
                }
            });
        }

        render() {
            return (
                <Component
                    increaseCounter={this.increaseCounter}
                    {...this.props}
                    {...this.state}
                />
            )
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