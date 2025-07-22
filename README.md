# React-Flask E-Commerce Application

A full-stack e-commerce application built with React frontend and Flask backend.

## 🚀 Project Structure

```
React_Flask E-Commerce/
├── backend/                 # Flask API server
│   ├── venv/               # Python virtual environment
│   └── [Flask app files]  # To be implemented
├── frontend/               # React client application
│   ├── public/            # Static assets
│   ├── src/               # React source code
│   │   ├── components/    # Reusable React components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page components
│   │   ├── utils/         # Utility functions
│   │   ├── App.js         # Main App component
│   │   └── index.js       # Application entry point
│   ├── package.json       # Frontend dependencies
│   └── README.md          # Frontend documentation
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🛠️ Technology Stack

### Frontend
- **React 19.1.0** - JavaScript library for building user interfaces
- **React DOM** - DOM rendering for React
- **React Scripts** - Development and build tools
- **Testing Library** - Testing utilities for React components

### Backend
- **Flask** - Python web framework (to be implemented)
- **Python 3.9+** - Server-side programming language

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python 3.9 or higher
- npm or yarn

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Activate the virtual environment:
   ```bash
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. Install Flask and other dependencies:
   ```bash
   pip install flask flask-cors python-dotenv
   ```

4. Create and run the Flask application:
   ```bash
   python app.py
   ```

## 📦 Available Scripts

### Frontend Scripts
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

### Backend Scripts
- `python app.py` - Runs the Flask development server

## 🌟 Features (To Be Implemented)

- [ ] User authentication and authorization
- [ ] Product catalog with search and filtering
- [ ] Shopping cart functionality
- [ ] Checkout process
- [ ] Order management
- [ ] User profile management
- [ ] Admin panel for product management
- [ ] Payment integration
- [ ] Inventory management
- [ ] Email notifications

## 🗂️ API Endpoints (To Be Implemented)

```
GET    /api/products          # Get all products
GET    /api/products/:id      # Get single product
POST   /api/products          # Create product (admin)
PUT    /api/products/:id      # Update product (admin)
DELETE /api/products/:id      # Delete product (admin)

POST   /api/auth/register     # User registration
POST   /api/auth/login        # User login
POST   /api/auth/logout       # User logout

GET    /api/cart              # Get user cart
POST   /api/cart/add          # Add item to cart
PUT    /api/cart/update       # Update cart item
DELETE /api/cart/remove       # Remove item from cart

POST   /api/orders            # Create order
GET    /api/orders            # Get user orders
GET    /api/orders/:id        # Get single order
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:
```
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your-secret-key-here
DATABASE_URL=sqlite:///ecommerce.db
```

Create a `.env` file in the frontend directory for any API configuration:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm test
```

### Backend Testing
```bash
cd backend
python -m pytest
```

## 📚 Learn More

- [React Documentation](https://reactjs.org/)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Known Issues

- Backend Flask application needs to be implemented
- Database models need to be created
- Authentication system needs to be set up

## 📝 TODO

- [ ] Set up Flask application structure
- [ ] Implement database models
- [ ] Create API endpoints
- [ ] Set up authentication
- [ ] Implement frontend components
- [ ] Add styling (CSS/Sass or styled-components)
- [ ] Add state management (Redux or Context API)
- [ ] Implement routing
- [ ] Add form validation
- [ ] Set up testing framework
- [ ] Add error handling
- [ ] Implement logging
- [ ] Add API documentation (Swagger)
- [ ] Set up CI/CD pipeline

---

**Note**: This is a development setup. For production deployment, additional configuration for security, performance optimization, and environment setup will be required.
