export default class DomainTag {
  _id: String;
  tag: String;

  constructor(_id: String, tag: String) {
    this._id = _id;
    this.tag = tag;
  }

  static create(_id: String, tag: String) {
    return new DomainTag(_id, tag);
  }
}
