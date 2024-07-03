
import { connectToDb } from "@/lib/DbConnect";
import User from "@/schemas/Users.schema";
import Product from "@/schemas/Products.schema";
// export async function POST(req, res) {
//  connectToDb();
// const data =await req.json()
// console.log(data)
// const user = await User.insertMany(data);
// res.json(user);
// }

export async function POST(req, res) {
  await connectToDb();
  const data = await req.json();
    console.log(data);
    const product = await Product.insertMany(data);
    // res.json(product);
    Response.status(200).json({ message: "Product added successfully" });
}