# Cozy To-Do List 📝

A beautiful, pixel-art styled to-do list application with a cozy aesthetic and smooth animations.

## Features

- ✨ **Pixel Art Progress Bar** - Visual progress tracking with animated blocks
- 🎨 **Custom Color Palette** - Soft purple and pink color scheme
- 🖼️ **Background Wallpaper** - Customizable background image
- 💾 **Local Storage** - Your tasks persist between sessions
- 📱 **Responsive Design** - Works on desktop and mobile
- 🎮 **Retro Animations** - Smooth hover effects and transitions
- 📅 **Live Date Display** - Shows current day, date, and month

## Screenshots

![To-Do List Preview](screenshot.png)

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript (ES6)** - Functionality and interactivity
- **Tailwind CSS v4** - Utility-first CSS framework
- **Local Storage API** - Data persistence

## Getting Started

### Prerequisites

- Node.js (for Tailwind CSS compilation)
- A modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cozy-to-do-list.git
cd cozy-to-do-list
```

2. Install dependencies:
```bash
npm install
```

3. Build Tailwind CSS:
```bash
npx tailwindcss -i ./style.css -o ./output.css --watch
```

4. Open `cozy-to-do-list.html` in your browser

## File Structure

```
cozy-to-do-list/
├── cozy-to-do-list.html    # Main HTML file
├── script.js               # JavaScript functionality
├── style.css               # Custom CSS and Tailwind imports
├── output.css              # Generated Tailwind CSS
├── package.json            # Node.js dependencies
├── wallpaper.jpg           # Background image
├── castle.png              # Alternative background
├── favorite.png            # Header icon
├── clock.png               # Progress icon
├── downloading.png         # Tasks icon
└── README.md               # This file
```

## Usage

1. **Add Tasks**: Type in the input field and click "Add Task" or press Enter
2. **Complete Tasks**: Click the checkbox next to any task
3. **Delete Tasks**: Click the X button on the right of any task
4. **Track Progress**: Watch the pixel art progress bar fill as you complete tasks
5. **Persistent Storage**: Your tasks automatically save and restore when you reload

## Customization

### Colors
Edit the color variables in `style.css`:
```css
@theme {
  --color-primary: #c8b8d2;    /* Light purple */
  --color-secondary: #91789a;  /* Medium purple */
  --color-tertiary: #584563;   /* Dark purple */
  --color-quaternary: #f2e4e1; /* Light cream */
  --color-quinary: #d3a6bb;    /* Pink */
  --color-senary: #3b3440;     /* Dark gray */
}
```

### Background
Replace `castle.png` with your own background image, or update the URL in the HTML:
```html
<body class="bg-[url('your-image.png')] ...">
```

### Icons
Replace the PNG files with your own icons:
- `favorite.png` - Header icon
- `clock.png` - Progress icon  
- `downloading.png` - Tasks icon

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Tailwind CSS for the utility-first CSS framework
- Pixelify Sans font from Google Fonts
- Inspiration from retro gaming aesthetics

---

Made with 💜 for cozy productivity
