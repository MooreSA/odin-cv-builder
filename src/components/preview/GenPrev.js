import React from 'react';

class GeneralDisplay extends React.Component {
  render() {
    const { generalInfo } = this.props;
    const { name, email, phone } = generalInfo;
    return (
      <div className="cv-section-wrapper">
        <h2 className="display-header">Personal Information</h2>
        <div className="display-section-wrapper">
          <div className="display-detail display-gen-name">{name}</div>
          <div className="display-detail display-detail-small">{email}</div>
          <div className="display-detail display-detail-small">{phone}</div>
        </div>
      </div>
    );
  }
}

export default GeneralDisplay;
