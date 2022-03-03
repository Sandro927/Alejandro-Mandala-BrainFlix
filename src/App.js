import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Upload from './components/Upload/Upload'
import Nav from './components/Nav/Nav'
import PageNotFound from './components/PageNotFound/PageNotFound'


function App() {
  return (
    <>
      <Router>
      <Nav />
        <Switch>
          <Route path="/" exact component={VideoPlayer}/>
          <Route path="/upload" component={Upload} />
          <Route path="/:videoId" render={(routerProps) => <VideoPlayer {...routerProps}/>} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
