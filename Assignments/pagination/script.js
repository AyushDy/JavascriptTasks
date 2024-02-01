const pageContainer= document.querySelector('.page-container');
const boxContainer= document.querySelector('.box-container');

const dynamicPage=document.createElement('div');
dynamicPage.classList.add('page');

const leftShift= document.createElement('div');
const rightShift= document.createElement('div');

leftShift.classList.add('left');
rightShift.classList.add('right');

leftShift.innerHTML='<';
rightShift.innerHTML='>';

const dotBox= document.createElement('div');
dotBox.innerHTML='...';
dotBox.className='box2';

const dotBox2= document.createElement('div');
dotBox2.innerHTML='...';
dotBox2.className='box2';

const boxes=[box1= document.createElement('div'),
             box2= document.createElement('div'),
             box3= document.createElement('div'),
             box4= document.createElement('div'),
             box5= document.createElement('div'),
             box6= document.createElement('div'),
             box7= document.createElement('div')];

for(let i=0;i<7;i++){
    boxes[i].classList.add('box');
}

let pageCnt= 500;

let pageNo=3;

pageDisplay(pageNo);

const pageIndexList= document.querySelector('.list');

for(let i=1;i<=pageCnt;i++){
    const tempOption= document.createElement('option');
    tempOption.value=i;
    tempOption.innerHTML=i;
    pageIndexList.appendChild(tempOption);
}

const dropDownOption= document.querySelector('.list');

leftShift.addEventListener('click',function(){
    if(pageNo>1){
        pageNo--;
        pageDisplay(pageNo);
    }
});

rightShift.addEventListener('click',function(){
    if(pageNo<pageCnt){
        pageNo++;
        pageDisplay(pageNo);
    }        
});

for(let i=0;i<7;i++){
    boxes[i].addEventListener('click',function(event){
        const pageN=  parseInt(boxes[i].textContent);
        pageNo=pageN;
        pageDisplay(pageN);
    })
}

    dropDownOption.addEventListener('change',function(event){
        const optionValue=parseInt(dropDownOption.value);
        pageNo=optionValue;
        pageDisplay(pageNo);
    })


function pageDisplay(page){
    pageContainer.innerHTML='';
    dynamicPage.innerHTML='Page '+page;
    pageContainer.appendChild(dynamicPage)

    boxContainer.innerHTML='';
    
    leftShift.classList.remove('gray');
    rightShift.classList.remove('gray');


    for(let i=0;i<7;i++){
        boxes[i].classList.remove('blue');
    }
    let index1='';
    let index2='';
    let index3='';
    let index4='';
    let index5='';
    let index6='';
    let index7='';
 
 if(page<=pageCnt/2){
    if(page<=10&&page!=1){
    index1=page-1;
    index2=page;
    box2.classList.add('blue');
    index3=pageCnt-1;
    index4=pageCnt;
    }
    if(page>10){
    index1=1;
    index2=2;
    index3=page-1;
    index4=page;
    box4.classList.add('blue');
    index5=page+1;
    index6=pageCnt-1;
    index7=pageCnt;
 }
 if(page==1){
    index1=1;
    index2=2;
    box1.classList.add('blue');
    leftShift.classList.add('gray');
    index3=pageCnt-1;
    index4=pageCnt;
 }
}

 if(page>=pageCnt/2+1){
    index1=1;
    index2=2;
    if(pageCnt<=20){
        if(page<20){
            index3=page;
            box3.classList.add('blue');
            index4=page+1;
        }
        if(page==20){
            index3=page-1;
            box4.classList.add('blue');
            index4=page;
        }
    }
    if(pageCnt>20){
        if(page>=pageCnt-10&&page!=pageCnt){
            index3=page;
            index4=page+1;
            box3.classList.add('blue');
        }
        if(page==pageCnt){
            index3=page-1;
            index4=page;
            box4.classList.add('blue');
            rightShift.classList.add('gray');
        }
        if(page<pageCnt-10){
            index3=page-1;
            index4=page;
            box4.classList.add('blue');
            index5=page+1;
            index6=pageCnt-1;
            index7=pageCnt;
        }
    }
}

 box1.innerHTML=index1;
 box2.innerHTML=index2;
 box3.innerHTML=index3;
 box4.innerHTML=index4;
 box5.innerHTML=index5;
 box6.innerHTML=index6;
 box7.innerHTML=index7;

 boxContainer.appendChild(leftShift);
 boxContainer.appendChild(box1);
 boxContainer.appendChild(box2);
 boxContainer.appendChild(dotBox2);
 boxContainer.appendChild(box3);
 boxContainer.appendChild(box4);

 if(page>10&&pageCnt>20&&page<pageCnt-10){
    boxContainer.appendChild(box5);
    boxContainer.appendChild(dotBox);
    boxContainer.appendChild(box6);
    boxContainer.appendChild(box7);
 }
 boxContainer.appendChild(rightShift);

};

