navNode()
function navNode() {
    const htmlNavigation = `
        <form>
            <input type="text" placeholder="Waar ben je naar op" value="" id="searchbar">
            <button type="submit" id="searchbarSubmit">Zoek</button>
        </form>
    `;

    const main = document.getElementById('search');
    main.insertAdjacentHTML('beforeend', htmlNavigation);
};

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
        //while (main.firstChild) main.removeChild(main.firstChild);
    
        main.insertAdjacentHTML('beforeend', htmlMainPage);
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
                    <a href="/"> Terug</a> 
                </article>
            `;
        const main = document.querySelector('div');
        while (main.firstChild) main.removeChild(main.firstChild);
        main.insertAdjacentHTML('beforeend', htmlDetailPage);
    });
};