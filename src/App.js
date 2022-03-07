import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer'
import Upload from './components/Upload/Upload'
import Nav from './components/Nav/Nav'
import PageNotFound from './components/PageNotFound/PageNotFound'


function App() {
  return (
    <>
      <Router>
      <Nav />
        <Switch>
          <Route exact path="/" component={VideoPlayer}/>
          <Route path="/upload" component={Upload} />
          <Route path="/videos/:id" render={(routerProps) => <VideoPlayer {...routerProps}/>} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
