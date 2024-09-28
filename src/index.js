module.exports = function reverse(n) {
    if (n < 0) {
        n = -n;
    }

    let string = n.toString();

    if (string[string.length - 1] === "0") {
        string = string.slice(0, string.length - 1);
    }

    return string.split("").reverse().join("");
};
