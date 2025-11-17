# User Management API - GitHub Actions Project

![Node.js CI](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/workflows/Node.js%20CI/badge.svg)

Express.js REST API for user management with automated testing using GitHub Actions.

## 🚀 Features

- ✅ Full CRUD operations for user management
- ✅ RESTful API design
- ✅ Comprehensive test coverage with Jest
- ✅ Automated CI/CD with GitHub Actions
- ✅ Multi-version Node.js testing (18.x, 20.x, 22.x)

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |
| GET | `/health` | Health check |

## 🛠️ Installation
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Navigate to project directory
cd YOUR_REPO_NAME

# Install dependencies
npm install

# Run the server
npm start

# Run in development mode
npm run dev

# Run tests
npm test


## 📝 Example Usage

### Get all users
```bash
curl http://localhost:3000/api/users
```

### Create a new user
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","role":"user"}'
```

### Get user by ID
```bash
curl http://localhost:3000/api/users/1
```

### Update user
```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"John Updated"}'
```

### Delete user
```bash
curl -X DELETE http://localhost:3000/api/users/1
```

## 🧪 Testing

This project uses Jest and Supertest for testing.
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## 🔄 CI/CD Pipeline

The project uses GitHub Actions for continuous integration:

- ✅ Runs on every push and pull request
- ✅ Tests against Node.js versions 18.x, 20.x, and 22.x
- ✅ Caches dependencies for faster builds
- ✅ Provides test coverage reports

## 📊 Test Coverage

Current test coverage includes:
- All CRUD operations
- Error handling (404, 400 responses)
- Input validation
- Health check endpoint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Ahsan Bashir - [@yourtwitter](https://twitter.com/yourtwitter)