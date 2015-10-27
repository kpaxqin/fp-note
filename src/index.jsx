import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'ramda';

const setFieldOnContext = _.curry(function(context, key, e){
  context.setState({
    [key]: e.target.value
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
            onChange={setField('name')}
            />
          <label >address: </label>
          <input
            value={address}
            onChange={setField('address')}
            />
        </form>
      </div>

    )
  }
}

ReactDOM.render(<Form/>, document.getElementById('container'));