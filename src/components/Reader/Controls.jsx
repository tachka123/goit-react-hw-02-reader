import React from 'react';
import T from 'prop-types';

const Controls = ({ onClickPlusOrMinus, prevBtnDisabled, nextBtnDisabled }) => {
  return (
    <section>
      <button
        disabled={prevBtnDisabled}
        onClick={() => onClickPlusOrMinus('-')}
        type="button"
      >
        Назад
      </button>
      <button
        disabled={nextBtnDisabled}
        onClick={() => onClickPlusOrMinus('+')}
        type="button"
      >
        Вперед
      </button>
    </section>
  );
};

Controls.defaultProps = {
  prevBtnDisabled: false,
  nextBtnDisabled: false,
};

Controls.propTypes = {
  onClickPlusOrMinus: T.func.isRequired,
  prevBtnDisabled: T.bool,
  nextBtnDisabled: T.bool,
};

export default Controls;
