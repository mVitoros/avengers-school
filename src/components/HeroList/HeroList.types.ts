import { FetchedHeroesDataType } from "../../utils/types/generalTypes";

export type HeroListType = {
  data: FetchedHeroesDataType[];
  searchValue: string;
  selectValue: string;
};
