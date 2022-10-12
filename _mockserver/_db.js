var apiFiles = [
    __dirname + "/myapp/test.js",
    __dirname + "/myapp/hello/world.js",
    __dirname + "/myapp/hello/mockdata.js",
    __dirname + "/myapp/tenant/list.js",
    __dirname + "/myapp/tenant/chart.js",
    __dirname + "/myapp/user/list.js",
];
var data = {};
apiFiles.forEach(function (filePath) {
    var apiContent = require(filePath);

    var url = filePath.split("_mockserver/")[1]; // e.g. comments.js
    url =
        url.slice(url.length - 9) === "/index.js"
            ? url.slice(0, url.length - 9) // remove /index.js
            : url.slice(0, url.length - 3); // remove .js

    urlPath = url.replace(/\//g, "-");

    data[urlPath] = apiContent;
});

module.exports = () => {
    return data;
};
