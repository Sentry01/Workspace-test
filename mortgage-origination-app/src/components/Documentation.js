import React from 'react';

class Documentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proofOfIdentity: '',
      proofOfIncome: '',
      creditReport: '',
      propertyInformation: '',
      employmentVerification: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNextStep();
  };

  render() {
    const { proofOfIdentity, proofOfIncome, creditReport, propertyInformation, employmentVerification } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Required Documentation</h2>
        <div>
          <label>Proof of Identity:</label>
          <input type="text" name="proofOfIdentity" value={proofOfIdentity} onChange={this.handleChange} />
        </div>
        <div>
          <label>Proof of Income:</label>
          <input type="text" name="proofOfIncome" value={proofOfIncome} onChange={this.handleChange} />
        </div>
        <div>
          <label>Credit Report:</label>
          <input type="text" name="creditReport" value={creditReport} onChange={this.handleChange} />
        </div>
        <div>
          <label>Property Information:</label>
          <input type="text" name="propertyInformation" value={propertyInformation} onChange={this.handleChange} />
        </div>
        <div>
          <label>Employment Verification:</label>
          <input type="text" name="employmentVerification" value={employmentVerification} onChange={this.handleChange} />
        </div>
        <button type="submit">Next</button>
      </form>
    );
  }
}

export default Documentation;
