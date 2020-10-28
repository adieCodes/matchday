import React from 'react';

interface Props {
  buttonConfig: IMatchButton;
  activeButton: string;
  setActiveButton: (button: IMatchButton) => void;
}

const Button = (props: Props) => {
  const { buttonConfig, activeButton, setActiveButton } = props;

  return (
    <button
      className={activeButton === buttonConfig.name ? 'active' : ''}
      onClick={() => setActiveButton(buttonConfig)}
    >
      {buttonConfig.name}
    </button>
  );
};

export default Button;
