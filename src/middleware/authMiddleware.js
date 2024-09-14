import {verifyToken} from '../utils/tokens.js'
import User from "../models/userModel.js";

const product = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
        token = req.headers.authorization.split(" ")[1]
        const decoded = verifyToken(token, process.env.JWT_SECRET)
        req.user = await User.findOne(decoded._id   ).select("-password")
        next()
    } catch (error) {
        res.status(401).json({message:"Unathorized token, Token Failed"})
    }
  }
};

export default product;
