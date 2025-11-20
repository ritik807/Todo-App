![WhatsApp Image 2025-11-20 at 11 11 54_fa8ce6ac](https://github.com/user-attachments/assets/62dee693-7683-448c-8eb9-0de3deafc96d)# 📝 Full Stack Todo App (MERN)

A complete Full Stack **Todo Application** built using **MongoDB, Express, React, Node.js**.  
This project allows users to **add, edit, delete, and manage todo tasks** with a clean UI and secure backend.


## 🚀 Tech Stack

### **Frontend**
- React.js (Vite)
- Axios
- Tailwind CSS (if used)

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS & dotenv

---

## 📂 Project Structure

Todo-App/
├── Backend/
│ ├── server.js
│ ├── models/
│ ├── routes/
│ ├── package.json
│ └── .env
│
├── Frontend/
│ ├── index.html
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.js
│
├── .gitignore
└── README.md


---

## ⚙️ Backend Setup
cd Backend
npm install

### Create `.env` file
MONGO_URI=your_mongodb_connection_string
PORT=4000

### Run Backend Server
npm start

Backend will start on:
http://localhost:4000

## 🎨 Frontend Setup
cd Frontend
npm install
npm run dev

Frontend will run on:
http://localhost:5173

## 🧩 Features
- Add new todos
- Delete existing todos
- Mark todos as complete/incomplete
- Fully responsive UI
- REST API integrated
- MongoDB database support

## 🔗 API Endpoints

### **GET all todos**
GET /api/todos

### **POST new todo**
POST /api/todos

### **DELETE todo**
POST /api/todos/:id
---

## 🛠 How to Run Full Project Together

**Step 1:** Start Backend  
cd Backend
npm start

**Step 2:** Start Frontend 
cd Frontend
npm run dev


## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License
This project is open-source and available under the MIT License.
