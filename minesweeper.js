function minesweeper() {
    // create simple minesweeper game
    // create 100 squares. each square should have class attribute
    // make name attribute value to be random item from array
    // add event listeners on each square
    // clicking square should call method, which gets that square class name
    // get class name trough click event target attributes
    // check if class name value is empty or bomb if bomb
    // remove bomb class for square and add another one which makes square different color
    // make game over text to appear if user click square with a bomb

    const container=document.querySelector('.container');

    const minefield=document.createElement('div');
    let fieldSize=12;

    minefield.style.display='flex';
    minefield.style.justifyContent='center';
    minefield.style.alignItems='center';

    minefield.style.flexDirection='column';
    minefield.style.border='8px double darkred';
    minefield.style.padding='1px 3px 3px 1px';
    minefield.style.borderRadius='10px'

    container.append(minefield);

    for (let i=0; i<fieldSize; i++) {
        const row= document.createElement('div');
        row.style.display='flex';
        minefield.append(row);

        for (let j=0; j<fieldSize; j++) {
            const cell=document.createElement('div');
            cell.no=i*fieldSize + j;
            cell.style.dislpay='flex';
            cell.style.justifyContent='center';
            cell.style.alignItems='center';

            cell.style.width=cell.style.height='40px';
            cell.style.margin='3px';
            cell.style.padding='3px';
            cell.style.border='1px solid black';
            cell.style.backgroundColor='#cccccc';
            cell.style.boxShadow='1px 1px 1px 2px rgba(0,0,0,0.5)';
            cell.style.borderRadius='5px';
            cell.style.cursor='pointer';
            cell.style.transition='.2s'
            cell.classList.add((Math.random() <.12)? 'bomb' : 'empty');
            // cell.textContent=cell.no;
            cell.classList.add('cell');
            row.append(cell);

            ////EVENT - on normal click
            cell.onclick=()=>{
                openCell(cell);
                let openCellsCounter=0;
                cells.forEach(cell=>{
                    openCellsCounter += (cell.classList.contains('open') || cell.classList.contains('bomb'))? 1 : 0;
                })

                if (cell.classList.contains('bomb')) {
                    endMessage(false);
                }

                if (openCellsCounter==fieldSize*fieldSize) {
                    endMessage(true);
                }

                if (minesNear(cell.no)==0) {
                    for (let i=0; i<fieldSize; i++) { // atveriame kaimyninius langelius aplink tuscia langeli
                        cells.forEach((cell)=>{
                            if (cell.classList.contains('open') && (minesNear(cell.no)==0)) {
                                nextCells(cell.no).forEach(number=> openCell(cells[number]))
                            }
                        })
                    }
                }

            }

            function endMessage(win) {

                const endMessage= document.createElement('h1');
                minefield.append(endMessage);

                endMessage.style.display='flex';
                endMessage.style.justifyContent='center';
                endMessage.style.alignItems='center';
                endMessage.style.textAlign='center';
                endMessage.style.position='absolute';
                endMessage.style.borderRadius='10px';
                endMessage.style.width=endMessage.style.height=minefield.offsetWidth+'px';

                if (win) {
                    endMessage.textContent= 'You Win! You opened all safe cells and avoided boms!';
                    endMessage.style.backgroundColor='white';
                    endMessage.style.color='Green';
                    endMessage.style.opacity='.8';
                } else {
                    endMessage.textContent= 'BOOOOM! Game over!';
                    endMessage.style.backgroundColor='black';
                    endMessage.style.color='white';
                    endMessage.style.opacity='.8';
                }
            }

            //EVENT - on right click
            cell.oncontextmenu=(event)=> {
                event.preventDefault();
                if (cell.classList.contains('flag')) {
                    cell.textContent='';
                    cell.style.backgroundColor='#cccccc';
                    cell.classList.remove('flag');
                    cell.style.cursor='pointer';
                } else {
                    cell.style.backgroundColor='yellow';
                    cell.style.fontSize='20px';
                    cell.style.padding='auto';
                    cell.classList.add('flag');
                    cell.style.cursor='not-allowed';
                    cell.textContent='🏴'; // flag symbol
                }
                return false;
            }
        }
    }

    function openCell(cell) {
        cell.classList.add('open');
        if (!cell.classList.contains('flag')) { //vykdoma tik jei langelis neapsaugotas
            cell.style.backgroundColor=(!cell.classList.contains('bomb'))?  'white': 'red';
            cell.style.boxShadow='none';
            cell.style.borderStyle='dotted'

            if (cell.classList.contains('bomb')) {
                cells.forEach((cell)=>{
                    cell.style.backgroundColor=(cell.classList.contains('bomb'))? 'red' : 'initial';
                })
            }

            if (minesNear(cell.no)!=0) {
                cell.style.display='flex';
                cell.style.justifyContent='center';
                cell.style.alignItems='center';
                cell.style.fontSize='30px'
                cell.style.fontWeight='900';

                cell.textContent=minesNear(cell.no);
                const numberColor = ['white', 'green', 'yellow', 'orange', 'orangered', 'red', 'darkred', 'violet', 'black'];
                cell.style.color=numberColor[minesNear(cell.no)];

            } else {
                cell.textContent='';
            }
        }
    }

    const cells=document.querySelectorAll('.cell');

    function nextCells(n) {
        const nextCells=[];
        if (n>fieldSize-1 && n%fieldSize!=0) {nextCells.push(n-fieldSize-1)}
        if (n>fieldSize-1) {nextCells.push(n-fieldSize)}
        if (n>fieldSize-1 && n%fieldSize!=fieldSize-1) {nextCells.push(n-fieldSize+1)}
        if (n%fieldSize!=0) {nextCells.push(n-1)}
        if (n%fieldSize!=fieldSize-1) {nextCells.push(n+1)}
        if (n<fieldSize*(fieldSize-1) && n%fieldSize!=0) {nextCells.push(n+fieldSize-1)}
        if (n<fieldSize*(fieldSize-1)) {nextCells.push(n+fieldSize)}
        if (n<fieldSize*(fieldSize-1) && n%fieldSize!=fieldSize-1) {nextCells.push(n+fieldSize+1)}
        return nextCells;
    }

    const minesNear=function (cellNumber){
        const tocheck=nextCells(cellNumber);
        return tocheck.filter((number) => cells[number].classList.contains('bomb')).length;
    }
}
minesweeper();
// komentaras
// atnaujintas 2022-01-03