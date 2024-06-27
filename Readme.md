# Back-End MERN API

## Overview

This project is a backend for the MERN stack Joke App. It includes various features such as user authentication, file uploads, and image handling. The Back-End is deployed on Render.

## Features

- User authentication with JWT
- Password hashing with bcryptjs
- File uploads using multer
- Image handling with Cloudinary
- HTTP request handling with axios
- Environment variable management with dotenv
- CORS support
- Cookie parsing

## Technologies Used

- **Axios**: For making HTTP requests
- **Bcryptjs**: For hashing passwords
- **Cloudinary**: For image storage and handling
- **Cookie-parser**: For parsing cookies
- **CORS**: For enabling Cross-Origin Resource Sharing
- **Dotenv**: For managing environment variables
- **Express**: Web framework for Node.js
- **Jsonwebtoken**: For generating and verifying JSON Web Tokens
- **Mongoose**: For MongoDB object modeling for new User.
- **Multer**: For handling multipart/form-data (file uploads)
- **UUID**: For generating unique user keys.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/AmitSutradhar001/back-end-mern-api.git
    cd back-end-mern-api
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add your configurations:
    ```env
    MONGO_PASSWORD=your_mongodb_password. 
    SECRET=your_jwt_secret
    CLOUDINARY_NAME=your_cloudinary_cloud_name
    CLOUDINARY_KEY=your_cloudinary_api_key
    CLOUDINARY_SECRET=your_cloudinary_api_secret
    PORT=your port
    ```

4. **Start the server:**
    ```bash
    npm dev
    ```

## API Endpoints

- **User Authentication**
    - **POST /login**: Verify a existing user and send the jwt token.
    - **POST /signup**: Create a new user and save the img in cloudinary using multer and store the new user in mongodb. 
    - **GET /current-user**: Get the current logged in user data.
    - **GET /changekey**: Change the current user's userKey and save it in mongodb.


## Deployment

The application is deployed on Render. You can access it at: https://back-end-mern-api.onrender.com

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgements

- [Axios](https://axios-http.com/)
- [Bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [Cloudinary](https://cloudinary.com/)
- [Cookie-parser](https://github.com/expressjs/cookie-parser)
- [CORS](https://github.com/expressjs/cors)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Express](https://expressjs.com/)
- [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [Mongoose](https://mongoosejs.com/)
- [Multer](https://github.com/expressjs/multer)
- [UUID](https://github.com/uuidjs/uuid)
