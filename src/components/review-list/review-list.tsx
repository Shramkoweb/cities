import * as React from "react";
import {connect} from "react-redux";
import Review from "../review/review";
import {Operation} from "../../reducer/data/data";
import {getReviews} from "../../reducer/data/selector";
import withLoadData from "../../hocs/with-load-data/with-load-data";

interface Review {
  id: number,
  comment: string,
  rating: number,
  userName: string,
  avatarUrl: string,
  isPro: boolean,
  date: string
}

interface ReviewListProps {
  reviews: Review[],
  isRequiredDataLoad?: boolean,
  onLoadData: () => void,
  id: number,
}

class ReviewList extends React.PureComponent<ReviewListProps> {
  render() {
    const {reviews} = this.props;

    return (
      <>
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
        <ul className="reviews__list">
          {reviews.map((review) => {
            return <Review {...review} key={review.id}/>;
          })}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const reviews = getReviews(state, ownProps.id);
  return {
    reviews,
    isRequiredDataLoad: Boolean(!reviews),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadData: () => dispatch(Operation.loadReviews(ownProps.id))
});

const ReviewListWrapped = withLoadData(ReviewList);
export {ReviewList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewListWrapped);
