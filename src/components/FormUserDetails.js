import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class FormUserDetails extends React.Component {
  continue = e => {
    e.preventDefault();
    const { values } = this.props;
    if (
      values.firstName === "" ||
      values.lastName === "" ||
      values.email === ""
    ) {
      alert("Please enter more information");
    } else {
      this.props.nextStep();
    }
  };

  render() {
    const { values, handleChange, formErrors } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange}
            defaultValue={values.firstName}
            name="firstName"
          />
          {formErrors.firstName.length > 0 && (
            <div className="error">
              {formErrors.firstName}
            </div>
          )}
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange}
            defaultValue={values.lastName}
            name="lastName"
          />
          {formErrors.lastName.length > 0 && (
            <div className="error">
              {formErrors.lastName}
            </div>
          )}
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange}
            defaultValue={values.email}
            name="email"
          />
          {formErrors.email.length > 0 && (
            <div className="error">{formErrors.email}</div>
          )}
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
