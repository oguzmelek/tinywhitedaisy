// Game state
const gameState = {
    currentScene: 'grasspath-001',
    isAnimating: false,
    currentSong: null,
    audioPlayer: null,
    ambientSounds: [], // Array to hold multiple ambient sound players
    audioInitialized: false,
    songs: [
        {
            name: "I Watch The Moon",
            artist: "Gandalf",
            file: "Gandalf - I Watch The Moon.mp3"
        },
        {
            name: "Air Born",
            artist: "Camel",
            file: "Camel - Air Born.mp3"
        },
        {
            name: "Rainbow Eyes",
            artist: "Rainbow",
            file: "Rainbow - Rainbow Eyes.mp3"
        },
        {
            name: "Moonchild",
            artist: "King Crimson",
            file: "King Crimson - Moonchild.mp3"
        },
        {
            name: "Aspirations",
            artist: "Gentle Giant",
            file: "Gentle Giant - Aspirations.mp3"
        },
        {
            name: "Autumn",
            artist: "Strawbs",
            file: "Strawbs - Autumn.mp3"
        },
        {
            name: "And You and I",
            artist: "Yes",
            file: "Yes - And You and I.mp3"
        },
        {
            name: "Spring Song",
            artist: "Gryphon",
            file: "Gryphon - Spring Song.mp3"
        },
        {
            name: "All Around My Hat",
            artist: "Steeleye Span",
            file: "Steeleye Span - All Around My Hat.mp3"
        },
        {
            name: "Lady In Black",
            artist: "Uriah Heep",
            file: "Uriah Heep - Lady In Black.mp3"
        },
        {
            name: "Mocking Bird",
            artist: "Barclay James Harvest",
            file: "Barclay James Harvest - Mocking Bird.mp3"
        },
        {
            name: "Nights In White Satin",
            artist: "The Moody Blues",
            file: "The Moody Blues - Nights In White Satin.mp3"
        },
        {
            name: "Comin' Back to Me",
            artist: "Jefferson Airplane",
            file: "Jefferson Airplane - Comin' Back to Me.mp3"
        },
        {
            name: "Wind Borne",
            artist: "Jade Warrior",
            file: "Jade Warrior - Wind Borne.mp3"
        },
        {
            name: "Celestial Light",
            artist: "Amazing Blondel",
            file: "Amazing Blondel - Celestial Light.mp3"
        },
        {
            name: "Light Flight",
            artist: "Pentangle",
            file: "Pentangle - Light Flight.mp3"
        },
        {
            name: "Le Clochard",
            artist: "Focus",
            file: "Focus - Le Clochard.mp3"
        },
        {
            name: "Heartsong",
            artist: "Gordon Giltrap",
            file: "Gordon Giltrap - Heartsong.mp3"
        },
        {
            name: "Melinda",
            artist: "Curved Air",
            file: "Curved Air - Melinda.mp3"
        },
        {
            name: "Flight From Ashiya",
            artist: "Kaleidoscope",
            file: "Kaleidoscope - Flight From Ashiya.mp3"
        },
        {
            name: "Collections",
            artist: "Anthony Phillips",
            file: "Anthony Phillips - Collections.mp3"
        },
        {
            name: "Dark Star",
            artist: "Grateful Dead",
            file: "Grateful Dead - Dark Star.mp3"
        },
        {
            name: "Journey's End",
            artist: "Decameron",
            file: "Decameron - Journey's End.mp3"
        }
    ],
    scenes: {
        'grasspath-001': {
            forward: 'grasspath-forest-002',
            backward: 'sandyshore-path-004',
            left: null,
            right: null,
            autoAnimate: false,
            animationFile: 'grasspath-001-anim.mp4',
            guidanceText: "I hear the sound of waves behind me.",
            ambientSounds: [
                { file: 'chirping-birds-ambience.mp3', volume: 0.3 },
                { file: 'sound-of-the-sea.mp3', volume: 0.1 }
            ]
        },
        'grasspath-forest-002': {
            forward: 'forestpath-003',
            backward: 'grasspath-001',
            left: null,
            right: null,
            autoAnimate: false,
            animationFile: 'grasspath-forest-002-anim.mp4',
            ambientSounds: [
                { file: 'chirping-birds-ambience.mp3', volume: 0.3 }
            ]
        },
        'forestpath-003': {
            forward: 'forkpath-013',
            backward: 'grasspath-forest-002',
            left: null,
            right: null,
            autoAnimate: false,
            animationFile: 'forestpath-003-anim.mp4',
            ambientSounds: [
                { file: 'forest.mp3', volume: 0.3 }
            ]
        },
        'forkpath-013': {
            forward: null,
            backward: 'forestpath-003',
            left: 'cabin-path-018',
            right: 'swingpath-014',
            autoAnimate: false,
            animationFile: 'forkpath-013-anim.mp4',
            ambientSounds: [
                { file: 'forest.mp3', volume: 0.3 }
            ]
        },
        'cabin-path-018': {
            forward: 'cabin-interior-019',
            backward: 'forkpath-013',
            left: null,
            right: null,
            autoAnimate: false,
            animationFile: 'cabin-path-018-anim.mp4',
            ambientSounds: [
                { file: 'chirping-birds-ambience.mp3', volume: 0.3 }
            ]
        },
        'cabin-interior-019': {
            forward: 'cabin-attic-020',
            backward: 'cabin-path-018',
            left: 'cabin-kitchen-021',
            right: 'cabin-painting-022'
        },
        'cabin-attic-020': {
            forward: 'circlefield-023',
            backward: 'cabin-interior-019',
            left: null,
            right: null,
            autoAnimate: false,
            animationFile: 'cabin-attic-020-anim.mp4',
            ambientSounds: [
                { file: 'mysterious.mp3', volume: 0.3 }
            ]
        },
        'cabin-kitchen-021': {
            forward: null,
            backward: 'cabin-interior-019',
            left: null,
            right: null,
            guidanceText: "I used to make coffee and cake to grandma here."
        },
        'cabin-painting-022': {
            forward: null,
            backward: 'cabin-interior-019',
            left: null,
            right: null,
            guidanceText: "Me and my sister... There's a note by the frame that says \"Step into the mirror.\""
        },
        'circlefield-023': {
            forward: 'daisymeadow-024',
            backward: null,
            left: null,
            right: null,
            autoAnimate: false,
            animationFile: 'circlefield-023-anim.mp4'
        },
        'daisymeadow-024': {
            forward: null,
            backward: 'circlefield-023',
            left: null,
            right: null,
            autoAnimate: true,
            animationFile: 'daisymeadow-024-anim.mp4',
            backgroundMusic: {
                file: 'Khruangbin - White Gloves.mp3',
                volume: 0.5,
                onEnd: 'fadeToStart'
            }
        },
        'swingpath-014': {
            forward: 'mp3swing-015',
            backward: 'forkpath-013',
            left: null,
            right: null,
            autoAnimate: false,
            animationFile: 'swingpath-014-anim.mp4',
            ambientSounds: [
                { file: 'soft-wind-blowing.mp3', volume: 0.2 }
            ]
        },
        'mp3swing-015': {
            forward: 'swinging-016',
            backward: 'swingpath-014',
            left: null,
            right: null,
            autoAnimate: true,
            animationFile: 'mp3swing-015-anim.mp4',
            ambientSounds: [
                { file: 'soft-wind-blowing.mp3', volume: 0.2 }
            ]
        },
        'swinging-016': {
            forward: null,
            backward: 'forestpath2-017',
            left: null,
            right: null,
            autoAnimate: true,
            animationFile: 'swinging-016-anim.mp4',
            showSongMenu: true
        },
        'forestpath2-017': {
            forward: 'forkpath-013',
            backward: 'swinging-016',
            left: null,
            right: null,
            autoAnimate: false,
            animationFile: 'forestpath2-017-anim.mp4',
            ambientSounds: [
                { file: 'forest.mp3', volume: 0.3 }
            ]
        },
        'sandyshore-path-004': {
            forward: 'beach-005',
            backward: 'grasspath-001',
            left: null,
            right: null,
            autoAnimate: false,
            animationFile: 'sandyshore-004-anim.mp4',
            ambientSounds: [
                { file: 'chirping-birds-ambience.mp3', volume: 0.3 },
                { file: 'sound-of-the-sea.mp3', volume: 0.1 }
            ]
        },
        'beach-005': {
            forward: null,
            backward: 'sandyshore-path-004',
            left: 'shoreright2-006',
            right: 'shoreleft-009',
            autoAnimate: true,
            animationFile: 'beach-005-anim.mp4',
            ambientSounds: [
                { file: 'sound-of-the-sea.mp3', volume: 0.3 }
            ]
        },
        'shoreright2-006': {
            forward: 'beachdog-007',
            backward: 'beach-005',
            left: null,
            right: null,
            autoAnimate: true,
            animationFile: 'shoreright2-006-anim.mp4',
            ambientSounds: [
                { file: 'sound-of-the-sea.mp3', volume: 0.3 }
            ]
        },
        'beachdog-007': {
            forward: null,
            backward: 'shoreleft2-008',
            left: null,
            right: null,
            autoAnimate: true,
            animationFile: 'beachdog-007-anim.mp4',
            ambientSounds: [
                { file: 'sound-of-the-sea.mp3', volume: 0.3 }
            ]
        },
        'shoreleft2-008': {
            forward: 'beach-005',
            backward: 'beachdog-007',
            left: null,
            right: null,
            autoAnimate: true,
            animationFile: 'shoreleft2-008-anim.mp4',
            ambientSounds: [
                { file: 'sound-of-the-sea.mp3', volume: 0.3 }
            ]
        },
        'shoreleft-009': {
            forward: 'messageinabottle-010',
            backward: 'beach-005',
            left: null,
            right: null,
            autoAnimate: true,
            animationFile: 'shoreleft-009-anim.mp4',
            ambientSounds: [
                { file: 'sound-of-the-sea.mp3', volume: 0.3 }
            ]
        },
        'messageinabottle-010': {
            forward: 'holdingbottle-011',
            backward: 'shoreleft-009',
            left: null,
            right: null,
            autoAnimate: true,
            animationFile: 'messageinabottle-010-anim.mp4',
            ambientSounds: [
                { file: 'sound-of-the-sea.mp3', volume: 0.3 }
            ]
        },
        'holdingbottle-011': {
            forward: null,
            backward: 'shoreright-012',
            left: null,
            right: null,
            autoAnimate: true,
            animationFile: 'holdingbottle-011-anim.mp4',
            ambientSounds: [
                { file: 'sound-of-the-sea.mp3', volume: 0.3 }
            ]
        },
        'shoreright-012': {
            forward: 'beach-005',
            backward: 'holdingbottle-011',
            left: null,
            right: null,
            autoAnimate: true,
            animationFile: 'shoreright-012-anim.mp4',
            ambientSounds: [
                { file: 'sound-of-the-sea.mp3', volume: 0.3 }
            ]
        }
    }
};

