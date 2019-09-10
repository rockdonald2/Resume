$(document).ready(() => {
    $.getJSON('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', function (data) {
        let text = $(".text");
        let author = $(".author");
        let randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];

        let currentQuote = randomQuote.quote;
        let currentAuthor = randomQuote.author;

        text.text(currentQuote);
        author.text(currentAuthor);
    })
})