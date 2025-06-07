📅 Zoodbash - a mini calendar for new tab chrome

A minimal new tab browser extension that displays a simple calendar using the Jalali (Persian) calendar system. Inspired by bullet journals and habit trackers, this clean and distraction-free interface helps you stay organized every time you open a new tab.

Built with React, Vite, and TailwindCSS for fast development and beautiful design.

✨ Features
📆 Jalali (Persian) calendar support

🧘‍♀️ Minimal design inspired by bullet journaling

📌 Habit-tracker-style visuals (optional in design)

⚡ Fast and lightweight as a new tab replacement

🛠️ Tech Stack
- React – UI library
- Vite – Fast build tool and dev server
- Tailwind CSS – Utility-first CSS framework
- dayjs and jalaliday - Handling calendar

🚀 Getting Started
1. Clone the repository

```bash
git clone https://github.com/nafasebra/zoodbash.git
cd zoodbash
```


2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start development server
```bash
npm run dev
```

This will start a local development server at http://localhost:5173/.

🧱 Build for Production
```
npm run build
```
This will output production-ready files to the dist/ directory.

🧩 Load as a Chrome Extension
- Run npm run build.
- Open Chrome and go to `chrome://extensions/`.
- Enable Developer mode (top right).
- Click Load unpacked and select the dist/ folder.

📅 Jalali Calendar Note
This project uses the Jalali (Persian) calendar system. If you want to customize or localize the calendar behavior, look into how the dayjs or moment-jalaali library is used (if applicable).

📄 License
MIT – feel free to use, modify, and share.


Enjoy ❤️
