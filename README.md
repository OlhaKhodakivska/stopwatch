# ⏱️ Stopwatch

A simple **Stopwatch application** created as a homework project for **Prog Academy**.  
The project demonstrates basic JavaScript timing logic, DOM manipulation, and clean UI state handling.

---

## 🔗 Live Demo

👉 https://olhakhodakivska.github.io/stopwatch/

---

# 📸 Preview

## 🖥️ Main Interface

<!-- Add main screenshot here -->
<img width="1180" height="380" alt="Screenshot from 2026-05-12 12-29-51" src="https://github.com/user-attachments/assets/bbc672f7-07bb-481e-8942-9142a6b26750" />

---

## ▶️ Running State

<!-- Add running state screenshot here -->
<img width="1180" height="380" alt="Screenshot from 2026-05-12 12-28-15" src="https://github.com/user-attachments/assets/2600919e-99fc-49bb-814a-6b980a90d35a" />


---

## ⏹️ Stopped / Reset State

<!-- Add stopped/reset screenshot here -->
<img width="1180" height="380" alt="Screenshot from 2026-05-12 12-28-59" src="https://github.com/user-attachments/assets/e566ba4d-191f-4bb5-b398-ecdd2b3bb3a1" />

<img width="1180" height="380" alt="image" src="https://github.com/user-attachments/assets/8089cce1-edb6-46a1-8c3f-c8c8741118b7" />



---

# 📄 Description

This project implements a classic stopwatch with **Start**, **Stop**, and **Reset** functionality.

- Time is displayed in **HH:MM:SS** format
- Updates every second using `setInterval`
- UI visually reflects the current state of the stopwatch

The goal was to practice **core JavaScript timing functions** and **DOM updates without frameworks**.

---

# ✨ Features

- ▶️ Start / Stop / Reset controls
- ⏱️ Real-time time tracking
- 🔁 Continuous update using `setInterval`
- 🎨 Visual state indicators:
  - 🟢 Green — running
  - 🔴 Red — stopped
  - ⚪ Silver — reset state
- 🧠 Simple and readable logic structure
- 📱 Clean and minimal responsive UI

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling + Flexbox layout |
| JavaScript (ES6) | Stopwatch logic and DOM manipulation |

---

# 📂 Project Structure

```bash
stopwatch/
│
├── index.html   # Markup structure
├── style.css    # Styling and UI states
└── script.js    # Stopwatch logic
```

---

# ⚙️ How It Works

## ⏱️ Timer Logic

The stopwatch uses `setInterval` to increase time every second and update the display dynamically.

## 🧩 State Handling

The application tracks three states:
- Running
- Stopped
- Reset

Each state updates:
- Timer behavior
- Button availability
- Background color

---

# 🚀 How to Run Locally

## 1️⃣ Clone repository

```bash
git clone https://github.com/olhakhodakivska/stopwatch.git
```

---

## 2️⃣ Open project folder

```bash
cd stopwatch
```

---

## 3️⃣ Run project

Simply open:

```bash
index.html
```

in your browser.

---

# 🎯 Learning Goals

This project was created to practice:

- JavaScript timers (`setInterval`, `clearInterval`)
- DOM manipulation
- Event handling
- UI state management
- Basic frontend architecture

---

# 👩‍💻 Author

**Olha Khodakivska**

- GitHub: https://github.com/olhakhodakivska

---

# 📄 License

This project is created for educational purposes and is open for learning use.
```
