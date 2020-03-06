// import { resultstwee } from './results.js';

// console.log(resultstwee);

// let jsonData = require('../../data.json')
// let data = JSON.parse(jsonData)

// console.log(data)

export async function getData(query){
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    // const publicKey = '1e19898c87464e239192c8bfe422f280';
    const publicKey = 'dc0e2f073c03758140452044906bc818';
    
    const audience = 'jeugd'
    // detaillevel = default: Mirrors site output
    const detail = 'Default';
    const onlyBooks = 'type(book)';
  //https://zoeken.oba.nl/api/v1/search/?q=paarden&authorization=dc0e2f073c03758140452044906bc818&detaillevel=Default&p=jeugd&output=json&refine=true&facet=type(book)

    //deze url aanzetten als ik ga deployen
    const url = `${cors}${endpoint}${query}&authorization=${publicKey}&detaillevel=${detail}&p=${audience}&output=json&refine=true&facet=${onlyBooks}`;
    // const url = `${endpoint}${query}&authorization=${publicKey}&detaillevel=${detail}&p=${audience}&output=json&refine=true&facet=${onlyBooks}`;

    // const url = ('data.json');
    console.log(url)



    const data = await fetch(url)
        .then(function(response) {
            console.log(response)
            return response.json();
        })
        .then(function(results) {
            console.log(results);
            return results.results;
        })
        .catch(function(err) {
            console.log(err);
        });

        return data;
};

fetch('data.JSON')
    .then(res => console.log('..',res))
