const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// In-memory database (array)
let users = [
  { id: 1, name: 'Ahsan Bashir', email: 'dev@gmail.com', role: 'admin' },
  { id: 2, name: 'Bilal Shakeel', email: 'bilal@gmail.com', role: 'user' }
];

let nextId = 3;

// Routes

// GET /api/users - Get all users
app.get('/api/users', (req, res) => {
  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
});

// GET /api/users/:id - Get single user
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: user
  });
});

// POST /api/users - Create new user
app.post('/api/users', (req, res) => {
  const { name, email, role } = req.body;
  
  // Basic validation
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Please provide name and email'
    });
  }
  
  const newUser = {
    id: nextId++,
    name,
    email,
    role: role || 'user'
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    data: newUser
  });
});

// PUT /api/users/:id - Update user
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  const { name, email, role } = req.body;
  
  if (name) user.name = name;
  if (email) user.email = email;
  if (role) user.role = role;
  
  res.status(200).json({
    success: true,
    data: user
  });
});

// DELETE /api/users/:id - Delete user
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  users.splice(index, 1);
  
  res.status(200).json({
    success: true,
    message: 'User deleted successfully'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

module.exports = app;