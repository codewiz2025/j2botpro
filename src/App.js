import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/chat">Chat</Link></li>
            <li><Link to="/video-call">Video Call</Link></li>
            <li><Link to="/voice-call">Voice Call</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/todays-mood">Today's Mood</Link></li>
            <li><Link to="/groups">Groups</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/chat"><div>Chat Component</div></Route>
          <Route path="/video-call"><div>Video Call Component</div></Route>
          <Route path="/voice-call"><div>Voice Call Component</div></Route>
          <Route path="/games"><div>Games Component</div></Route>
          <Route path="/leaderboard"><div>Leaderboard Component</div></Route>
          <Route path="/todays-mood"><div>Today's Mood Component</div></Route>
          <Route path="/groups"><div>Groups Component</div></Route>
          <Route path="/"><div>Welcome to J2Bot Pro</div></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;