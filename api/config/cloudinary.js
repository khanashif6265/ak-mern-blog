import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'
dotenv.config()
// Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLODINARY_API_NAME, 
        api_key:process.env.CLODINARY_API_KEY, 
        api_secret: process.env.CLODINARY_API_SECRET
    });

    export default cloudinary