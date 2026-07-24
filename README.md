# 🔗 LinkVault — Personal Link Manager
 
A simple, intuitive and responsive **bookmark manager** web application built with **React** and **TypeScript**. LinkVault allows users to save, organize, search, edit and delete their favorite links — all stored in the browser's `localStorage` for persistence.
 
---
 
##  Live Demo
 
> [Add your hosted link here — e.g. https://linkvault.vercel.app]
 
---
 
## 📸 Screenshot
 

 
---
 
##  Project Overview
 
This project was built as **Task 2 — ReactTS Links Vault** for the React TypeScript Bootcamp at **Tshwane University of Technology (TUT)**.
 
### The Problem it Solves
 
Traditional browser bookmarks are limited to one browser on one device. **LinkVault** gives you a centralized place to save and manage your favorite links with titles, descriptions and tags — making them easy to find and organize.
 
---
 
## Features
 
| Feature | Description |
|---|---|
|  **Add Links** | Save a link with title, URL, description and tags |
| **View Links** | All saved links displayed in a clean table |
| **Edit Links** | Update any saved link at any time |
|  **Delete Links** | Remove links with a confirmation prompt |
|  **Search Links** | Filter by title, URL, description or tags |
|  **Persistence** | All links saved in localStorage — never lost on refresh |
|  **Responsive** | Works on mobile, tablet and desktop |
|  **Notifications** | Success messages for all actions |
|  **Empty State** | Friendly message when no links are saved |
 
---
 
##  Technologies Used
 
| Technology | Purpose |
|---|---|
| **React 19** | UI component library |
| **TypeScript** | Type safety and interfaces |
| **Vite** | Build tool and development server |
| **CSS** | Styling and responsive design |
| **localStorage** | Client-side data persistence |
| **react-icons** | Icon library (FaLink etc.) |
 
---
 
## Project Structure
 
```
src/
├── assets/                  # Images and static files
├── components/
│   ├── Button/
│   │   └── Button.tsx       # Reusable button component
│   ├── Footer/
│   │   └── Footer.tsx       # App footer
│   ├── Header/
│   │   └── Header.tsx       # Navbar with search & add button
│   ├── Hero/
│   │   └── Hero.tsx         # Hero section
│   ├── LinkCard/
│   │   ├── LinkCard.tsx     # Table of all links
│   │   └── LinkCardItem.tsx # Single table row
│   ├── LinkForm/
│   │   └── LinkForm.tsx     # Add & Edit form
│   ├── LinkList/
│   │   └── LinkList.tsx     # Link list wrapper
│   ├── SearchBar/
│   │   └── SearchBar.tsx    # Search input
│   ├── Text/
│   │   └── Text.tsx         # Reusable text component
│   └── Types/
│       └── Link.tsx         # TypeScript type definitions
├── App.css                  # Global styles
├── App.tsx                  # Main app component
├── index.css                # Base styles
└── main.tsx                 # App entry point
```
 
---
 
##  Key React Concepts Used
 
```
✅ useState          — managing links, form, search, notifications
✅ useEffect         — syncing to localStorage when links change
✅ Props             — passing data between parent and child components
✅ Custom Types      — LinkAttribute TypeScript interface
✅ Conditional rendering — showing/hiding form and empty state
✅ Array methods     — .map(), .filter(), .find() for CRUD operations
✅ Event handling    — onClick, onChange, onSubmit
✅ Reusable components — Button, Text used across multiple files
```
 
---
 
## Link Data Structure
 
```typescript
type LinkAttribute = {

  id: string           // unique identifier
  title: string        // name of the link
  url: string          // the actual URL
  description: string  // what the link is about
  tags?: string        // optional category tag
}
```
 
---
 
##  Getting Started
 
### Prerequisites
- Node.js (v18+)
- npm or yarn
### Installation
 
```bash
# Clone the repository
git clone https://github.com/boipelo/linkvault.git
 
# Navigate into the project
cd -ReactTS-Links-Vault
 
# Install dependencies
npm install
 
# Start the development server
npm run dev
```
 
### Build for Production
 
```bash
npm run build
```
 
### Preview Production Build
 
```bash
npm run preview
```
 
---
 
##  Responsive Breakpoints
 
| Breakpoint | Screen Size |
|---|---|
| 320px | Small mobile |
| 480px | Mobile |
| 768px | Tablet |
| 1024px | Small laptop |
| 1200px | Desktop |
 
---
 
##  How to Use
 
1. **Open the app** — you'll see an empty state with a prompt to add your first link
2. **Click "Add Link"** — a modal form appears
3. **Fill in the form** — Title, URL, Description and Tags (optional)
4. **Click "ADD LINK"** — link is saved and appears in the table
5. **Search** — type in the search bar to filter links
6. **Edit** — click the Edit button on any row to update it
7. **Delete** — click Remove to delete a link (confirmation required)
---
 
##  Search Functionality
 
The search bar filters links across **all fields simultaneously**:
 
```
✅ Title
✅ URL
✅ Description
✅ Tags
```
 
---
 
## localStorage Implementation
 
```typescript
// Save links
localStorage.setItem('links', JSON.stringify(links))
 
// Load links on startup
const savedLinks = localStorage.getItem('links')
const links = savedLinks ? JSON.parse(savedLinks) : []
```
 
---
 
##  Author
 
**Boipelo Harry Motleng**
- GitHub: [@boipelo](https://github.com/Boipelo-85)
- LinkedIn: [linkedin.com/in/boipelo](https://linkedin.com/in/boipelo-motileng)
- Institution: Tshwane University of Technology (TUT)
---
 
## License
 
This project is open source and available under the [MIT License](LICENSE).
 
---
 
##  Acknowledgements
 
- Built as part of the **ReactTS Bootcamp — Task 2** at TUT
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Bootstrapped with [Vite](https://vitejs.dev/)