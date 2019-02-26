import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import master from './components/master';
import homepage from './components/homepage';
import config from './config';
import _ from 'lodash';
import {Helmet} from "react-helmet";

class App extends Component {
  constructor(props){  
    super(props);
        this.state = {
        data:[],
        };   
    }
  componentDidMount() {
    this.getData();
  }
    getData(){
      const pathArray = window.location.pathname.split('/');
      let checkProject = config.database().ref('production/'+pathArray[1]+'/');
      checkProject.on('value', async (snapshot) => { 
        const snapshotValue = snapshot.val();
        const app = config.database().ref('project/'+snapshotValue);
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
        this.setState({
          data:snapshotArr,
        });
        });
        });
        
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
          {this.state.data.map((data => (
          <Route path={'/'+data.path+'/'+data.pathName} component={master} key={data._key}/> 
        )))}
                         
        </div>
      </Router>
    );
   }
  }
  export default App;