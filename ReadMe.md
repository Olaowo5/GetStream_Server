# Stream Chat Token Server

This is a simple **Express.js** server that generates user authentication tokens for **Stream Chat**. It provides an endpoint that clients can call to get a valid token for **Stream's real-time messaging API**.

## Features
- Generates Stream Chat user tokens
- Uses **Express.js** for the backend
- Supports **CORS** for cross-origin requests
- Uses environment variables for API keys
- Simple error handling

## Prerequisites
Before running the server, ensure you have the following:
- **Node.js** installed
- **Stream Chat API keys** (available from [GetStream.io](https://getstream.io/))

## Installation
1. Clone the repository:
   ```sh
   git clone <repo_url>
   cd <project_directory>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the project root with the following contents:
   ```env
   STREAM_KEY=your_stream_api_key
   STREAM_SECRET=your_stream_secret_key
   PORT=5000
   ```

## Running the Server
Start the Express server:
```sh
node app.js
```
The server will run on **http://localhost:5000**.

## API Endpoint
### **POST /connect**
Generates a user token.
#### **Request:**
- **Body:**
  ```json
  {
    "user_id": "test_user_123"
  }
  ```
#### **Response:**
- **Success (200):**
  ```json
  {
    "token": "generated_stream_token_here"
  }
  ```
- **Error (400):**
  ```json
  {
    "error_msg": "please supply user_id"
  }
  ```

## Integration with React App
The **React client** can call this backend to retrieve tokens:
```js
fetch("http://localhost:${PORT}/connect", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ user_id: "test_user_123" })
})
  .then(res => res.json())
  .then(data => console.log("Token:", data.token))
  .catch(err => console.error(err));
```



---
This server acts as the authentication backend for the **Stream Chat-based React app**. 🚀

