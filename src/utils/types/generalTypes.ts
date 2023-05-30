export type Lesson = {
  ects: number;
  grade: number;
};

export type FetchedHeroesDataType = {
  alias: string;
  dob: string;
  gender: string;
  image: string;
  name: string;
  nationality?: string;
  lessons: Record<string, Lesson>;
};
