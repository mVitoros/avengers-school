import Container from "../Container/Container";
import theme from "../../theme/theme";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Container maxWidth={1440} bgColor={theme.colors.lightGrey}>
        <Container maxWidth={750} bgColor={theme.colors.lightGrey}>
          {children}
        </Container>
      </Container>
    </main>
  );
};

export default MainLayout;
