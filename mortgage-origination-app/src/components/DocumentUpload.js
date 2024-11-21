import React from 'react';

class DocumentUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proofOfIdentity: null,
      proofOfIncome: null,
      creditReport: null,
      propertyInformation: null,
      employmentVerification: null
    };
  }

  handleFileChange = (event) => {
    const { name, files } = event.target;
    this.setState({ [name]: files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onUpload(this.state);
    this.props.onNextStep();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Upload Required Documents</h2>
        <div>
          <label>Proof of Identity:</label>
          <input type="file" name="proofOfIdentity" onChange={this.handleFileChange} />
        </div>
        <div>
          <label>Proof of Income:</label>
          <input type="file" name="proofOfIncome" onChange={this.handleFileChange} />
        </div>
        <div>
          <label>Credit Report:</label>
          <input type="file" name="creditReport" onChange={this.handleFileChange} />
        </div>
        <div>
          <label>Property Information:</label>
          <input type="file" name="propertyInformation" onChange={this.handleFileChange} />
        </div>
        <div>
          <label>Employment Verification:</label>
          <input type="file" name="employmentVerification" onChange={this.handleFileChange} />
        </div>
        <button type="submit">Next</button>
      </form>
    );
  }
}

export default DocumentUpload;
