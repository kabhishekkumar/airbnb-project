const Listing = require('../models/listing.js');
const Review = require('../models/review.js');

module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
 
    await newReview.save();
    await listing.save();

    console.log("Request body:", req.body);
    console.log("new reviews saved");
        req.flash("success", "New Reviews Created!");
    res.redirect(`/listings/${listing._id}`);
  }

  module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Reviews Deleted!");
    res.redirect(`/listings/${id}`);
  }