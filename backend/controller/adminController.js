const { log } = require("console");
const Admin=require("../model/adminSchema")
const jwt = require("jsonwebtoken");




const adminLogin = async (req, res) => {
  try {
    const adminDetails = req.body;
    console.log(adminDetails);

    let admin = await Admin.findOne({ username: adminDetails.username });

    if (admin) {
      console.log(admin.password);
      console.log(adminDetails.password);
      if (admin.password == adminDetails.password) {
       
let user=adminDetails.username
        const token = jwt.sign(
          { id: admin._id, role: "admin" },
          process.env.JWT_SECRET,
          { expiresIn: "24hr" }
        );

        res.status(200).json({ token, user, success: true });  
      } else {
        console.log("incorree passssssss");
        res.status(200).json({ message: "invalid password" });
      }
    } else {
      res.status(200).json({ login: false, message: "invalid username" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message }); 
  }
};


module.exports={
  adminLogin,

}