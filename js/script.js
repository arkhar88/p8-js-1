// var tree_generator = function(iter) {
//     var string = '*';
//     for (var i = 0; i < iter; i++) {
//         console.log(string);
//         string = string.concat('*');
//     }
//     return true;
// };
//
// tree_generator(4);

var tree_generator = function(iter) {
    var string = '';
    var iter_inside = (2*iter)-1;
    var left = ((iter_inside - 1) / 2) - 1;
    var right = ((iter_inside - 1) / 2) + 1;

    for (var i = 0; i < iter; i++) {

        for (var j = 0; j < iter_inside; j++) {
            if (j <= left) string = string.concat('_');
            else if (j > left && j < right) string = string.concat('*');
            else if (j >= right) string = string.concat('_');
        }
        console.log(string);
        string = '';
        left--;
        right++;
    }

    return true;
};

tree_generator(12);
