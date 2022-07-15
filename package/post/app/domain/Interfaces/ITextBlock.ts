export class ITextBlock {
  data: Object;
  depth: number;
  entityRanges: [];
  inlineStyleRanges: InlineStyleRanges[];
  key: String;
  text: String;
  type: String;
}

export class InlineStyleRanges {
  length: number;
  offset: number;
  style: String;
}
