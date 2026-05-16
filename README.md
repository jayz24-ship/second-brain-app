# Second Brain App

Second Brain App is an AI-powered personal knowledge management platform where users can save and organize important content from platforms like YouTube, Twitter, Instagram, articles, and other web sources. The application acts as a centralized memory layer for users and can be integrated with LLMs to provide richer context-aware responses using the user's saved knowledge base.

---

## Features

### User Features

* Save important posts, links, tweets, videos, and resources from multiple platforms
* Organize personal knowledge in one centralized workspace
* JWT-based secure authentication and authorization
* Responsive modern UI for seamless access across devices
* Personal knowledge retrieval and management
* Context-aware AI integration support

### AI & LLM Features

* Uses saved user knowledge as contextual memory for LLM interactions
* Enhances AI responses with personalized context retrieval
* Supports retrieval-based workflows for better AI-generated answers
* Designed to work as a personal AI memory/knowledge base

### Backend Features

* RESTful API architecture
* MongoDB database integration
* Scalable Node.js + Express backend
* Secure token-based authentication
* CRUD operations for content management
* Efficient content storage and retrieval

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JWT Authentication

---

## Project Structure

```bash
second-brain-app/
│
├── frontend/
├── backend/
├── package.json
└── README.md
```

---

## Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/jayz24-ship/second-brain-app.git
cd second-brain-app
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside backend directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run backend server:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

### Backend `.env`

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## API Features

* User Authentication
* Content Saving & Retrieval
* Knowledge Management
* Protected Routes
* Token Verification
* CRUD Operations
* AI Context Retrieval Support

---

## Future Improvements

* Vector database integration for semantic search
* RAG (Retrieval-Augmented Generation) pipeline
* AI-powered summarization
* Smart tagging and categorization
* Browser extension for one-click saving
* Semantic search using embeddings
* LLM memory optimization
* Real-time collaboration
* Multi-platform integrations

---