// Animation handling functions
function playAnimation(sceneName, onComplete) {
    const sceneImage = document.getElementById('scene-image');
    const sceneVideo = document.getElementById('scene-video');
    const scene = gameState.scenes[sceneName];
    
    if (!scene.animationFile) {
        if (onComplete) onComplete();
        return;
    }

    gameState.isAnimating = true;
    
    // Set up video source
    sceneVideo.querySelector('source').src = `images/${scene.animationFile}`;
    sceneVideo.load(); // Reload video with new source

    // Wait for video to be loaded before playing
    sceneVideo.onloadeddata = () => {
        // Show video, hide image
        sceneVideo.style.display = 'block';
        sceneImage.style.display = 'none';
        
        if (scene.autoAnimate) {
            // For looping animations
            sceneVideo.loop = true;
            sceneVideo.play();
            gameState.isAnimating = false; // Allow navigation while animation loops
        } else {
            // For one-shot animations
            sceneVideo.loop = false;
            sceneVideo.play();
            
            // Listen for video end
            sceneVideo.onended = () => {
                gameState.isAnimating = false;
                sceneVideo.style.display = 'none';
                sceneImage.style.display = 'block';
                if (onComplete) {
                    // Ensure we call onComplete after resetting the video state
                    setTimeout(() => onComplete(), 0);
                }
            };
        }
    };

    // Handle video loading errors
    sceneVideo.onerror = () => {
        console.error('Error loading video:', scene.animationFile);
        gameState.isAnimating = false;
        if (onComplete) onComplete();
    };
}

