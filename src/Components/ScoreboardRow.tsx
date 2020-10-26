import React from 'react';

interface Props {
  team: string;
  time: string;
  badge: string;
  venue: string;
}

const ScoreboardRow = (props: Props) => {
  const { team, time, badge, venue } = props;

  return (
    <tr className={`scoreboard__${venue}`} key={`${venue}-score`}>
      <td className={`scoreboard__badge--${venue}`}>
        <img
          className={`scoreboard__${venue}-badge scoreboard__badge`}
          src={badge}
          alt={`${team} Badge`}
        />
      </td>
      <td className={`scoreboard__teams--${venue}`}>{team}</td>
      {/* Only need to add this td once */}
      {venue === 'home' && (
        <td className='scoreboard__time' rowSpan={2}>
          {time}
        </td>
      )}
      <td className={`scoreboard__score--${venue} scoreboard__score`}>7</td>
    </tr>
  );
};

export default ScoreboardRow;
