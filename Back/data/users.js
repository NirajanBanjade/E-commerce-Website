import bcrypt from 'bcryptjs';

const userProfile=[
    {
        name:'First User',
        email:'first@gmail.com',
        password:bcrypt.hashSync('1234567',10),
        isAdmin:true
    },
    {
        name:'Second User',
        email:'Second@gmail.com',
        password:bcrypt.hashSync('1234567',10),
        isAdmin:false
    },
    {
        name:'Third User',
        email:'third@gmail.com',
        password:bcrypt.hashSync('1234567',10),
        isAdmin:false
    }

];
export default userProfile;