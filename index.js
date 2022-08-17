const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

function randomQuote() {
    quoteBtn.classList.add("Loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res =>res.json()).then(Result => {
        console.log(Result);
        quoteText.innerText = Result.content;
        authorName.innerText = Result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("Loading");
    });
}

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    speechSynthesis.speak(utterance);
});

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText)
})

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `htpps://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
})

quoteBtn.addEventListener("click", randomQuote);