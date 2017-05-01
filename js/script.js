var get_text = function (name) {
  var tab = document.getElementsByClassName(name);
  for (var i = 0; i<tab.length; i++)
  {
    console.log(tab[i].innerText);
    alert('Give me ' + tab[i].innerText + '!' );
  }
};

get_text('letter-div');
