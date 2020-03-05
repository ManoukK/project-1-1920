
import { getData } from './modules/api.js';
import { mainNode } from './modules/render.js';
import { detailNode } from './modules/render.js';
import { navNode } from './modules/render.js';
import { exampleTopics } from './modules/render.js';
// import { questionNode } from './modules/render.js';

// document.getElementById('removeBook').addEventListener("click", function(){
//     console.log("hi");
// });

document.getElementById('yes').addEventListener("click", function(){
    navNode();
    document.getElementById('searchbarSubmit').addEventListener("click", function(){
        const searchValue = document.getElementById('searchbar').value;
        localStorage.setItem("searchValue", searchValue);
    });
});

document.getElementById('no').addEventListener("click", function(){
    exampleTopics();
});

router()
function router(){
    routie ({
        '': function() {
            const query = localStorage.getItem("searchValue");
            getData(query)
                .then(function(results) {
                    // questionNode();
                    mainNode(results);
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
