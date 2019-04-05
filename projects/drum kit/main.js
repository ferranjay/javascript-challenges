
window.addEventListener('keydown', playSound);
// we luisteren voor het 'keydown' event ... als dit gebeurd dan voeren we een functie uit die ons het event"info" geeft (e)


function playSound(e) {  // als je console.log(e) uitvoert dan kun je de info zien die elke key met zich mee brengt (e) "event" is dus gewoon een object vol met data
    // console.log(e);            // we zijn geinteresseerd in de keyCode

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // we willen een audio element selecteren, daarom gebruiken we de querySelector , 
    //we willen selecteren op data-key, dit doen we dmv een attribute selector, dit kan met een ES6 template string, waar we van het "event" de Keycode selecteren
    
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    // we willen de bijbehorende key kunnen stylen en kunnen of een div selecteren of indien er een classe is bijv .key 
    
    if (!audio) return;   // stop de functie
    // als er geen audio gelinked is bij een bepaalde key gebruiken we de if 
    
    audio.currentTime = 0;  // spoelt terug naar het begin van de audio file, dit wil je want als je sneller op de key drukt dan dat hij afgelopen is hij weer opneiuw kan beginnen
    
    audio.play();  // als je een functie uitroept en hij nog niet klaar is dan zal die niet van zichzelf overnieuw starten bij het begin
    //console.log(key);
   
    key.classList.add('playing');  //extra class playing aangemaakt voor styling
    //de classList property roept de naam van de class op van een element en hier kun je dan met add iets aan toevoegen bijv een style
}


function removeTransition(e) {
    //console.log(e); 
    if (e.propertyName !== 'transform') return;

    this.classList.remove('playing');
    //this refereert naar de info van key die gekoppeld is aan .addEventListener
}


const keys = document.querySelectorAll('.key');
// hier selecteer je alles met de class genaamd "key.  in console log zie je een array met elk element die gelinked is met class key
        keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// elke key krijgt een eventListener eraan gekoppeld namelijk 'transitionend' en daar schrijven we een functie voor genaamd removeTransition, indien de transitie afgelopen is willen we iets uitvoeren



