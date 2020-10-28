import React from 'react';
import ProgressBar from './ProgressBar';

type Props = {
  home: IMatchStat;
  away: IMatchStat;
  statName: string;
  activeStat: string;
};

const StatRow = (props: Props) => {
  const { home, away, statName, activeStat } = props;
  const homeValue = home ? +home[activeStat as keyof IMatchStat] : 0;
  const awayValue = away ? +away[activeStat as keyof IMatchStat] : 0;
  const total = homeValue + awayValue;
  const homePerc = homeValue === 0 ? 0 : (homeValue / total) * 100;
  const awayPerc = awayValue === 0 ? 0 : (awayValue / total) * 100;

  return (
    <>
      <div className='stat__row'>
        <span>{homeValue}</span>
        <span>{statName}</span>
        <span>{awayValue}</span>
      </div>
      <div className='stat__row'>
        <ProgressBar bgColour='#EFE52E' completed={`${homePerc}`} />
        <ProgressBar bgColour='#4CAF50' completed={`${awayPerc}`} />
      </div>
    </>
  );
};

export default StatRow;
