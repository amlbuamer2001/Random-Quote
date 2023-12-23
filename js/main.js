var qoutes = [
   {
       qoute: "'Do not take life too seriously. You will not get out alive.'",
       Auther: "—Elbert Hubbard"
   },

   {
       qoute: "'The best revenge is massive success.'",
       Auther: "—Frank Sinatra"
   },
   {
      qoute: "'You miss 100% of the shots you don't take.'",
      Auther: "—Wayne Gretzy"
  },
   {
   qoute: "'Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.'",
   Auther: "—Henry Van Dyke"
   },
   {
      qoute: "'It does not matter how slowly you go as long as you do not stop.'",
      Auther: "—Confucius"
  },
  {
   qoute: "'Failure will never overtake me if my determination to succeed is strong enough.'",
   Auther: "—Og Mandino"
},
{
   qoute: "'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.'",
   Auther: "—Norman Vincent Peale"
},
{
   qoute: "'Start where you are. Use what you have. Do what you can.'",
   Auther: "—Arthur Ashe"
},
{
   qoute: "'Your talent is God's gift to you. What you do with it is your gift back to God.'",
   Auther: "—Leo Buscaglia"
},
{
   qoute: "'Nobody built like you, you design yourself.'",
   Auther: "—Jay-Z"
},
{
   qoute: "'The greatest pleasure of life is love.'",
   Auther: "—Euripides"
},
{
   qoute: "'Don’t let yesterday take up too much of today.'",
   Auther: "—Will Rogers"
},
{
   qoute: "'Every moment is a fresh beginning.'",
   Auther: "—TS Eliot"
},
{
   qoute: "'You simply have to put one foot in front of the other and keep going. Put blinders on and plow right ahead.'",
   Auther: "—George Lucas"
},
{
   qoute: "'Only I can change my life. No one can do it for me.'",
   Auther: "—Carol Burnett"
},
]
function newQuote(){
   var num = Math.floor(Math.random() * qoutes.length)
   console.log(num)
   document.getElementById("quote").innerHTML = qoutes[num].qoute;
   document.getElementById("auther").innerHTML = qoutes[num].Auther;

}










