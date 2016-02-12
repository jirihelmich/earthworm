(function(window, undefined) {
var dictionary = {
"d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
"8a5abcc1-f7b8-4de4-b714-bd5d4f450630": "Bug",
"01b0ebe9-28be-46b4-9345-b0cb9a0bd90c": "Question",
"4bcd7737-2c29-420f-9e89-ccd507f53ae2": "Enahncement",
"87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
"e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
"f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
};

var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
window.lookUpURL = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, url;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
url = folder + "/" + canvas;
}
return url;
};

window.lookUpName = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, canvasName;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
canvasName = dictionary[canvas];
}
return canvasName;
};
})(window);