const { default: mongoose } = require("mongoose");

const ConnectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection Successful");
  } catch (error) {
    console.log("database connection failed", error.message);
  }
};
export default ConnectionDB;
