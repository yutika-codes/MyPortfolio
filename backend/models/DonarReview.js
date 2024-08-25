import mongoose from "mongoose";

const DonarReviewSchema = new mongoose.Schema({
    Name:String,
    profession:String,
    Review:String,
    userId:String
});

export const DonarReview = mongoose.model("DonarReviews",DonarReviewSchema);