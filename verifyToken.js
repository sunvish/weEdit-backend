import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    res.json({ mssg: "not authenticated" });
  }
  const editorId = jwt.verify(token, process.env.SECRET_KEY);
  console.log(editorId.id);

  req.editorId = editorId.id;
  next();
};
