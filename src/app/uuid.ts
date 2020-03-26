/* jshint bitwise:false, node:true */
/* tslint:disable:no-bitwise no-var-keyword typedef */

// taken from TodoMVC
export function uuid() {
    var random: number;
    var result = '';

    for (let i = 0; i <= 8; i++) {
        random = Math.floor(Math.random() * 10);
        if (i === 4 || i === 8) {
            result += '-';
        }
        result += random.toString();
    }
    result = result + Date.now();

    return result;
}
