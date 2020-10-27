import React from 'react';
import Scoreboard from './Scoreboard';
import Nav from './Nav';
import Stats from './Stats';

interface Props {
  contestants: Team[];
  competition: string;
  time: string;
  score: IScore;
  lineupStats: ILineUps;
}

const Matchday = (props: Props) => {
  const { contestants, competition, time, score, lineupStats } = props;
  return (
    <>
      <Scoreboard
        contestants={contestants}
        competition={competition}
        time={time}
        score={score}
      />
      <Nav contestants={contestants} />
      <Stats lineupStats={lineupStats} />
    </>
  );
};

export default Matchday;
