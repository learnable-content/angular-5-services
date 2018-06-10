import { Component, OnInit } from '@angular/core';
import {Snippet} from "../models/snippet";
import {Languages} from "../services/language-manager.service";
import {SnippetManagerService} from "../services/snippet-manager.service";

@Component({
  selector: 'app-home-page-controller',
  templateUrl: './home-page-controller.component.html',
  styleUrls: ['./home-page-controller.component.scss']
})
export class HomePageControllerComponent implements OnInit {

  private _snippets: Array<Snippet> = [];
  private _language: Languages;

  get snippets(): Array<Snippet> {
    return this._snippets;
  }
  get language(): Languages {
    return this._language;
  }

  constructor(private snippetManager: SnippetManagerService) { }

  ngOnInit() {
  }

  newLanguageSelected = (lang: Languages) => {
    this._language = lang;
    this.snippetManager.fetchSavedSnippets(lang).subscribe(res => {
      this._snippets = res;
    }, err => {
      console.debug('could not fetch snippets', err);
    });
  }

  newSnippetAdded = (snippet: Snippet) => {
    this._snippets.push(snippet);
  }
}
