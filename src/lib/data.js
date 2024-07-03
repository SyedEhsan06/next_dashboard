
import User from "@/schemas/Users.schema";
import Product from "@/schemas/Products.schema";
import { connectToDb } from "./DbConnect";


export const getProducts = async () => {
  await connectToDb();
    try {
        const products = await Product.find({}).lean();
        const count = await Product.countDocuments();
        
        return { products, count };
    }
    catch (error) {
        console.error("Error getting products:", error);
    }
};
export const getUsers = async () => {
    await connectToDb();
        try {
            const users = await User.find({}).lean();
            const count = await User.countDocuments();
            return { users, count };
        }
        catch (error) {
            console.error("Error getting users:", error);
        }
        
};
//get user by id
export const getUserById = async (id) => {
    await connectToDb();
    try {
        const user = await User.findById({
            _id: id,
        }).lean();
        console.log("User:", user);
        return user;
    }
    catch (error) {
        console.error("Error getting user:", error);
    }
}
//get product by id
export const getProductById = async (id) => {
    await connectToDb();
    console.log("ID:", id);
    try {
        const product = await Product.findById({
            _id: id,
        }).lean();
        console.log("Product:", product);
        return product;
    }
    catch (error) {
        console.error("Error getting product:", error);
    }
}