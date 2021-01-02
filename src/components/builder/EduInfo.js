import React from 'react';

class AddEduInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: '',
      studyTitle: '',
      eduStartDay: '',
      eduEndDay: '',
      eduIndex: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.passEduInfo = this.passEduInfo.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  passEduInfo() {
    const { addEduInfo } = this.props;
    const {
      schoolName, studyTitle, eduStartDay, eduEndDay, eduIndex,
    } = this.state;
    addEduInfo({
      schoolName, studyTitle, eduStartDay, eduEndDay, eduIndex, editMode: true,
    });
  }

  render() {
    const {
      schoolName, studyTitle, eduStartDay, eduEndDay,
    } = this.state;
    return (
      <form className="build-section-wrapper">
        <h3 className="build-section-header">Add Education</h3>
        <div className="build-input-wrapper">
          <label htmlFor="school-input">School Name:</label>
          <input type="text" id="school-input" name="schoolName" onChange={this.handleInputChange} value={schoolName} />
        </div>
        <div className="build-input-wrapper">
          <label htmlFor="study-input">Study Field:</label>
          <input type="text" id="study-input" name="studyTitle" onChange={this.handleInputChange} value={studyTitle} />
        </div>
        <div className="build-input-wrapper">
          <label htmlFor="start-input">Start Day:</label>
          <input type="date" id="start-input" name="eduStartDay" onChange={this.handleInputChange} value={eduStartDay} />
        </div>
        <div className="build-input-wrapper">
          <label htmlFor="name-input">End Day:</label>
          <input type="date" id="end-input" name="eduEndDay" onChange={this.handleInputChange} value={eduEndDay} />
        </div>
        <button className="btn-build-submit" type="button" onClick={this.passEduInfo}>Add School Info</button>
      </form>
    );
  }
}

export default AddEduInfo;
