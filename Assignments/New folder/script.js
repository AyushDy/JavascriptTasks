

let itemsPerPage=  5;
let currentPageNo= 1;
let totalItems=190;

const pageList = document.querySelector('.list');
const dropDown = document.querySelector('.list2');

const dummyData= [];


for(let i=0;i<totalItems;i++){
    dummyData.push({
        Name : `Student ${i+1}`,
        RollNo : i+1,
    })
};


let pageCnt= Math.ceil(totalItems/itemsPerPage);

function showItems(){
    const itemsContainer= document.querySelector('.container');
    itemsContainer.innerHTML='';

    const firstItem= (currentPageNo-1)* itemsPerPage;
    const displayedArray= dummyData.slice(firstItem,firstItem+itemsPerPage);

    const itemsList= document.createElement('ul');
    for(let i=0;i<displayedArray.length;i++){
        const item= document.createElement('li');
        item.innerHTML=`Name :${displayedArray[i].Name}<br> Roll No.:${displayedArray[i].RollNo}`;
        itemsList.appendChild(item);
    }
    itemsContainer.appendChild(itemsList);
};

function paginationButtons(){
    pageList.innerHTML='';

    addGotoFirst();
    addLeft();

    if(currentPageNo>=pageCnt/2){
        addBox(1);
        addBox(2);
        addDotBox();
    }

    const start= (1<currentPageNo-2)?currentPageNo-2:1;
    const end= (pageCnt>currentPageNo+2)?currentPageNo+2:pageCnt;

    for(let i=start; i<=end;i++){
        const pageButton = document.createElement('div');
        pageButton.classList.add('page-box');
        if(i==currentPageNo){
            pageButton.classList.add('active');
        }
        pageButton.innerHTML=i;
        pageList.appendChild(pageButton);
}

if(currentPageNo<=pageCnt/2){
    addDotBox();
    addBox(pageCnt-1);
    addBox(pageCnt);
}

addRight();
addGotoLast();

const pages= document.querySelectorAll('.page-box');

for(let i=0;i<pages.length;i++){
    pages[i].addEventListener('click',function(){
        currentPageNo=parseInt(pages[i].innerHTML);
        paginationButtons();
        showItems();
    })
}}

function addBox(pageNo){
    const tempBox= document.createElement('div');
    tempBox.classList.add('page-box');
    tempBox.innerHTML=pageNo;
    pageList.appendChild(tempBox);
}

function addLeft(){
    const leftButton= document.createElement('div');
    leftButton.classList.add('box','left');
    leftButton.innerHTML='<';
    pageList.appendChild(leftButton);

    if(currentPageNo==1){
        leftButton.classList.add('inactive');
    }else{
        leftButton.classList.remove('inactive');
    }

    leftButton.addEventListener('click',function(){
    if(currentPageNo>1){
      currentPageNo--;
      paginationButtons();
      showItems();
    }
});
}

function addRight(){
    const rightButton= document.createElement('div');
    rightButton.classList.add('box','right');
    rightButton.innerHTML='>';
    pageList.appendChild(rightButton);

    if(currentPageNo==pageCnt){
        rightButton.classList.add('inactive');
    }else{
        rightButton.classList.remove('inactive');
    }

    rightButton.addEventListener('click',function(){
    if(currentPageNo<pageCnt){
      currentPageNo++;
      paginationButtons();
      showItems();
    }
});
}

function addDotBox(){
    const dotBox= document.createElement('div');
    dotBox.classList.add('box');
    dotBox.innerHTML='...';
    pageList.appendChild(dotBox);
}

function addGotoFirst(){
    const gotoFirst= document.createElement('div');
    gotoFirst.classList.add('box','first');
    gotoFirst.innerHTML='<<';
    pageList.appendChild(gotoFirst);

    gotoFirst.addEventListener('click', function(){
        currentPageNo=1;
        paginationButtons();
        showItems();
    })
}

function addGotoLast(){
    const gotoLast= document.createElement('div');
    gotoLast.classList.add('box','first');
    gotoLast.innerHTML='>>';
    pageList.appendChild(gotoLast);

    gotoLast.addEventListener('click',function(){
        currentPageNo=pageCnt;
        paginationButtons();
        showItems();
    })
}

dropDown.addEventListener('change',function(event){
    itemsPerPage= parseInt(dropDown.value);
    pageCnt= Math.ceil(totalItems/itemsPerPage);
    paginationButtons();
    showItems();

})








paginationButtons();
showItems();

const boxes = document.querySelectorAll()

