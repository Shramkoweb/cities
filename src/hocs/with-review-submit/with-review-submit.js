import React from "react";

const withReviewSubmit = (Component) => {
  class WithReviewSubmit extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isValid: false,
        rating: null,
        reviewMessage: ``,
        formRef: React.createRef()
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
        />
      );
    }
  }

  return WithReviewSubmit;
};

export default withReviewSubmit;
