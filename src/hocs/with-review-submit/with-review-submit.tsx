import * as React from "react";
import {Subtract} from "utility-types";

import Constants from "../../constants";

interface State {
  isValid?: boolean,
  rating?: any,
  review?: any,
}

interface InjectedProps {
  onInputChange: any
  onFormReset: any,
}

const withReviewSubmit = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithReviewSubmit extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        isValid: false,
      };

      this._checkFormValidate = this._checkFormValidate.bind(this);
      this._resetForm = this._resetForm.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _checkFormValidate() {
      const {rating, review = ``} = this.state;

      if (rating && ((review.length >= Constants.MIN_COMMENT_LENGTH) && (review.length < Constants.MAX_COMMENT_LENGTH))) {
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
