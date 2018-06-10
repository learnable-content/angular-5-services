import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {Snippet} from "../models/snippet";
import {HighlightJsService} from "angular2-highlight-js";

@Component({
  selector: 'app-snippet-card',
  templateUrl: './snippet-card.component.html',
  styleUrls: ['./snippet-card.component.scss']
})
export class SnippetCardComponent implements OnInit {

  @Input() snippet: Snippet;
  @ViewChild('codeSnippet') codeSnippet: ElementRef;
  showModal = false;

  constructor(private highlighter: HighlightJsService) { }

  ngOnInit() {
  }

  showDetails = () => {
    this.highlighter.highlight(this.codeSnippet.nativeElement);
    this.showModal = true;
  }

}
