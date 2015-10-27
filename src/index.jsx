import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'ramda';
import X from './X.jsx';

const getValueFromEvent = function(e){
  return e.target.value;
};
const getValueFromX = function(x){
  return x.value
};

const setFieldOnContext = _.curry(function(context, key, value){
  context.setState({
    [key]: value
  })
});

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      address: ''
    }
  }
  render(){
    const {name, address} = this.state;
    const setField = setFieldOnContext(this);
    return (
      <div>
        <h3>Demo for my FP note</h3>
        <form>
          <label >name: </label>
          <input
            value={name}
            onChange={_.compose(setField('name'), getValueFromEvent)}
            />
          <label >address: </label>
          <X
            value={address}
            onChange={_.compose(setField('address'), getValueFromX)}
            />
        </form>
      </div>

    )
  }
}

ReactDOM.render(<Form/>, document.getElementById('container'));