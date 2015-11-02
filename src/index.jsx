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

const getKV = _.curry(function(key, value){
  return {
    [key]: value
  }
});

const getState= _.curry(function(valueAdapter, name){
  return _.compose(getKV(name), valueAdapter);
});

const getStateByEvent = getState(getValueFromEvent);

const getStateByXEvent = getState(getValueFromX);

const composeSetState = _.curry(function(setter, getter, name){
  return _.compose(setter, getter(name))
});

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      address: '',
      foo: {
        bar: ''
      }
    }
  }
  setOnFoo(obj){
    this.setState({
      foo: _.merge(this.state.foo, obj)
    })
  }
  render(){
    const {name, address, foo: {bar}} = this.state;
    const setState = this.setState.bind(this);

    const setStateByEvent = composeSetState(setState, getStateByEvent);
    const setStateByXEvent = composeSetState(setState, getStateByXEvent);
    const setFooByEvent = composeSetState(this.setOnFoo.bind(this), getStateByEvent);
    return (
      <div>
        <h3>Demo for my FP note</h3>
        <form>
          <label >name: </label>
          <input
            value={name}
            onChange={setStateByEvent('name')}
            />
          <label >address: </label>
          <X
            value={address}
            onChange={setStateByXEvent('address')}
            />
          <label >foobar: </label>
          <input
            value={bar}
            onChange={setFooByEvent('bar')}
            />
        </form>
      </div>
    )
  }
}

ReactDOM.render(<Form/>, document.getElementById('container'));