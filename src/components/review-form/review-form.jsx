import React from "react";
import {connect} from "react-redux";
import {Operation} from "../../reducer/data/data";
import PropTypes from "prop-types";
import StarRating from "../star-rating/star-rating";

const ReviewForm = (props) => {
  const {onInputChange, rating, review, id, onSendForm, onFormReset, isValid} = props;

  const sendFormData = (evt) => {
    evt.preventDefault();

    onSendForm(id, {rating: Number(rating), comment: review});
    onFormReset();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={sendFormData}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <StarRating onInputChange={onInputChange} rating={rating}/>

      <textarea value={review || ``} onChange={onInputChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}>Submit
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
};

const mapDispatchToProps = (dispatch) => ({
  onSendForm: (id, formData) => dispatch(Operation.sendReview(id, formData))
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
