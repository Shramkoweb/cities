import React from "react";

const withReviewSubmit = (Component) => {
  class WithReviewSubmit extends React.PureComponent {
    constructor(props) {
      super(props);

      this._formRef = React.createRef();

      this.state = {
        isValid: false,
      };

      this._checkFormValidate = this._checkFormValidate.bind(this);
      this._resetForm = this._resetForm.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _checkFormValidate() {
      const {rating, review = ``} = this.state;

      if (rating && (review.length >= 50)) {
        this.setState({
          isValid: true,
        });
      } else {
        this.setState({
          isValid: false,
        });
      }
    }

    _handleInputChange(evt) {
      this.setState({[evt.target.name]: evt.target.value}, () => this._checkFormValidate());
    }

    _resetForm() {
      this.setState({
        rating: 0,
        review: ``,
        isValid: false
      });
    }

    render() {
      return (
        <Component
          onInputChange={this._handleInputChange}
          onFormReset={this._resetForm}
          {...this.props}
          {...this.state}
        />
      );
    }
  }

  return WithReviewSubmit;
};

export default withReviewSubmit;
