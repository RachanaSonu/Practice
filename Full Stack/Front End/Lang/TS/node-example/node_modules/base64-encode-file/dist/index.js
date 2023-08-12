"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function encode(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
}
exports.default = encode;
//# sourceMappingURL=index.js.map