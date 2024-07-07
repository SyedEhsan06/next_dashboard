"use server";
import fs from "fs";
import path from "path";
import { connectToDb } from "./DbConnect";
import User from "@/schemas/Users.schema";
import Product from "@/schemas/Products.schema";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to upload image to Cloudinary
const uploadImagetoCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      upload_preset: "ml_default",
    });
    return result.url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};

// Function to handle image upload process
const handleImageUpload = async (file) => {
  if (!file) {
    console.error("No file found in formData");
    throw new Error("No file provided");
  }

  // Saving the file temporarily to upload to Cloudinary
  const uploadsDir = path.join(process.cwd(), "uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  const tempFilePath = path.join(uploadsDir, file.name);
  const arrayBuffer = await file.arrayBuffer();
  fs.writeFileSync(tempFilePath, Buffer.from(arrayBuffer));

  // Upload the image to Cloudinary
  let fileUrl;
  try {
    fileUrl = await uploadImagetoCloudinary(tempFilePath);
  } catch (error) {
    console.error("Failed to upload image to Cloudinary:", error);
    throw new Error("Failed to upload image");
  } finally {
    // Clean up the temporary file
    fs.unlinkSync(tempFilePath);
  }

  return fileUrl;
};

// Add User
export const addUser = async (formData) => {
  await connectToDb();

  const userExists = await User.findOne({ email: formData.get("email") });
  if (userExists) {
    console.error("User already exists:", userExists);
    return { error: "User already exists" };
  }

  const fileUrl = await handleImageUpload(formData.get("file"));

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(formData.get("password"), salt);

  const newUser = new User({
    firstName: formData.get("first_name"),
    lastName: formData.get("last_name"),
    email: formData.get("email"),
    password: hashedPassword,
    phone: formData.get("phone"),
    role: formData.get("role"),
    status: formData.get("status"),
    image: fileUrl,
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
  } catch (error) {
    console.error("Error adding user:", error);
  }

  revalidatePath("/users");
  redirect("/users");
};

// Delete User
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/users");
};

// Update User
export const updateUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  const user = await User.findById(id);
  if (!user) {
    console.error("User not found");
    return { error: "User not found" };
  }

  const fileUrl = await handleImageUpload(formData.get("image"));

  const update = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    role: formData.get("role"),
    status: formData.get("status"),
    image: fileUrl,
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
  } catch (error) {
    console.error("Error updating user:", error);
  }

  revalidatePath("/users");
  redirect("/users");
};

// Add Product
export const addProduct = async (formData) => {
  await connectToDb();

  const productExists = await Product.findOne({
    product_id: formData.get("product_id"),
  });

  const fileUrl = await handleImageUpload(formData.get("file"));

  if (productExists) {
    const update = {
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
    } catch (error) {
      console.error("Error updating product:", error);
    }
  } else {
    const newProduct = new Product({
      name: formData.get("name"),
      product_id: formData.get("product_id"),
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
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/products");
};

// Update Product
export const updateProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  const product = await Product.findById(id);
  if (!product) {
    console.error("Product not found");
    return { error: "Product not found" };
  }

  const fileUrl = await handleImageUpload(formData.get("image"));

  const update = {
    name: formData.get("name"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    sold: formData.get("sold") || product.sold,
    category: formData.get("category"),
    subcategory: formData.get("subcategory"),
    description: formData.get("description"),
    image: fileUrl,
    stockStatus: formData.get("stockStatus"),
  };

  try {
    await Product.findByIdAndUpdate(id, update);
  } catch (error) {
    console.error("Error updating product:", error);
  }

  revalidatePath("/products");
  redirect("/products");
};
