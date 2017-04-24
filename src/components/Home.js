import React, { Component, ReactDOM }  from 'react';
import './Home.css';
import Bio from './Bio';
import Runs from './Runs';
import Stats from './Stats';
import Nav from './Nav';
import { Grid, Row, Col } from 'react-flexbox-grid';



class View extends Component{
  render(){
    var Component = this.props.Component;
    var componentData = this.props.componentData;
    return(
      <Component data={componentData}/>
    )
  }
}

class Home extends Component {
  constructor(props){
    super(props);
    this.state= {ActiveView: 'Runs' ,ActiveData: {message: 'run Data'}, Data: {Runs:{message: 'run Data'}, Bio:{message: 'bio data'}, Stats:{message: 'stats data'}}};

  }

  onNavChange(newActiveView) {
    this.setState({ActiveView: newActiveView});
    this.setState({ActiveData: this.state.Data.newActiveView})
  }

  render(){
    console.log(this.state.ActiveView);
    return(
       <div>
         <Nav callbackParent={(newActiveView) => this.onNavChange(newActiveView)} ></Nav>
         <View Component={this.state.ActiveView} componentData={this.state.ActiveData}/>
       </div>
    )
  }
}

export default Home;
