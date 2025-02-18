# Tiny White Daisy Interactive Game

An interactive journey through memories, music, and nature, created for tinywhitedaisy.com.

## Directory Structure

```
tinywhitedaisy/
├── index.html          # Main game interface
├── styles.css          # Game styling
├── game.js            # Game logic and scene management
├── favicon.png        # Site favicon
├── apple-touch-icon.png # iOS home screen icon
├── images/            # Game scene images and animations
│   ├── social-preview.jpg
│   ├── grasspath-001.jpg
│   ├── grasspath-001-anim.mp4
│   └── ...
├── audio/            # Background music and MP3 player songs
│   ├── Gandalf - I Watch The Moon.mp3
│   └── ...
└── ambient/          # Ambient sound effects
    ├── chirping-birds-ambience.mp3
    ├── forest.mp3
    └── ...
```

## Deployment Instructions

1. Domain Setup:
   - Point tinywhitedaisy.com to your web hosting provider
   - Configure SSL certificate for HTTPS

2. File Upload:
   - Upload all files maintaining the directory structure
   - Ensure file permissions are set correctly (typically 644 for files, 755 for directories)

3. Audio Files:
   - Verify all audio files are in the correct format (MP3)
   - Test audio playback across different browsers

4. Performance Optimization:
   - Compress all images using a tool like ImageOptim
   - Optimize MP4 animations for web streaming
   - Enable GZIP compression on the server
   - Set up proper caching headers

5. Browser Testing:
   - Test on latest versions of Chrome, Firefox, Safari, and Edge
   - Verify mobile responsiveness
   - Check audio autoplay behavior across devices

## Technical Requirements

- Web hosting with HTTPS support
- Support for common audio formats (MP3)
- Modern browser compatibility
- Sufficient storage for media files

## Development

To run the game locally:
1. Clone this repository
2. Ensure all media files are in their respective directories
3. Open index.html in a modern web browser
4. For local development, use a local web server (e.g., `python -m http.server 8000`)

## Media Credits

Please ensure all media files (images, sounds, music) have proper licensing for web deployment.

## Security Considerations

1. Implement proper access controls
2. Set up content security policy (CSP)
3. Configure cross-origin resource sharing (CORS)
4. Enable secure headers

## Maintenance

Regular maintenance tasks:
1. Check for broken media links
2. Update SSL certificates
3. Monitor server logs
4. Backup media files
5. Test audio playback functionality

## Support

For technical support or content updates, please contact the site administrator. 