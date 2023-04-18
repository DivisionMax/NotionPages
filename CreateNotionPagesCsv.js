var container = document.getElementsByClassName("notion-outliner-private")[0];
pages = container.getElementsByClassName("notion-page-block");
console.log(`Found ${pages.length} private pages.`);

const rows = [
    // ["name1", "city1", "some other info"],
];

rows.push(['Notion Page Title', 'URL']);

for (var i = 0; i < pages.length; i++){
    var page = pages[i];
    var url = page.getElementsByTagName("a")[0].href;
    var pageTitle = page.innerText;
    pageTitle = pageTitle.replaceAll(",", " -")

    rows.push([pageTitle, url])
};

let csvContent = "data:text/csv;charset=utf-8,";

rows.forEach(function(rowArray) {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
});

var encodedUri = encodeURI(csvContent);
window.open(encodedUri);
