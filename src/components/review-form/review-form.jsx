import React from "react";
import {connect} from "react-redux";
import {ActionCreator, Operation} from "../../reducer/data/data";
import PropTypes from "prop-types";
import StarRating from "../star-rating/star-rating";
import {getError, getStatusIsSentReview, getStatusSendingReview} from "../../reducer/data/selector";

const ReviewForm = (props) => {
  const {onInputChange, rating, review, id, onSendForm, onFormReset, isValid, isReviewSending, error} = props;

  const sendFormData = (evt) => {
    evt.preventDefault();

    onSendForm(id, {rating: Number(rating), comment: review});
    onFormReset();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={sendFormData}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <StarRating onInputChange={onInputChange} rating={rating}/>

      <textarea disabled={isReviewSending} value={review || ``} onChange={onInputChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder={isReviewSending ? `Sending...` : `Tell how was your stay, what you like and what can be improved`}/>
      <span style={{color: `red`}}>{error ? error : ``}</span>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
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
};

ReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  isValid: PropTypes.bool.isRequired,
  onFormReset: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSendForm: PropTypes.func.isRequired,
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  review: PropTypes.string,
  error: PropTypes.string,
  isReviewSending: PropTypes.bool.isRequired,
  isReviewSent: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isReviewSending: getStatusSendingReview(state),
  isReviewSent: getStatusIsSentReview(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSendForm: (id, formData) => {
    dispatch(Operation.sendReview(id, formData));
    dispatch(ActionCreator.lockForm(true));
  }
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
