

    const playButton = document.querySelector('.button'); 
    document.querySelector('.main').setAttribute('style','display:none;');
    const inputField = document.querySelector('#field');
    const guessButton= document.querySelector('.guess-button');
    const dots = document.querySelectorAll('.whee');
    const wrongList= document.querySelector('.wrong-list');
    const divToShow =document.querySelector('.main');
    const body= document.querySelector('body');
    var chances= 10;
    var count=2;
    const nextWord = document.querySelector('.next');


    const words=['WHITE','FLUTE','GREAT','SPACE'];

    let guessedLetters=[];

    var k=0;
    var word= words[k];
    dots[1].innerHTML=word[1];
    dots[3].innerHTML=word[3];
    dots[1].setAttribute('style','background-color:transparent;')
    dots[3].setAttribute('style','background-color:transparent;')
    guessedLetters.push(word[1]);
    guessedLetters.push(word[3]);


    const nextButton= document.createElement('button');
    nextButton.className='next';
    nextButton.textContent='NEXT';
    const tempDiv = document.createElement('div');
    tempDiv.className='congrats';

    const toChange = document.querySelector('#ann');

    const reloadButton= document.createElement('button');
    reloadButton.className='reload'
    reloadButton.textContent='RELOAD'

    




    playButton.addEventListener('click',function(event){
        const divToHide = document.querySelector('.container');
        divToHide.setAttribute('style','display:none;');
        divToShow.setAttribute('style','display:;');
        inputField.focus();

    })

    inputField.addEventListener('input',function(event){

        const enteredText = event.target.value;
        
        inputField.value=enteredText.toUpperCase();

        if (enteredText.length>1){
            const firstLetter= enteredText.charAt(0);
            inputField.value=firstLetter;
        }

    });

    guessButton.addEventListener('click', function(event){
    const guessLetter = inputField.value;
   
    let message = '';

    if(guessLetter!==''){

        

    if ((word.includes(guessLetter))&&(!guessedLetters.includes(guessLetter))) {
        message = 'You guessed right! The given word has the letter ' + guessLetter + '.';
        for(let i=0;i<word.length;i++){
            if(guessLetter===word.charAt(i)){
                dots[i].setAttribute('style','background-color:transparent;')
                dots[i].innerHTML=guessLetter;
            }
        }

        guessedLetters.push(guessLetter);
        count++;
        inputField.value='';
        inputField.focus()

        if(count===5){
        divToShow.setAttribute('style','display:none');
        let message='CONGRATS YOU GUESSED THE WORD \''+word+'\'';
        tempDiv.textContent=message;
        body.appendChild(tempDiv);
        body.appendChild(nextButton);
        
    }



    } else {
        chances--;
        message = 'Sorry, wrong guess. Try again. Chances remaining: '+chances;
        wrongAnimation();
        const prevLetters = wrongList.innerHTML;
        wrongList.innerHTML= prevLetters+' '+guessLetter;
        inputField.value='';
        inputField.focus()
    }

    toChange.textContent = message;
    }
    if(chances===0){
            divToShow.innerHTML='<div class="game-over"><h1 id="st1">GAME OVER</h1></div>';
            body.appendChild(reloadButton);

        }

});


function wrongAnimation(){
    const dots = document.querySelectorAll('.whee');
    const dotsLength= dots.length;

    for(let i=0;i< dotsLength;i++){
        dots[i].classList.add('jiggle');
    }

    setTimeout(function(){
        for(let i=0;i<dotsLength;i++){
            dots[i].classList.remove('jiggle');
        }

    },300);
}

nextButton.addEventListener('click',function(event){
    k++;
    if(k>=words.length){
        divToShow.setAttribute('style','display:none');
        let message='CONGRATULATIONS! YOU GUESSED ALL THE WORDS CORRECTLY';
        tempDiv.textContent=message;
        
        body.appendChild(tempDiv);
        body.removeChild(nextButton);
        tempDiv.classList.add('won');

        return;
    }

    body.removeChild(tempDiv);
    body.removeChild(nextButton);
    divToShow.setAttribute('style','display:;');

    guessedLetters=[];
    toChange.textContent='Try to guess a letter.'
    count=2;
    chances=10;
    inputField.focus();

    word=words[k];
    for(let s=0;s<dots.length;s++){
        dots[s].innerHTML='';
        dots[s].setAttribute('style','background-color:black;');
    }

    dots[1].innerHTML=word[1];
    dots[3].innerHTML=word[3];
    dots[1].setAttribute('style','background-color:transparent;');
    dots[3].setAttribute('style','background-color:transparent;');
    guessedLetters.push(word[1]);
    guessedLetters.push(word[3]);

})

reloadButton.addEventListener('click',function(){
    location.reload();
})
