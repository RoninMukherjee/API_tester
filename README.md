# API Tester

API Tester is a web-based application designed to facilitate testing and debugging of APIs. It allows users to construct and send API requests with customizable headers, query parameters, request bodies, and authentication types, then view the responses directly in the browser.

---

## Features

- **HTTP Methods**: Supports GET, POST, PUT, DELETE, and other HTTP methods.
- **Dynamic Query Parameters and Headers**: Easily add, edit, and remove query parameters and headers.
- **Authentication**:
  - Basic Authentication
  - Bearer Token Authentication
  - API Key Authentication (Header or Query Param)
- **Request Body**: Send raw JSON data for POST/PUT requests.
- **Response Viewer**: Displays API response data and headers in a formatted, readable layout.

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **HTTP Requests**: Axios library
- **Environment Variables**: dotenv

---

## Setup Instructions

### Prerequisites

- Node.js installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/api-tester.git
   ```

2. Navigate to the project directory:
   ```bash
   cd api-tester
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and specify the port (optional):
   ```env
   PORT=3000
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Usage

1. Select the HTTP method (e.g., GET, POST).
2. Enter the endpoint URL.
3. Add query parameters and headers as needed.
4. Choose an authentication type if required:
   - Basic Auth: Enter username and password.
   - Bearer Token: Enter the token.
   - API Key: Enter the key-value pair and specify if it should be added to headers or query parameters.
5. (Optional) Add a request body for POST/PUT requests.
6. Click **Send Request**.
7. View the API response and headers in the designated sections.

---

## File Structure

```plaintext
api-tester/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js
├── package.json
├── .env
└── README.md
```

---

## API Endpoint (Backend)

### POST `/apireq`

Handles API requests sent from the client-side.

#### Request Body
```json
{
  "reqmethod": "POST",
  "endpoint": "https://api.example.com/resource",
  "params": {
    "key1": "value1",
    "key2": "value2"
  },
  "headers": {
    "Header-Key": "Header-Value"
  },
  "auth": {
    "type": "basic",
    "username": "user",
    "password": "pass"
  },
  "body": "{\"data\": \"value\"}"
}
```

#### Response
```json
{
  "data": { "responseKey": "responseValue" },
  "headers": { "Response-Header": "Header-Value" },
  "status": 200
}
```

---

## Dependencies

- express
- axios
- dotenv

---

## Future Enhancements

- Save frequently used requests for reusability.
- Support for file uploads in the request body.
- Enhanced response viewer with syntax highlighting.
- Export and import request configurations.

---


