import React from 'react';
import Header from './Header';
import EditToggle from './EditToggle';
import CvBuilder from './CvBuilder';
import CvDisplay from './CvDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildMode: true,
      resumeInfo: {
        generalInfo: {
          name: '',
          email: '',
          phone: '',
        },
        eduInfo: [],
        jobInfo: [],
      },
    };

    this.toggleBuildMode = this.toggleBuildMode.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.updateResume = this.updateResume.bind(this);
  }

  toggleBuildMode() {
    const { buildMode } = this.state;
    this.setState({ buildMode: !buildMode, editMode: false });
  }

  toggleEditMode() {
    const { editMode } = this.state;
    this.setState({ editMode: !editMode, buildMode: false });
  }

  updateResume(newResume) {
    this.setState((prevState) => {
      const newState = prevState;
      newState.resumeInfo = newResume;
      return newState;
    });
  }

  render() {
    const { resumeInfo, buildMode } = this.state;
    if (buildMode) {
      return (
        <div>
          <Header />
          <EditToggle toggleBuildMode={this.toggleBuildMode} buildMode={buildMode} />
          <CvBuilder resumeInfo={resumeInfo} updateResume={this.updateResume} />
        </div>
      );
    }
    return (
      <div>
        <Header />
        <EditToggle toggleBuildMode={this.toggleBuildMode} buildMode={buildMode} />
        <CvDisplay resumeInfo={resumeInfo} />
      </div>
    );
  }
}

export default App;
