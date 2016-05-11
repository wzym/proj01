
function createField(width, height) {
    var field = document.getElementById('field');
    for (var i = 0; i < width * height; i++) {
        field.appendChild(createCell());
    }
}

function createCell() {
    var div = document.createElement('div');
    div.className = 'cell';
    return div;
}

window.onload = function () {
    createField(10, 10);
};