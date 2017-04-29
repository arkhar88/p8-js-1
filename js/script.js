// var Get_triangle_area = function(base, height) {
//     if (base <= 0 || height <= 0) return 0;
//     return (base * height) / 2;
// };
//
// console.log(Get_triangle_area(10, 4));
//
// var a = Get_triangle_area(1, 2);
// var b = Get_triangle_area(2, 3);
// var c = Get_triangle_area(3, 4);

var men_tab = ['Arek', 'Marek', 'Jarek', 'Agarek'];
var women_tab = ['Marta', 'Mercedes', 'Kunegunda', 'Czcibora'];

var concat_tab = men_tab.concat(women_tab);

var add_elem = function(tab, name_string) {
    if (tab.indexOf(name_string) === -1) return tab.push(name_string);
    else return 0;
};

add_elem(concat_tab, 'Ada');
console.log(concat_tab);
