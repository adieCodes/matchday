import React, { useState } from 'react';
import Scoreboard from './Scoreboard';
import Nav from './Nav';
import StatsFilters from './StatsFilters';
import Stats from './Stats';
import matchButtons from '../config/matchButtons';

interface Props {
  contestants: Team[];
  competition: string;
  time: string;
  score: IScore;
  lineupStats: ILineUps;
}

const Matchday = (props: Props) => {
  const [activeButton, setActiveButton] = useState(matchButtons[0].name);
  const [activeStat, setActiveStat] = useState(matchButtons[0].dataKey);
  const { contestants, competition, time, score, lineupStats } = props;

  const updateActiveButton = (button: IMatchButton) => {
    setActiveButton(button.name);
    setActiveStat(button.dataKey);
  };

  return (
    <div className='matchday'>
      <Scoreboard
        contestants={contestants}
        competition={competition}
        time={time}
        score={score}
      />
      <Nav contestants={contestants} />
      <StatsFilters
        buttons={matchButtons}
        activeButton={activeButton}
        setActiveButton={updateActiveButton}
      />
      <Stats lineupStats={lineupStats} activeStat={activeStat} />
    </div>
  );
};

export default Matchday;
