const User = require('../models/user');
const {hashPassword, comparePassword } = require ('../helpers/auth')
const jwt = require ('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working')
};

//Register Endpoint
const registerUser = async (req, res) => {
    try {
        const {userName, email, password} = req.body;
        // check is userName is match
        if(!userName){
            return res.json({
                error:'Enter a valid user name'
            });
        }


        // check is password is good
        if(!password || password.length <5){
            return res.json({
                error:'Password is required and should be at least 5 charachters long'
            });
        }
        // check email
        const exist = await User.findOne({email});
        if (exist){
            return res.json({
                error: 'Email is taken already'
            });
        }


        const hashedPassword = await hashPassword(password)
        // create user in database
        const user = await User.create({
            userName,
            email,
            password: hashedPassword,
        });

        return res.json(user);
    } catch (error) {
        console.log(error);
    }
};

//Login Endpoint
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        //check if user exists
        const user = await User.findOne ({email});
        if(!user) {
            return res.json({
                error: 'No user found'
            })
        }

        //check if passwords match
        const match = await comparePassword(password, user.password)
        if(match) {
         jwt.sign({email: user.email, id: user._id, role:user.role, userName:user.userName}, process.env.JWT_SECRET,{}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json(user)
            
            console.log(user);
            
         })
        } 
        if(!match){
            res.json({
                error: "Password do not match"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res) =>{
    const {token} = req.cookies
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET,{}, (err, user) => {
           if (err) throw err;
           console.log(user)
           res.json(user)

        })
    } else {
        res.json(null)
    }
    }
    const deleteUser = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming you have middleware to extract user information from the token

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Delete the user
        await user.remove();

        res.clearCookie('token'); // Clear the token cookie upon successful deletion
        res.json({ message: 'User account deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    deleteUser
};