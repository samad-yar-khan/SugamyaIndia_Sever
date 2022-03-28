const Benefit = require("../../../models/benefits");


module.exports.create = async function (req, res) {
	try {

        if(req.user.official !== true){
            return res.status(500).json({
                success :false,
                message: "Benefit can only be added by Officals",
            });
        }
        let benefit_name = req.body.benefit_name;
        let benefit_code = req.body.benefit_code;
        let benefitCountName = await Benefit.count({ benefit_name : benefit_name });
        let benefitCountCode = await Benefit.count({ benefit_code : benefit_code });
        if(benefitCountName + benefitCountCode > 0){
            return res.status(200).json({
                message: "Duplicate Entry !",
                success: false,
            });
        }

		let benefit = await Benefit.create({
			benefit_name: benefit_name,
            benefit_code: benefit_code,
            details : req.body.details
		});


		return res.status(200).json({
			data: {
				benefit: benefit,
			},
			message: "benefit created!",
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
                message: "benefit can only be removed by Officals",
            });
        }

		let benefit = await Benefit.findById(req.params.id);
		if (benefit!==null) {
			benefit.remove();
			return res.status(200).json({
				message: "benefit deleted successfully",
				success: true,
			});
		} else {
			return res.status(401).json({
				message: "benefit not found !",
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

module.exports.getBenefits = async function (req, res) {

	try {

        const benefits = await Benefit.find({});
		if (benefits!==null) {

			return res.status(200).json({
				message: "Benefits fetched successfully",
				success: true,
                benefits : benefits
			});
		} else {
			return res.status(401).json({
				message: "No Benefits to fetch",
                success : false
			});
		}
	} catch (err) {
		console.log("Error in getting Benefits", err);
		return res.status(500).json({
            success : false,
			message: "Internal server error",
		});
	}
};