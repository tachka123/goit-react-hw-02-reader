import React, { Component } from 'react';
import Controls from './Controls';
import Progress from './Progress';
import Publication from './Publication';
import data from './data.json';
import binOperators from './binOperators';

class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  onClickPlusOrMinus = operator => {
    this.setState(prev => {
      return {
        publicationIndex: binOperators[operator].exec(prev.publicationIndex, 1),
      };
    });
  };

  render () {
    const massiveLength = data.length;
    const { publicationIndex } = this.state;
    return (
      <div>
        <Controls
          onClickPlusOrMinus={this.onClickPlusOrMinus}
          prevBtnDisabled={publicationIndex === 0}
          nextBtnDisabled={publicationIndex + 1 === massiveLength}
        />
        <Progress
          massiveLength={massiveLength}
          publicationIndex={publicationIndex}
        />
        <Publication item={data[publicationIndex]} />
      </div>
    );
  }
}

export default Reader;
