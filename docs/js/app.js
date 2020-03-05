
import { getData } from './modules/api.js';
import { mainNode } from './modules/render.js';
import { detailNode } from './modules/render.js';
import { navNode } from './modules/render.js';
import { exampleTopics } from './modules/render.js';
// import { questionNode } from './modules/render.js';

document.getElementById('printOptie').addEventListener("click", function(){
    window.print();
});

document.getElementById('yes').addEventListener("click", function(){
    navNode();
    document.getElementById('searchbarSubmit').addEventListener("click", function(){
        const searchValue = document.getElementById('searchbar').value;
        localStorage.setItem("searchValue", searchValue);
    });
});

document.getElementById('no').addEventListener("click", function(){
    exampleTopics();

    document.getElementById('ruimtevaart').addEventListener("click", function(){
        const searchValue = document.getElementById('ruimtevaart').value;
        console.log(searchValue)
        localStorage.setItem("searchValue", searchValue);
    });

    document.getElementById('achtbanen').addEventListener("click", function(){
        const searchValue = document.getElementById('achtbanen').value;
        console.log(searchValue)
        localStorage.setItem("searchValue", searchValue);
    });

    document.getElementById('fossielen').addEventListener("click", function(){
        const searchValue = document.getElementById('fossielen').value;
        console.log(searchValue)
        localStorage.setItem("searchValue", searchValue);
    });

    document.getElementById('zintuigen').addEventListener("click", function(){
        const searchValue = document.getElementById('zintuigen').value;
        console.log(searchValue)
        localStorage.setItem("searchValue", searchValue);
    });

    document.getElementById('allergie').addEventListener("click", function(){
        const searchValue = document.getElementById('allergie').value;
        console.log(searchValue)
        localStorage.setItem("searchValue", searchValue);
    });

    document.getElementById('ambulance').addEventListener("click", function(){
        const searchValue = document.getElementById('ambulance').value;
        console.log(searchValue)
        localStorage.setItem("searchValue", searchValue);
    });

    document.getElementById('middeleeuwen').addEventListener("click", function(){
        const searchValue = document.getElementById('middeleeuwen').value;
        console.log(searchValue)
        localStorage.setItem("searchValue", searchValue);
    });

    document.getElementById('kastelen').addEventListener("click", function(){
        const searchValue = document.getElementById('kastelen').value;
        console.log(searchValue)
        localStorage.setItem("searchValue", searchValue);
    });

    document.getElementById('vikingen').addEventListener("click", function(){
        const searchValue = document.getElementById('vikingen').value;
        console.log(searchValue)
        localStorage.setItem("searchValue", searchValue);
    });

    document.getElementById('ramadan').addEventListener("click", function(){
        const searchValue = document.getElementById('ramadan').value;
        console.log(searchValue)
        localStorage.setItem("searchValue", searchValue);
    });
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
