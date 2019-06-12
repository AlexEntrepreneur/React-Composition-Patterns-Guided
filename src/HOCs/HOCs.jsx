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
export function withTimeStamp(Component) {

}

//====== Exercise B ======//
// Build a HOC called `randomNumberGenerator` that
// enhances the functionality of the provided component
// using a Wrapper component.
// Create a function that generates random numbers + sets
// them to the component's private state. Inject the state as props.
export function randomNumberGenerator() {

}