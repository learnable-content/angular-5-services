import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {SnippetManagerService} from "../services/snippet-manager.service";
import {Snippet} from "../models/snippet";
import {Languages} from "../services/language-manager.service";

@Component({
  selector: 'app-snippet-adder',
  templateUrl: './snippet-adder.component.html',
  styleUrls: ['./snippet-adder.component.scss']
})
export class SnippetAdderComponent implements OnInit {

  @Input() lang: Languages;
  @Output() snippetAdded = new EventEmitter<Snippet>();
  name: string;
  desc: string;
  code: string;
  showModal = false;

  readonly headerText = 'Save Snippet';

  constructor(private snippetManager: SnippetManagerService) { }

  ngOnInit() {
  }

  addSnippet = () => {
    const snippet = new Snippet(this.name, this.desc, this.code, this.lang);
    this.snippetManager.saveSnippet(snippet).subscribe(res => {
      this.snippetAdded.emit(snippet);
      this.showModal = false;
    }, err => {
      console.debug('could not save snippet', err);
    });
  }

  openModal = () => {
    if (!this.lang) {
      return;
    }
    this.clearForm();
    this.showModal = true;
  }

  private clearForm = () => {
    this.name = '';
    this.desc = '';
    this.code = '';
  }

}
