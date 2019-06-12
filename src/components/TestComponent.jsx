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
      <h2>{ props.magicProp }</h2>
      <button>Do Something!</button>
    </>
  );
}

export default withEnhancedFunctionality(TestComponent);