"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var translation_collection_1 = require("../utils/translation.collection");
var ServiceParser = (function () {
    function ServiceParser() {
    }
    ServiceParser.prototype.extract = function (contents, path) {
        var collection = new translation_collection_1.TranslationCollection();
        var translateServiceVar = this._extractTranslateServiceVar(contents);
        if (!translateServiceVar) {
            return collection;
        }
        var methodRegExp = /(?:get|instant)\s*\(\s*(\[?\s*(['"`])([^\1\r\n]*)\2\s*\]?)/;
        var regExp = new RegExp("\\." + translateServiceVar + "\\." + methodRegExp.source, 'g');
        var matches;
        while (matches = regExp.exec(contents)) {
            if (this._stringContainsArray(matches[1])) {
                collection = collection.addKeys(this._stringToArray(matches[1]));
            }
            else {
                collection = collection.add(matches[3]);
            }
        }
        return collection;
    };
    ServiceParser.prototype._extractTranslateServiceVar = function (contents) {
        var matches = contents.match(/([a-z0-9_]+)\s*:\s*TranslateService/i);
        if (matches === null) {
            return '';
        }
        return matches[1];
    };
    ServiceParser.prototype._stringContainsArray = function (input) {
        return input.startsWith('[') && input.endsWith(']');
    };
    ServiceParser.prototype._stringToArray = function (input) {
        if (this._stringContainsArray(input)) {
            return eval(input);
        }
        return [];
    };
    return ServiceParser;
}());
exports.ServiceParser = ServiceParser;
//# sourceMappingURL=service.parser.js.map