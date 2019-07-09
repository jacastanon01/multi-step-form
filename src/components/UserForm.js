import React from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class UserForm extends React.Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
    formErrors: {
      firstName: "",
      lastName: "",
      email: "",
      occupation: "",
      city: "",
      bio: ""
    }
  };

  // Proceed to next step

  nextStep = () => {
    const { step } = this.state;
    if (this.isFormValid(this.state.formErrors)) {
      this.setState({
        step: step + 1
      });
    } else {
      return;
    }
  };

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Determine if form is valid
  isFormValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(
      value => value.length > 0 && (valid = false)
    );

    return valid;
  };

  // Handle field change
  handleChange = e => {
    const { name, value } = e.target;
    const { formErrors, step } = this.state;

    if (step === 1) {
      switch (name) {
        case "firstName":
          formErrors.firstName =
            value.length < 3
              ? "minimum 3 characters required"
              : "";
          console.log(formErrors);
          break;
        case "lastName":
          formErrors.lastName =
            value.length < 3
              ? "minimum 3 characters required"
              : "";
          break;
        case "email":
          formErrors.email = emailRegex.test(value)
            ? ""
            : "Please eneter a valid email address";
          break;
        default:
          break;
      }
    }
    if (step === 2) {
      switch (name) {
        case "occupation":
          formErrors.occupation =
            value.length < 3
              ? "minimum 3 characters required"
              : "";
          break;
        case "city":
          formErrors.city =
            value.length < 3
              ? "minimum 3 characters required"
              : "";
          break;
        case "bio":
          formErrors.bio =
            value.length < 10
              ? "Tell us a little more about yourself"
              : "";
          break;
        default:
          break;
      }
    }
    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
      formErrors
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    };

    if (step === 1) {
      return (
        <FormUserDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
          formErrors={formErrors}
        />
      );
    } else if (step === 2) {
      return (
        <FormPersonalDetails
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          values={values}
          handleChange={this.handleChange}
          formErrors={formErrors}
        />
      );
    } else if (step === 3) {
      return (
        <Confirm
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          values={values}
        />
      );
    } else if (step === 4) {
      return <Success />;
    }
  }
}

export default UserForm;
