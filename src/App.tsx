import React, { useEffect, useState } from 'react';
import Scoreboard from './Components/Scoreboard';
import Loading from './Components/Loading';
import './App.css';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [contestants, setContestants] = useState([]);
  useEffect(() => {
    fetch(
      'https://odds-api.checkd-dev.com/dev/smartacca/fixtures/88f0tj3y6neqz20nsrameokyc/preview'
    )
      .then((res) => res.json())
      .then((res) => {
        setContestants(res.match.contestant);
        setLoading(false);
      });
  }, []);

  return (
    <div className='app'>
      {isLoading ? <Loading /> : <Scoreboard contestants={contestants} />}
    </div>
  );
}

export default App;
