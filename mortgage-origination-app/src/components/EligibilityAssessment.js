import React from 'react';

class EligibilityAssessment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eligibility: null,
      risk: null
    };
  }

  componentDidMount() {
    this.assessEligibility();
  }

  assessEligibility = () => {
    const { documents } = this.props;
    // Logic to evaluate the submitted documents and information
    let eligibility = 'Eligible';
    let risk = 'Low';

    // Example logic for assessment
    if (!documents.proofOfIdentity || !documents.proofOfIncome) {
      eligibility = 'Ineligible';
      risk = 'High';
    }

    this.setState({ eligibility, risk });
    this.props.onAssessment({ eligibility, risk });
  };

  handleNextStep = () => {
    this.props.onNextStep();
  };

  render() {
    const { eligibility, risk } = this.state;

    return (
      <div>
        <h2>Eligibility Assessment</h2>
        <p>Eligibility: {eligibility}</p>
        <p>Risk: {risk}</p>
        <button onClick={this.handleNextStep}>Next</button>
      </div>
    );
  }
}

export default EligibilityAssessment;
