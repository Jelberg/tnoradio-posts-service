export abstract class StringValueObject {
    readonly value: String;
  
    constructor(value: String) {
      this.value = value;
    }
  
    toString(): String {
      return this.value;
    }
  }