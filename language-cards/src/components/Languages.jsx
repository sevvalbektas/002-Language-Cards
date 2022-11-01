import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Languages = ({name, img, options}) => {
    console.log(name, img, options);
  return (
    <Container>
        <Container>
            <Image img={img}></Image>
        </Container>
    </Container>
  );
};

export default Languages;