import { FetchedHeroesDataType } from "../../utils/types/generalTypes";
import Card from "../Card/Card";
import CardGroup from "../CardGroup/CardGroup";
import Image from "../ImageComp/Image";
import Typography from "../Typography/Typography";
import renderHeroes from "../../utils/renderHeros";
import theme from "../../theme/theme";
import { HeroListType } from "./HeroList.types";
import { Link } from "react-router-dom";
import { encodeURL } from "../../utils/editURL";

const lightGrey = theme.colors.darkGrey;

const HeroList = ({ data, searchValue, selectValue }: HeroListType) => {
  return (
    <CardGroup>
      {renderHeroes(data, searchValue, selectValue).map(
        ({ alias, image, lessons }: FetchedHeroesDataType) => {
          return (
            <Link
              to={`heroes/${encodeURL(alias)}`}
              key={alias}
              state={data.find((item) => item.alias === alias)}
            >
              <Card>
                <Card.SecondaryContent width={40} flexConfig={true}>
                  <Image maxWidth={290} src={image} />
                </Card.SecondaryContent>
                <Card.MainContent
                  width={60}
                  flexConfig={true}
                  bgColor={lightGrey}
                >
                  <Typography variant="h2" variantSize={0}>
                    {alias}
                  </Typography>
                  {Object.keys(lessons).map((el) => {
                    return (
                      <Typography key={el} variant="p" variantSize={0}>
                        {`Lesson: ${el}, grade: ${lessons[el].grade}`}
                      </Typography>
                    );
                  })}
                </Card.MainContent>
              </Card>
            </Link>
          );
        }
      )}
    </CardGroup>
  );
};

export default HeroList;
