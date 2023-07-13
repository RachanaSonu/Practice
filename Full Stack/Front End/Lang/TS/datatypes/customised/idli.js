var Idly = /** @class */ (function () {
    function Idly() {
        this.color = "white";
        this.chutney = 'tasty';
    }
    Idly.prototype.withHeadb = function () {
        console.log('nice');
    };
    Idly.prototype.withHeada = function () {
        console.log('mediam');
    };
    return Idly;
}());
var rachBreakfasts = new Idly();
rachBreakfasts.withHeadb();
rachBreakfasts.withHeada();
console.log(rachBreakfasts);