// Add these functions before the updateScene function

function playBackgroundMusic(musicConfig) {
    if (!musicConfig) return;
    
    const music = new Audio(`audio/${musicConfig.file}`);
    music.volume = musicConfig.volume;
    
    // Don't loop - we want to detect when it ends
    music.loop = false;
    
    music.addEventListener('ended', () => {
        if (musicConfig.onEnd === 'fadeToStart') {
            fadeToBlackAndReset();
        }
    });
    
    // Store the background music player separately from ambient sounds
    gameState.backgroundMusic = music;
    
    // Wait for the audio to be loaded before playing
    music.addEventListener('loadeddata', () => {
        music.play();
    });
}

function fadeToBlackAndReset() {
    // Create fade overlay if it doesn't exist
    let fadeOverlay = document.querySelector('.fade-overlay');
    if (!fadeOverlay) {
        fadeOverlay = document.createElement('div');
        fadeOverlay.className = 'fade-overlay';
        document.querySelector('.scene-container').appendChild(fadeOverlay);
    }
    
    // Show and animate the overlay
    fadeOverlay.style.display = 'block';
    fadeOverlay.style.opacity = '0';
    
    // Trigger fade animation
    setTimeout(() => {
        fadeOverlay.style.opacity = '1';
        
        // Wait for fade to complete, then reset game
        setTimeout(() => {
            // Clean up all audio
            cleanupAudio();
            if (gameState.backgroundMusic) {
                gameState.backgroundMusic.pause();
                gameState.backgroundMusic = null;
            }
            
            // Reset to starting scene
            updateScene('grasspath-001');
            
            // Fade back in
            setTimeout(() => {
                fadeOverlay.style.opacity = '0';
                // Remove overlay after fade out
                setTimeout(() => {
                    fadeOverlay.style.display = 'none';
                }, 1000);
            }, 500);
        }, 1000);
    }, 0);
}

