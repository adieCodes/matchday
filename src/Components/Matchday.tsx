import React from 'react';
import Scoreboard from './Scoreboard';
import Nav from './Nav';

interface Props {
  contestants: Team[];
  competition: string;
  time: string;
  score: IScore;
}

const Matchday = (props: Props) => {
  const { contestants, competition, time, score } = props;
  return (
    <>
      <Scoreboard
        contestants={contestants}
        competition={competition}
        time={time}
        score={score}
      />
      <Nav />
    </>
  );
};

export default Matchday;
