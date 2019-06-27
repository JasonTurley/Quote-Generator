var quoteArray = [
    {
        content: '"If you get everything you want the minute you want it, what\'s the point of living?"',
        author: 'Jake, Season 5: The Box Prince'
    },
    {
        content: '"I am ready to receive instruction from the realm of creation above me for the sandwich I am about to conceive. I am open. Use me."',
        author: 'Jake, Season 5: Time Sandwich'
    }, 
    {
        content: '"You just like saying poop that jacks with my brain."',
        author: 'Finn, Season 1: Henchmen'
    },
    {
        content: '"Entering a person\'s mind can be dangerous."',
        author: 'Rag Wizard, Season 3: Memory of a Memory'
    },
    {
        content: '"Girls are like horses - when you fall down, it\'s important that you get right back on again, on a different horse."',
        author: 'Jake, Season 5: Dungeon Train'
    },
    {
        content: '"My son and I were having Sunday dinner. We were lightly rapping back and forth. It turned into a rap battle. He threw out rhyme after rhyme. I couldn\'t keep up."',
        author: 'Rap Bear, Season 10: Son of Rap Bear'
    },
    {
        content: '"You are NOT an outsider; you wear cute little blue shorts."',
        author: 'Jake, Season 1: Donny'
    },
    {
        content: '"Oh yea! Being lumpy is the best!"',
        author: 'Finn, Season 1: Trouble in Lumpy Space',
    },
    {
        content: '"Sometimes a man... just has to retrieve his own disc."',
        author: 'Finn, Season 5: All the Little People'
    },
    {
        content: '"You\'re weird and old and you kidnap princesses."',
        author: 'Lumpy Space Princess, Season 6: The Prince Who Wanted Everything'
    }
];

// html selectors
var button = document.getElementById('new-quote'),
    quote = document.getElementById('text'),
    author = document.getElementById('author'),
    tweet = document.getElementById('tweet-quote');

// Generate quote on load
window.onload = generateQuote;

button.addEventListener('click', generateQuote);

function generateQuote()
{
    var n = Math.floor(Math.random() * quoteArray.length);

    quote.innerHTML = quoteArray[n].content;
    author.innerHTML = '&mdash; ' + quoteArray[n].author;
}