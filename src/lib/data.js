
import User from "@/schemas/Users.schema";
import Product from "@/schemas/Products.schema";
import { connectToDb } from "./DbConnect";


export const getProducts = async (q,page) => {
  await connectToDb();
  const regex = new RegExp(q, "i");
  const itemsPerPage = 4;
    try {
    
        const products = await Product.find({
            $or: [
                { name: { $regex: regex } },
                { category: { $regex: regex } },
                { subcategory: { $regex: regex } },
                { product_id: { $regex: regex } },
            ],
        }).lean()
        .skip((page - 1) * itemsPerPage)
        .limit(itemsPerPage);
        
        const count = await Product.find({$or: [
            { name: { $regex: regex } },
            { category: { $regex: regex } },
            { subcategory: { $regex: regex } },
            { product_id: { $regex: regex } },
        ],
    }).count()

        return { products, count };
    }
    catch (error) {
        console.error("Error getting products:", error);
    }
};
export const getUsers = async (q,page) => {
    await connectToDb();
    const regex = new RegExp(q, "i");
    const itemsPerPage = 4;
        try {
            const users = await User.find({
                $or: [
                    { firstName: { $regex: regex } },
                    { lastName: { $regex: regex } },
                    { email: { $regex: regex } },
                ],
            }).lean().skip((page - 1) * itemsPerPage).limit(itemsPerPage)
            const count = await User.find({
                $or: [
                    { firstName: { $regex: regex } },
                    { lastName: { $regex: regex } },
                    { email: { $regex: regex } },
                    { phone: { $regex: regex } },   
                    {status : { $regex: regex } },
                    {role : { $regex: regex } },
                ],
            }).count();
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