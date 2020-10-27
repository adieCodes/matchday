import React from 'react';
import StatRow from './StatRow';

type Props = {
  lineupStats: ILineUps;
};

const Stats = (props: Props) => {
  const { lineupStats } = props;
  const homeStats = lineupStats.home ? lineupStats.home.stats : null;
  const awayStats = lineupStats.away ? lineupStats.away.stats : null;
  // TODO: Figure out how to get a lookup object without TS complaining
  const statTypeMap: any = {
    possessionPercentage: 'possession',
    totalScoringAtt: 'shots',
    ontargetScoringAtt: 'shotsOnTarget',
    wonCorners: 'corners',
    totalYellowCard: 'yellow card',
    totalRedCard: 'red card',
  };

  return (
    <div className='stat__container'>
      {homeStats &&
        awayStats &&
        Object.keys(statTypeMap).map((key, i) => {
          const emptyStat = {
            fh: '0',
            sh: '0',
            type: '',
            value: '0',
          };
          let currentHomeStat = homeStats.filter((stat) => stat.type === key);
          const currentAwayStat = awayStats.filter((stat) => stat.type === key);

          if (currentHomeStat.length === 0) {
            const zeroScoreStat = Object.assign({}, emptyStat, { type: key });
            currentHomeStat.push(zeroScoreStat);
          }
          if (currentAwayStat.length === 0) {
            const zeroScoreStat = Object.assign({}, emptyStat, { type: key });
            currentAwayStat.push(zeroScoreStat);
          }

          return (
            <StatRow
              home={currentHomeStat[0]}
              away={currentAwayStat[0]}
              statName={statTypeMap[key]}
              key={key}
            />
          );
        })}
    </div>
  );
};

export default Stats;
