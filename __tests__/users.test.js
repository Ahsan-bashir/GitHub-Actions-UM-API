const request = require('supertest');
const app = require('../src/app');

describe('User Management API Tests', () => {
  
  // Test GET all users
  describe('GET /api/users', () => {
    it('should return all users', async () => {
      const res = await request(app).get('/api/users');
      
      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toBeInstanceOf(Array);
      expect(res.body.count).toBeGreaterThanOrEqual(0);
    });
  });
  
  // Test GET single user
  describe('GET /api/users/:id', () => {
    it('should return a single user', async () => {
      const res = await request(app).get('/api/users/1');
      
      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('id');
      expect(res.body.data).toHaveProperty('name');
      expect(res.body.data).toHaveProperty('email');
    });
    
    it('should return 404 for non-existent user', async () => {
      const res = await request(app).get('/api/users/9999');
      
      expect(res.statusCode).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe('User not found');
    });
  });
  
  // Test POST create user
  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const newUser = {
        name: 'Test User',
        email: 'test@example.com',
        role: 'user'
      };
      
      const res = await request(app)
        .post('/api/users')
        .send(newUser);
      
      expect(res.statusCode).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('id');
      expect(res.body.data.name).toBe(newUser.name);
      expect(res.body.data.email).toBe(newUser.email);
    });
    
    it('should return 400 if name or email is missing', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({ name: 'Test User' }); // Missing email
      
      expect(res.statusCode).toBe(400);
      expect(res.body.success).toBe(false);
    });
  });
  
  // Test PUT update user
  describe('PUT /api/users/:id', () => {
    it('should update an existing user', async () => {
      const updates = {
        name: 'Updated Name',
        email: 'updated@example.com'
      };
      
      const res = await request(app)
        .put('/api/users/1')
        .send(updates);
      
      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe(updates.name);
    });
    
    it('should return 404 for non-existent user', async () => {
      const res = await request(app)
        .put('/api/users/9999')
        .send({ name: 'Test' });
      
      expect(res.statusCode).toBe(404);
    });
  });
  
  // Test DELETE user
  describe('DELETE /api/users/:id', () => {
    it('should delete a user', async () => {
      const res = await request(app).delete('/api/users/2');
      
      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe('User deleted successfully');
    });
    
    it('should return 404 for non-existent user', async () => {
      const res = await request(app).delete('/api/users/9999');
      
      expect(res.statusCode).toBe(404);
    });
  });
  
  // Test health check
  describe('GET /health', () => {
    it('should return server status', async () => {
      const res = await request(app).get('/health');
      
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe('OK');
    });
  });
});