import React from 'react';
import EduItem from './EduItem';

class EduWrapper extends React.Component {
  render() {
    const { eduInfo } = this.props;
    return (
      <div className="cv-section-wrapper">
        <h3 className="display-header">Education</h3>
        {eduInfo.map((eduItem) => {
          const { eduIndex } = eduItem;
          return <EduItem eduItem={eduItem} key={eduIndex} />;
        })}
      </div>
    );
  }
}

export default EduWrapper;
