import React from 'react';

class EditEduInfo extends React.Component {
  constructor(props) {
    super(props);
    const { eduItem } = this.props;
    const {
      schoolName, studyTitle, eduStartDay, eduEndDay, eduIndex,
    } = eduItem;
    this.state = {
      schoolName,
      studyTitle,
      eduStartDay,
      eduEndDay,
      eduIndex,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.passEduInfo = this.passEduInfo.bind(this);
    this.removeEduItem = this.removeEduItem.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  passEduInfo() {
    const { editEduInfo } = this.props;
    const {
      schoolName, studyTitle, eduStartDay, eduEndDay, eduIndex,
    } = this.state;
    editEduInfo({
      schoolName, studyTitle, eduStartDay, eduEndDay, eduIndex,
    });
  }

  removeEduItem() {
    const { deleteEduItem } = this.props;
    const { eduIndex } = this.state;
    deleteEduItem(eduIndex);
  }

  render() {
    const {
      schoolName, studyTitle, eduStartDay, eduEndDay, eduIndex,
    } = this.state;
    return (
      <form className="build-section-wrapper">
        <h3 className="build-section-header">Education - {parseInt(eduIndex, 10) + 1}</h3>
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
        <div className="build-btn-wrapper">
          <button className="btn btn-build-edit" type="button" onClick={this.passEduInfo}>Edit School Info</button>
          <button className="btn btn-build-remove" type="button" onClick={this.removeEduItem}>Remove School Info</button>
        </div>
      </form>
    );
  }
}

export default EditEduInfo;
