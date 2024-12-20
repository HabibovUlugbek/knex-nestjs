export interface OpenLibraryGetResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Document[];
}

export interface Document {
  key: string;
  text: string[];
  type: string;
  name: string;
  alternate_names: string[];
  birth_date: string;
  top_work: string;
  work_count: number;
  top_subjects: string[];
  _version_: number;
}
