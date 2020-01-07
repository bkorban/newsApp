import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class NewsApiService {
  api_key = environment.apiKey;

  constructor(private http: HttpClient) {}

  initSources() {
    return this.http.get(
      "https://newsapi.org/v2/sources?apiKey=" + this.api_key
    );
  }

  initArticles() {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" +
        this.api_key
    );
  }

  getArticlesById(source: String) {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?sources=" +
        source +
        "&apiKey=" +
        this.api_key
    );
  }
}
