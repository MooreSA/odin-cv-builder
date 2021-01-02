import React from 'react';

class GenInfo extends React.Component {
  constructor(props) {
    super(props);
    const { generalInfo } = this.props;
    const { name, email, phone } = generalInfo;
    this.state = {
      name,
      email,
      phone,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addGenInfo = this.passGenInfo.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  passGenInfo() {
    const { name, email, phone } = this.state;
    const { updateGeneralInfo } = this.props;
    updateGeneralInfo({ name, email, phone });
  }

  render() {
    const { name, email, phone } = this.state;
    return (
      <form className="build-section-wrapper">
        <h3 className="build-section-header">Personal</h3>
        <div className="build-input-wrapper">
          <label htmlFor="name-input">Name:</label>
          <input type="text" id="name-input" name="name" onChange={this.handleInputChange} value={name} />
        </div>
        <div className="build-input-wrapper">
          <label htmlFor="email-input">Email:</label>
          <input type="email" id="email-input" name="email" onChange={this.handleInputChange} value={email} />
        </div>
        <div className="build-input-wrapper">
          <label htmlFor="phone-input">Phone Number:</label>
          <input type="tel" id="phone-input" name="phone" onChange={this.handleInputChange} value={phone} />
        </div>
        <button className="btn-build-submit" type="button" onClick={this.addGenInfo}>Add Personal Info</button>
      </form>
    );
  }
}

export default GenInfo;