// Update the cleanupAudio function to handle background music
function cleanupAudio() {
    if (gameState.audioPlayer) {
        gameState.audioPlayer.pause();
        gameState.audioPlayer = null;
    }
    if (gameState.backgroundMusic) {
        gameState.backgroundMusic.pause();
        gameState.backgroundMusic = null;
    }
    cleanupAmbientSounds();
    gameState.currentSong = null;
}

// Function to update the scene image
function updateScene(newScene, skipAnimation = false) {
    const sceneImage = document.getElementById('scene-image');
    const sceneVideo = document.getElementById('scene-video');
    const scene = gameState.scenes[newScene];
    
    // Hide song menu and cleanup audio when leaving the scene
    if (gameState.currentScene !== newScene) {
        hideSongMenu();
        cleanupAudio();
    }
    
    // Handle ambient sounds
    if (scene.ambientSounds) {
        playAmbientSounds(scene.ambientSounds);
    } else if (scene.ambientSound) {
        // Handle legacy single ambient sound format
        playAmbientSounds([{ file: scene.ambientSound, volume: 0.3 }]);
    }
    
    // Handle background music
    if (scene.backgroundMusic) {
        playBackgroundMusic(scene.backgroundMusic);
    }
    
    // Reset video state
    sceneVideo.pause();
    sceneVideo.currentTime = 0;
    
    // Update guidance text
    let guidanceElement = document.querySelector('.guidance-text');
    if (scene.guidanceText) {
        if (!guidanceElement) {
            guidanceElement = document.createElement('div');
            guidanceElement.className = 'guidance-text';
            document.querySelector('.scene-container').appendChild(guidanceElement);
        }
        guidanceElement.textContent = scene.guidanceText;
        guidanceElement.style.display = 'block';
    } else if (guidanceElement) {
        guidanceElement.style.display = 'none';
    }
    
    // If scene has auto-animation and we're not skipping animations
    if (scene.autoAnimate && !skipAnimation) {
        // For auto-animated scenes, go straight to the looping video
        sceneImage.style.display = 'none';
        playAnimation(newScene);
    } else {
        // For non-animated or skip-animation cases, show the static image
        sceneVideo.style.display = 'none';
        sceneImage.style.display = 'block';
        sceneImage.src = `images/${newScene}.jpg`;
    }
    
    gameState.currentScene = newScene;
    
    // Show song menu if this scene has it
    if (scene.showSongMenu) {
        showSongMenu();
    }
    
    // Update button visibility based on available paths
    const forwardButton = document.querySelector('.forward');
    const backwardButton = document.querySelector('.backward');
    const leftButton = document.querySelector('.left');
    const rightButton = document.querySelector('.right');
    
    forwardButton.style.display = scene.forward ? 'block' : 'none';
    backwardButton.style.display = scene.backward ? 'block' : 'none';
    leftButton.style.display = scene.left ? 'block' : 'none';
    rightButton.style.display = scene.right ? 'block' : 'none';
}

