export interface TimelineModel {
  languages: {
    language: string
    speckLevel: string
    readLevel: string
    listenLevel: string
  }[];
  school: {
    title: string;
    school: string;
    vote: string;
  }[];
  exp: {
    title: string;
    company: string;
    period: string;
    technologies: string;
    detailIsDisplayed: boolean;
  }[];
}
