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
    },
    {
        name: "Chaewon",
        image: "picture/Chaewon.webp",
        options: ["Chaewon", "Sakura", "Yunjin", "Eunchae"]
    },
    {
        name: "Felix",
        image: "picture/Felix.jpg",
        options: ["Felix", "Hyunjin", "Bang Chan", "Lee Know"]
    },
    {
        name: "Hitomi",
        image: "picture/Hitomi.jpg",
        options: ["Hitomi", "Nako", "Sakura", "Wonyoung"]
    },
    {
        name: "Kazuha",
        image: "picture/Kazuha.jpg",
        options: ["Kazuha", "Chaewon", "Sakura", "Eunchae"]
    },
    {
        name: "Lee Know",
        image: "picture/Leeknow.jpg",
        options: ["Lee Know", "Felix", "Han", "Seungmin"]
    },
    {
        name: "NingNing",
        image: "picture/NingNing.jpg",
        options: ["NingNing", "Karina", "Winter", "Giselle"]
    },
    {
        name: "Yena",
        image: "picture/Yena.jpeg",
        options: ["Yena", "Yuri", "Chaewon", "Eunbi"]
    },
    {
        name: "Leeseo",
        image: "picture/leeseo-ive.jpg",
        options: ["Leeseo", "Wonyoung", "Yujin", "Liz"]
    },
    {
        name: "Rami",
        image: "picture/rami.jpg",
        options: ["Rami", "Pharita", "Rora", "Ahyeon"]
    }
];

// State
let currentState = {
    revealCount: 0,
    currentIdol: null,
    revealedTiles: 0,
    isGameOver: false,
    wrongGuesses: 0,
    currentLevelIndex: 0,
    completedLevels: JSON.parse(localStorage.getItem('completedLevels')) || []
};

// DOM Elements
const startScreen = document.getElementById('start-screen');
const levelSelectScreen = document.getElementById('level-select-screen');
const gameContainer = document.getElementById('game-container');
const levelsGrid = document.getElementById('levels-grid');

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

// Buttons
const startBtn = document.getElementById('start-btn');
const backToStartBtn = document.getElementById('back-to-start-btn');
const backToMenuBtn = document.getElementById('back-to-menu-btn');

// Constants
const GRID_SIZE = 49; // 7x7
const MAX_WRONG_GUESSES = 3;

// --- Initialization ---
function init() {
    startBtn.onclick = showLevelSelect;
    backToStartBtn.onclick = showStartScreen;
    backToMenuBtn.onclick = showLevelSelect;

    generateLevelButtons();
}

// --- Navigation ---
function showStartScreen() {
    startScreen.classList.remove('hidden');
    levelSelectScreen.classList.add('hidden');
    gameContainer.classList.add('hidden');
    modal.classList.add('hidden');
}

function showLevelSelect() {
    startScreen.classList.add('hidden');
    levelSelectScreen.classList.remove('hidden');
    gameContainer.classList.add('hidden');
    modal.classList.add('hidden');
    generateLevelButtons(); // Regenerate to update completed status
}

function showGame() {
    startScreen.classList.add('hidden');
    levelSelectScreen.classList.add('hidden');
    gameContainer.classList.remove('hidden');
}

// --- Level Selection ---
function generateLevelButtons() {
    levelsGrid.innerHTML = '';
    GAME_DATA.forEach((level, index) => {
        const btn = document.createElement('button');
        btn.className = 'level-btn';
        if (currentState.completedLevels.includes(index)) {
            btn.classList.add('completed');
            btn.textContent = "✓ " + (index + 1);
        } else {
            btn.textContent = index + 1;
        }
        btn.onclick = () => loadLevel(index);
        levelsGrid.appendChild(btn);
    });

    // Add "Waiting for update..." placeholder
    const placeholder = document.createElement('div');
    placeholder.className = 'level-placeholder';
    placeholder.textContent = "Waiting for update...";
    levelsGrid.appendChild(placeholder);
}

