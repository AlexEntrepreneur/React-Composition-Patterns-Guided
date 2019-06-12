import React from 'react';
import { 
  withMagicProps,
  withTimeStamp,
  withEnhancedFunctionality,
  randomNumberGenerator
} from '../HOCs/HOCs';

const TestComponent = (props) => {
  return (
    <>
      <h1>{ props.counter }</h1>
      <button onClick={props.increaseCounter}>Do Something!</button>
    </>
  );
}

export default withMagicProps(TestComponent);