function minesweeper() {
    // create simple minesweeper game
    // create 100 squares
    // each square should have class attribute
    // make name attribute value to be random item from array
    // add event listeners on each square
    // clicking square should call method, which gets that square class name
    // get class name trough click event target attributes
    // check if class name value is empty or bomb if bomb
    // remove bomb class for square and add another one which makes square different color
    // make game over text to appear if user click square with a bomb

    const container=document.querySelector('.container');
    // container.style.display='flex';
    // container.style.justifyContent='center';
    // container.style.alignItems='center';

    const minefield=document.createElement('div');
    let fieldSize=10;

    minefield.style.display='flex';
    minefield.style.justifyContent='center';
    minefield.style.alignItems='center';

    minefield.style.flexDirection='column';
    minefield.style.border='5px double darkred';
    minefield.style.padding='1px 3px 3px 1px';
    minefield.style.borderRadius='10px'

    container.append(minefield);

    for (let i=0; i<10; i++) {
        const row= document.createElement('div');
        row.style.display='flex';
        minefield.append(row);

        for (let j=0; j<10; j++) {
            const cell=document.createElement('div');
            cell.no=i*10 + j;
            cell.style.dislpay='flex';
            cell.style.justifyContent='center';
            cell.style.alignItems='center';

            cell.style.width=cell.style.height='50px';
            cell.style.margin='3px';
            cell.style.padding='3px';
            cell.style.border='1px solid black';
            cell.style.backgroundColor='#cccccc';
            cell.style.boxShadow='1px 1px 1px 2px rgba(0,0,0,0.5)';
            cell.style.borderRadius='5px';
            cell.style.cursor='pointer';
            cell.style.transition='.2s'
            cell.classList.add((Math.random() <.12)? 'bomb' : 'empty');

            cell.classList.add('cell');
            row.append(cell);

            ////EVENT - on normal click
            cell.onclick=()=>{
                openCell(cell);
                let openCellsCounter=0;
                cells.forEach(cell=>{
                    openCellsCounter += (cell.classList.contains('open') || cell.classList.contains('bomb'))? 1 : 0;
                })
                if (openCellsCounter==100) {
                    const endMesage= document.createElement('h1');

                    endMesage.style.display='flex';
                    endMesage.style.justifyContent='center';
                    endMesage.style.alignItems='center';
                    endMesage.style.textAlign='center';
                    endMesage.textContent= 'You Win! You opened all safe cells and avoided boms!';
                    endMesage.style.width=endMesage.style.height='570px';
                    minefield.style.border='5px double darkred';
                    endMesage.style.borderRadius='10px';
                    endMesage.style.backgroundColor='white';
                    endMesage.style.color='Green';
                    endMesage.style.opacity='.75';
                    endMesage.style.position='absolute';

                    minefield.append(endMesage);
                }

                if (countMines(cell.no)==0) {

                    for (let i=0; i<fieldSize; i++) { //bukai kartojame 10 kartu
                        cells.forEach((cell)=>{
                            if (cell.classList.contains('open') && (countMines(cell.no)==0)) {
                                nextCells(cell.no).forEach(number=> openCell(cells[number]))
                            }
                        })
                    }
                }

                if (cell.style.backgroundColor==='red') {
                    const endMesage= document.createElement('h1');

                    endMesage.style.display='flex';
                    endMesage.style.justifyContent='center';
                    endMesage.style.alignItems='center';
                    endMesage.style.textAlign='center';
                    endMesage.textContent= 'BOOOOM! Game over!';
                    endMesage.style.width=endMesage.style.height='570px';
                    minefield.style.border='5px double darkred';
                    endMesage.style.borderRadius='10px';
                    endMesage.style.backgroundColor='black';
                    endMesage.style.color='white';
                    endMesage.style.opacity='.35';
                    endMesage.style.position='absolute';

                    minefield.append(endMesage);
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
                    cell.style.padding='10px';
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
            cell.style.boxShadow=(!cell.classList.contains('bomb'))?  'none': 'initial';

            if (cell.classList.contains('bomb')) {
                cells.forEach((cell)=>{
                    cell.style.backgroundColor=(cell.classList.contains('bomb'))? 'red' : 'initial';
                })
            }

            nextCells(cell.no);
            if (countMines(cell.no)!=0) {
                cell.style.display='flex';
                cell.style.justifyContent='center';
                cell.style.alignItems='center';
                cell.style.fontSize='30px'
                cell.style.fontWeight='900';

                cell.textContent=countMines(cell.no);
                switch (countMines(cell.no)) {
                    case 1: cell.style.color='green'; break;
                    case 2: cell.style.color='yellow'; break;
                    case 3: cell.style.color='orange'; break;
                    case 4: cell.style.color='orangered'; break;
                    case 5: cell.style.color='red'; break;
                    case 6: cell.style.color='darkred'; break;
                    case 7: cell.style.color='violet'; break;
                    case 8: cell.style.color='violet'; break;
                }

            } else {
                cell.textContent='';
            }
        }
    }

    const cells=document.querySelectorAll('.cell');

    function nextCells(n) {
        const nextCells=[];
        if (n>9 && n%fieldSize!=0) {nextCells.push(n-11)}
        if (n>9) {nextCells.push(n-10)}
        if (n>9 && n%fieldSize!=9) {nextCells.push(n-9)}
        if (n%fieldSize!=0) {nextCells.push(n-1)}
        if (n%fieldSize!=9) {nextCells.push(n+1)}
        if (n<90 && n%fieldSize!=0) {nextCells.push(n+9)}
        if (n<90) {nextCells.push(n+10)}
        if (n<90 && n%fieldSize!=9) {nextCells.push(n+11)}
        return nextCells;
    }

    const countMines=function (n){
        const tocheck=nextCells(n);
        let mines= 0;
        tocheck.forEach((n)=>{
            if (cells[n].classList.contains('bomb')) mines++
        });
        return mines;
    }
}
minesweeper();