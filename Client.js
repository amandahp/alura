export class Client{
  name;
  _document;

  get document(){
    return this._document;
  }

  constructor(name, document){
    this.name = name;
    this._document = document;
  }
}