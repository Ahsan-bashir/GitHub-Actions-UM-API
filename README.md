# User Management API - Multi-Environment CI/CD

![Node.js CI](https://github.com/Ahsan-bashir/GitHub-Actions-UM-API/workflows/Node.js%20CI/badge.svg)

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


## 🔍 Code Quality

This project maintains high code quality standards using:

### Linting
- **ESLint** for JavaScript code quality
- Enforces consistent coding style
- Catches common errors and anti-patterns

### Formatting
- **Prettier** for automatic code formatting
- Ensures consistent code style across the project

### Available Scripts
```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Check code formatting
npm run format:check

# Format all files
npm run format

# Run all quality checks (lint + format + test)
npm run quality
```

### Pre-commit Hooks
This project uses Husky to run linting and formatting before each commit, ensuring only quality code is committed.

### CI/CD Pipeline

Our GitHub Actions workflow includes:
1. **Lint Job** - Runs ESLint and Prettier checks
2. **Test Job** - Runs on Node.js 18.x, 20.x, and 22.x (parallel)
3. **Build Job** - Validates build and checks for security vulnerabilities

The test job only runs if linting passes, saving CI resources.

![Workflow](https://via.placeholder.com/800x200/4CAF50/FFFFFF?text=Lint+%E2%86%92+Test+(18,20,22)+%7C%7C+Build)

![Backend CI](https://github.com/Ahsan-bashir/GitHub-Actions-UM-API/workflows/Backend%20CI/badge.svg)
![Frontend CI](https://github.com/Ahsan-bashir/GitHub-Actions-UM-API/workflows/Frontend%20CI/badge.svg)
![Deploy](https://github.com/Ahsan-bashir/GitHub-Actions-UM-API/workflows/Deploy%20to%20Environments/badge.svg)

A full-stack User Management application with automated multi-environment CI/CD pipeline using GitHub Actions.

## 🏗️ Architecture
```
┌─────────────────┐         ┌─────────────────┐
│  React Frontend │ ◄─────► │  Express API    │
│     (Vite)      │         │    (Node.js)    │
└─────────────────┘         └─────────────────┘

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