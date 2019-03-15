let articleUl = document.getElementById("articleUl")

let HACKER_NEWS_URL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"

fetch(HACKER_NEWS_URL)
.then(function(response){
  return response.json()
}).then(function(json){
  let a = blah. map //for(let i = 0; i<json.length; i++){
  let NEWS_DETAILS_URL = `https://hacker-news.firebaseio.com/v0/item/${json[i]}.json?print=pretty`
  fetch(NEWS_DETAILS_URL)
  .then(function(response){
    return response.json()
  }).then(function(json){
    let newsArticlesLI = []
    let date = new Date(json.time)
    newsArticlesLI.push( `<li>
            <h4>${json.title}</h4>
            <a href="${json.url}">${json.url}</a>
            <p>By: ${json.by}</p>
            <p>${date}</p>
            </li>`)
    articleUl.insertAdjacentHTML('beforeend', newsArticlesLI.join(''))
    })
  }
})
