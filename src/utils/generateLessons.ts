import { FetchedHeroesDataType } from "./types/generalTypes";

const generateLessons = (data: FetchedHeroesDataType[]) => {
  return data.reduce((acc: string[], curr: FetchedHeroesDataType) => {
    console.log(curr.lessons);
    Object.keys(curr.lessons).forEach((lesson) => {
      if (!acc.includes(lesson)) {
        acc.push(lesson);
      }
    });
    return acc;
  }, []);
};

export default generateLessons;
