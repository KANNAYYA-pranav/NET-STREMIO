# NET STREMIO - Movie Trailer Platform

A Netflix-style entertainment platform for discovering and watching movie trailers. Built with HTML, CSS, and JavaScript.

## Features

✨ **Netflix-Style Design**
- Modern, dark theme inspired by Netflix
- Responsive layout (works on desktop, tablet, mobile)
- Smooth animations and hover effects

🎬 **Movie Trailers**
- Browse trailers organized by categories
- Trending, Action, Comedy, and Thriller sections
- Click any movie to watch the trailer in a modal player

🔍 **Search Functionality**
- Search for movies by title
- Instant search results

📱 **Responsive Design**
- Works perfectly on all devices
- Mobile-friendly interface

## How to Add More Movies

Edit the `script.js` file and add movies to the `moviesDatabase` object:

```javascript
{
    id: 25,
    title: "Your Movie Title",
    year: 2023,
    rating: "PG-13",
    description: "Your movie description here",
    image: "https://your-image-url.jpg",
    trailer: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
}
```

### How to Get YouTube Trailer URLs:
1. Go to YouTube and find the trailer video
2. Copy the Video ID (the part after `v=` in the URL)
3. Use this format: `https://www.youtube.com/embed/VIDEO_ID`

### How to Get Movie Poster Images:
- Use Unsplash: https://unsplash.com
- Use IMDb: https://www.imdb.com
- Use any free image service

## Deployment on GitHub Pages

Your website is already live! 🚀

1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. Select "main" branch as source
4. Your site will be available at: `https://KANNAYYA-pranav.github.io/NET-STREMIO/`

## File Structure

```
NET-STREMIO/
├── index.html      # Main website structure
├── style.css       # Styling and design
├── script.js       # JavaScript functionality and movie data
└── README.md       # This file
```

## Customization

### Change Colors
Edit `style.css` and modify:
- `#e50914` - Netflix red color
- `#141414` - Dark background color
- `#000000` - Black accents

### Change Website Title
Edit `index.html` - Change the `<title>` tag

### Change Logo Text
Edit `index.html` - Change the `.logo` div text

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge

## License
Free to use and modify

## Author
Created with ❤️ for movie lovers

---

**Start by editing `script.js` to add your favorite movie trailers!**
