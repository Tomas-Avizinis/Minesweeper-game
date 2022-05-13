function minesweeper() {
    let startTime = 0;
    let time = 0;
    let gameOn = false;

    const timeCounter = () => {
        if (gameOn) {
            time = Math.floor((Date.now() - startTime) /100)/10;
        }
        timer.textContent = time.toFixed(1);
    }

    setInterval(timeCounter, 100)
    console.log('pradejau', startTime);

    const container = document.querySelector('.container');
    const timer = document.createElement('div');
    timer.className = 'timer';
    container.append(timer);
    timer.textContent = 0;
    

    const minefield = document.createElement('div');
    minefield.classList.add('minefield')
    container.append(minefield);

    let fieldSize = 12;

    for (let i = 0; i < fieldSize; i++) {
        const row = document.createElement('div');
        row.className = 'flex';
        minefield.append(row);

        for (let j = 0; j < fieldSize; j++) {
            const cell = document.createElement('div');
            cell.no = i * fieldSize + j;
            cell.className = 'cell';
            cell.classList.add((Math.random() <.12)? 'bomb' : 'empty');
            row.append(cell);

            ////EVENT - on normal click
            cell.onclick = () => {
                if (!gameOn) {
                    gameOn = true;
                    startTime = Date.now();
                }
                

                if (!cell.classList.contains('flag')) {
                    openCell(cell);

                    let openCellsCounter = 0;
                    cells.forEach(cell=>{
                        openCellsCounter += (cell.classList.contains('open') || cell.classList.contains('bomb'))? 1 : 0;
                    })

                    if (cell.classList.contains('bomb')) {
                        endMessage(false);
                    }

                    if (openCellsCounter == fieldSize * fieldSize) {
                        endMessage(true);
                    }

                    if (minesNear(cell.no) == 0) {
                        for (let i = 0; i < fieldSize; i++) { // atveriame kaimyninius langelius aplink tuscia langeli
                            cells.forEach((cell)=>{
                                if (cell.classList.contains('open') && (minesNear(cell.no) == 0)) {
                                    nextCells(cell.no).forEach(number => openCell(cells[number]))
                                }
                            })
                        }
                    }
                }
                
            }

            function endMessage(win) {
                const EndTime = Math.floor((Date.now() - startTime) /100) /10;
                gameOn = false;

                const endMessage = document.createElement('h1');
                minefield.append(endMessage);
                endMessage.classList.add('message')

                endMessage.style.width = endMessage.style.height = minefield.offsetWidth + 'px';
                
                endMessage.classList.add(win? 'win' : 'lose')
                endMessage.textContent = win? `You Win! You opened all safe cells and avoided bombs in ${EndTime} sek!` : `BOOOOM! Game over in ${EndTime} sek!`;
            }

            //EVENT - on right click
            cell.oncontextmenu = (event) => {
                event.preventDefault();
                if (cell.classList.contains('flag')) {
                    cell.classList.remove('flag');
                    cell.textContent = '';
                } else {
                    cell.classList.add('flag');
                    cell.textContent = '🏴';
                }
                return false;
            }
        }
    }

    function openCell(cell) {
        
        cell.classList.add('open');
        cell.style.backgroundColor = (!cell.classList.contains('bomb'))? 'white': 'red';
        
        if (cell.classList.contains('bomb')) {
            cells.forEach((cell)=>{
                cell.style.backgroundColor = (cell.classList.contains('bomb'))? 'red' : 'initial';
                cell.textContent = cell.classList.contains('bomb')? '💣' : '';
            })
        }

        if (minesNear(cell.no) != 0) {
            cell.classList.add('number')
            cell.textContent = minesNear(cell.no);
            const numberColor = ['white', 'green', 'yellow', 'orange', 'orangered', 'red', 'darkred', 'violet', 'black'];
            cell.style.color = numberColor[minesNear(cell.no)];
        }
    }

    const cells = document.querySelectorAll('.cell');

    function nextCells(n) {
        const nextCells = [];
        if (n > fieldSize - 1 && n % fieldSize != 0) {nextCells.push(n - fieldSize - 1)}
        if (n > fieldSize - 1) {nextCells.push(n - fieldSize)}
        if (n > fieldSize - 1 && n % fieldSize != fieldSize - 1) {nextCells.push(n - fieldSize + 1)}
        if (n % fieldSize != 0) {nextCells.push(n - 1)}
        if (n % fieldSize != fieldSize - 1) {nextCells.push(n + 1)}
        if (n < fieldSize * (fieldSize - 1) && n % fieldSize != 0) {nextCells.push(n + fieldSize - 1)}
        if (n < fieldSize * (fieldSize - 1)) {nextCells.push(n + fieldSize)}
        if (n < fieldSize * (fieldSize - 1) && n % fieldSize != fieldSize - 1) {nextCells.push(n + fieldSize + 1)}
        return nextCells;
    }

    const minesNear = function (cellNumber){
        const tocheck = nextCells(cellNumber);
        return tocheck.filter((number) => cells[number].classList.contains('bomb')).length;
    }
}
minesweeper();

// code refactored 2022-05-13

    // create simple minesweeper game
    // create 100 squares. each square should have class attribute
    // make name attribute value to be random item from array
    // add event listeners on each square
    // clicking square should call method, which gets that square class name
    // get class name trough click event target attributes
    // check if class name value is empty or bomb if bomb
    // remove bomb class for square and add another one which makes square different color
    // make game over text to appear if user click square with a bomb
