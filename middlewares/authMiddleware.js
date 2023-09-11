const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {

  try {
    const cookies = {};
    const cookiesArray = req.headers.cookie.split(';');
    cookiesArray.forEach((cookie) => {
      const [key, value] = cookie.trim().split('=');
      cookies[key] = value;
    });
    const token = cookies?.token

    // console.log("req.cookies.token", req.headers["authorization"].split('=')[1]);
    // const token = req.headers["authorization"].split(" ")[1];
    // const token = req.headers["authorization"].split('=')[1];
    console.log('token', token);
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log('err', err);
        return res.status(401).send({
          message: "Auth failed token err",
          success: false,
        })
      } else {
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    return res.status(401).send({
      message: "Auth failed",
      success: false,
    });
  }
};
