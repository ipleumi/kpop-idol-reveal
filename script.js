const GAME_DATA = [
    {
        name: "Lisa",
        image: "picture/lisa.jpg",
        options: ["Lisa", "Jennie", "Rose", "Jisoo"]
    },
    {
        name: "V",
        image: "picture/v.jpg",
        options: ["V", "Jungkook", "Jimin", "Suga"]
    },
    {
        name: "Wonyoung",
        image: "picture/wonyoung.png",
        options: ["Wonyoung", "Yujin", "Leeseo", "Gaeul"]
    },
    {
        name: "Sakura",
        image: "picture/sakura.webp",
        options: ["Sakura", "Chaewon", "Kazuha", "Eunchae"]
    },
    {
        name: "Karina",
        image: "picture/karina.jpg",
        options: ["Karina", "Winter", "Ningning", "Giselle"]
    },
    {
        name: "Momo",
        image: "picture/MOMO.webp",
        options: ["Momo", "Nayeon", "Jihyo", "Mina"]
    },
    {
        name: "Jennie",
        image: "picture/jennie.webp",
        options: ["Jennie", "Lisa", "Rose", "Jisoo"]
    },
    {
        name: "Joy",
        image: "picture/joy.jpg",
        options: ["Joy", "Irene", "Seulgi", "Yeri"]
    },
    {
        name: "Sana",
        image: "picture/sana.jpg",
        options: ["Sana", "Momo", "Tzuyu", "Dahyun"]
    },
    {
        name: "Doyoung",
        image: "picture/Doyoung.jpg",
        options: ["Doyoung", "Jaehyun", "Taeyong", "Mark"]
    },
    {
        name: "Eunchae",
        image: "picture/Eunchae.jpg",
        options: ["Eunchae", "Kazuha", "Yunjin", "Sakura"]
    },
    {
        name: "G-Dragon",
        image: "picture/G-Dragon.png",
        options: ["G-Dragon", "T.O.P", "Taeyang", "Daesung"]
    },
    {
        name: "Irene",
        image: "picture/Irene.jpg",
        options: ["Irene", "Seulgi", "Wendy", "Joy"]
    },
    {
        name: "Minju",
        image: "picture/Minju.jpg",
        options: ["Minju", "Iroha", "Wonhee", "Moka"]
    },
    {
        name: "Sunghoon",
        image: "picture/Sunghoon.jpg",
        options: ["Sunghoon", "Heeseung", "Jay", "Jake"]
    },
    {
        name: "Taeyang",
        image: "picture/Taeyang.jpg",
        options: ["Taeyang", "G-Dragon", "Daesung", "Seungri"]
    },
    {
        name: "Yeji",
        image: "picture/Yeji.jpg",
        options: ["Yeji", "Ryujin", "Lia", "Yuna"]
    },
    {
        name: "Yujin",
        image: "picture/Yujin.jpg",
        options: ["Yujin", "Wonyoung", "Gaeul", "Liz"]
    },
    {
        name: "Ahyeon",
        image: "picture/Ahyeon.jpg",
        options: ["Ahyeon", "Ruka", "Pharita", "Asa"]
    },
    {
        name: "Bambam",
        image: "picture/Bambam.jpeg",
        options: ["Bambam", "Jackson", "Mark", "Yugyeom"]
    },
    {
        name: "Belle",
        image: "picture/Belle.webp",
        options: ["Belle", "Julie", "Natty", "Haneul"]
    },
    {
        name: "Chanyeol",
        image: "picture/Chanyeol.jpg",
        options: ["Chanyeol", "Baekhyun", "Kai", "Sehun"]
    },
    {
        name: "Kyujin",
        image: "picture/Kyujin.jpg",
        options: ["Kyujin", "Sullyoon", "Haewon", "Lily"]
    },
    {
        name: "Lily",
        image: "picture/Lily.webp",
        options: ["Lily", "Haewon", "Bae", "Jiwoo"]
    },
    {
        name: "Minnie",
        image: "picture/Minnie.jpg",
        options: ["Minnie", "Yuqi", "Soyeon", "Miyeon"]
    },
    {
        name: "Natty",
        image: "picture/Natty.jpg",
        options: ["Natty", "Julie", "Belle", "Haneul"]
    },
    {
        name: "Pharita",
        image: "picture/Pharita.webp",
        options: ["Pharita", "Rami", "Rora", "Chiquita"]
    }
];

