// navNode()
mainTitleNode();
function mainTitleNode() {
    const htmlMainTitle = `
        <h1>Een werkstuk over ${localStorage.getItem("searchValue") ? localStorage.getItem("searchValue") : '...'}</h1>
        <p>EHBW - Eerste Hulp Bij Werkstukken</p>
        <p>Al onderzoek gedaan naar jouw onderwerp? Maak dan <a href="https://nlvo.github.io/project-1-1920/dist/#werkstuk">hier</a> jouw werkstuk</p>

    `;
    const main = document.querySelector('header');
    main.insertAdjacentHTML('afterbegin', htmlMainTitle);
};

export function navNode() {
    const htmlNavigation = `
        <fieldset>
            <p>Wat goed! Wat is jouw onderwerp?</p>
            <input type="text" placeholder="Vul hier jouw onderwerp in" value="" id="searchbar">
            <button type="submit" id="searchbarSubmit"></button>
        </fieldset>
    `;

    const main = document.getElementById('search');
    main.insertAdjacentHTML('afterbegin', htmlNavigation);

    const sourceList = document.getElementById('topics');
    while (sourceList.firstChild) sourceList.removeChild(sourceList.firstChild);
};

export function exampleTopics() {
    const htmlNavigation = `
            <section id="hulpvragen">
                <img src="img/punaise.png" alt="punaise">
                <p>Dat geeft niks. Een onderwerp kiezen kan ook moeilijk zijn. Hier vind je een paar vragen die jouw kunnen 
                helpen bij het bedenken van een onderwerp. Of kies een van de onderwerpen die hier al onder staan.</p>
                <ul>
                    <li>Wat is jouw lievelings dier?</li>
                    <li>Wat vind jij een mooi land?</li>
                    <li>Wat wil jij later worden?</li>
                    <li>Welke sport vind jij leuk om te doen?</li>
                    <li>Wat doe je graag uit school?</li>
                </ul>
            </section>
            <div>
                <button type="submit" value="ruimtevaart" id="ruimtevaart">Ruimtevaart</button>
                <button type="submit" value="achtbanen" id="achtbanen">Achtbanen</button>
                <button type="submit" value="fossielen" id="fossielen">Fossielen</button>
                <button type="submit" value="koraalrif" id="koraalrif">Koraalrif</button>
                <button type="submit" value="zintuigen" id="zintuigen">Zintuigen</button>
                <button type="submit" value="allergie" id="allergie">Allergie</button>
                <button type="submit" value="ambulance" id="ambulance">Ambulance</button>
                <button type="submit" value="middeleeuwen" id="middeleeuwen">Middeleeuwen</button>
                <button type="submit" value="kastelen" id="kastelen">Kastelen</button>
                <button type="submit" value="vikingen" id="vikingen">Vikingen</button>
                <button type="submit" value="ramadan" id="ramadan">Ramadan</button>
            </div>
    `;

    const main = document.getElementById('topics');
    main.insertAdjacentHTML('afterbegin', htmlNavigation);

    const sourceList = document.getElementById('search');
    while (sourceList.firstChild) sourceList.removeChild(sourceList.firstChild);
};

