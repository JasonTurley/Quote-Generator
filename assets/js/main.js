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
        content: '"I never knew being fat and lazy was so rewarding!"',
        author: 'Finn, Season 1: Business Time'
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
    },
    {
        content: '"Killing pixies is some hardcore evil."',
        author: 'Marceline, Season 1: Henchmen'
    },
    {
        content: '"Humor is the highest form of intelligence."',
        author: 'Lamp, Season 6: Friends Forever'
    },
    {
        content: '"A love like theirs will always find a way. It\'ll crawl all up over you and drain you bodily fluids, posining you slowly until you pass out."',
        author: 'Jake, Season 4: Web Weirdos'
    },
    {
        content: '"With you, I would walk down any road, milady - especially if it leads to the movies."',
        author: 'Finn, Season 2: The Chamber of Frozen Blades'
    },
    {
        content: '"Dude, you can\'t stay here if you\'re gonna stank it up with your bad vibes, man!"',
        author: 'Jake, Season 5: Earth & Water'
    },
    {
        content: '"Hey, Princess Bubblegum, when we bring the dead back to life, will they be filled with worms?"',
        author: 'Finn, Season 1: Slumber Party Panic'
    },
    {
        content: '"No son, you did good. Having no self-control makes you a tough galoot, like me!"',
        author: 'Joshua, Season 2: Crystals Have Power'
    }
];

// html selectors
var button = document.getElementById('new-quote'),
    quote = document.getElementById('text'),
    author = document.getElementById('author'),
    tweet = document.getElementById('tweet-quote'),
    total = document.getElementById('quote-total');

// Generate quote on load
window.onload = generateQuote;

button.addEventListener('click', generateQuote);

function generateQuote()
{
    var n = Math.floor(Math.random() * quoteArray.length);

    quote.innerHTML = quoteArray[n].content;
    author.innerHTML = '&mdash; ' + quoteArray[n].author;
    total.innerHTML = quoteArray.length;
}