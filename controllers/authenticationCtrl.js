const userSchema = require("../models/userSchema");
const bcrypt = require('bcrypt')

async function registrationCtrl(req, res) {
    const { name, email, password } = req.body

    if (!name) return res.json({
        error: "name is required"
    })

    if (!email) return res.json({
        error: "email is required"
    })

    if (!password) return res.json({
        error: 'Password is required'
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userSchema({
        name,
        email,
        password: hashedPassword
    });

    await user.save()

    res.status(200).json({
        message: "registration successful!!",
        status: "success",
        data: user
    })
}

async function loginCtrl(req, res) {
    const { email, password } = req.body
    // Check for missing inputs
    if (!email || !password) {
        return res.status(400).json({ success: false, error: 'Email and password are required' });
    }

    //Check if user exists
    const existingUser = await userSchema.findOne({ email });
    if (!existingUser) {
        return res.status(404).json({ success: false, error: 'Email is not registered' });
    }

    // Compare password
    const isMatched = await bcrypt.compare(password, existingUser.password);
    if (!isMatched) {
        return res.status(401).json({ success: false, error: 'Incorrect password' });
    }

    res.status(200).json({
        message: "Login successful",
        status: "success"
    });
}

async function getAllUser(req, res) {
    try {
        const users = await userSchema.find();

        if (!users || users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No users found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching users"
        });
    }
}
module.exports = { registrationCtrl, loginCtrl, getAllUser }