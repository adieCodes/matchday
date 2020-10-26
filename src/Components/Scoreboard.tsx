import React from 'react';
import ScoreboardRow from './ScoreboardRow';

interface Props {
  contestants: Team[];
  competition: string;
  time: string;
  score: IScore;
}

const Scoreboard = (props: Props) => {
  const { contestants, competition, time, score } = props;
  const teamBadges = [
    'https://s3.eu-west-1.amazonaws.com/live.content.fantasyiteam.com/bethub/teams/150x150/b496gs285it6bheuikox6z9mj.png',
    'https://s3.eu-west-1.amazonaws.com/live.content.fantasyiteam.com/bethub/teams/150x150/c8h9bw1l82s06h77xxrelzhur.png',
  ];
  // Can't think of a better descriptor for whether a team is at home or away
  const venues = ['home', 'away'];

  return (
    <table className='scoreboard'>
      <caption className='scoreboard__competition'>{competition}</caption>
      <tbody className='scoreboard__scoreboard'>
        {contestants.map((contestant, i) => {
          const venue = venues[i];
          const teamBadge = teamBadges[i];
          const teamScore = venue === 'home' ? score.home : score.away;

          return (
            <ScoreboardRow
              team={contestant.name}
              time={time}
              badge={teamBadge}
              venue={venue}
              score={teamScore}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Scoreboard;
