# EHBW - Eerste Hulp Bij Werkstukken

### Inhoudsopgave
* [De opdracht](#De-opdracht)
* [Mijn concept](#Mijn-concept)
   * [De hoofdpagina](#De-hoofdpagina-(tot-nu-toe))
* [Installatie](#Installatie)
   * [Routie](#Routie)
* [De api en data](#De-api-en-data)
   * [De url voor de api](#De-url-voor-de-api)
   * [Data die de api ophaald](#Data-die-de-api-ophaald)
   * [Data die ik gebruik](#Data-die-ik-gebruik)
* [Features](#Features)
* [Bronnenlijst](#Bronnenlijst)
* [Credits](#Credits)
* [Aanvulling op WAFS](#Aanvulling-op-WAFS)

### De opdracht 
Je hebt keuze uit 3 verschillende cases. Ik heb gekozen voor case 2. Dit is de case waarbij je een hulp functie gaat maken om spreekbeurden voor kinderen makkelijker te maken. Ik heb deze case gekozen omdat dit het dichtst bij mijn persoonlijke leerdoelen ligt. 

Mijn eigen leerdoelen zijn namelijk dat ik wil leren hoe een gebruiker in een array van data kan zoeken, filteren en sorteren. Ik heb dit nog nooit gedaan en het lijkt mij interessant om dit te onderzoeken. 

### Mijn concept
Mijn eerste concept was dat ik een site ging maken waarbij de gebruiker kan zoeken, filteren en sorteren. De doelgroep is kinderen (groep 6 tot en met 8) 

Na mijn feedback ronde op woensdag kreeg ik als feedback dat ik me meer moest focussen op een site die kinderen helpt bij het maken van werkstukken. Ik had mijn concept om gegooit en nu is dit mijn concept geworden: 

Deze website helpt kinderen bij werkstukken maken en dan vooral het opzetten van een werkstuk. Dnek bijvoorbeeld aan het bedenken van een onderwerp, vragen bedenken en bronnen zoeken. Stap voor stap word er uitgelegd wat diegene moet doen en zo creëert hij/zij een goede basis zodat het daadwerkelijk maken van een werkstuk soepeler gaat. 

Ik heb nu wel een zoek fucntie gemaakt maar filteren en sorteren kan (nog) niet op deze website. Wel heb ik nu dat de gebruiker boeken kan verwijderen uit de lijst.

#### De hoofdpagina (tot nu toe)
![Schermafbeelding 2020-03-06 om 09 43 59](https://user-images.githubusercontent.com/45541885/76067079-0fe74c00-5f8f-11ea-80e0-161e78a495db.png)

### Installatie
Om Dit project te installeren kan je deze repository downloaden of forken bovenaan de website. Verder heb je nog wel de api nodig van de oba (lees: De api en data) en moet je nog routie installeren. Zie hieronder.

#### Routie 
Voor de navigatie maak ik gebruik van Routie. Als je dat ook wilt gebruiken zet je de script boven aan in de body van je html. Daarvoor moet je nog wel het js bestandje van routie downloaden en in een libary mapje zetten. Dit bestandje kan je in mijn project vinden onder docs - libary - routie.js. Op deze manier kan je nu een html pagina maken waarbij je klikt tussen componenten in plaats van html pagina's. 

Hier vind je de volledinge documentatie over routie: http://projects.jga.me/routie/

### De api en data
De api is van de oba en bevat een public key. Ik weet niet zeker of ik deze key zomaar vrij kan geven op het internet, daarom laat ik die voorlopig niet zien. De api bevat de gehele collecie van de oba. Onder het kopje: De url voor de api, vertel ik hoe de url eruit ziet. 

Meer informatie over de api kan je hier vinden: https://zoeken.oba.nl/api/v1/?i_public=9a9b148ab8abe117aa908&i_secret=1a3b58ea286b7117a29af#/details

#### De url voor de api 
Voor de url heb je, zoals ik hierboven ook al aangaf, een public key nodig. Deze code laat ik niet in het voorbeeld zien maar de rest wel. 

De cors heb je nodig om in de browser cors errors te voorkomen. De cors zorgt er wel voor dat je (maar) 200 requests kan sturen in 1 uur. Dit kan nadelig werken. 

De query is je zoekterm binnen de api. In dit voorbeeld word alles opgehaald wat te maken heeft met hamster.

Bij detail kan je verschillende settings meegeven. Ik heb gekozen voor default. Deze geeft genoeg informatie mee om op de website te zetten. De oba zelf gebruikt deze setting ook voor op hun website. Je hebt ook nog Minimum, Basic, Extended en Librarian. 

```js
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'hamster';
const publicKey = '...';
const detail = 'Default';

const url = `${cors}${endpoint}${query}&authorization=${publicKey}&detaillevel=${detail}&output=json`;
```

Je kan met de url nog veel meer kanten mee op. Dit kan je lezen in de documentatie over deze api: https://zoeken.oba.nl/api/v1/?i_public=9a9b148ab8abe117aa908&i_secret=1a3b58ea286b7117a29af#/details

#### Data die de api ophaald 
Als je data ophaald, zie je dat je 20 resultaten in een array terug krijgt, dit is standaard voor de api. In de meta kan je zien hoe veel resultaten je daadwerkelijk terug krijgt. Dit kan heel hoog oplopen. De api werkt met pagina's in plaats van een hele lange array. 
Met ?curpage=(nummer) kan je door de pagina's gaan en zo dus ook pagina's op je html maken. Ik heb dit zelf niet toegepast omdat ik 20 resultaten voldoende vond.

In dit voorbeeld heb ik als query "hamster" gebruikt. Dit zijn de resultaten per item in de array. Het kan zijn dat je soms bij het ene meer auteurs hebt dan bij de ander. 

![Schermafbeelding 2020-03-02 om 15 28 38](https://user-images.githubusercontent.com/45541885/75685331-b505da00-5c9a-11ea-9550-dabcadea8ae3.png)

De api bevat ontzettend veel informatie per item dus je kan er veel kanten mee op. 

#### Data die ik gebruik
De oorspronkelijke array van de api heb ik bewust niet opgeschoond. Ik wilde de data zo laten dat ik later in het project altijd nog terug kon op alle data binnen de api. Dit wilde ik vooral omdat ik nog niet wist welke data ik waar wilde gebruiken. 

Op deze manier laad ik nu html content in via javascript.

```js
export function mainNode(results) {
    console.log(results)
    results.map(function(result, index) {
        //https://javascript.info/ifelse uitleg over "result = condition ? value1 : value2;"
        // dit is een verkorte versie van de if else statement. 
        // als de result.summaries een waarde heeft moet het deze waarde laten zien: result.summaries[0]
        // als het geen waarde bevat moet het de melding hebben 'Geen samenvatting'
        const htmlMainPage = `
                <article id="articleMainPage">
                    <h2>${result.titles[0]}</h2>  
                    <img src="${result.coverimages ? result.coverimages[1] : 'Geen samenvatting'}">
                    <p>${result.authors ? result.authors : 'Geen informatie'}</p>
                    <p>${result.formats ? result.formats[0].text : 'Geen informatie'}</p>
                    <p>${result.languages ? result.languages : 'Geen informatie'}</p>
                    <p>${result.description ? result.description[0] : 'Geen informatie'}</p>
                    <p>${result.year ? result.year : 'Geen informatie'}</p> 
                    <a href="#${result.isbn}"> Meer informatie</a>    
                </article>
            `;
        const main = document.querySelector('div');
        main.insertAdjacentHTML('beforeend', htmlMainPage);
    });
```

### Features
- [x] Zoek functie
- [ ] Filter functie
- [ ] Sorteer functie
- [x] Speelse, leuke uitstaring
- [ ] Als een gebruiker van de detail weer naar de hoofdpagina gaat moeten de gedelete items weg blijven
- [x] Print optie voor de website
- [x] Deleten per item en niet de bovenste item
 
### Bronnenlijst
- event listener. Hoe kan je dat gebruiken: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event en https://www.w3schools.com/jsref/met_document_addeventlistener.asp
- Wouter adviseerde mij om een event listener te hebben ipv onclick. Dat is veel netter.
- Opzet code van Joost.
- Menno heeft me geholpen met routie (ik moest de / weghalen en ik moest de .then die ik global had staan in de routie function zetten.)
- Bas heeft me geholpen met het leeg maken van de html als ik een detail pagina inlaad zonder css. Hij liet mij dit voorbeeld zien maar ik wilde geen innerHTML gebruiken dus ik zag het voorbeeld eronder op stack overflow: https://stackoverflow.com/questions/22593759/how-do-i-clear-inner-html

```js
//makkelijke manier
 main.innerHTML= '';
```
```js
//mooie manier
 while (main.firstChild) main.removeChild(main.firstChild);
```
- tables maken in html: https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_intro
- event handler: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
- lijn animatie onder knoppen: https://tobiasahlin.com/blog/css-trick-animating-link-underlines/
- Kris had me geholpen met dat ik nu het artikel kan verwijderen die ik daadwerkelijk aanklik ipv de bovenste (word nu gedaan met this)
- slide animatie: http://jsfiddle.net/75Umu/3/
- streep achtergrond: https://css-tricks.com/stripes-css/
- Css media print: https://css-tricks.com/css-tricks-finally-gets-a-print-stylesheet/ 
- Welke stappen moet je nemen om een werkstuk te maken: http://www.ikleerinbeelden.nl/op-school/beelddenken-basisschool/hoe-maak-je-een-werkstuk/

### Credits
- Opzet code van Joost. Wel naar mijn eigen hand omgezet.
- Menno heeft mij geholpen met een Routie probleem.
- Bas heeft mij geholpen met het leeg maken van sections zodra er wat ingeladen word. 
- Kris heeft mij geholpen bij het verwijderen van het artikel die ik daadwerkelijk aanklik. 
- Deze site die uitlegde hoe je stap voor stap een werkstuk kan maken: http://www.ikleerinbeelden.nl/op-school/beelddenken-basisschool/hoe-maak-je-een-werkstuk/

### Aanvulling op WAFS
Voor wafs had ik nog een kleine aanvulling en dat ging over de routie. Deze had ik toen niet dynamisch aangemaakt, dat kon ook omdat ik maar 3 verschillende articles had. Nu moet ik het wel dynamisch aanmaken omdat mijn hele content dynamisch is. Dat heb ik gedaan op deze manier: 

Als er geen path of hash zit word de mainNode function uitgevoerd. Als er wel een hash in de url zit word de detailNode uitgevoerd. Dit word gedaan bij elk id in de url. De id heb ik gezet op het isbn nummer van het boek wat erbij hoort. Zo kan ik makkelijk de id omzetten naar de query en zo zoekt de api specifiek naar dat boek waardoor ik dynamisch een detail pagina kan renderen. 

```js
function router(){
    routie ({
        '': function() {
            const query = localStorage.getItem("searchValue");
            getData(query)
                .then(function(results) {
                    mainNode(results)
                })
        },
        ':id': function(id) {
            const query = id;
            getData(query)
                .then(function(results) {
                    detailNode(results)
                })

        },
    });
};
```
