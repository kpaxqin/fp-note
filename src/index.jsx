import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      address: ''
    }
  }
  setField(key){
    return (e)=>{
      this.setState({
        [key]: e.target.value
      })
    }
  }
  render(){
    const {name, address} = this.state;
    return (
      <div>
        <h3>Demo for my FP note</h3>
        <form>
          <label >name: </label>
          <input
            value={name}
            onChange={this.setField('name').bind(this)}
            />
          <label >address: </label>
          <input
            value={address}
            onChange={this.setField('address').bind(this)}
            />
        </form>
      </div>

    )
  }
}

ReactDOM.render(<Form/>, document.getElementById('container'));