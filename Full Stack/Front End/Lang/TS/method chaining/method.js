var rachana = /** @class */ (function () {
    function rachana() {
    }
    rachana.prototype.withEye = function () {
        console.log('see');
        return this;
    };
    rachana.prototype.withNose = function () {
        console.log('smell');
        return this;
    };
    return rachana;
}());
var me = new rachana;
me.withEye().withNose();
