import React from 'react';

const Scoreboard = () => (
  <table className='scoreboard'>
    <caption className='scoreboard__competition'>Premier League</caption>
    <tbody className='scoreboard__scoreboard'>
      <tr className='scoreboard__home'>
        <td className='scoreboard__badge--home'>
          <img
            className='scoreboard__home-badge scoreboard__badge'
            src='https://s3.eu-west-1.amazonaws.com/live.content.fantasyiteam.com/bethub/teams/150x150/b496gs285it6bheuikox6z9mj.png'
            alt='Aston Villa Badge'
          />
        </td>
        <td className='scoreboard__teams--home'>Aston Villa</td>
        <td className='scoreboard__time' rowSpan={2}>
          FT
        </td>
        <td className='scoreboard__score--home scoreboard__score'>7</td>
      </tr>
      <tr className='scoreboard__away'>
        <td className='scoreboard__badge--away'>
          <img
            className='scoreboard__away-badge scoreboard__badge'
            src='https://s3.eu-west-1.amazonaws.com/live.content.fantasyiteam.com/bethub/teams/150x150/c8h9bw1l82s06h77xxrelzhur.png'
            alt='Liverpool FC Badge'
          />
        </td>
        <td className='scoreboard__teams--away'>Liverpool</td>
        <td className='scoreboard__score--away scoreboard__score'>2</td>
      </tr>
    </tbody>
  </table>
);

export default Scoreboard;
