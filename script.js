const sites = [];
const writeSiteList = function (sites) {
  $("#site-list").text("");
  for (const s of sites) {
    const a = $("<a>").attr("href", s.url).text(s.title);
    const li = $("<li>").append(a);
    $("#site-list").append(li);
  }
}




const addNewSite = function (event) {
  event.preventDefault();
  console.log("inside addNewSite");
  const url = $("#form-url").val();
  const title = $("#form-title").val();
  const category = $("#form-category").val();

  console.log("URL: " + url);
  console.log("Title: " + title);
  console.log("category:" + category);


  const newSite = {
    url: url,
    title: title,
    category: category
  };

  sites.push(newSite);
  console.log(sites);
  writeSiteList(sites);


}


const init = function () {
  console.log("inside init");
  $("form").submit(addNewSite);
}


$(document).ready(init);