// --- Game Logic ---
function loadLevel(index) {
    currentState.currentLevelIndex = index;
    const levelData = GAME_DATA[index];
    currentState.currentIdol = levelData;

    // Reset State
    currentState.revealCount = 0;
    currentState.revealedTiles = 0;
    currentState.isGameOver = false;
    currentState.wrongGuesses = 0;
    updateStats();

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

    // Generate Options
    optionsGrid.innerHTML = '';
    const options = [...levelData.options].sort(() => Math.random() - 0.5);

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => handleOptionClick(btn, opt, levelData.name);
        optionsGrid.appendChild(btn);
    });

    showGame();
}

function updateStats() {
    scoreEl.textContent = currentState.revealCount;
    scoreEl.style.transform = "scale(1.2)";
    setTimeout(() => scoreEl.style.transform = "scale(1)", 200);
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

        // Save Progress
        if (!currentState.completedLevels.includes(currentState.currentLevelIndex)) {
            currentState.completedLevels.push(currentState.currentLevelIndex);
            localStorage.setItem('completedLevels', JSON.stringify(currentState.completedLevels));
        }

        setTimeout(() => {
            showModal("CORRECT!", `It was ${correct}! Tiles Revealed: ${currentState.revealCount}`, false, correct, currentState.revealCount);
        }, 1000);
    } else {
        // Wrong
        btn.classList.add('wrong');
        btn.disabled = true;
        currentState.wrongGuesses++;

        if (currentState.wrongGuesses >= MAX_WRONG_GUESSES) {
            // Game Over
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
        const shareUrl = window.location.href;

        // X (Twitter)
        shareX.onclick = () => {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        };

        // Instagram
        shareIg.onclick = async () => {
            const originalText = shareIg.textContent;
            shareIg.textContent = "Generating...";
            let file;

            try {
                file = await generateShareImage(idolImg, idolName, revealCount);
                if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                    await navigator.share({ files: [file], title: 'K-Pop Idol Reveal', text: shareText });
                    shareIg.textContent = originalText;
                    return;
                }
                throw new Error("Native sharing not supported");
            } catch (err) {
                console.log("Sharing failed:", err);
                if (file) {
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

                // Open Instagram
                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                if (isMobile) {
                    window.location.href = 'instagram://story-camera';
                    setTimeout(() => window.open('https://www.instagram.com/', '_blank'), 2000);
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

    // Next Button Logic
    if (title === "CORRECT!") {
        nextBtn.textContent = "NEXT IDOL"; // Changed from NEXT LEVEL
        nextBtn.onclick = () => {
            // Go to next level if available, else back to menu
            if (currentState.currentLevelIndex < GAME_DATA.length - 1) {
                loadLevel(currentState.currentLevelIndex + 1);
            } else {
                showLevelSelect();
            }
            modal.classList.add('hidden');
        };
    } else {
        nextBtn.textContent = "TRY AGAIN";
        nextBtn.onclick = () => {
            loadLevel(currentState.currentLevelIndex);
            modal.classList.add('hidden');
        };
    }
}

async function generateShareImage(imgElement, idolName, revealCount) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const scale = Math.max(1, 1080 / imgElement.naturalWidth);
    canvas.width = imgElement.naturalWidth * scale;
    canvas.height = imgElement.naturalHeight * scale;

    ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(0, canvas.height * 0.5, 0, canvas.height);
    gradient.addColorStop(0, 'transparent');
    gradient.addColorStop(0.8, 'rgba(0, 0, 0, 0.8)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${canvas.width * 0.08}px 'Outfit', sans-serif`;
    ctx.fillText(`I guessed ${idolName}!`, canvas.width / 2, canvas.height * 0.75);

    ctx.font = `${canvas.width * 0.05}px 'Outfit', sans-serif`;
    ctx.fillStyle = '#00F0FF';
    ctx.fillText(`in ${revealCount} reveals`, canvas.width / 2, canvas.height * 0.82);

    ctx.font = `${canvas.width * 0.035}px 'Outfit', sans-serif`;
    ctx.fillStyle = '#8b8b99';
    ctx.fillText('ipleumi.github.io/kpop-idol-reveal', canvas.width / 2, canvas.height * 0.92);

    return new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.9));
}

// Start
init();
