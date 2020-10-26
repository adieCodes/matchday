import React from 'react';

interface Props {
  contestants: Team[];
}

const Scoreboard = (props: Props) => {
  const { contestants } = props;
  const teamBadges = [
    'https://s3.eu-west-1.amazonaws.com/live.content.fantasyiteam.com/bethub/teams/150x150/b496gs285it6bheuikox6z9mj.png',
    'https://s3.eu-west-1.amazonaws.com/live.content.fantasyiteam.com/bethub/teams/150x150/c8h9bw1l82s06h77xxrelzhur.png',
  ];
  // Can't think of a better descriptor for whether a team is at home or away
  const venue = ['home', 'away'];

  return (
    <table className='scoreboard'>
      <caption className='scoreboard__competition'>Premier League</caption>
      <tbody className='scoreboard__scoreboard'>
        {contestants.map((contestant, i) => (
          <tr className={`scoreboard__${venue[i]}`} key={`${venue[i]}-score`}>
            <td className={`scoreboard__badge--${venue[i]}`}>
              <img
                className={`scoreboard__${venue[i]}-badge scoreboard__badge`}
                src={teamBadges[i]}
                alt={`${contestant.name} Badge`}
              />
            </td>
            <td className={`scoreboard__teams--${venue[i]}`}>
              {contestants[0].name}
            </td>
            {i === 0 && (
              <td className='scoreboard__time' rowSpan={2}>
                FT
              </td>
            )}
            <td className={`scoreboard__score--${venue[i]} scoreboard__score`}>
              7
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Scoreboard;