let currentState = {
    revealCount: 0,
    currentIdol: null,
    revealedTiles: 0,
    isGameOver: false,
    isFirstReveal: true,
    wrongGuesses: 0,
    levelOrder: [],
    currentLevelIndex: 0
};

// DOM Elements
const scoreEl = document.getElementById('score-value');
const idolImg = document.getElementById('idol-image');
const gridOverlay = document.getElementById('grid-overlay');
const optionsGrid = document.getElementById('options-grid');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const nextBtn = document.getElementById('next-btn');
const shareContainer = document.getElementById('share-container');
const shareX = document.getElementById('share-x');
const shareIg = document.getElementById('share-ig');
const shareCopy = document.getElementById('share-copy');

// Constants
const GRID_SIZE = 49; // 7x7
const MAX_WRONG_GUESSES = 3;

function initGame() {
    // Generate random order of levels
    currentState.levelOrder = [...Array(GAME_DATA.length).keys()].sort(() => Math.random() - 0.5);
    currentState.currentLevelIndex = 0;

    loadNextLevel();
}

function updateStats() {
    scoreEl.textContent = currentState.revealCount;
    // Animate change
    scoreEl.style.transform = "scale(1.2)";
    setTimeout(() => scoreEl.style.transform = "scale(1)", 200);
}

function loadNextLevel() {
    // Check if all levels completed
    if (currentState.currentLevelIndex >= currentState.levelOrder.length) {
        showModal("CONGRATULATIONS!", "You have completed all levels!", true);
        return;
    }

    // Reset State for new round
    currentState.revealCount = 0;
    currentState.isFirstReveal = true;
    currentState.wrongGuesses = 0;
    updateStats();

    // Get current level data based on shuffled order
    const dataIndex = currentState.levelOrder[currentState.currentLevelIndex];
    const levelData = GAME_DATA[dataIndex];
    currentState.currentIdol = levelData;

    // Reset State
    currentState.revealedTiles = 0;
    currentState.isGameOver = false;

    // Set Image
    idolImg.src = levelData.image;

    // Generate Grid
    gridOverlay.innerHTML = '';
    for (let i = 0; i < GRID_SIZE; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.textContent = i + 1;
        tile.onclick = () => handleTileClick(tile);
        gridOverlay.appendChild(tile);
    }

    // Generate Options from Data
    optionsGrid.innerHTML = '';

    // Clone options to avoid modifying original data
    const options = [...levelData.options];
    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => handleOptionClick(btn, opt, levelData.name);
        optionsGrid.appendChild(btn);
    });
}

function handleTileClick(tile) {
    if (currentState.isGameOver || tile.classList.contains('revealed')) return;

    tile.classList.add('revealed');
    currentState.revealCount++;
    updateStats();
}

function handleOptionClick(btn, selected, correct) {
    if (currentState.isGameOver) return;

    if (selected === correct) {
        // Correct
        currentState.isGameOver = true;
        btn.classList.add('correct');
        revealAllTiles();
        setTimeout(() => {
            showModal("CORRECT!", `It was ${correct}! Tiles Revealed: ${currentState.revealCount}`, false, correct, currentState.revealCount);
        }, 1000);
    } else {
        // Wrong
        btn.classList.add('wrong');
        btn.disabled = true;
        currentState.wrongGuesses++;

        if (currentState.wrongGuesses >= MAX_WRONG_GUESSES) {
            // Game Over (Round Failed)
            currentState.isGameOver = true;
            revealAllTiles();
            setTimeout(() => {
                showModal("GAME OVER", `The correct answer was ${correct}.`);
            }, 1000);
        }
    }
}

function revealAllTiles() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(t => t.classList.add('revealed'));
}

