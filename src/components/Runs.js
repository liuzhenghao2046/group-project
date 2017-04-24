import React, { Component } from 'react';
import './Home.css';
import { Grid, Row, Col } from 'react-flexbox-grid';



class Runs extends Component {

  render(){
    console.log(this.props);
    return(
      <div className='fontL'>
        Runs
      </div>
    )
  }
}

export default Runs;
