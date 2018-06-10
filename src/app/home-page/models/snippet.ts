import {Languages} from "../services/language-manager.service";


export class Snippet {
  private _title: string;
  private _desc: string;
  private _code: string;
  private _lang: Languages;

  get title(): string {
    return this._title;
  }

  get desc(): string {
    return this._desc;
  }

  get code(): string {
    return this._code;
  }

  get lang(): Languages {
    return this._lang;
  }

  constructor(title: string, desc: string, code: string, lang: Languages) {
    this._title = title;
    this._desc = desc;
    this._code = code;
    this._lang = lang;
  }
}