export function mainNode(results) {
    const htmlQuestion = `
        <fieldset id="questionBlock">
            <img src="img/plakband.png" alt="plakband">
            <img src="img/plakband.png" alt="plakband">
            <h3>Wat wil je weten over jouw onderwerp?</h3>
            <p>Vragen voor jouw werkstuk zijn belangrijk. Dit zorgt ervoor dat jij tijdens het schrijven weet waar jij het over wilt hebben.
            Zo kan jij een goed verhaal vertellen over jouw onderwerp.</p>
            <p>Welke vragen wil jij beantwoorden over jouw onderwerp? Stel ze hieronder en bewaar jouw vragen goed!
            Schrijf ze op een blaadje of plak ze in jouw word document.</p>
            <div>
                <input type="text" placeholder="Wat wil je weten over jouw onderwerp?" value="" id="questionbar">
                <button type="submit" id="questionSubmit"></button>
            </div>
        </fieldset>
    `;
    const main = document.getElementById('aksQuestion');
    main.insertAdjacentHTML('beforeend', htmlQuestion);

    document.getElementById('questionSubmit').addEventListener("click", function(event){
        event.preventDefault();

        const questionValue = document.getElementById('questionbar').value;
        localStorage.setItem("questionValue", questionValue);
        const htmlQuestionAsked = `
            <ul>
                <li id="ulElement">${localStorage.getItem("questionValue") ? localStorage.getItem("questionValue") : '...'}</li>
            </ul>
        `;
        const questionField = document.getElementById('questionBlock');
        questionField.insertAdjacentHTML('beforeend', htmlQuestionAsked);
        document.getElementById('questionbar').value = '';
    });

    results.map(function(result, index) {
        //https://javascript.info/ifelse uitleg over "result = condition ? value1 : value2;"
        // dit is een verkorte versie van de if else statement. 
        // als de result.summaries een waarde heeft moet het deze waarde laten zien: result.summaries[0]
        // als het geen waarde bevat moet het de melding hebben 'Geen samenvatting'
        const htmlMainPage = `
                <article id="articleMainPage${index}">
                    <div>
                        <span>
                            <button type="button" class="test"></button>
                            <label>Verwijder</label>
                        </span>
                    <h2>${result.titles[0]}</h2>  
                    <img src="${result.coverimages ? result.coverimages[1] : 'Geen foto'}">
                    <p>${result.summaries ? result.summaries[0] : 'Geen samenvatting'}</p>
                    <p>${result.formats ? result.formats[0].text : 'Geen informatie'}</p>
                    <p>${result.languages ? result.languages : 'Geen informatie'}</p>
                    <p>${result.description ? result.description[0] : 'Geen informatie'}</p>
                    </div>
                    <a href="#${result.isbn}"> Meer informatie</a>    
                </article>
            `;
        const sectionField = document.getElementById('boekenlijstSection');
        sectionField.insertAdjacentHTML('beforeend', htmlMainPage);
    });

    const section = document.querySelectorAll('div');

    for (let i = 0; i < section.length; i++) {
        section[i].addEventListener("click", function(results, index) {
            const element = document.querySelector('article');
            const currentArticle = this.parentNode;
            element.parentNode.removeChild(currentArticle);
        });
    };

    const htmlSourceList = `
        <h3>De bronnenlijst voor in jouw werkstuk</h3>
        <img src="img/punaise.png" alt="punaise">
        <p>Voor een werkstuk is een bronnenlijst heel belangrijk! Zo kan jouw juf of meester zien waar jij alle informatie hebt gevonden
        Het is handig om vanaf het begin al op te schrijven welke bronnen jij hebt gebruikt. Zo voorkom je dat je later alles moet terug vinden. 
        <br><br> Hieronder vind je alle boeken die de oba voor jou heeft geselecteerd. Print de website uit en kruis de boeken af die jij hebt gebruikt. Deze bronnen kan je 
        later toevoegen aan jouw werkstuk.
        </p>
        <table id="bronnenlijst">
            <tr>
                <th>Gebruikte boeken</th>
                <th>Auteurs</th>
                <th>Jaar</th>
                <th>Titel</th>
                <th>Uitgeverij</th>
            </tr>
        </table>
    `;

    const sectionFieldTwo = document.getElementById('bronnenlijstSection');
    sectionFieldTwo.insertAdjacentHTML('beforeend', htmlSourceList);

    results.map(function(result, index) {
        const htmlMainPage = `
                <tr>
                    <td></td>
                    <td>${result.authors ? result.authors : 'Geen informatie'}</td>
                    <td>${result.year ? result.year : 'Geen informatie'}</td>
                    <td>${result.titles[0]}</td>
                    <td>${result.publisher ? result.publisher[0] : 'Geen informatie'}</td>
                </tr>
            `;
        const sourceField = document.getElementById('bronnenlijst');
        sourceField.insertAdjacentHTML('beforeend', htmlMainPage);
    });


};

export function detailNode(results) {
    console.log(results)
    results.map(function(result, index) {
        //https://javascript.info/ifelse uitleg over "result = condition ? value1 : value2;"
        // dit is een verkorte versie van de if else statement. 
        // als de result.summaries een waarde heeft moet het deze waarde laten zien: result.summaries[0]
        // als het geen waarde bevat moet het de melding hebben 'Geen samenvatting'
        const htmlDetailPage = `
                <h1>Een werkstuk over ${localStorage.getItem("searchValue") ? localStorage.getItem("searchValue") : '...'}</h1>
                <article id="articleDetailPage">
                    <h2>${result.titles[0]}</h2>  
                    <img src="${result.coverimages ? result.coverimages[1] : 'Geen foto'}">
                    <p>${result.summaries ? result.summaries[0] : 'Geen samenvatting'}</p>
                    <table>
                        <tr>
                            <td>Auteurs</td>
                            <td>${result.authors ? result.authors : 'Geen informatie'}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>${result.formats ? result.formats[0].text : 'Geen informatie'}</td>
                        </tr>
                        <tr>
                            <td>Taal</td>
                            <td>${result.languages ? result.languages : 'Geen informatie'}</td>
                        </tr>
                        <tr>
                            <td>Bladzijdes</td>
                            <td>${result.description ? result.description[0] : 'Geen informatie'}</td>
                        </tr>
                        <tr>
                            <td>Jaar</td>
                            <td>${result.year ? result.year : 'Geen informatie'}</td>
                        </tr>
                        <tr>
                            <td>Uitgeverij</td>
                            <td>${result.publisher ? result.publisher[0] : 'Geen informatie'}</td>
                        </tr>
                        <tr>
                            <td>ISBN nummer</td>
                            <td>${result.isbn ? result.isbn[0] : 'Geen informatie'}</td>
                        </tr>
                    </table>
                    <a href=""> Terug</a> 
                </article>
            `;
        const main = document.getElementById('boekenlijstSection');
        while (main.firstChild) main.removeChild(main.firstChild);

        const sourceList = document.getElementById('bronnenlijstSection');
        while (sourceList.firstChild) sourceList.removeChild(sourceList.firstChild);

        const siteExplain = document.getElementById('siteExplain');
        while (siteExplain.firstChild) siteExplain.removeChild(siteExplain.firstChild);

        const vragenlijstSection = document.getElementById('vragenlijstSection');
        while (vragenlijstSection.firstChild) vragenlijstSection.removeChild(vragenlijstSection.firstChild);

        main.insertAdjacentHTML('beforeend', htmlDetailPage);
    });
};