"use server";
import fs from "fs";
import path from "path";
import { connectToDb } from "./DbConnect";
import User from "@/schemas/Users.schema";
import Product from "@/schemas/Products.schema";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import { CldImage } from "next-cloudinary";
// Add User
//
export const addUser = async (formData) => {
  await connectToDb();

  const userExists = await User.findOne({ email: formData.get("email") });
  if (userExists) {
    console.error("User already exists:", userExists);
    return { error: "User already exists" };
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(formData.get("password"), salt);
  console.log("Hashed Password:", hashedPassword);

  const newUser = new User({
    firstName: formData.get("first_name"),
    lastName: formData.get("last_name"),
    email: formData.get("email"),
    password: hashedPassword,
    phone: formData.get("phone"),
    role: formData.get("role"),
    status: formData.get("status"),
    image: formData.get("file").name,
    address: [
      {
        address: formData.get("address"),
        city: formData.get("city"),
        state: formData.get("state"),
        zip: formData.get("zip"),
        type: formData.get("type"),
        country: "India",
      },
    ],
    orders: [],
  });

  try {
    await newUser.save();
    console.log("User added successfully:", newUser);
  } catch (error) {
    console.error("Error adding user:", error);
  }

  revalidatePath("/users");
  redirect("/users");
};

// delete user

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

// Update User
export const updateUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  const user = await User.findById({
    _id: id,
  });
  console.log(formData);
  if (!user) {
    console.error("User not found");
    return { error: "User not found" };
  }
  let update = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    role: formData.get("role"),
    status: formData.get("status"),
    image: formData.get("image").name,
    address: [
      {
        address: formData.get("address"),
        city: formData.get("city"),
        state: formData.get("state"),
        zip: formData.get("zip"),
        type: formData.get("type"),
        country: "India",
      },
    ],
  };
  try {
    await User.findByIdAndUpdate(id, update);
    console.log("User updated successfully:", user);
  } catch (error) {
    console.error("Error updating user:", error);
  }
  revalidatePath("/users");
  redirect("/users");
};
// Add Product
// export const addProduct = async (formData) => {

//   await connectToDb();

//   const productExists = await Product.findOne({ product_id: formData.get("product_id") });
//   if (productExists) {
//     let update = {
//       quantity: productExists.quantity + parseInt(formData.get("quantity")),
//       price: formData.get("price"),
//       sold: productExists.sold,
//       category: formData.get("category"),
//       subcategory: formData.get("subcategory"),
//       description: formData.get("description"),
//       image: formData.get("file").name,
//       stockStatus: formData.get("stockStatus"),
//     };
//     try {
//         // console.log("Product Exists:", productExists);
//         //uploding image to cloudinary
//         const file = formData.get("file");

//       await Product.findByIdAndUpdate(productExists.id, update);
//       console.log("Product updated successfully:", productExists);
//     } catch (error) {
//       console.error("Error updating product:", error);
//     }
//   } else {
//     const newProduct = new Product({
//       name: formData.get("name"),
//       price: formData.get("price"),
//       quantity: formData.get("quantity"),
//       sold: 0,
//       category: formData.get("category"),
//       subcategory: formData.get("subcategory"),
//       description: formData.get("description"),
//       image: formData.get("file").name,
//       stockStatus: formData.get("stockStatus"),
//     });
//     try {
//       await newProduct.save();
//       console.log("Product added successfully:", newProduct);
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   }
//   revalidatePath("/products");
//   redirect("/products");
// };
// Add Product
export const addProduct = async (formData) => {
  await connectToDb();

  const productExists = await Product.findOne({
    product_id: formData.get("product_id"),
  });
  const file = formData.get("file");

  // Save the file to the public directory
  const uploadsDir = path.join(process.cwd(), "public", "uploads", "images");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Save the file to the public directory
  const filePath = path.join(uploadsDir, file.name);
  const fileUrl = `/uploads/images/${file.name}`;

  fs.writeFileSync(filePath, Buffer.from(await file.arrayBuffer()));
  console.log("File saved successfully:", filePath);
  console.log("File URL:", fileUrl);
  if (productExists) {
    let update = {
      quantity: productExists.quantity + parseInt(formData.get("quantity")),
      price: formData.get("price"),
      sold: productExists.sold,
      category: formData.get("category"),
      subcategory: formData.get("subcategory"),
      description: formData.get("description"),
      image: fileUrl,
      stockStatus: formData.get("stockStatus"),
    };
    try {
      await Product.findByIdAndUpdate(productExists.id, update);
      console.log("Product updated successfully:", productExists);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  } else {
    const newProduct = new Product({
      name: formData.get("name"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
      sold: 0,
      category: formData.get("category"),
      subcategory: formData.get("subcategory"),
      description: formData.get("description"),
      image: fileUrl,
      stockStatus: formData.get("stockStatus"),
    });
    try {
      await newProduct.save();
      console.log("Product added successfully:", newProduct);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  revalidatePath("/products");
  redirect("/products");
};

// Delete Product
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Product.findByIdAndDelete({
      _id: id,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/products");
};

// Update Product
export const updateProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  const product = await Product.findById({
    _id: id,
  });
  console.log(formData);
  if (!product) {
    console.error("Product not found");
    return { error: "Product not found" };
  }
  //uploding image to cloudinary
  // console
  const file = formData.get("image");
  const uploadsDir = path.join(process.cwd(), "public", "uploads", "images");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Save the file to the public directory
  const filePath = path.join(uploadsDir, file.name);
  const fileUrl = `/uploads/images/${file.name}`;

  fs.writeFileSync(filePath, Buffer.from(await file.arrayBuffer()));

  let update = {
    name: formData.get("name"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    sold: formData?.get("sold") || product.sold,
    category: formData.get("category"),
    subcategory: formData.get("subcategory"),
    description: formData.get("description"),
    image: fileUrl,
    stockStatus: formData.get("stockStatus"),
  };
  try {
    await Product.findByIdAndUpdate(id, update);
    console.log("Product updated successfully:", product);
  } catch (error) {
    console.error("Error updating product:", error);
  }
  revalidatePath("/products");
  redirect("/products");
};

// Update Product
