class NonogramGame {
  constructor(size = 5) {
    this.size = size;
    this.templates = {
      5: [
        {
          name: 'Heart',
          solution: [
            [0,1,0,1,0],
            [1,1,1,1,1],
            [1,1,1,1,1],
            [0,1,1,1,0],
            [0,0,1,0,0]
          ],
          rowClues: [
            [1,1],
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
            [0,0,1,0,0],
            [0,1,1,1,0],
            [1,1,1,1,1],
            [0,1,1,1,0],
            [0,0,1,0,0]
          ],
          rowClues: [[1], [3], [5], [3], [1]],
          colClues: [[1], [3], [5], [3], [1]]
        },
        {
          name: 'Duck',
          solution: [
            [0,1,1,0,0],
            [1,1,0,0,0],
            [0,1,1,1,0],
            [0,0,1,1,1],
            [0,0,1,1,0]
          ],
          rowClues: [[2], [2], [3], [3], [2]],
          colClues: [[1], [3], [1,3], [3], [1]]
        },
        {
          name: 'Cat',
          solution: [
            [1,0,0,0,1],
            [0,1,0,1,0],
            [0,0,1,0,0],
            [1,1,1,1,1],
            [0,1,1,1,0]
          ],
          rowClues: [[1,1], [1,1], [1], [5], [3]],
          colClues: [[1,1], [1,2], [3], [1,2], [1,1]]
        },
        {
          name: 'House',
          solution: [
            [0,0,1,0,0],
            [0,1,1,1,0],
            [1,1,1,1,1],
            [0,1,1,1,0],
            [0,1,1,1,0]
          ],
          rowClues: [[1], [3], [5], [3], [3]],
          colClues: [[1], [4], [5], [4], [1]]
        }
      ],
      10: [
        {
          name: 'Butterfly',
          solution: [
            [0,1,0,0,0,0,0,0,1,0],
            [1,1,1,0,0,0,0,1,1,1],
            [1,1,1,1,0,0,1,1,1,1],
            [0,1,1,1,1,1,1,1,1,0],
            [0,0,1,1,1,1,1,1,0,0],
            [0,0,1,1,1,1,1,1,0,0],
            [0,1,1,1,1,1,1,1,1,0],
            [1,1,1,1,0,0,1,1,1,1],
            [1,1,1,0,0,0,0,1,1,1],
            [0,1,0,0,0,0,0,0,1,0]
          ],
          rowClues: [[1,1], [3,3], [4,4], [8], [6], [6], [8], [4,4], [3,3], [1,1]],
          colClues: [[2,2], [4,4], [8], [6], [4], [4], [6], [8], [4,4], [2,2]]
        },
        {
          name: 'Ship',
          solution: [
            [0,0,0,0,1,1,0,0,0,0],
            [0,0,0,1,1,1,1,0,0,0],
            [0,0,1,1,1,1,1,1,0,0],
            [0,1,1,1,1,1,1,1,1,0],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [0,1,1,1,1,1,1,1,1,0],
            [0,0,1,1,1,1,1,1,0,0],
            [0,0,0,1,1,1,1,0,0,0],
            [0,0,0,0,1,1,0,0,0,0]
          ],
          rowClues: [[2], [4], [6], [8], [10], [10], [8], [6], [4], [2]],
          colClues: [[2], [4], [6], [8], [10], [10], [8], [6], [4], [2]]
        },
        {
          name: 'Cat Face',
          solution: [
            [0,1,1,0,0,0,0,1,1,0],
            [1,1,1,1,0,0,1,1,1,1],
            [1,1,1,1,0,0,1,1,1,1],
            [0,1,1,0,0,0,0,1,1,0],
            [0,0,0,1,1,1,1,0,0,0],
            [0,0,1,1,1,1,1,1,0,0],
            [0,1,1,0,0,0,0,1,1,0],
            [1,1,0,0,1,1,0,0,1,1],
            [1,0,0,0,1,1,0,0,0,1],
            [0,0,0,0,1,1,0,0,0,0]
          ],
          rowClues: [[2,2], [4,4], [4,4], [2,2], [4], [6], [2,2], [2,2,2], [1,2,1], [2]],
          colClues: [[2,2], [4,2], [4,2], [2,2], [2,3], [2,3], [2,2], [4,2], [4,2], [2,2]]
        },
        {
          name: 'Anchor',
          solution: [
            [0,0,0,1,1,1,1,0,0,0],
            [0,0,0,0,1,1,0,0,0,0],
            [0,0,0,0,1,1,0,0,0,0],
            [1,0,0,1,1,1,1,0,0,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,0,0,1,1,1,1,0,0,1],
            [0,0,0,0,1,1,0,0,0,0],
            [0,0,0,0,1,1,0,0,0,0],
            [0,0,0,1,1,1,1,0,0,0]
          ],
          rowClues: [[4], [2], [2], [1,4,1], [10], [10], [1,4,1], [2], [2], [4]],
          colClues: [[4], [2], [2], [1,4,1], [10], [10], [1,4,1], [2], [2], [4]]
        },
        {
          name: 'Crown',
          solution: [
            [0,0,1,0,0,0,0,1,0,0],
            [0,1,1,1,0,0,1,1,1,0],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,0,1,1,0,1,1,1],
            [1,1,0,0,1,1,0,0,1,1],
            [1,0,0,0,1,1,0,0,0,1],
            [1,1,0,1,1,1,1,0,1,1],
            [1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1]
          ],
          rowClues: [[1,1], [3,3], [10], [10], [3,2,3], [2,2,2], [1,2,1], [2,4,2], [10], [10]],
          colClues: [[8], [5,3], [5,2], [3,3], [8], [8], [3.3], [5,2], [5,3], [8]]
        }
      ],
      15: [
        {
          name: 'Dragon',
          solution: [
            [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
            [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
            [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
            [0,1,1,1,1,0,1,1,1,0,1,1,1,1,0],
            [1,1,1,1,0,0,1,1,1,0,0,1,1,1,1],
            [1,1,1,1,0,1,1,1,1,1,0,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
            [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
            [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
            [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
            [0,0,1,1,1,0,0,0,0,0,1,1,1,0,0],
            [0,1,1,1,0,0,0,0,0,0,0,1,1,1,0],
            [1,1,1,0,0,0,0,0,0,0,0,0,1,1,1]
          ],
          rowClues: [[7], [9], [11], [4,3,4], [4,3,4], [4,5,4], [15], [13], [11], [9], [7], [3,3], [3,3], [3,3], [3,3]],
          colClues: [[3,1], [5,2], [7,3], [9,3], [4,7], [3,7], [11], [11], [11], [3,7], [4,7], [9,3], [7,3], [5,2], [3,1]]
        },
        {
          name: 'Castle',
          solution: [
            [0,0,1,0,1,0,1,1,1,0,1,0,1,0,0],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,0,0,1,1,1,1,1,0,0,1,1,1],
            [1,1,1,0,0,1,1,1,1,1,0,0,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [0,1,1,1,1,0,1,1,1,0,1,1,1,1,0],
            [0,1,1,1,0,0,1,1,1,0,0,1,1,1,0],
            [0,1,1,1,0,0,1,1,1,0,0,1,1,1,0],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
            [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
            [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
            [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0]
          ],
          rowClues: [[1,1,3,1,1], [13], [15], [15], [3,5,3], [3,5,3], [15], [4,3,4], [3,3,3], [3,3,3], [13], [11], [9], [7], [5]],
          colClues: [[5], [10], [12], [3,7], [4,2,4], [6,5], [15], [15], [15], [6,5], [4,2,4], [3,7], [12], [10], [5]]
        },
        {
          name: 'Pirate Ship',
          solution: [
            [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
            [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
            [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
            [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
            [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
            [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
            [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
            [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0]
          ],
          rowClues: [[3], [5], [7], [9], [11], [13], [15], [15], [15], [13], [11], [9], [7], [5], [3]],
          colClues: [[3], [5], [7], [9], [11], [13], [15], [15], [15], [13], [11], [9], [7], [5], [3]]
        },
        {
          name: 'Steps',
          solution: [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
            [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
            [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
            [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
            [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
            [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
            [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
            [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
            [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
          ],
          rowClues: [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15]],
          colClues: [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15]]
        },
        {
          name: 'Lighthouse',
          solution: [
            [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
            [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
            [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
            [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
            [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
            [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
            [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0]
          ],
          rowClues: [[3], [5], [7], [5], [5], [7], [9], [11], [13], [15], [15], [15], [13], [11], [9]],
          colClues: [[3], [5], [7], [9], [1,10], [14], [15], [15], [15], [14], [1,10], [9], [7], [5], [3]]
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

    // Загрузка сохраненной игры
    const savedState = JSON.parse(localStorage.getItem('nonogram-state') || 'null');
    if (savedState) {
      this.size = savedState.size;
      this.currentTemplate = savedState.template;
      this.grid = savedState.grid;
      this.startTime = new Date(savedState.startTime); // Преобразуем строку в Date
      this.markedCells = savedState.markedCells || []; // Сохраняем отмеченные X клетки
    }
    this.initGame();
  }

  initGame(size = 5, templateIndex = 0) {
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

  createGameUI() {
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

    // Theme toggle
    const themeToggle = document.createElement('button');
    themeToggle.textContent = `Switch to ${this.theme === 'light' ? 'Dark' : 'Light'} Theme`;
    themeToggle.addEventListener('click', () => this.toggleTheme());

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

    gameControls.append(
      levelSelect, 
      templateSelect, 
      resetButton, 
      themeToggle, 
      soundToggle, 
      randomButton, 
      solutionButton, 
      continueButton
    );

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

    // Добавляем таблицу результатов
    const resultsTable = document.createElement('div');
    resultsTable.id = 'results-table';
    resultsTable.innerHTML = `
      <h3>Top 5 Results</h3>
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Template</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          ${Array(5).fill(null).map((_, index) => {
            const result = this.winResults[index];
            return result ? `
              <tr>
                <td>${result.size}x${result.size}</td>
                <td>${result.template}</td>
                <td>${Math.floor(result.time / 60)}:${(result.time % 60).toString().padStart(2, '0')}</td>
              </tr>
            ` : `
              <tr>
                <td class="empty-cell">-</td>
                <td class="empty-cell">-</td>
                <td class="empty-cell">-</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;

    // Создаем контейнер для игрового поля и таблицы результатов
    const gameAndResults = document.createElement('div');
    gameAndResults.className = 'game-and-results';

    // Создаем контейнер для игровой области
    const gameArea = document.createElement('div');
    gameArea.id = 'game-area';

    // Добавляем clueContainer в gameArea
    clueContainer.append(rowCluesElement, columnCluesElement, gridElement);
    gameArea.appendChild(clueContainer);

    // Добавляем игровую область и таблицу результатов в общий контейнер
    gameAndResults.appendChild(gameArea);
    gameAndResults.appendChild(resultsTable);

    // Собираем все элементы
    gameContainer.appendChild(gameControls);
    gameContainer.appendChild(gameAndResults);
    gameContainer.appendChild(gameMessage);

    // Очищаем body и добавляем новый UI
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

    // Сохраняем состояние после каждого хода
    this.saveGameState();
    this.checkGameCompletion();
  }

  crossCell(row, col) {
    const cell = document.querySelector(`.grid-cell[data-row="${row}"][data-col="${col}"]`);

    if (cell.classList.contains('black')) return;

    cell.classList.toggle('x-mark');
    if (this.soundEnabled) this.sounds.cross.play();

    // Сохраняем состояние после каждой отметки X
    this.saveGameState();
  }

  resetGame() {
    // Reset grid
    this.grid = Array(this.size).fill().map(() => Array(this.size).fill(0));

    // Clear grid cells
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
      cell.classList.remove('black', 'x-mark');
    });

    // Reset timer and message
    this.startTime = null;
    if (this.timer) clearInterval(this.timer);
    document.getElementById('game-message').textContent = '';
  }

  startTimer() {
    const timerElement = document.createElement('div');
    timerElement.id = 'game-timer';
    document.getElementById('game-controls').appendChild(timerElement);

    // Очищаем предыдущий таймер, если он был
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.timer = setInterval(() => {
      const currentTime = new Date();
      const elapsedSeconds = Math.floor((currentTime - this.startTime) / 1000);
      const minutes = Math.floor(elapsedSeconds / 60);
      const seconds = elapsedSeconds % 60;
      timerElement.textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }

  checkGameCompletion() {
    const isCorrect = this.grid.every((row, rowIndex) =>
      row.every((cell, colIndex) => cell === this.currentTemplate.solution[rowIndex][colIndex])
    );

    if (isCorrect) {
      this.winGame();
    }
  }

  winGame() {
    clearInterval(this.timer);
    const elapsedSeconds = Math.floor((new Date() - this.startTime) / 1000);


    if (!this.solutionUsed) {
      this.saveWinResult(elapsedSeconds);
    }

    const gameMessage = document.getElementById('game-message');
    gameMessage.textContent = `Great! You have solved the nonogram in ${elapsedSeconds} seconds!`;

    if (this.soundEnabled) this.sounds.win.play();

    // Clear saved game state
    localStorage.removeItem('nonogram-state');
  }

  saveGameState() {
    const state = {
      size: this.size,
      template: this.currentTemplate,
      grid: this.grid,
      startTime: this.startTime?.toISOString(),
      markedCells: Array.from(document.querySelectorAll('.grid-cell.x-mark'))
        .map(cell => ({
          row: parseInt(cell.dataset.row),
          col: parseInt(cell.dataset.col)
        })),
      elapsedTime: this.startTime ? Math.floor((new Date() - this.startTime) / 1000) : 0
    };
    localStorage.setItem('nonogram-state', JSON.stringify(state));
  }

  saveWinResult(timeSeconds) {
    // Добавляем новый результат только если не использовалась кнопка решения
    if (!this.solutionUsed) {
      this.winResults.push({
        size: this.size,
        template: this.currentTemplate.name,
        time: timeSeconds,
        date: new Date().toISOString()
      });
      
      // Сортировка по времени
      this.winResults.sort((a, b) => a.time - b.time);
      
      // Оставляем только 5 лучших результатов
      this.winResults = this.winResults.slice(0, 5);
      
      // Сохраняем в localStorage
      localStorage.setItem('nonogram-results', JSON.stringify(this.winResults));
      
      // Обновляем таблицу результатов
      const resultsTable = document.getElementById('results-table');
      if (resultsTable) {
        resultsTable.querySelector('tbody').innerHTML = Array(5).fill(null).map((_, index) => {
          const result = this.winResults[index];
          return result ? `
            <tr>
              <td>${result.size}x${result.size}</td>
              <td>${result.template}</td>
              <td>${Math.floor(result.time / 60)}:${(result.time % 60).toString().padStart(2, '0')}</td>
            </tr>
          ` : `
            <tr>
              <td class="empty-cell">-</td>
              <td class="empty-cell">-</td>
              <td class="empty-cell">-</td>
            </tr>
          `;
        }).join('');
      }
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('nonogram-theme', this.theme);
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('nonogram-sound', this.soundEnabled);
    const soundToggle = document.querySelector('button:nth-child(5)');
    soundToggle.textContent = `Sound ${this.soundEnabled ? 'Off' : 'On'}`;
  }

  showSolution() {
    this.solutionUsed = true;
    this.grid = this.currentTemplate.solution.map(row => [...row]);
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach((cell, index) => {
      const row = Math.floor(index / this.size);
      const col = index % this.size;
      cell.classList.remove('black', 'x-mark');
      if (this.grid[row][col]) {
        cell.classList.add('black');
      }
    });
  }

  continueLastGame() {
    const savedState = JSON.parse(localStorage.getItem('nonogram-state'));
    if (savedState) {
      // Находим индекс текущего шаблона
      const templateIndex = this.templates[savedState.size].findIndex(
        template => template.name === savedState.template.name
      );

      this.size = savedState.size;
      this.currentTemplate = savedState.template;
      this.grid = savedState.grid.map(row => [...row]); // Создаем глубокую копию сетки
      
      // Восстанавливаем время
      if (savedState.startTime) {
        const savedElapsedTime = savedState.elapsedTime || 0;
        this.startTime = new Date(Date.now() - savedElapsedTime * 1000);
      }

      // Обновляем UI с правильным индексом шаблона
      this.initGame(this.size, templateIndex);
      this.loadSavedGrid();
    }
  }

  loadSavedGrid() {
    const cells = document.querySelectorAll('.grid-cell');
    const savedState = JSON.parse(localStorage.getItem('nonogram-state'));

    if (!savedState) return;

    cells.forEach((cell, index) => {
      const row = Math.floor(index / this.size);
      const col = index % this.size;
      
      // Восстанавливаем черные клетки
      if (savedState.grid[row][col] === 1) {
        cell.classList.add('black');
      }
      
      // Восстанавливаем отмеченные X клетки
      if (savedState.markedCells) {
        const isMarked = savedState.markedCells.some(
          marked => marked.row === row && marked.col === col
        );
        if (isMarked) {
          cell.classList.add('x-mark');
        }
      }
    });

    // Восстанавливаем таймер с правильного момента
    if (this.startTime) {
      this.startTimer();
    }
  }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
  window.game = new NonogramGame();
});