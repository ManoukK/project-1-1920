// navNode()
mainTitleNode();
function mainTitleNode() {
    const htmlMainTitle = `

        <h1>Een werkstuk over ${localStorage.getItem("searchValue") ? localStorage.getItem("searchValue") : '...'}</h1>
    `;
    const main = document.querySelector('header');
    main.insertAdjacentHTML('afterbegin', htmlMainTitle);
};

export function navNode() {
    const htmlNavigation = `
        <fieldset>
            <p>Wat goed! Wat is jouw onderwerp?</p>
            <input type="text" placeholder="Waar ben je naar op" value="" id="searchbar">
            <button type="submit" id="searchbarSubmit">Zoek</button>
        </fieldset>
    `;

    const main = document.getElementById('search');
    main.insertAdjacentHTML('afterbegin', htmlNavigation);
};

export function mainNode(results) {
    const htmlQuestion = `
        <fieldset id="questionBlock">
            <h3>Wat wil je weten over jouw onderwerp?</h3>
            <p>Vragen voor jouw werkstuk zijn belangrijk. Dit zorgt ervoor dat jij tijdens het schrijven weet waar jij het over wilt hebben.
            Zo kan jij een goed verhaal vertellen over jouw onderwerp.</p>
            <p>Welke vragen wil jij beantwoorden over jouw onderwerp? Stel ze hieronder en bewaar jouw vragen goed!
            Schrijf ze op een blaadje of plak ze in jouw word document.</p>
            <input type="text" placeholder="Wat wil je weten over jouw onderwerp?" value="" id="questionbar">
            <button type="submit" id="questionSubmit">Zoek</button>
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
                <li>${localStorage.getItem("questionValue") ? localStorage.getItem("questionValue") : '...'}</li>
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
                    <button type="button" class="test" >Delete</button>
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
        main.insertAdjacentHTML('beforeend', htmlDetailPage);
    });
};