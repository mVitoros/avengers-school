import { useState } from "react";

//theme
import theme from "../theme/theme";

//components
import Header from "../components/Header/Header";
import Typography from "../components/Typography/Typography";
import Container from "../components/Container/Container";
import Card from "../components/Card/Card";
import Image from "../components/ImageComp/Image";
import Logo from "../assets/img/logo.png";
import Form from "../components/Form/Form";
import Search from "../components/Search/Search";
import Select from "../components/Select/Select";
import HeroList from "../components/HeroList/HeroList";
import MainLayout from "../components/MainLayout/MainLayout";

//helpers
import { debounce } from "../utils/debounce";
import generateLessons from "../utils/generateLessons";

//types
import { FetchedHeroesDataType } from "../utils/types/generalTypes";

//hooks
import useFetchData from "../hooks/services/useFetchData";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const selectValueHandler = (value: string) => {
    setSelectValue(value);
  };

  const debouncedHandleChange = debounce((value) => setSearchValue(value));

  const { data, isLoading, hasError } = useFetchData<FetchedHeroesDataType>({
    url: "http://localhost:4000/avengers",
  });

  if (isLoading) {
    return (
      <MainLayout>
        <h1>Loading...</h1>
      </MainLayout>
    );
  }

  if (!isLoading && hasError.status) {
    return (
      <MainLayout>
        <h1>{hasError.message}</h1>
      </MainLayout>
    );
  }

  return (
    <div className="Home">
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
        <Form>
          <Select
            value={selectValue}
            options={generateLessons(data)}
            label={"Search for a lesson"}
            onChange={selectValueHandler}
          />
          <Search
            label="Seach for a hero name"
            onChange={debouncedHandleChange}
          />
        </Form>
        <HeroList
          data={data}
          searchValue={searchValue}
          selectValue={selectValue}
        />
      </MainLayout>
    </div>
  );
};

export default Home;
