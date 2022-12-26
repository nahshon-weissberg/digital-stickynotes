// creates a textbox
function createTextbox(boxID) {
    // setup box object
    let box = document.createElement("textarea");
    box.type = "text";
    box.id = boxID;
    box.autofocus = true;
    box.new = true;
    box.bged = false;
    // set box size
    box.style.resize = 'none';
    box.style.height = '150px';
    box.style.width = '170px';
    box.style.fontSize = '13px';
    // keep the url that box is on
    box.url = window.location.href;

    // testing color
//    box.style.background = 'rgba(113,113,113, 0.5)';
//    box.style.color = 'rgba(113,113,113, 0.5)';
    box.style.fontFamily = "Comic Sans MS, cursive";
    box.style.background = 'black';
    box.style.color = 'white';


    // add to page
    document.body.appendChild(box);

    // set position of box
    box.style.position = 'absolute';
    let leftPX = document.TxtBoxLeft + 'px';
    let topPX = document.TxtBoxTop + 'px';
    box.style.left = leftPX;
    box.style.top = topPX;

    // add box to local storage
    let boxAttributes = [box.id, box.value, box.style.top, box.style.left];

    const k = window.location.href;

    let got = browser.storage.local.get(k).then(
            function(val) {
                // if no key value pairs exist
                if (Object.keys(val).length === 0) {
                    // set first key value pair
                    let setVars = {};
                    setVars[k] = [boxAttributes];
                    browser.storage.local.set(setVars);
                    // otherwise add to existing array of values
                } else {
                    val[k].push(boxAttributes);
                    let setVars = {};
                    setVars[k] = val[k];
                    browser.storage.local.set(setVars);
                }
            },
            function(err) {
                console.log("ERROR", err);
            }
            );
}
