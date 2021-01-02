import React from 'react';
import JobItem from './JobItem';

class JobWrapper extends React.Component {
  render() {
    const { jobInfo } = this.props;
    return (
      <div className="cv-section-wrapper">
        <h3 className="display-header">Practical Experience</h3>
        {jobInfo.map((job) => {
          const { jobIndex } = job;
          return <JobItem jobInfo={job} key={jobIndex} />;
        })}
      </div>
    );
  }
}

export default JobWrapper;
