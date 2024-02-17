const {z}=require('zod');

const loginSchema=z.object({
    email:z
    .string({required_error:"Email is required"})
    .email({message:"Invalid Email Address"})
    .trim()
    .min(4,{message:"Email must  be ata least of 4 chars"})
    .max(255,{message:"Email must  be at least of 255 chars"}),

    password:z
    .string({required_error:"Password is require"})
    .trim()
    .min(7,{message:"password must  be ata least of 4 chars"})
    .max(10,{message:"password must  be ata least of 255 chars"})



})

module.exports = loginSchema;