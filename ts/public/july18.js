"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphanumeric = alphanumeric;
function alphanumeric(string) {
    let allowed = /^[0-9A-Za-z]+$/;
    return allowed.test(string) ? true : false;
}
