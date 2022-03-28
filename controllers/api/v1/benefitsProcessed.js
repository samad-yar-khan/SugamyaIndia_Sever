const Benefit = require("../../../models/benefits");
const ProcessedBenefit = require("../../../models/benefitsProcessed")

module.exports.create = async function (req, res) {

	try {    
        let BenefitID = req.query.id;
        let user = req.user.id;
        const benefit = await Benefit.findById(BenefitID);
        if(!benefit){
            return res.status(401).json({
				message: "Invalid Benefit",
                success : false
			});
        }

      
        const benefitCount = await ProcessedBenefit.count({benefit:benefit.id , user:user});
        if(benefitCount){
            return res.status(401).json({
				message: "Duplicate Request",
                success : false
			});
        }

        if(!req.user.beneficiary){
            return res.status(401).json({
				message: "Invalid Benficiary",
                success : false
			});
        }

        const newBenefit = await ProcessedBenefit.create({
            user : user,
            benefit:benefit.id,
            approved:false,
            pending: true
        });

		if (newBenefit!==null) {

			return res.status(200).json({
				message: "Benefit Queued",
				success: true,
                newBenefit : newBenefit
			});
		} else {
			return res.status(401).json({
				message: "Internal Server Error",
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

module.exports.approve = async function (req, res) {
	try {

        if(req.user.official){

            let updatedBenefitPro = await ProcessedBenefit.updateOne(
                {
                    id : req.params.id
                },{
                    approved : true,
                    pending : false
                });

                return res.status(200).json({
                    success : true,
                    message: "Approved Benefit",
                    updatedBenefitPro : updatedBenefitPro
                });

        }else{
            return res.status(500).json({
                success : false,
                message: "Unauthorized",
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


module.exports.disapprove = async function (req, res) {
	try {

        if(req.user.official){

            let updatedBenefitPro = await ProcessedBenefit.updateOne(
                {
                    id : req.params.id
                },{
                    approved : false,
                    pending : false
                });

                return res.status(200).json({
                    success : true,
                    message: "Disapproved Benefit",
                    updatedBenefitPro : updatedBenefitPro
                });

        }else{
            return res.status(500).json({
                success : false,
                message: "Unauthorized",
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

module.exports.all = async function (req, res) {
	try {

        if(req.user.official){

            let disableData = await ProcessedBenefit.find({}).populate({
                path : "Benefit"
            });

            return res.status(200).json({
                success : true,
                disableData : disableData
            });

        }else{
            return res.status(500).json({
                success : false,
                message: "Unauthorized",
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

