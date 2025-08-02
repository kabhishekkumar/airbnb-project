const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../uitls/wrapAsync.js");
const ExpressError = require("../uitls/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReviews, isLoggedIn, isReviewAuthor} = require("../middleware.js");


const reviewsController = require("../controllers/reviews.js");
const review = require("../models/review.js");

// Reviews
// post route for reviews

router.post(
  "/",
  isLoggedIn,
  validateReviews,
  wrapAsync(reviewsController.createReview)
);

// delete route for reviews

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewsController.destroyReview)
);

module.exports = router;
