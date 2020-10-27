import React from 'react';

interface Props {
  team: string;
  time: string;
  badge: string;
  venue: string;
  score: number;
}

const ScoreboardRow = (props: Props) => {
  const { team, time, badge, venue, score } = props;

  return (
    <tr className={`scoreboard__${venue}`} key={`${venue}-score`}>
      <td className={`scoreboard__badge--${venue}`}>
        <img
          className={`scoreboard__${venue}-badge scoreboard__badge`}
          src={badge}
          alt={`${team} Badge`}
        />
      </td>
      <td className={`scoreboard__teams--${venue} scoreboard__teams`}>
        {team}
      </td>
      {/* Only need to add this td once */}
      {venue === 'home' && (
        <td className='scoreboard__time' rowSpan={2}>
          {time}
        </td>
      )}
      <td className={`scoreboard__score--${venue} scoreboard__score`}>
        {score}
      </td>
    </tr>
  );
};

export default ScoreboardRow;
