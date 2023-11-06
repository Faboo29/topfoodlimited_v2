interface Mark {
  type: string;
}

export interface Node {
  nodeType: string;
  data: Record<string, any>;
  content: Node[];
  marks?: Mark[];
  value?: string;
}