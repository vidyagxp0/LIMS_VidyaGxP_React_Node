import checker from "validator";
// import { StatusCodes } from "http-status-codes";

export const validate = (req, res, next) => {
    const errors = [];
    if (!checker.isEmail(req.body.email)) {
        errors.push("Invalid email");
    }

    if (!checker.isLength(req.body.password, { min: 6 })) {
        errors.push("Password must be at least 6 characters");
    }

    if (errors.length > 0) {
        return res.status(400).json({
            error: true,
            message: errors.join(", "),
        });
    }

    next();
}