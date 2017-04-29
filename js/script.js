var text ='Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var string = 'Zielone słonie';
string = string.toUpperCase();
var new_text = text.replace('Papugi', string);
console.log(new_text.substr(0, new_text.length/2));
