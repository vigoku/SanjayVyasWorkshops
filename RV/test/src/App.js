import './App.css';
import { PropTypes } from 'prop-types';

function App(props) {
  return (
  <h1>{props.id} {props.name}</h1> 
  );
}

App.propTypes = {
  id:PropTypes.number.isRequired,
  name:PropTypes.string,
}
export default App;
