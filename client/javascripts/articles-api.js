// jshint esversion: 6

let main = function() {
  /*
    let prefixURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags=";
    let suffixURL = "&format=json&jsoncallback=?";
    //get value entered by user from textbox
    let flickrTag = $("input").???();
  */
  let requestURL = `https://thejsway-server.herokuapp.com/api/articles`;

  //clear old photos
  //$(".photos").???("");

  $.getJSON(requestURL, function(response) {
    console.log(response);

    console.log(`Article ${response[0].id}
  Title: ${response[0].title}
  Content: ${response[0].content}`);

    response.forEach(function(article, index) {
      let newDiv = document.createElement("div");
      document.querySelector(".articles").appendChild(newDiv);

      let header = document.createElement("h3");
      header.textContent = `Article ${article.id}`;
      newDiv.appendChild(header);

      let titleParagraph = document.createElement("p");
      titleParagraph.textContent = article.title;
      newDiv.appendChild(titleParagraph);

      let bodyParagraph = document.createElement("p");
      bodyParagraph.textContent = article.content;
      newDiv.appendChild(bodyParagraph);
    });
  });
};

$(document).ready(main);
