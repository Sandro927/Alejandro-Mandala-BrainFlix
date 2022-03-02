import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ActiveVideo from './components/ActiveVideo/ActiveVideo'
import Upload from './components/Upload/Upload'
import Nav from './components/Nav/Nav'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <>
      <Router>
      <Nav />
        <Switch>
          <Route path="/" exact component={ActiveVideo}/>
          <Route path="/upload" component={Upload} />
          <Route path="/:videoId" render={(routerProps) => <ActiveVideo {...routerProps}/>} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
