import { NewsApiService } from "./news-api.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService) {
    console.log("app component constructor called");
  }

  ngOnInit() {
    //load articles
    this.newsapi
      .initArticles()
      .subscribe(data => (this.myArticles = data["articles"]));

    //load news sources
    this.newsapi
      .initSources()
      .subscribe(data => (this.mSources = data["sources"]));
  }

  searchArticles(source) {
    console.log("selected source is: " + source);
    this.newsapi
      .getArticlesById(source)
      .subscribe(data => (this.myArticles = data["articles"]));
  }
}
