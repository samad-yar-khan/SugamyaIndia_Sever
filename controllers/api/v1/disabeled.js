const Disability = require("../../../models/disabilities");
const Disabeled = require("../../../models/disabeled")

module.exports.create = async function (req, res) {

	try {    
        let disabilityID = req.query.id;
        let user = req.user.id;
        const disability = await Disability.findById(disabilityID);
        if(!disability){
            return res.status(401).json({
				message: "Invalid Disability",
                success : false
			});
        }

      
        const disabeledCount = await Disabeled.count({disability:disability.id , user:user});
        if(disabeledCount){
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

        const newDisabeled = await Disabeled.create({
            user : user,
            disability:disability.id,
            approved:false,
            pending: true
        });

		if (newDisabeled!==null) {

			return res.status(200).json({
				message: "Disabile Person Added",
				success: true,
                newDisabeled : newDisabeled
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

            let updatedDisabled = await Disabeled.updateOne(
                {
                    id : req.params.id
                },{
                    approved : true,
                    pending : false
                });

                return res.status(200).json({
                    success : true,
                    message: "Approved Diability",
                    updatedDisabled : updatedDisabled
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

            let updatedDisabled = await Disabeled.updateOne(
                {
                    id : req.params.id
                },{
                    approved : false,
                    pending : false
                });

                return res.status(200).json({
                    success : true,
                    message: "Approved Diability",
                    updatedDisabled : updatedDisabled
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

            let disableData = await Disabeled.find({}).populate({
                path : "disability"
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

