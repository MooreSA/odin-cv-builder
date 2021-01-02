import React from 'react';

const JobItem = (props) => {
  const { jobInfo } = props;
  const {
    companyName, posTitle, tasks, jobStartDay, jobEndDay, jobIndex,
  } = jobInfo;

  return (
    <div className="display-section-wrapper" id={`job-${jobIndex}`}>
      <div className="display-detail">{companyName}</div>
      <div className="display-detail">{posTitle}</div>
      <div className="display-detail display-detail-small">{jobStartDay} - {jobEndDay}</div>
      <div className="display-detail">{tasks}</div>
    </div>
  );
};

export default JobItem;
