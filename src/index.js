import react from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './season-display';

const App = () => {
  return (
    <div>
      <SeasonDisplay />
      Hello world
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
