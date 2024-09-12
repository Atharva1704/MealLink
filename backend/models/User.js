import mongoose from "mongoose";

// type(student, admin, mentor), name, mobile number, email, college, Year of graduation, Programme enrolled(MCA, BCA, BTech, MTech, Other)

const UserSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            // required: true,
            enum: ["student", "admin", "mentor"],
        },
        name: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        phone: {
            type: Number,
        },
        college: {
            type: String,
            min: 5,
            default: "",
        },
        yearOfGraduation: {
            type: Number,
            default: 0,
        },
        programmeEnrolled: {
            type: String,
            enum: ["BTech", "MTech", "BCA", "MCA"],
        },
        coursesAccessed: {
            type: [String],
            // type: {User},
            default: [],
        }
    }, {
    timestamps: true,
}
);

const User = mongoose.model("User", UserSchema);
export default User;