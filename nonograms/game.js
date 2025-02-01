constructor(size = 5)
{
  this.size = size;
  this.templates = {
    5: [
      {
        name: 'Heart',
        solution: [
          [0, 1, 0, 1, 0],
          [1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1],
          [0, 1, 1, 1, 0],
          [0, 0, 1, 0, 0]
        ],
        rowClues: [
          [1, 1],
          [5],
          [5],
          [3],
          [1]
        ],
        colClues: [
          [2],
          [4],
          [4],
          [4],
          [2]
        ]
      },
      {
        name: 'Star',
        solution: [
          [0, 0, 1, 0, 0],
          [0, 1, 1, 1, 0],
          [1, 1, 1, 1, 1],
          [0, 1, 1, 1, 0],
          [0, 0, 1, 0, 0]
        ],
        rowClues: [[1], [3], [5], [3], [1]],
        colClues: [[1], [3], [5], [3], [1]]
      },
      {
        name: 'Duck',
        solution: [
          [0, 1, 1, 0, 0],
          [1, 1, 0, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 1, 1, 1],
          [0, 0, 1, 1, 0]
        ],
        rowClues: [[2], [2], [3], [3], [2]],
        colClues: [[1], [3], [1, 3], [3], [1]]
      },
      {
        name: 'Cat',
        solution: [
          [1, 0, 0, 0, 1],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [1, 1, 1, 1, 1],
          [0, 1, 1, 1, 0]
        ],
        rowClues: [[1, 1], [1, 1], [1], [5], [3]],
        colClues: [[1, 1], [1, 2], [3], [1, 2], [1, 1]]
      },
      {
        name: 'House',
        solution: [
          [0, 0, 1, 0, 0],
          [0, 1, 1, 1, 0],
          [1, 1, 1, 1, 1],
          [0, 1, 1, 1, 0],
          [0, 1, 1, 1, 0]
        ],
        rowClues: [[1], [3], [5], [3], [3]],
        colClues: [[1], [4], [5], [4], [1]]
      }
    ],
    10: [
      {
        name: 'Butterfly',
        solution: [
          [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
          [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
          [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
          [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
          [0, 1, 0, 0, 0, 0, 0, 0, 1, 0]
        ],
        rowClues: [[1, 1], [3, 3], [4, 4], [8], [6], [6], [8], [4, 4], [3, 3], [1, 1]],
        colClues: [[2, 2], [4, 4], [8], [6], [4], [4], [6], [8], [4, 4], [2, 2]]
      },
      {
        name: 'Ship',
        solution: [
          [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
        ],
        rowClues: [[2], [4], [6], [8], [10], [10], [8], [6], [4], [2]],
        colClues: [[2], [4], [6], [8], [10], [10], [8], [6], [4], [2]]
      },
      {
        name: 'Cat Face',
        solution: [
          [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
          [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
          [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
          [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
          [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
          [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
          [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
        ],
        rowClues: [[2, 2], [4, 4], [4, 4], [2, 2], [4], [6], [2, 2], [2, 2, 2], [1, 2, 1], [2]],
        colClues: [[2, 2], [4, 2], [4, 2], [2, 2], [2, 3], [2, 3], [2, 2], [4, 2], [4, 2], [2, 2]]
      },
      {
        name: 'Anchor',
        solution: [
          [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
          [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
          [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
        ],
        rowClues: [[4], [2], [2], [1, 4, 1], [10], [10], [1, 4, 1], [2], [2], [4]],
        colClues: [[4], [2], [2], [1, 4, 1], [10], [10], [1, 4, 1], [2], [2], [4]]
      },
      {
        name: 'Crown',
        solution: [
          [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
          [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
          [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
          [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
          [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        rowClues: [[1, 1], [3, 3], [10], [10], [3, 2, 3], [2, 2, 2], [1, 2, 1], [2, 4, 2], [10], [10]],
        colClues: [[8], [5, 3], [5, 2], [3, 3], [8], [8], [3.3], [5, 2], [5, 3], [8]]
      }
    ],
    15: [
      {
        name: 'Dragon',
        solution: [
          [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
          [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
          [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
          [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
          [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
        ],
        rowClues: [[7], [9], [11], [4, 3, 4], [4, 3, 4], [4, 5, 4], [15], [13], [11], [9], [7], [3, 3], [3, 3], [3, 3], [3, 3]],
        colClues: [[3, 1], [5, 2], [7, 3], [9, 3], [4, 7], [3, 7], [11], [11], [11], [3, 7], [4, 7], [9, 3], [7, 3], [5, 2], [3, 1]]
      },
      {
        name: 'Castle',
        solution: [
          [0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
          [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
          [0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
          [0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
        ],
        rowClues: [[1, 1, 3, 1, 1], [13], [15], [15], [3, 5, 3], [3, 5, 3], [15], [4, 3, 4], [3, 3, 3], [3, 3, 3], [13], [11], [9], [7], [5]],
        colClues: [[5], [10], [12], [3, 7], [4, 2, 4], [6, 5], [15], [15], [15], [6, 5], [4, 2, 4], [3, 7], [12], [10], [5]]
      },
      {
        name: 'Pirate Ship',
        solution: [
          [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
        ],
        rowClues: [[3], [5], [7], [9], [11], [13], [15], [15], [15], [13], [11], [9], [7], [5], [3]],
        colClues: [[3], [5], [7], [9], [11], [13], [15], [15], [15], [13], [11], [9], [7], [5], [3]]
      },
      {
        name: 'Steps',
        solution: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        rowClues: [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15]],
        colClues: [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15]]


      },
      {
        name: 'Lighthouse',
        solution: [
          [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
        ],
        rowClues: [[3], [5], [7], [5], [5], [7], [9], [11], [13], [15], [15], [15], [13], [11], [9]],
        colClues: [[3], [5], [7], [9], [1, 10], [14], [15], [15], [15], [14], [1, 10], [9], [7], [5], [3]]
      }
    ]
  };
  this.currentTemplate = null;
  this.grid = null;
  this.startTime = null;
  this.timer = null;
  this.sounds = {
    mark: new Audio('./assets/on-or-off-light-switch-tap-2585.wav'),
    unmark: new Audio('./assets/typewriter-soft-click-1125.wav'),
    cross: new Audio('./assets/interface-device-click-2577.wav'),
    win: new Audio('./assets/quick-win-video-game-notification-269.wav')
  };
  this.theme = localStorage.getItem('nonogram-theme') || 'light';
  this.soundEnabled = localStorage.getItem('nonogram-sound') !== 'false';
  this.winResults = JSON.parse(localStorage.getItem('nonogram-results') || '[]');

  // Try to load saved game state
  const savedState = JSON.parse(localStorage.getItem('nonogram-state') || 'null');
  if (savedState) {
    this.size = savedState.size;
    this.currentTemplate = savedState.template;
    this.grid = savedState.grid;
    this.startTime = savedState.startTime;
  }
  this.initGame();
}

initGame(size = 5, templateIndex = 0)
{
  this.size = size;
  this.currentTemplate = this.templates[size][templateIndex];
  this.grid = Array(size).fill().map(() => Array(size).fill(0));
  this.createGameUI();

  // Устанавливаем правильное значение в select после создания UI
  const templateSelect = document.querySelector('#game-controls select:nth-child(2)');
  if (templateSelect) {
    templateSelect.value = templateIndex;
  }
  // Устанавливаем правильное значение для размера сетки
  const levelSelect = document.querySelector('#game-controls select:first-child');
  if (levelSelect) {
    levelSelect.value = size.toString();
  }

  this.resetGame();
}

createGameUI()
{
  const gameContainer = document.createElement('div');
  gameContainer.id = 'game-container';

  // Game controls
  const gameControls = document.createElement('div');
  gameControls.id = 'game-controls';

  const levelSelect = document.createElement('select');
  levelSelect.innerHTML = `
            <option value="5">Easy (5x5)</option>
            <option value="10">Medium (10x10)</option>
            <option value="15">Hard (15x15)</option>
        `;
  levelSelect.addEventListener('change', (e) => {
    this.initGame(parseInt(e.target.value));
  });

  const templateSelect = document.createElement('select');
  this.templates[this.size].forEach((template, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = template.name;
    templateSelect.appendChild(option);
  });
  templateSelect.addEventListener('change', (e) => {
    this.initGame(this.size, parseInt(e.target.value));
  });

  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset Game';
  resetButton.addEventListener('click', () => this.resetGame());


  // Sound toggle
  const soundToggle = document.createElement('button');
  soundToggle.textContent = `Sound ${this.soundEnabled ? 'Off' : 'On'}`;
  soundToggle.addEventListener('click', () => this.toggleSound());

  // Random game button
  const randomButton = document.createElement('button');
  randomButton.textContent = 'Random Game';
  randomButton.onclick = () => {
    const sizes = [5, 10, 15];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    const templates = this.templates[randomSize];
    const randomTemplate = Math.floor(Math.random() * templates.length);
    this.initGame(randomSize, randomTemplate);
  };

  // Solution button
  const solutionButton = document.createElement('button');
  solutionButton.textContent = 'Show Solution';
  solutionButton.addEventListener('click', () => this.showSolution());

  // Continue last game button
  const continueButton = document.createElement('button');
  continueButton.textContent = 'Continue Last Game';
  continueButton.style.display = localStorage.getItem('nonogram-state') ? 'block' : 'none';
  continueButton.addEventListener('click', () => this.continueLastGame());

  gameControls.append(levelSelect, templateSelect, resetButton, themeToggle, soundToggle, randomButton, solutionButton, continueButton);

  // Clue container
  const clueContainer = document.createElement('div');
  clueContainer.id = 'clue-container';

  // Column clues
  const columnCluesElement = document.createElement('div');
  columnCluesElement.id = 'column-clues';
  columnCluesElement.classList.add('clue-column');
  columnCluesElement.style.display = 'grid';
  columnCluesElement.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;

  this.currentTemplate.colClues.forEach(clues => {
    const clueCell = document.createElement('div');
    clueCell.classList.add('clue-cell');

    clues.forEach(clue => {
      const clueItem = document.createElement('span');
      clueItem.textContent = clue;
      clueCell.appendChild(clueItem);
    });

    // Добавляем правую границу каждые 5 клеток, кроме последней колонки
    const index = columnCluesElement.children.length;
    if ((index + 1) % 5 === 0 && index < this.size - 1) {
      clueCell.style.borderRight = '3px solid black';
    }

    columnCluesElement.appendChild(clueCell);
  });


  // Row clues
  const rowCluesElement = document.createElement('div');
  rowCluesElement.id = 'row-clues';
  rowCluesElement.classList.add('clue-row');
  rowCluesElement.style.display = 'grid';
  rowCluesElement.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;

  this.currentTemplate.rowClues.forEach(clues => {
    const clueCell = document.createElement('div');
    clueCell.classList.add('clue-cell');
    clueCell.textContent = clues.join(' ');

    // Добавляем нижнюю границу каждые 5 строк, кроме последней строки
    const index = rowCluesElement.children.length;
    if ((index + 1) % 5 === 0 && index < this.size - 1) {
      clueCell.style.borderBottom = '3px solid black';
    }

    rowCluesElement.appendChild(clueCell);
  });


  // Grid
  const gridElement = document.createElement('div');
  gridElement.id = 'nonogram-grid';
  gridElement.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;

  for (let row = 0; row < this.size; row++) {
    for (let col = 0; col < this.size; col++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      cell.dataset.row = row;
      cell.dataset.col = col;

      cell.addEventListener('mousedown', (e) => {
        e.preventDefault();
        if (e.button === 0) this.markCell(row, col);
        else if (e.button === 2) this.crossCell(row, col);
      });

      // Добавляем правую границу каждые 5 клеток, кроме последней колонки
      if ((col + 1) % 5 === 0 && col < this.size - 1) {
        cell.style.borderRight = '3px solid black';
      }

      // Добавляем нижнюю границу каждые 5 строк, кроме последней строки
      if ((row + 1) % 5 === 0 && row < this.size - 1) {
        cell.style.borderBottom = '3px solid black';
      }

      gridElement.appendChild(cell);
    }
  }

  // Game message
  const gameMessage = document.createElement('div');
  gameMessage.id = 'game-message';

  // Изменяем порядок добавления элементов в clueContainer
  clueContainer.append(rowCluesElement, columnCluesElement, gridElement);

  // Assemble all elements
  gameContainer.append(gameControls, clueContainer, gameMessage);

  // Clear previous content and add new game UI
  document.body.innerHTML = '';
  document.body.appendChild(gameContainer);

  // Prevent context menu
  document.addEventListener('contextmenu', e => e.preventDefault());
}

markCell(row, col) {
  const cell = document.querySelector(`.grid-cell[data-row="${row}"][data-col="${col}"]`);

  // Start timer on first click
  if (!this.startTime) {
    this.startTime = new Date();
    this.startTimer();
  }

  if (cell.classList.contains('black')) {
    cell.classList.remove('black');
    this.grid[row][col] = 0;
    if (this.soundEnabled) this.sounds.unmark.play();
  } else {
    cell.classList.remove('x-mark');
    cell.classList.add('black');
    this.grid[row][col] = 1;
    if (this.soundEnabled) this.sounds.mark.play();
  }

  this.saveGameState();
  this.checkGameCompletion();
}

crossCell(row, col) {
  const cell = document.querySelector(`.grid-cell[data-row="${row}"][data-col="${col}"]`);

  if (cell.classList.contains('black')) return;

  cell.classList.toggle('x-mark');
  if (this.soundEnabled) this.sounds.cross.play();
}

resetGame()
{
  // Reset grid
  this.grid = Array(this.size).fill().map(() => Array(this.size).fill(0));

  // Clear grid cells
  const cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => {
    cell.classList.remove('black', 'x-mark');
  });
}