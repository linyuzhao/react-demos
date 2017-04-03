import React from 'react';


class Monitor extends React.Component{
  constructor(){
    super();
    this.state = {value: ''}
  }

  update(e){
    this.setState({value: e.target.value});
  }

  render(){
    return(
      <div>
        <input onChange={this.update.bind(this)} type="text"/>
        <hr/>
        <div>{this.state.value}</div>
      </div>
      )
  }
}


export default Monitor;