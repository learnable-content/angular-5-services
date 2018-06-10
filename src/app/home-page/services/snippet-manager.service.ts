import { Injectable } from '@angular/core';
import {Snippet} from "../models/snippet";
import {Languages} from "./language-manager.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SnippetManagerService {

  private SNIPPET_STORAGE_KEY = 'code_snippets.saved_snippets';

  constructor() { }

  fetchSavedSnippets = (lang: Languages): Observable<Array<Snippet>> => {
    return Observable.create(observable => {
      try {
        const relevantSnippets: Array<Snippet> = [];
        let snippets = JSON.parse(window.localStorage.getItem(this.SNIPPET_STORAGE_KEY));
        if (!snippets) {
          snippets = [];
        }
        for (const snippet of snippets) {
          if (snippet._lang === lang) {
            relevantSnippets.push(new Snippet(snippet._title, snippet._desc, snippet._code, snippet._lang));
          }
        }
        observable.next(relevantSnippets);
      } catch (err) {
        observable.error(err);
      }
    });
  }

  saveSnippet = (snippet: Snippet): Observable<void> => {
    return Observable.create(observable => {
      let savedSnippets = JSON.parse(window.localStorage.getItem(this.SNIPPET_STORAGE_KEY)) as Array<Snippet>;
      if (!savedSnippets) {
        savedSnippets = [];
      }
      savedSnippets.push(snippet);
      window.localStorage.setItem(this.SNIPPET_STORAGE_KEY, JSON.stringify(savedSnippets));
      observable.next();
    });
  }

}
