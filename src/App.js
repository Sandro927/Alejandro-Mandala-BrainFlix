import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ActiveVideo from './components/ActiveVideo/ActiveVideo'
import Upload from './components/Upload/Upload'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route path="/" exact component={ActiveVideo}/>
          <Route path="/upload" component={Upload} />
          <Route path="/:videoId" component={ActiveVideo} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
