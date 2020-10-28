import React from 'react';

interface Props {
  buttonConfig: IMatchButton;
  activeButton: string;
  setActiveButton: (button: string) => void;
}

const Button = (props: Props) => {
  const { buttonConfig, activeButton, setActiveButton } = props;

  return (
    <button
      className={activeButton === buttonConfig.name ? 'active' : ''}
      onClick={() => setActiveButton(buttonConfig.name)}
    >
      {buttonConfig.name}
    </button>
  );
};

export default Button;
