const quote = document.getElementById('quote');
const author = document.getElementById('author');
const soundbtn = document.getElementById('soundBtn');
const api= "https://api.quotable.io/random";


async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getquote(api);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text= " + quote.innerHTML, + "---by" , + author.innerHTML);
}



soundbtn.addEventListener('click',()=>{
    let utterance = new SpeechSynthesisUtterance(`${quote.innerHTML}, "${author.innerHTML}"`);
    speechSynthesis.speak(utterance);
})


