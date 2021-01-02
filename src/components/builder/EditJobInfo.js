import React from 'react';

class EditJobInfo extends React.Component {
  constructor(props) {
    super(props);

    const { jobItem } = this.props;
    const {
      companyName, posTitle, tasks, jobStartDay, jobEndDay, jobIndex,
    } = jobItem;
    this.state = {
      companyName,
      posTitle,
      tasks,
      jobStartDay,
      jobEndDay,
      jobIndex,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.passJobInfo = this.passJobInfo.bind(this);
    this.removeJobItem = this.removeJobItem.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  passJobInfo() {
    const { editJobInfo } = this.props;
    const {
      companyName, posTitle, tasks, jobStartDay, jobEndDay, jobIndex,
    } = this.state;
    editJobInfo({
      companyName, posTitle, tasks, jobStartDay, jobEndDay, jobIndex,
    });
  }

  removeJobItem() {
    const { deleteJobItem } = this.props;
    const { jobIndex } = this.state;

    deleteJobItem(jobIndex);
  }

  render() {
    const {
      companyName, posTitle, tasks, jobStartDay, jobEndDay, jobIndex,
    } = this.state;

    return (
      <form className="build-section-wrapper">
        <h3 className="build-section-header">Job: {parseInt(jobIndex, 10) + 1}</h3>
        <div className="build-input-wrapper">
          <label htmlFor="company-input">Company Name:</label>
          <input type="text" id="company-input" name="companyName" onChange={this.handleInputChange} value={companyName} />
        </div>
        <div className="build-input-wrapper">
          <label htmlFor="position-input">Position:</label>
          <input type="text" id="position-input" name="posTitle" onChange={this.handleInputChange} value={posTitle} />
        </div>
        <div className="build-input-wrapper">
          <label htmlFor="tasks-input">Tasks:</label>
          <input type="text" id="tasks-input" name="tasks" onChange={this.handleInputChange} value={tasks} />
        </div>
        <div className="build-input-wrapper">
          <label htmlFor="exp-start-input">Start Day:</label>
          <input type="date" id="exp-start-input" name="jobStartDay" onChange={this.handleInputChange} value={jobStartDay} />
        </div>
        <div className="build-input-wrapper">
          <label htmlFor="exp-end-input">End Day:</label>
          <input type="date" id="exp-end-input" name="jobEndDay" onChange={this.handleInputChange} value={jobEndDay} />
        </div>
        <div className="build-btn-wrapper">
          <button className="btn btn-build-edit" type="button" onClick={this.passJobInfo}>Edit Job Info</button>
          <button className="btn btn-build-remove" type="button" onClick={this.removeJobItem}>Remove Job Info</button>
        </div>
      </form>
    );
  }
}

export default EditJobInfo;
