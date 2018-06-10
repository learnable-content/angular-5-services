import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class LanguageManagerService {

  constructor() { }
  private LANGUAGE_STORAGE_KEY = 'code_snippets.saved_languages';

  fetchAllOptions = (): Observable<Set<Languages>> => {
    return Observable.create(observable => {
      const languages = new Set<Languages>();
      for (const lang in Languages) {
        if (lang) {
          languages.add(Languages[lang] as Languages);
        }
      }
      observable.next(languages);
    });
  }

  fetchSavedOptions = (): Observable<Set<Languages>> => {
    return Observable.create(observable => {
      this.fetchSavedLanguagesAsArray().subscribe(res => {
        const languageSet = new Set<Languages>();
        for (const lang of res) {
          languageSet.add(lang);
        }
        observable.next(languageSet);
      }, err => {
        observable.error('Could not fetch saved languages');
      });
    });
  }

  saveLanguage = (language: Languages): Observable<void> => {
    return Observable.create(observable => {
      this.fetchSavedLanguagesAsArray().subscribe(res => {
        res.push(language);
        window.localStorage.setItem(this.LANGUAGE_STORAGE_KEY, JSON.stringify(res));
        observable.next();
      }, err => {
        observable.error('Could not fetch saved languages');
      });
    });
  }

  private fetchSavedLanguagesAsArray = (): Observable<Array<Languages>> => {
    return Observable.create(observable => {
      let savedLanguages = JSON.parse(window.localStorage.getItem(this.LANGUAGE_STORAGE_KEY)) as Array<Languages>;
      if (!savedLanguages) {
        savedLanguages = [];
      }
      observable.next(savedLanguages);
    });
  }
}

export enum Languages {
  typescript = 'TypeScript',
  css = 'CSS',
  html = 'HTML',
  react = 'React',
  sass = 'Sass',
  swift = 'Swift',
  kotlin = 'Kotlin',
  cSharp = 'C#'
}
