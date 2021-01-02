import React from 'react';
import GenInfo from './builder/GenInfo';
import AddEduInfo from './builder/EduInfo';
import EditEduInfo from './builder/EditEduInfo';
import ExpInfo from './builder/ExpInfo';
import EditJobInfo from './builder/EditJobInfo';

class CvBuilder extends React.Component {
  constructor(props) {
    super(props);
    const { resumeInfo } = this.props;
    this.state = {
      resumeInfo,
    };

    this.passResume = this.passResume.bind(this);
    this.updateGeneralInfo = this.updateGeneralInfo.bind(this);
    this.addEduInfo = this.addEduInfo.bind(this);
    this.editEduInfo = this.editEduInfo.bind(this);
    this.deleteEduItem = this.deleteEduItem.bind(this);
    this.newJobInfo = this.newJobInfo.bind(this);
    this.editJobInfo = this.editJobInfo.bind(this);
    this.deleteJobItem = this.deleteJobItem.bind(this);
  }

  passResume() {
    const { resumeInfo } = this.state;
    const { updateResume } = this.props;
    updateResume(resumeInfo);
  }

  updateGeneralInfo({ name, email, phone }) {
    this.setState((prevState) => {
      const newState = prevState;
      newState.resumeInfo.generalInfo = { name, email, phone };
      return newState;
    });
    this.passResume();
  }

  addEduInfo({
    schoolName, studyTitle, eduStartDay, eduEndDay,
  }) {
    this.setState((prevState) => {
      const newState = prevState;
      const newIndex = prevState.resumeInfo.eduInfo.length;
      newState.resumeInfo.eduInfo.push({
        schoolName, studyTitle, eduStartDay, eduEndDay, eduIndex: newIndex,
      });
      return newState;
    });
    this.passResume();
  }

  editEduInfo({
    schoolName, studyTitle, eduStartDay, eduEndDay, eduIndex,
  }) {
    this.setState((prevState) => {
      const newState = prevState;
      newState.resumeInfo.eduInfo.splice(eduIndex, 1, {
        schoolName, studyTitle, eduStartDay, eduEndDay, eduIndex,
      });
    });
    this.passResume();
  }

  deleteEduItem(eduIndex) {
    this.setState((prevState) => {
      const newState = prevState;
      newState.resumeInfo.eduInfo.splice(eduIndex, 1);
      return newState;
    });
    this.passResume();
  }

  newJobInfo({
    companyName, posTitle, tasks, jobStartDay, jobEndDay,
  }) {
    this.setState((prevState) => {
      const newState = prevState;
      const jobIndex = prevState.resumeInfo.jobInfo.length;
      newState.resumeInfo.jobInfo.push({
        companyName, posTitle, tasks, jobStartDay, jobEndDay, jobIndex,
      });
      return newState;
    });
    this.passResume();
  }

  editJobInfo({
    companyName, posTitle, tasks, jobStartDay, jobEndDay, jobIndex,
  }) {
    this.setState((prevState) => {
      const newState = prevState;
      newState.resumeInfo.jobInfo.splice(jobIndex, 1, {
        companyName, posTitle, tasks, jobStartDay, jobEndDay, jobIndex,
      });
    });
  }

  deleteJobItem(jobIndex) {
    this.setState((prevState) => {
      const newState = prevState;
      newState.resumeInfo.jobInfo.splice(jobIndex, 1);
      return newState;
    });
    this.passResume();
  }

  render() {
    const { resumeInfo } = this.state;
    const { generalInfo, eduInfo, jobInfo } = resumeInfo;
    return (
      <div className="build-wrapper">
        <GenInfo updateGeneralInfo={this.updateGeneralInfo} generalInfo={generalInfo} />
        {eduInfo.map((eduItem) => {
          const { eduIndex } = eduItem;
          return (
            <EditEduInfo
              editEduInfo={this.editEduInfo}
              deleteEduItem={this.deleteEduItem}
              eduItem={eduItem}
              key={eduIndex}
            />
          );
        })}
        <AddEduInfo addEduInfo={this.addEduInfo} eduInfo={eduInfo} />
        {jobInfo.map((jobItem) => {
          const { jobIndex } = jobItem;
          return (
            <EditJobInfo
              editJobInfo={this.editJobInfo}
              deleteJobItem={this.deleteJobItem}
              jobItem={jobItem}
              key={jobIndex}
            />
          );
        })}
        <ExpInfo newJobInfo={this.newJobInfo} />
      </div>
    );
  }
}

export default CvBuilder;
