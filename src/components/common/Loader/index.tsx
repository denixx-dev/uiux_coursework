import { GiGreatPyramid } from "react-icons/gi";
import * as Style from "./index.styled";

const Loader = () => {
  return (
    <Style.Loader>
      <Style.Icon>
        <GiGreatPyramid />
      </Style.Icon>
      <Style.Text>Loading...</Style.Text>
    </Style.Loader>
  );
};

export default Loader;
