import React from 'react';

type Props = {
  bgColour: string;
  completed: string;
};

const ProgressBar = (props: Props) => {
  const { bgColour, completed } = props;

  const containerStyles = {
    height: '0.5em',
    width: '50%',
    backgroundColor: '#1e2a3a',
    borderRadius: 50,
    margin: '0.5em',
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgColour,
    borderRadius: 'inherit',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
