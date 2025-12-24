# 📚 Lit Pick - Book Recommendations

<div align="center">

![Lit Pick Banner](public/litpick.png)

**Discover Your Next Favorite Book**

Personalized recommendations powered by cutting-edge ML algorithms

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-2.0+-green.svg)](https://flask.palletsprojects.com/)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

## ✨ Features

- 🤖 **Advanced Machine Learning** - Sophisticated recommendation algorithms that learn your preferences
- 🎯 **Personalized Suggestions** - Get book recommendations tailored specifically to your taste
- 📖 **Top 50 Books** - Browse curated lists of popular and trending books
- 🔍 **Smart Search** - Find books across multiple genres including Thrillers, Romance, Mystery, and more
- 💜 **Beautiful UI** - Modern, intuitive interface with smooth animations
- 📊 **Reading Analytics** - Track your reading habits and discover patterns

## 🚀 Quick Start

### Prerequisites

- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn

### Backend Setup (Flask)

```bash
# Clone the repository
git clone https://github.com/yourusername/lit-pick.git
cd lit-pick

# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables
cp .env.example .env
# Edit .env with your configuration

# Run the Flask server
flask run
```

The backend will be available at `http://localhost:5000`

### Frontend Setup (React)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
# or
yarn install

# Start development server
npm start
# or
yarn start
```

The frontend will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
lit-pick/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── models/
│   │   │   ├── book.py
│   │   │   └── user.py
│   │   ├── routes/
│   │   │   ├── recommendations.py
│   │   │   └── books.py
│   │   ├── ml/
│   │   │   ├── recommender.py
│   │   │   └── algorithms.py
│   │   └── utils/
│   ├── requirements.txt
│   ├── config.py
│   └── run.py
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookCard/
│   │   │   ├── Header/
│   │   │   └── SearchBar/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Top50.jsx
│   │   │   └── Recommendations.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
```

## 🔧 Configuration

### Backend Environment Variables

Create a `.env` file in the backend directory:

```env
FLASK_APP=run.py
FLASK_ENV=development
SECRET_KEY=your-secret-key-here
DATABASE_URL=sqlite:///litpick.db
ML_MODEL_PATH=models/recommender.pkl
```

### Frontend Environment Variables

Create a `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

## 🤖 Machine Learning Models

Lit Pick uses multiple ML algorithms for book recommendations:

- **Collaborative Filtering** - Recommendations based on similar users' preferences
- **Content-Based Filtering** - Suggestions based on book characteristics and genres
- **Hybrid Model** - Combines multiple approaches for optimal results
- **Neural Collaborative Filtering** - Deep learning approach for complex patterns

### Training the Model

```bash
cd backend
python -m app.ml.train --data data/books.csv --output models/
```

## 📡 API Documentation

### Endpoints

#### Get Recommendations
```http
GET /api/recommendations?user_id={user_id}&limit={limit}
```

#### Get Top 50 Books
```http
GET /api/books/top50?genre={genre}
```

#### Search Books
```http
GET /api/books/search?query={query}
```

#### Get Book Details
```http
GET /api/books/{book_id}
```

For full API documentation, visit `/api/docs` when running the server.

## 🎨 Tech Stack

### Backend
- **Flask** - Lightweight Python web framework
- **SQLAlchemy** - SQL toolkit and ORM
- **scikit-learn** - Machine learning library
- **pandas** - Data manipulation and analysis
- **NumPy** - Numerical computing

### Frontend
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Router** - Navigation
- **Framer Motion** - Animation library

## 🧪 Testing

### Backend Tests
```bash
cd backend
pytest tests/ -v
```

### Frontend Tests
```bash
cd frontend
npm test
# or
yarn test
```

## 📦 Deployment

### Backend Deployment (Heroku)
```bash
heroku create lit-pick-api
git push heroku main
heroku run flask db upgrade
```

### Frontend Deployment (Vercel)
```bash
cd frontend
npm run build
vercel --prod
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGithub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Book data sourced from [Goodreads API](https://www.goodreads.com/api)
- ML algorithms inspired by research papers on recommendation systems
- Icons and illustrations from various open-source projects


---

<div align="center">

Made with 💜 by the Lit Pick Team

⭐ Star us on GitHub — it helps!

</div>