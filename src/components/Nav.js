
import React, {Component}  from 'react';
import './Home.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Nav extends Component {

  handleClick = (e) => {
      var view = e.target.id;
      this.state ={ActiveView: view};
      this.props.callbackParent(this.state.ActiveView);
    }

  render(){


    return(
       <div>
         <Grid className='Navmenu'fluid>
           <Row>
             <Col md className='primary'>
               <div id='Runs' className='fontMC' onClick={this.handleClick}>Runs</div>
             </Col>
             <Col md className='primary'>
               <div id='Bio' className='fontMC' onClick={this.handleClick}>Bio</div>
             </Col>
             <Col md className='primary'>
               <div id='Stats' className='fontMC' onClick={this.handleClick}>Stats</div>
             </Col>
           </Row>
         </Grid>
       </div>
    )
  }
}

export default Nav;
