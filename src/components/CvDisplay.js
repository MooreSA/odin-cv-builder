import React from 'react';
import GeneralDisplay from './preview/GenPrev';
import EduWrapper from './preview/EduWrapper';
import JobWrapper from './preview/JobWrapper';

class CvDisplay extends React.Component {
  render() {
    const { resumeInfo } = this.props;
    const { generalInfo, eduInfo, jobInfo } = resumeInfo;
    return (
      <div>
        <div className="cv-wrapper">
          <GeneralDisplay generalInfo={generalInfo} />
          <EduWrapper eduInfo={eduInfo} />
          <JobWrapper jobInfo={jobInfo} />
        </div>
        <button className="btn-toggle-edit" type="button">Edit Resume</button>
      </div>
    );
  }
}

export default CvDisplay;
