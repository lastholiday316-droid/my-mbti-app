export type Trait = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export type Dimension = "EI" | "SN" | "TF" | "JP";

export interface QuestionOption {
  label: "A" | "B";
  text: string;
  trait: Trait;
}

export interface Question {
  id: number;
  dimension: Dimension;
  text: string;
  options: [QuestionOption, QuestionOption];
}

export interface AnswerRecord {
  questionId: number;
  choice: "A" | "B";
  trait: Trait;
}

export interface PartnerMatch {
  type: string;
  name: string;
  reason: string;
}

export interface Persona {
  type: string;
  name: string;
  tagline: string;
  traits: [string, string, string];
  best: PartnerMatch;
  worst: PartnerMatch;
}
