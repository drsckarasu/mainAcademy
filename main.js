let allArticles = [];
function saveArticle() {
        let articleObj = {};
    let title=document.getElementById("title").value;
    let imageUrl=document.getElementById("imagesrc").value;
    let article=document.getElementById("text").value;
    if(title==="" && imageUrl==="" && article==="") {
        alert("All inputs should not be empty");
    }else {
        articleObj.title =title;
        articleObj.image = imageUrl;
        articleObj.article = article;
        articleObj.sentences = article.split(".");
        articleObj.sentencesNum = articleObj.sentences.length;
        allArticles.push(articleObj);
        let info=document.getElementById("info");
        info.innerText = "The article has been saved";
        
        emptyFields();
        console.dir(allArticles);
    }

    // this logic can be changed later
}
function emptyFields() {
    document.getElementById("title").value = "";
    document.getElementById("imagesrc").value = "";
    document.getElementById("text").value = "";
      setTimeout(function () {
          document.getElementById("info").innerText = "";
    }, 4000);
}
function showArticles() {
    for (var i=0; i<allArticles.length; i++){

        let objContainer = document.createElement("div");
        let obj = allArticles[i];
        let text = document.createTextNode(obj.title);
        objContainer.appendChild(text);

        document.getElementById("articleContainer").appendChild(objContainer);

    }
}