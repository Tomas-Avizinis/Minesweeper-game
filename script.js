function christmassTree() {

    const christmassItems={
        tree: [
            'Add Christmass tree',
            'https://purepng.com/public/uploads/large/purepng.com-fir-treefirtreechristmas-treeconiferous-trees-1411526989989lwgnd.png',
            'https://purepng.com/public/uploads/large/purepng.com-fir-treefirtreechristmas-treeconiferous-trees-1411526990214sfdxx.png',
            'https://purepng.com/public/uploads/large/chirstmas-tree-without-decoration-btf.png',
            'https://purepng.com/public/uploads/large/christmas-tree-i7j.png',
            'https://purepng.com/public/uploads/large/purepng.com-christmas-treenaturechristmastreexmasgreenchristmas-treeholiday-961524677818jd4ly.png',
            'https://jf-staeulalia.pt/img/other/76/collection-tree-images-free-29.png',
            'https://pngimage.net/wp-content/uploads/2018/06/pinheiro-png.png'


        ],
        present:[
            'Add presents',
            'https://purepng.com/public/uploads/large/purepng.com-birthday-giftobjectsbirthday-giftbox-xmas-birthday-object-gift-present-631522324167hepem.png',
            'https://purepng.com/public/uploads/large/purepng.com-birthday-presentobjectsbirthday-presentbox-xmas-birthday-object-gift-present-631522324138bvrs5.png',
            'https://purepng.com/public/uploads/large/purepng.com-birthday-presentobjectsbirthday-presentbox-xmas-birthday-object-gift-present-631522324126scw7a.png',
            'https://www.pngmart.com/files/17/Birthday-Gift-Box-PNG-Transparent-Image.png',
            'https://lh3.googleusercontent.com/proxy/98LpMXqHG7rAH6gF68QMcgaDMrHtFERZcidXmZgKvrXtWHNxDju0XW3gwfl1cw6UEOxfzx4UBqZPRq79P_b10wBtDyPpGKYoxVe3hcdE'
        ],
        decoration:[
            'Add decorations',
            'https://purepng.com/public/uploads/large/purepng.com-bellbellchristmas-bellgolden-bellred-decorated-1421526586714kdvwz.png',
            'https://purepng.com/public/uploads/large/purepng.com-christmas-ballobjectschristmas-ballchristmas-ball-xmas-red-round-party-decoration-object-holiday-sphere-circle-christian-ornament-celebrate-festive-631522325705dxldw.png',
            'https://purepng.com/public/uploads/large/purepng.com-christmas-baublechristmasballxmasroundpartydecorationobjectholidaysphereornamentfestivebaubleobjectschristmas-bauble-631522324065bpqs5.png',
            'https://purepng.com/public/uploads/large/purepng.com-christmas-baubleobjectschristmas-baublechristmasballxmasroundpartydecorationobjectholidaysphereornamentfestivebauble-631522324051rhmto.png',
            'https://www.freepnglogos.com/uploads/ornament-png/ornament-colorful-christmas-ornaments-png-photo-background-20.png',
        ],
        background: [
            'Change background',
            'https://ae01.alicdn.com/kf/H45d978119bda4b92a386e7e85f11655eQ/Modern-Simple-Colorful-Geometry-Photo-Wallpaper-3D-Kids-Bedroom-Living-Room-Background-Wall-Home-Interior-Decoration.jpg_Q90.jpg_.webp',
            'https://ae01.alicdn.com/kf/HTB110CIadzvK1RkSnfoq6zMwVXa2/beibehang-Custom-wallpaper-3d-photo-murals-Nordic-minimalist-personality-abstract-geometric-gold-TV-background-wall-paper.jpg',
            'https://www.residencestyle.com/wp-content/uploads/2021/04/Wallpaper-1.jpg',
            'https://www.teahub.io/photos/full/16-166458_empty-office-wallpaper-desktop-wallpaper-office.jpg',
            'https://wallpaper.dog/large/20419371.jpg',
            'https://www.asiaone.com/sites/default/files/original_images/Dec2019/landscape-photography-of-snow-pathway-between-trees-during-688660.jpg',
            'https://wallpapercave.com/wp/wp6928952.jpg',
            'https://data.1freewallpapers.com/detail/iceland-hofn-mountains-4k.jpg',
            'https://data.1freewallpapers.com/detail/mountains-river-valley-landscape-iceland.jpg'
        ]
    }

    const styles={
        container:{
            display:'flex',
            position:'relative',
            justifyContent:'center',
            alignItems:'center',
            overflow:'hidden'
        },
        background:{
            width:'100vw',
            height:'100vh',
            backgroundPosition:'center',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat'
        },
        buttonBox: {
            margin: '20px',
            padding:'20px',
            position:'absolute',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            right:'0',
            top:'0',
            zIndex:'100'
        },
        newButton: {
            margin:'10px',
            padding:'10px',
            backgroundColor:'#bbbbbb',
            width:'200px',
            borderRadius:'8px',
            border:'1px solid black',
            boxShadow:'2px 2px 4px 2px black',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'1.2em',
            fontFamily:'sans-serif',
            cursor:'pointer'
        }

    }

    const abcKintamasis='fgufyugyul';
    console.log(abcKintamasis, Object.keys({abcKintamasis})[0])

    function addStyles (element, elementName) {
        for (const keyName in styles[elementName]) {
            element.style[keyName]=styles[elementName][keyName];
        }
        // for (const keyName in styles.abc) {
        //     abc.style[keyName]=styles.abc[keyName];
        // }
    }

    const container=document.querySelector('body');
    addStyles (container, Object.keys({container})[0]);

    const background=document.createElement('div');
    addStyles (background, Object.keys({background})[0]);

    background.style.backgroundImage=`url('${christmassItems.background[5]}')`;
    container.append(background);

    const buttonBox = document.createElement('div');
    addStyles (buttonBox, Object.keys({buttonBox})[0]);
    container.append(buttonBox);

    for (const keyName in christmassItems) {
        const newButton=document.createElement('div');
        addStyles (newButton, Object.keys({newButton})[0]);

        newButton.textContent=christmassItems[keyName][0];
        buttonBox.append(newButton);

        newButton.onclick=()=> {
            let sizeY='150px';
            let sizeX='150px';
            const random=Math.ceil(Math.random()*christmassItems[keyName].length-1);
            if (keyName=='tree') {sizeY='85vh'};
            if (keyName=='decoration') {sizeY='80px'; sizeX='80px'};
            if (keyName==='background') {
                background.style.backgroundImage=`url('${christmassItems[keyName][random]}')`;
            } else {
                addImage(sizeX, sizeY, christmassItems[keyName][random]);
            }
        }
    }
    ///prirasiau teksto tik testavimui su git



    function addImage(width, height, url) {
        const newImg=document.createElement('img');
        newImg.style.position='absolute';
        // newImg.style.width=width;
        newImg.style.height=height;
        newImg.style.left='0';
        newImg.style.top='0';
        newImg.src=url;
        container.append(newImg);
        console.log(url);

        newImg.onclick=()=>{
            document.onkeydown = checkKey;
            const step=20;
            let x=parseInt(newImg.style.left);
            let y=parseInt(newImg.style.top);
            function checkKey(e, ) {

                e = e || window.event;
                switch (e.keyCode) {
                    case 37:  //arrow left
                        x = x-step;
                        newImg.style.left=x+'px';
                        break;
                    case 38: //arrow up![](../../../AppData/Local/Temp/pinheiro-png.png)
                        y = y-step;
                        newImg.style.top=y+'px';
                        break;
                    case 39: //arrow right
                        x = x+step;
                        newImg.style.left=x+'px';
                        break;
                    case 40: //arrow down
                        y = y+step;
                        newImg.style.top=y+'px';
                        break;
                    case 33: //page up increases z-index

                        break;
                    case 34: //page down decreased z-index

                        break;
                    case 27: //escape button deletes item
                        newImg.remove();
                        break;
                }


            } //checkKeys end
        }

        // newImg.ondrag=(e)=>{
        //     // let rect = e.target.getBoundingClientRect();
        //     const coordinates = [e.pageX, e.pageY]; //[e.pageX - rect.left, e.pageY - rect.top];
        //     console.log('drag veiksmas yra', coordinates);
        //
        //
        //     const id = e.dataTransfer.getData('text/plain');
        //     newImg.style.left = coordinates[0] + "px";
        //     newImg.style.top = coordinates[1] + "px";
        // }

        // newImg.ondrop=(evt)=>{
        //     console.log('drop veiksmas yra');
        //     // let rect = e.target.getBoundingClientRect();
        //     const id = e.dataTransfer.getData('text/plain');
        //
        //     const coordinates = [e.pageX , e.pageY];
        //
        //
        //     // e.target.appendChild(draggable);
        //     // draggable.style.position = "absolute";
        //     newImg.style.left = coordinates[0] + "px";
        //     newImg.style.top = coordinates[1] + "px";
        //     // draggable.classList.remove('hide');
        //
        // }

    }


    // for (const keyName in christmassItems) {
    //     console.log(keyName);
    //     for (const eachItem of christmassItems[keyName]) {
    //         console.log(eachItem);
    //         const picture=document.createElement('div');
    //         picture.style.width='200px';
    //         picture.style.height='200px';
    //         picture.style.backgroundImage=`url('${eachItem}')`;
    //         picture.style.backgroundPosition='center';
    //         picture.style.backgroundSize='contain';
    //         picture.style.backgroundRepeat='no-repeat'
    //         picture.style.margin='20px';
    //         background.append(picture);
    //     }
    // }

}
christmassTree();