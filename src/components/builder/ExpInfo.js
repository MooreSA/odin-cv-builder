import React from 'react';

class ExpInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      posTitle: '',
      tasks: '',
      jobStartDay: '',
      jobEndDay: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.passExp = this.passExp.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  passExp() {
    const {
      companyName, posTitle, tasks, jobStartDay, jobEndDay,
    } = this.state;
    const { updateJobInfo } = this.props;
    updateJobInfo({
      companyName, posTitle, tasks, jobStartDay, jobEndDay,
    });
  }

  render() {
    const {
      companyName, posTitle, tasks, jobStartDay, jobEndDay,
    } = this.state;
    return (
      <form className="build-section-wrapper">
        <h3 className="build-section-header">Experience</h3>
        <div className="build-input-wrapper">
          <label htmlFor="company-input">Company Name:</label>
          <input type="text" id="company-input" name="companyName" onChange={this.handleChange} value={companyName} />
        </div>
        <div className="build-input-wrapper">
          <label htmlFor="position-input">Position:</label>
          <input type="text" id="position-input" name="posTitle" onChange={this.handleChange} value={posTitle} />
        </div>
        <div className="build-input-wrapper">
          <label htmlFor="tasks-input">Tasks:</label>
          <input type="text" id="tasks-input" name="tasks" onChange={this.handleChange} value={tasks} />
        </div>
        <div className="build-input-wrapper">
          <label htmlFor="exp-start-input">Start Day:</label>
          <input type="date" id="exp-start-input" name="jobStartDay" onChange={this.handleChange} value={jobStartDay} />
        </div>
        <div className="build-input-wrapper">
          <label htmlFor="exp-end-input">End Day:</label>
          <input type="date" id="exp-end-input" name="jobEndDay" onChange={this.handleChange} value={jobEndDay} />
        </div>
        <button className="btn-build-submit" onClick={this.passExp} type="button">Add Experience</button>
      </form>
    );
  }
}

export default ExpInfo;
