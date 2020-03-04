// import { router } from './app.js';

export async function getData(query){
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const publicKey = '1e19898c87464e239192c8bfe422f280';

    // detaillevel = default: Mirrors site output
    const detail = 'Default';

    //deze url aanzetten als ik ga deployen
    //const url = `${cors}${endpoint}${query}&authorization=${publicKey}&detaillevel=${detail}&output=json`;
    const url = `${endpoint}${query}&authorization=${publicKey}&detaillevel=${detail}&output=json`;

    const data = await fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(results) {
            return results.results;
        })
        .catch(function(err) {
            console.log(err);
        });

        return data;
};

