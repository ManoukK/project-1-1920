# Titel

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

### De opdracht 
Je hebt keuze uit 3 verschillende cases. Ik heb gekozen voor case 2. Dit is de case waarbij je een hulp functie gaat maken om spreekbeurden voor kinderen makkelijker te maken. Ik heb deze case gekozen omdat dit het dichtst bij mijn persoonlijke leerdoelen ligt. 

Mijn eigen leerdoelen zijn namelijk dat ik wil leren hoe een gebruiker in een array van data kan zoeken, filteren en sorteren. Ik heb dit nog nooit gedaan en het lijkt mij interessant om dit te onderzoeken. 

### Mijn concept
Mijn concept ligt erg dicht bij mijn leerdoel. Ik wil een site maken waarbij de gebruiker kan zoeken, filteren en sorteren. De doelgroep van de case zijn kinderen en dus moet ik rekening houden met een leuke, speelse site/vormgeving zodat het ook kinderen aanspreekt. 

Eerst wil ik ervoor zorgen dat je kan zoeken, filteren en sorteren binnen een bepaalde thema. Als dit werkt wil ik nog uitbereiden dat de gebruiker zelf in de hele oba data kan zoeken naar kernwoorden. 

#### De hoofdpagina (tot nu toe)
> screenshot website

### Installatie

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


### Features
- [ ] Zoek functie (in 1 thema)
- [ ] Filter functie
- [ ] Sorteer functie
- [ ] Speelse, leuke uitstaring
 
### Bronnenlijst

### Credits
