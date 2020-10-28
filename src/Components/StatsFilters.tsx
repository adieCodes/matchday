import React from 'react';
import Button from './Button';

interface Props {
  buttons: IMatchButton[];
  activeButton: string;
  setActiveButton: (button: IMatchButton) => void;
}

const StatsFilters = (props: Props) => {
  const { buttons, activeButton, setActiveButton } = props;

  return (
    <div className='statsFilters'>
      <p className='statsFilters__title'>General</p>
      <div className='statsFilters__container'>
        {buttons.map((button) => (
          <Button
            buttonConfig={button}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            key={button.name}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsFilters;
