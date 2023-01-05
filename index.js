// console.log('This is Project 3');

/* NewsApi.org ApiKey: 15cb1c1e1fe04fffb2ee54276ac6fad4
https://newsapi.org/v2/top-headlines?sources=ary-news&apiKey=15cb1c1e1fe04fffb2ee54276ac6fad4  */
/* NewsData.io ApiKey: pub_541444c660fc51009cb4434365e6b718c22e
https://newsdata.io/api/1/news?apikey=${apiKey2}&country=${country}&category=politics,technology,world  */

// source = 'ary-news'
// let apiKey1 = '15cb1c1e1fe04fffb2ee54276ac6fad4';
// let apiKey2 = 'pub_541444c660fc51009cb4434365e6b718c22e';
// country = 'pk'; /* Pakistan - pk, Egypt - eg, Saudi arabia - sa, Turkey - tr*/
// category='sports,politics,technology,world';  /* business,entertainment,environment,food,health,
// politics,science,sports,technology,top,world  */


let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=ary-news&apiKey=15cb1c1e1fe04fffb2ee54276ac6fad4`, true);
xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        // console.log(results); or /results // full_description // link
        // console.log(articles); //or /articles // description // url
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card text-center mb-2">
                            <div class="card-header border2" id="heading${index}">
                                <div class="mb-0">
                                    <card class="text-decoration-none px-2" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="#collapse${index}">
                                       <h4 class="text-primary">Breaking News: ${index + 1}</h4>  <p class="fw-bold"> ${element["title"]} </p>
                                         <p class="text-primary"> ${element["description"]} </p>
                                    </card>
                                </div>
                            </div>

                            
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.error('Some error occured');
    }
}

xhr.send()


