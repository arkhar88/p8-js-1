var btn = document.getElementById('js-addElem-btn');
var list = document.getElementById('js-list');
console.log(list.childElementCount);

btn.addEventListener('click', function() {
    list.innerHTML += '<li>costam ' + (list.childElementCount + 1) + '</li>';
});
