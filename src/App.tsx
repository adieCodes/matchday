import React, { useEffect, useState } from 'react';
import Scoreboard from './Components/Scoreboard';
import Loading from './Components/Loading';
import './App.css';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [contestants, setContestants] = useState([]);
  const [competition, setCompetition] = useState('');

  useEffect(() => {
    fetch(
      'https://odds-api.checkd-dev.com/dev/smartacca/fixtures/88f0tj3y6neqz20nsrameokyc/preview'
    )
      .then((res) => res.json())
      .then((res) => {
        setContestants(res.match.contestant);
        setCompetition(res.match.meta.competition.name);
        setLoading(false);
      });
  }, []);

  return (
    <div className='app'>
      {isLoading ? (
        <Loading />
      ) : (
        <Scoreboard contestants={contestants} competition={competition} />
      )}
    </div>
  );
}

export default App;
