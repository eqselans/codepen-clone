function run() {
    
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let Output = document.getElementById("out-put");


    Output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode +"</style>";
    Output.contentWindow.eval(jsCode)
}

document.getElementById("download-file").addEventListener("click", function() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;

    downloadFile('index.html', htmlCode);

    downloadFile('styles.css', cssCode);

    downloadFile('script.js', jsCode);
});

function downloadFile(filename, content) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}