// const Tweets = require("../../../models/tweets");
// const Follow = require("../../../models/follow")
const User = require("../../../models/user");
const Disability = require("../../../models/disabilities");
const Disabeled = require("../../../models/disabeled")

module.exports.create = async function (req, res) {
	try {

        if(req.user.official !== true){
            return res.status(500).json({
                success :false,
                message: "Disability can only be added by Officals",
            });
        }
        let disability_name = req.body.disability_name;
        let disability_code = req.body.disability_code;
        let disabilityCountName = await Disabeled.count({ disability_name : disability_name });
        let disabilityCountCode = await Disabeled.count({ disability_code : disability_code });
        if(disabilityCountCode + disabilityCountName > 0){
            return res.status(200).json({
                message: "Duplicate Entry !",
                success: false,
            });
        }

		let disability = await Disability.create({
			disability_name: disability_name,
            disability_code: disability_code
		});


		return res.status(200).json({
			data: {
				disability: disability,
			},
			message: "Disability created!",
			success: true,
		});
	} catch (error) {
		return res.status(500).json({
            success :false,
			message: "Internal server error",
		});
	}
};

module.exports.destroy = async function (req, res) {
	try {

        if(req.user.official !== true){
            return res.status(500).json({
                success :false,
                message: "Disability can only be removed by Officals",
            });
        }

		let disability = await Disability.findById(req.params.id);
		if (disability!==null) {
			disability.remove();
			return res.status(200).json({
				message: "Disability deleted successfully",
				success: true,
			});
		} else {
			return res.status(401).json({
				message: "Disability not found !",
                success : false
			});
		}
	} catch (err) {
		// console.log("Error in deleting post******:", err);
		return res.status(500).json({
            success : false,
			message: "Internal server error",
		});
	}
};

module.exports.getDisabilities = async function (req, res) {

	try {

        const disabilities = await Disability.find({});
		if (disabilities!==null) {

			return res.status(200).json({
				message: "Disabilities fetched successfully",
				success: true,
                disabilities : disabilities
			});
		} else {
			return res.status(401).json({
				message: "No Disabilities to fetch",
                success : false
			});
		}
	} catch (err) {
		console.log("Error in getting disabilities", err);
		return res.status(500).json({
            success : false,
			message: "Internal server error",
		});
	}
};