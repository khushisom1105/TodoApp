const express = require("express");
const router = express.Router();

const { signUp ,signIn } = require("../controller/userAuth");
const { 
    validateSignUpRequest,
    isRequestValidated, 
    // isRequestValidated,
    validateSignInRequest 
} = require("../validators/index");

router.route("/signUp").post(validateSignUpRequest,isRequestValidated,signUp); 
router.route("/signIn").post(isRequestValidated,signIn);
module.exports = router;

   