// Navigation functions with animation support
function moveWithAnimation(direction) {
    if (gameState.isAnimating) return; // Prevent navigation during one-shot animations
    
    const currentScene = gameState.scenes[gameState.currentScene];
    const nextScene = currentScene[direction];
    
    if (nextScene) {
        // Only play animation if moving forward and scene has a non-auto animation
        if (direction === 'forward' && currentScene.animationFile && !currentScene.autoAnimate) {
            // Play one-shot animation before moving to next scene
            playAnimation(gameState.currentScene, () => {
                updateScene(nextScene, false); // Allow auto-animations to start
            });
        } else {
            // For backward movement or scenes without animations, just change scene
            updateScene(nextScene);
        }
    }
}

function moveForward() {
    moveWithAnimation('forward');
}

function moveBackward() {
    moveWithAnimation('backward');
}

function moveLeft() {
    moveWithAnimation('left');
}

function moveRight() {
    moveWithAnimation('right');
}

// Add this helper function for time formatting
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update the showSongMenu function to include progress bar
function showSongMenu() {
    const songMenu = document.getElementById('song-menu');
    songMenu.innerHTML = ''; // Clear existing content

    // Create song display with navigation
    const songDisplay = document.createElement('div');
    songDisplay.className = 'song-display';

    // Previous song button
    const prevButton = document.createElement('button');
    prevButton.className = 'control-button';
    prevButton.innerHTML = '←';
    prevButton.onclick = () => navigateSongs('prev');
    prevButton.disabled = gameState.currentSong === 0;

    // Song info
    const songInfo = document.createElement('div');
    songInfo.className = 'song-info';
    const currentSong = gameState.songs[gameState.currentSong || 0];
    songInfo.textContent = `${currentSong.name} - ${currentSong.artist}`;

    // Next song button
    const nextButton = document.createElement('button');
    nextButton.className = 'control-button';
    nextButton.innerHTML = '→';
    nextButton.onclick = () => navigateSongs('next');
    nextButton.disabled = (gameState.currentSong || 0) === gameState.songs.length - 1;

    songDisplay.appendChild(prevButton);
    songDisplay.appendChild(songInfo);
    songDisplay.appendChild(nextButton);

    // Create progress section
    const progressSection = document.createElement('div');
    progressSection.className = 'song-progress';

    // Progress bar container
    const progressBarContainer = document.createElement('div');
    progressBarContainer.className = 'progress-bar-container';

    // Progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';

    // Time display
    const timeDisplay = document.createElement('div');
    timeDisplay.className = 'time-display';
    
    const currentTime = document.createElement('span');
    currentTime.textContent = '0:00';
    
    const duration = document.createElement('span');
    duration.textContent = '0:00';

    timeDisplay.appendChild(currentTime);
    timeDisplay.appendChild(duration);

    progressBarContainer.appendChild(progressBar);
    progressSection.appendChild(progressBarContainer);
    progressSection.appendChild(timeDisplay);

    // Create playback controls
    const controls = document.createElement('div');
    controls.className = 'song-controls';

    // Play/Stop button
    const playButton = document.createElement('button');
    playButton.className = 'control-button';
    playButton.innerHTML = gameState.audioPlayer && !gameState.audioPlayer.paused ? '⏸' : '▶';
    playButton.onclick = togglePlayback;
    if (gameState.audioPlayer && !gameState.audioPlayer.paused) {
        playButton.classList.add('playing');
    }

    controls.appendChild(playButton);

    // Add everything to the menu
    songMenu.appendChild(songDisplay);
    songMenu.appendChild(progressSection);
    songMenu.appendChild(controls);
    songMenu.classList.add('visible');

    // Set up progress bar interaction
    if (gameState.audioPlayer) {
        // Update duration once metadata is loaded
        gameState.audioPlayer.addEventListener('loadedmetadata', () => {
            duration.textContent = formatTime(gameState.audioPlayer.duration);
        });

        // Update progress bar and current time
        gameState.audioPlayer.addEventListener('timeupdate', () => {
            const percent = (gameState.audioPlayer.currentTime / gameState.audioPlayer.duration) * 100;
            progressBar.style.width = `${percent}%`;
            currentTime.textContent = formatTime(gameState.audioPlayer.currentTime);
        });

        // Handle click on progress bar
        progressBarContainer.addEventListener('click', (e) => {
            const rect = progressBarContainer.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            const newTime = pos * gameState.audioPlayer.duration;
            gameState.audioPlayer.currentTime = newTime;
        });
    }
}

