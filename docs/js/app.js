
import { getData } from './modules/api.js';
import { mainNode } from './modules/render.js';
import { detailNode } from './modules/render.js';

document.getElementById('searchbarSubmit').addEventListener("click", function(){
    const searchValue = document.getElementById('searchbar').value;
    localStorage.setItem("searchValue", searchValue);
});

router()
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
