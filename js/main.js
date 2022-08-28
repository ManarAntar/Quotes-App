var quote=[
    {
       qoute: '“Be yourself; everyone else is already taken.”',
       Auther: '― Oscar Wilde'
    },
    {
        qoute: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ”",
        Auther: '― Albert Einstein'
     },
     {
        qoute: '“So many books, so little time.”',
        Auther: '― Frank Zappa'
     },
     {
        qoute: '“A room without books is like a body without a soul.”',
        Auther: '― Marcus Tullius Cicero'
     },
     {
        qoute: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        Auther: '― Dr. Seuss'
     },
     {
        qoute: "“You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening,And live like it's heaven on earth.”",
        Auther: '―― William W. Purkey'
     }
];
function displayqoute(){
var randomQuote = quote[Math.floor(Math.random()*quote.length)];
document.getElementById("quote").innerHTML= randomQuote.qoute;
document.getElementById("auther").innerHTML= randomQuote.Auther;

}