function navigateSongs(direction) {
    const newIndex = direction === 'next' 
        ? (gameState.currentSong || 0) + 1 
        : (gameState.currentSong || 0) - 1;
    
    if (newIndex >= 0 && newIndex < gameState.songs.length) {
        selectSong(newIndex);
        showSongMenu(); // Refresh the menu to update navigation buttons
    }
}

function togglePlayback() {
    if (!gameState.audioPlayer) {
        // If no song is selected/playing, start playing the current/first song
        selectSong(gameState.currentSong || 0);
    } else {
        if (gameState.audioPlayer.paused) {
            gameState.audioPlayer.play();
        } else {
            gameState.audioPlayer.pause();
        }
        showSongMenu(); // Refresh the menu to update play/pause button
    }
}

// Update the selectSong function to handle progress bar
function selectSong(index) {
    // Stop current song if playing
    if (gameState.audioPlayer) {
        gameState.audioPlayer.pause();
        gameState.audioPlayer = null;
    }

    gameState.currentSong = index;
    
    // Create new audio player and start playing
    const song = gameState.songs[index];
    const audio = new Audio(`audio/${song.file}`);
    audio.loop = true; // Loop the song
    
    // Wait for metadata to be loaded before playing
    audio.addEventListener('loadedmetadata', () => {
        audio.play();
    });
    
    gameState.audioPlayer = audio;

    // Update the menu to reflect the new selection
    showSongMenu();
}

// Update the ambient sound handling functions
function playAmbientSounds(soundsConfig) {
    // Clean up existing ambient sounds
    cleanupAmbientSounds();

    if (!soundsConfig || !gameState.audioInitialized) return;

    // Create and play each ambient sound
    soundsConfig.forEach(config => {
        const ambient = new Audio(`ambient/${config.file}`);
        ambient.loop = true;
        ambient.volume = config.volume;
        
        // Wait for the audio to be loaded before playing
        ambient.addEventListener('loadeddata', () => {
            // Create a promise for playing
            const playPromise = ambient.play();
            
            // Handle play() promise
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Audio playback failed:", error);
                });
            }
        });
        
        gameState.ambientSounds.push(ambient);
    });
}

function cleanupAmbientSounds() {
    gameState.ambientSounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
        sound.src = '';
        sound.remove();
    });
    gameState.ambientSounds = [];
}

// Add back the hideSongMenu function
function hideSongMenu() {
    const songMenu = document.getElementById('song-menu');
    songMenu.classList.remove('visible');
}

// Initialize audio context
function initializeAudio() {
    if (gameState.audioInitialized) return;
    
    // Create a temporary audio context
    const tempContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Show audio permission overlay on mobile devices
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        const audioPermission = document.getElementById('audio-permission');
        audioPermission.classList.add('visible');
        
        // Handle touch to start audio
        audioPermission.addEventListener('click', function() {
            tempContext.resume().then(() => {
                audioPermission.classList.remove('visible');
                gameState.audioInitialized = true;
                // Start the game with ambient sounds
                const currentScene = gameState.scenes[gameState.currentScene];
                if (currentScene.ambientSounds) {
                    playAmbientSounds(currentScene.ambientSounds);
                }
            });
        });
    } else {
        // On desktop, initialize directly
        tempContext.resume().then(() => {
            gameState.audioInitialized = true;
            // Start the game with ambient sounds
            const currentScene = gameState.scenes[gameState.currentScene];
            if (currentScene.ambientSounds) {
                playAmbientSounds(currentScene.ambientSounds);
            }
        });
    }
}

// Start game function
function startGame() {
    // Initialize audio
    initializeAudio();
    
    // Hide main menu
    const mainMenu = document.getElementById('main-menu');
    mainMenu.style.display = 'none';
    
    // Initialize the game scene
    updateScene(gameState.currentScene);
}

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    // Don't automatically update scene, wait for start button click
    const startButton = document.getElementById('start-game');
    startButton.addEventListener('click', startGame);
});