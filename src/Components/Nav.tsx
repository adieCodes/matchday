import React from 'react';

type Props = {
  contestants: Team[];
};

const Nav = (props: Props) => {
  const { contestants } = props;

  return (
    <nav>
      <ul>
        <li>
          <a href='#'>Overview</a>
        </li>
        <li className='active'>
          <a href='#'>General</a>
        </li>
        <li>
          <a href='#'>{contestants[0].code}</a>
        </li>
        <li>
          <a href='#'>{contestants[1].code}</a>
        </li>
        <li>
          <a href='#'>Player</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
