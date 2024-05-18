import editor from "../models/editor.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerEditor = async (req, res) => {
  const { username, email, password, phoneNumber } = req.body;
  console.log(req.body);

  try {
    const existingEditor = await editor.findOne({ email });

    if (existingEditor) {
      return res.status(400).json({ mssg: "Email already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newEditor = await editor.create({
      username,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    res.status(201).json({ registered: newEditor });
  } catch (error) {
    console.error("Error registering editor:", error);
    res.status(500).json({ mssg: "Internal Server Error" });
  }
};

export const loginEditor = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingEditor = await editor.findOne({ email });

    if (!existingEditor) {
      return res.status(400).json({ mssg: "No editor found with this email" });
    }

    const isPasswordValid = bcryptjs.compareSync(
      password,
      existingEditor.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ mssg: "Incorrect password" });
    }

    const token = jwt.sign({ id: existingEditor._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ token: token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ mssg: "Internal Server Error" });
  }
};
