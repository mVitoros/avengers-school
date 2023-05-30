import { useLocation, useParams } from "react-router-dom";
import { decodeURL } from "../utils/editURL";
import Container from "../components/Container/Container";
import theme from "../theme/theme";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import Image from "../components/ImageComp/Image";
import Typography from "../components/Typography/Typography";
import Logo from "../assets/img/logo.png";
import MainLayout from "../components/MainLayout/MainLayout";
import { FetchedHeroesDataType } from "../utils/types/generalTypes";

const Heroes = () => {
  const { heroId } = useParams();
  const location = useLocation();

  const heroSlice = location.state as FetchedHeroesDataType;

  if (!heroSlice) {
    return (
      <MainLayout>
        <h1>No such Hero was found in the database.</h1>
      </MainLayout>
    );
  }

  return (
    <div className="Heroes">
      <Container maxWidth={1440} bgColor={theme.colors.darkRed}>
        <Header>
          <Card>
            <Card.SecondaryContent width={30} flexConfig={true}>
              <Image src={Logo} maxWidth={400} />
            </Card.SecondaryContent>
            <Card.MainContent>
              <Typography variant="h1" variantSize={3}>
                School
              </Typography>
            </Card.MainContent>
          </Card>
        </Header>
      </Container>

      <MainLayout>
        <Typography variant="h2" variantSize={0}>
          {heroSlice.name}
        </Typography>
        <Typography variant="h1" variantSize={3}>
          {heroId && decodeURL(heroId)}
        </Typography>
        <Typography variant="p" variantSize={2}>
          {heroSlice.gender}
        </Typography>
        {heroSlice.nationality && (
          <Typography variant="h2" variantSize={0}>
            {heroSlice.nationality}
          </Typography>
        )}
        <Image src={heroSlice.image} />
        {Object.keys(heroSlice.lessons).map((el) => {
          return (
            <Typography key={el} variant="h2" variantSize={0}>
              {`Lesson: ${el}, grade: ${heroSlice.lessons[el].grade}`}
            </Typography>
          );
        })}
      </MainLayout>
    </div>
  );
};

export default Heroes;
