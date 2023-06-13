let string = "abcadeecfb";
let s = new Set();
for (let i = 0; i < string.length; i++) {
    s.add(string[i]);
}
let result = "";
for (let i of s) {
    result = result + i;
}
console.log(result);




let str = "abcadeecfb";
let map = new Map();
for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
        let value = map.get(str[i]);
        map.set(str[i], value + 1);
    } else {
        map.set(str[i], 1);
    }
}
for (let [k, v] of map) {
    console.log(k + "=" + v);
}