// gets coordinates of elem in relation to document
function getCoords(elem) { // crossbrowser version
    let box = elem.getBoundingClientRect();

    let body = document.body;
    let docEl = document.documentElement;

    let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    let clientTop = docEl.clientTop || body.clientTop || 0;
    let clientLeft = docEl.clientLeft || body.clientLeft || 0;

    let top  = box.top +  scrollTop - clientTop;
    let left = box.left + scrollLeft - clientLeft;
    let bottom = box.bottom;
    let right = box.right;
    let height = box.height;
    let width = box.width;

    return { top: Math.round(top), clientTop: Math.round(box.top), left: Math.round(left), bottom: Math.round(bottom), right: Math.round(right), height: Math.round(height), width: Math.round(width)};
}
