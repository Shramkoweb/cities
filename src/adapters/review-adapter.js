import {convertIsoDateToString} from "../utils";
import Constants from "../constants";

class ReviewAdapter {
  static parseReviews(reviews, id) {
    return {
      [id]: reviews.map((review) => {
        return {
          id: review[`id`],
          comment: review[`comment`],
          rating: review[`rating`],
          userName: review[`user`][`name`],
          avatarUrl: review[`user`][`avatar_url`],
          isPro: review[`user`][`is_pro`],
          date: convertIsoDateToString(review[`date`]),
        };
      })
        .sort((current, next) => {
          return new Date(current.date) < new Date(next.date) ? 1 : -1;
        })
        .slice(0, Constants.MAX_REVIEW_AMOUNT)
    };
  }
}

export default ReviewAdapter;