function showModal(title, message, isGameComplete = false, idolName = null, revealCount = 0) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.classList.remove('hidden');

    // Handle Share Buttons
    if (title === "CORRECT!" && idolName) {
        shareContainer.classList.remove('hidden');
        const shareText = `I guessed ${idolName} in ${revealCount} reveals! Can you beat me? #KPopRevealGame`;
        const shareUrl = window.location.href; // Or your game URL

        // X (Twitter)
        shareX.onclick = () => {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        };

        // Instagram (Native Share)
        shareIg.onclick = async () => {
            const originalText = shareIg.textContent;
            shareIg.textContent = "Generating...";
            let file;

            try {
                // Generate Image
                file = await generateShareImage(idolImg, idolName, revealCount);

                // 1. Try Native Share with Generated Image
                if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                    await navigator.share({
                        files: [file],
                        title: 'K-Pop Idol Reveal',
                        text: shareText
                    });
                    shareIg.textContent = originalText;
                    return; // Success!
                }
                throw new Error("Native sharing not supported");
            } catch (err) {
                console.log("Sharing failed, trying fallback:", err);

                if (file) {
                    // 2. Fallback: Download Image
                    shareIg.textContent = "Saving...";
                    try {
                        const link = document.createElement('a');
                        link.href = URL.createObjectURL(file);
                        link.download = `kpop-reveal-${idolName}.jpg`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);

                        alert("Saved the Magic Card to your photos! 💾\n\nClick OK to open Instagram, then please select the photo from your gallery.");
                    } catch (dlErr) {
                        alert("Could not save image: " + dlErr.message);
                    }
                } else {
                    alert("Could not generate image: " + err.message);
                }

                shareIg.textContent = originalText;

                // 3. Open Instagram (Immediately after alert closes)
                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                if (isMobile) {
                    window.location.href = 'instagram://story-camera';
                    // Fallback to web if app fails
                    setTimeout(() => {
                        window.open('https://www.instagram.com/', '_blank');
                    }, 2000);
                } else {
                    window.open('https://www.instagram.com/', '_blank');
                }
            }
        };

        // Copy
        shareCopy.textContent = "Copy";
        shareCopy.onclick = () => {
            navigator.clipboard.writeText(shareText + " " + shareUrl).then(() => {
                shareCopy.textContent = "Copied!";
                setTimeout(() => shareCopy.textContent = "Copy", 2000);
            });
        };
    } else {
        shareContainer.classList.add('hidden');
    }

    if (isGameComplete) {
        nextBtn.textContent = "PLAY AGAIN";
        nextBtn.onclick = () => {
            modal.classList.add('hidden');
            initGame();
        };
    } else {
        nextBtn.textContent = "NEXT IDOL";
        nextBtn.onclick = () => {
            modal.classList.add('hidden');
            currentState.currentLevelIndex++;
            loadNextLevel();
        };
    }
}

async function generateShareImage(imgElement, idolName, revealCount) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size (use image natural size, minimum 1080px width for quality)
    const scale = Math.max(1, 1080 / imgElement.naturalWidth);
    canvas.width = imgElement.naturalWidth * scale;
    canvas.height = imgElement.naturalHeight * scale;

    // Draw Image
    ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

    // Add Gradient Overlay (Bottom)
    const gradient = ctx.createLinearGradient(0, canvas.height * 0.5, 0, canvas.height);
    gradient.addColorStop(0, 'transparent');
    gradient.addColorStop(0.8, 'rgba(0, 0, 0, 0.8)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text Settings
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';

    // 1. "I guessed..."
    ctx.font = `bold ${canvas.width * 0.08}px 'Outfit', sans-serif`;
    ctx.fillText(`I guessed ${idolName}!`, canvas.width / 2, canvas.height * 0.75);

    // 2. "in X reveals"
    ctx.font = `${canvas.width * 0.05}px 'Outfit', sans-serif`;
    ctx.fillStyle = '#00F0FF'; // Secondary color
    ctx.fillText(`in ${revealCount} reveals`, canvas.width / 2, canvas.height * 0.82);

    // 3. URL
    ctx.font = `${canvas.width * 0.035}px 'Outfit', sans-serif`;
    ctx.fillStyle = '#8b8b99'; // Text dim
    ctx.fillText('ipleumi.github.io/kpop-idol-reveal', canvas.width / 2, canvas.height * 0.92);

    return new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.9));
}

// Start
initGame();
