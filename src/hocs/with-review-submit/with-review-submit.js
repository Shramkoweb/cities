import React from "react";

const withReviewSubmit = (Component) => {
  class WithReviewSubmit extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isValid: false,
        isBlocked: false,
        formRef: React.createRef()
      };

      this._checkFormValidate = this._checkFormValidate.bind(this);
      this._resetForm = this._resetForm.bind(this);
    }

    _checkFormValidate() {
      const {rating, review = ``} = this.props;

      if (rating && (review.length >= 50)) {
        this.setState({
          isValid: true,
        });
      }
    }

    _resetForm() {
      const {onResetState} = this.props;

      this.state.formRef.current.reset();
      onResetState();
    }

    render() {
      return (
        <Component
          onValidForm={this._checkFormValidate}
          formRef={this.state.formRef}
          onFormBlock={this._resetForm}
          {...this.props}
          {...this.state}
        />
      );
    }
  }

  return WithReviewSubmit;
};

export default withReviewSubmit;
