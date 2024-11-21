import React from 'react';
import ReactDOM from 'react-dom';
import Documentation from './components/Documentation';
import DocumentUpload from './components/DocumentUpload';
import EligibilityAssessment from './components/EligibilityAssessment';
import Communication from './components/Communication';
import ApprovalStatus from './components/ApprovalStatus';

class MortgageOriginationApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      documents: [],
      eligibility: null,
      communication: '',
      approvalStatus: ''
    };
  }

  handleNextStep = () => {
    this.setState((prevState) => ({
      step: prevState.step + 1
    }));
  };

  handleDocumentUpload = (documents) => {
    this.setState({ documents });
  };

  handleEligibilityAssessment = (eligibility) => {
    this.setState({ eligibility });
  };

  handleCommunication = (communication) => {
    this.setState({ communication });
  };

  handleApprovalStatus = (approvalStatus) => {
    this.setState({ approvalStatus });
  };

  render() {
    const { step, documents, eligibility, communication, approvalStatus } = this.state;

    return (
      <div>
        {step === 1 && <Documentation onNextStep={this.handleNextStep} />}
        {step === 2 && <DocumentUpload onUpload={this.handleDocumentUpload} onNextStep={this.handleNextStep} />}
        {step === 3 && <EligibilityAssessment documents={documents} onAssessment={this.handleEligibilityAssessment} onNextStep={this.handleNextStep} />}
        {step === 4 && <Communication eligibility={eligibility} onCommunication={this.handleCommunication} onNextStep={this.handleNextStep} />}
        {step === 5 && <ApprovalStatus communication={communication} onApproval={this.handleApprovalStatus} />}
      </div>
    );
  }
}

ReactDOM.render(<MortgageOriginationApp />, document.getElementById('root'));
