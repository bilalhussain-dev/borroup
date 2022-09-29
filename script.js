// Modal POPUP 
const overlayModal = document.querySelector('.model-overlay'),
appModel = document.querySelector('.model'),
closeModelHanlder = document.querySelector('.btn-close-model'),
openModelHandler = document.querySelector('#modelOPT');



// (II) Open Model
openModelHandler.addEventListener('click', (event) => {
    appModelOPT();
    event.preventDefault();
    return true;
});

closeModelHanlder.addEventListener('click', (event) => {
    appModelCLS();
    event.preventDefault();
    return true;
});



// Open Model Handler 
const appModelOPT = function() {
    overlayModal.setAttribute('style', `
        visibility: visible;
        opacity: 1;
        backface-visibility: hidden;
        transition: all .5s ease-in-out;
    `);

    appModel.setAttribute('style', `
        visibility: visible;
        opacity: 1;
        backface-visibility: hidden;
        transition: all .5s ease-in-out;
    `);
};


const appModelCLS = function() {
        overlayModal.setAttribute('style', `
        visibility: hidden;
        opacity: 0;
        backface-visibility: hidden;
        transition: all .5s ease-in-out;
      `);

        appModel.setAttribute('style', `
            visibility: hidden;
            opacity: 0;
            backface-visibility: hidden;
            transition: all .5s ease-in-out;
     `);
};



