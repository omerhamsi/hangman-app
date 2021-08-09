const word_el=document.getElementById("word");
const popup=document.querySelector(".popup")
const items=document.querySelectorAll(".item");
const wrong_letters=document.querySelector(".wrong-letter");
const correctLetters=[];
const wrong_letter=[];
let selectedWord=getrandom();
function getrandom(){
    const words=["javascript","python","css","html","java"]
    return words[Math.floor(Math.random()*words.length)];
}
function updatewrongletter(){
    wrong_letters.innerHTML = `
        ${wrong_letter.length>0?'<h3>Hatalı harfler</h3>':''}
        ${wrong_letter.map(letter=> `<span>${letter}<span>`)}
    `;
    items.forEach((item,index)=>{
        const errorcount=wrong_letter.length;
        if(index<errorcount){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })
}
function displayword(){
    word_el.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
            </div>
        `).join("")}
        
    
    `;
    console.log(selectedWord);
    const w=(word_el.innerText.replace(/\n/g,""));
    if(w===selectedWord){
        popup.style.display="flex";
    }
}
window.addEventListener("keydown",function(e){
    if(e.keyCode>=65 && e.keyCode<=98){
        const letter=e.key;
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayword();
            }else{
                console.log("bu harfi zaten eklediniz...")
            }
        }else{
            if(!wrong_letter.includes(letter)){
                wrong_letter.push(letter);
                updatewrongletter();
            }
        }
    
    }
})
displayword();