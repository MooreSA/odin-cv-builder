import React from 'react';

class EduItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.handleEdit = this.handleEdit.bind(this);
  // }

  render() {
    const { eduItem } = this.props;
    const {
      schoolName, studyTitle, eduStartDay, eduEndDay, eduIndex,
    } = eduItem;
    return (
      <div className="display-section-wrapper" id={`edu-${eduIndex}`}>
        <div className="display-detail">{schoolName}</div>
        <div className="display-detail">{studyTitle}</div>
        <div className="display-detail display-detail-small">{eduStartDay} - {eduEndDay}</div>
      </div>
    );
  }
}

export default EduItem;
