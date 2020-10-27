import React from 'react';
import ProgressBar from './ProgressBar';

type Props = {
  home: IMatchStat;
  away: IMatchStat;
  statName: string;
};

const StatRow = (props: Props) => {
  const { home, away, statName } = props;
  const homeValue = home ? +home.value : 0;
  const awayValue = away ? +away.value : 0;
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
