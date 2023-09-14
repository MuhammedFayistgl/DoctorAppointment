const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
	try {
		// const cookies = {};
		// const cookiesArray = req.headers.cookie.split(";");
		// console.log('midlwer');
		// cookiesArray.forEach((cookie) => {
		// 	const [key, value] = cookie.trim().split("=");
		// 	cookies[key] = value;
		// });
		// const token = req.body.token.split('=')[1]
		//     if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
		//     return req.headers.authorization.split(' ')[1];
		// else if (req.query && req.query.token)
		//     return req.query.token;

		//     console.log('ss',s);
		// console.log("req.cookies.token", ;
		// const token = req.headers["authorization"].split(" ")[1];
		// const token = req.headers["authorization"].split('=')[1];
		// console.log('token', token);
		// console.log("token", req.body.userId.split('=')[1]);
		
		console.log(req.headers);
		const token = req.headers["authorization"].split("=")[1];
		jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (err) {
				console.log("err", err);
				return res.status(401).send({
					message: "Auth failed token err",
					success: false,
				});
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
