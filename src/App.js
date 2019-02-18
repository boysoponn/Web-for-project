import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import master from './components/master';
import homepage from './components/homepage';
import config from './config';
import _ from 'lodash';

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
      const app = config.database().ref('project/'+pathArray[1]);
      app.on('value', async (snapshot) => { 
        const snapshotValue = snapshot.val(); 
        const snapshotArr = _.keys(snapshotValue).reduce((prev, cur) => {
          prev.push({
            _key: cur,
            ...snapshotValue[cur]
          });
          return prev;     
        }, []);  
        this.setState({
          data:snapshotArr,
        });
    });
  };
  render() {
   
    return (
      <Router>
        <div> 
          <Route exact path="/" component={homepage} />
          {this.state.data.map((data => (
          <Route path={data.path} component={master} key={data._key}/> 
        )))}
                         
        </div>
      </Router>
    );
   }
  }
  export default App;