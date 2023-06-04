let obj = {
    x: "x",
    y: "y",
    z: "z",
    run: function () {
        // console.log(this)
        return "This is run " + this.x + this.y + this.go();
    },
    go() {
        return "This is go";
    },
};

console.log(obj);
console.log(obj.go());
console.log(obj.run());

