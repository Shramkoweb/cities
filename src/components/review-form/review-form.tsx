import * as React from "react";
import {connect} from "react-redux";

import {ActionCreator, Operation} from "../../reducer/data/data";
import StarRating from "../star-rating/star-rating";
import {getError, getStatusIsSentReview, getStatusSendingReview} from "../../reducer/data/selector";

interface ReviewFormProps {
  id: number,
  isValid: boolean,
  onFormReset: () => void,
  onInputChange: () => void,
  onSendForm: (id: number, {rating: number, comment: array}) => void,
  rating: string | number,
  error?: string,
  isReviewSending: boolean,
  isReviewSent: boolean,
  onUpdateForm: () => void,
  review?: string,
}

class ReviewForm extends React.PureComponent<ReviewFormProps> {
  constructor(props) {
    super(props);

    this._handleSubmitForm = this._handleSubmitForm.bind(this);
  }

  componentDidUpdate() {
    const {isReviewSent, onUpdateForm, onFormReset} = this.props;

    if (isReviewSent) {
      onUpdateForm();
      onFormReset();
    }
  }

  _handleSubmitForm(evt) {
    evt.preventDefault();
    const {onSendForm, rating, review, id} = this.props;

    onSendForm(id, {rating: Number(rating), comment: review});
  }

  render() {
    const {onInputChange, rating, review, isValid, isReviewSending, error} = this.props;

    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this._handleSubmitForm}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>

        <StarRating onInputChange={onInputChange} rating={rating}/>

        <textarea disabled={isReviewSending} value={review || ``} onChange={onInputChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder={isReviewSending ? `Sending...` : `Tell how was your stay, what you like and what can be improved`}/>
        <span style={{color: `red`}}>{error ? error : ``}</span>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay
            with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={!(isValid && !isReviewSending)}
          >
            {isReviewSending ? `Sending...` : `Submit`}
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  isReviewSending: getStatusSendingReview(state),
  isReviewSent: getStatusIsSentReview(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSendForm: (id, formData) => {
    dispatch(Operation.sendReview(id, formData));
    dispatch(ActionCreator.lockForm(true));
  },
  onUpdateForm: () => dispatch(ActionCreator.cleanForm(false)),
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
