import React from 'react';

class ApprovalStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      nextSteps: ''
    };
  }

  componentDidMount() {
    this.setApprovalStatus();
  }

  setApprovalStatus = () => {
    const { communication } = this.props;
    let status = 'Pending';
    let nextSteps = 'Please wait for further communication.';

    // Example logic for setting approval status
    if (communication.includes('approved')) {
      status = 'Approved';
      nextSteps = 'Congratulations! Your mortgage has been approved. Please proceed with the next steps.';
    } else if (communication.includes('denied')) {
      status = 'Denied';
      nextSteps = 'We regret to inform you that your mortgage application has been denied. Please contact us for further assistance.';
    }

    this.setState({ status, nextSteps });
    this.props.onApproval({ status, nextSteps });
  };

  render() {
    const { status, nextSteps } = this.state;

    return (
      <div>
        <h2>Approval Status</h2>
        <p>Status: {status}</p>
        <p>Next Steps: {nextSteps}</p>
      </div>
    );
  }
}

export default ApprovalStatus;
