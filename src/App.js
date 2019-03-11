import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Master from './components/master';
import homepage from './components/homepage';
import config from './config';
import _ from 'lodash';
import {Helmet} from "react-helmet";

class App extends Component {
  constructor(props){  
    super(props);
        this.state = {
        project:[],
        global:[]
        };   
    }
  componentDidMount() {
    this.getData();
  }
    getData(){
      if(window.location.pathname !== "/"){
      const pathArray = window.location.pathname.split('/');
      let checkProject = config.database().ref('production/'+pathArray[1]+'/');
      checkProject.on('value', async (snapshot) => { 
        const user = snapshot.val();
        const app = config.database().ref('project/'+user);
        app.on('value', async (snapshot) => { 
        const snapshotValue2 = snapshot.val();
        const snapshotArr = _.keys(snapshotValue2).reduce((prev, cur) => {
          prev.push({
            _key: cur,
            ...snapshotValue2[cur],
            path:pathArray[1]
          });
          return prev;     
        }, []); 
        const global = config.database().ref('global/'+user);
        global.on('value', async (snapshot) => { 
        const snapshotglobal = snapshot.val();
          this.setState({
            project:snapshotArr,
            global:snapshotglobal
          });
        });
        });
      }); 
    }      
  };
  render() {
    const pageName = window.location.pathname.split('/');
    return (
      <Router>
        <div>
        <Helmet>
        <title>{pageName[2]}</title>
      </Helmet> 
          <Route exact path="/" component={homepage} />
          {this.state.project.map((project => (
          <Route path={'/'+project.path+'/'+project.pathName} render={() => <Master project={project} global={this.state.global}/>} key={project._key}/> 
        )))}                
        </div>
      </Router>
    );
   }
  }
  export default App;