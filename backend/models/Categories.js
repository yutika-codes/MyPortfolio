import mongoose from "mongoose"
const CategoriesSchema = new mongoose.Schema
({
    name:String,
    category:String,
    description:String,
    verify:
    {
    type:Boolean,
    default:false
    }

});

export const Categories = mongoose.model("categories",CategoriesSchema);