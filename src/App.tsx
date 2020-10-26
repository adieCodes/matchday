import React, { useEffect, useState } from 'react';
import Matchday from './Components/Matchday';
import Loading from './Components/Loading';
import './App.css';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [contestants, setContestants] = useState([]);
  const [competition, setCompetition] = useState('');
  const [matchTime, setMatchTime] = useState('');
  const [currentScore, setCurrentScore] = useState({ home: 0, away: 0 });

  useEffect(() => {
    fetch(
      'https://odds-api.checkd-dev.com/dev/smartacca/fixtures/88f0tj3y6neqz20nsrameokyc/preview'
    )
      .then((res) => res.json())
      .then((res) => {
        // Assumed the logic here but would check other match statuses
        const time =
          res.match.liveData.matchDetails.matchStatus.toLowerCase() === 'played'
            ? 'FT'
            : res.match.liveData.matchDetails.matchLengthMin;
        setContestants(res.match.contestant);
        setCompetition(res.match.meta.competition.name);
        setMatchTime(time);
        // Assume the total score is always the latest
        setCurrentScore(res.match.liveData.matchDetails.scores.total);
        setLoading(false);
      });
  }, []);

  return (
    <div className='app'>
      {isLoading ? (
        <Loading />
      ) : (
        <Matchday
          contestants={contestants}
          competition={competition}
          time={matchTime}
          score={currentScore}
        />
      )}
    </div>
  );
}

export default App;
