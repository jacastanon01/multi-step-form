import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends React.Component {
  continue = e => {
    e.preventDefault();
    const { values } = this.props;
    if (
      values.occupation === "" ||
      values.city === "" ||
      values.bio === ""
    ) {
      alert("Please fill out all the information");
    } else {
      this.props.nextStep();
    }
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, formErrors } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange}
            defaultValue={values.occupation}
            name="occupation"
          />
          {formErrors.occupation.length > 0 && (
            <div className="error">
              {formErrors.occupation}
            </div>
          )}
          <br />
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City Name"
            onChange={handleChange}
            defaultValue={values.city}
            name="city"
          />
          {formErrors.city.length > 0 && (
            <div className="error">{formErrors.city}</div>
          )}
          <br />
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange}
            defaultValue={values.bio}
            name="bio"
          />
          {formErrors.bio.length > 0 && (
            <div className="error">{formErrors.bio}</div>
          )}
          <br />
          <RaisedButton
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.back}
          />
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

export default FormPersonalDetails;
