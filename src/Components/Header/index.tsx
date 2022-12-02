import menupng from "../../public/icons8-menu-arredondado-100.png";
// import './style.css'
import { MinhaTagA, MyContainer, MyImg } from "./style.Header";

export default function Header() {
  return (
    <MyContainer>
      <div>
        <MinhaTagA href="/">contato</MinhaTagA>
      </div>
      <div>
        <MinhaTagA href="/">Pt-br</MinhaTagA>
      </div>
      <div>
        <a href="/">
          <MyImg src={menupng} alt=""></MyImg>
        </a>
      </div>
    </MyContainer>
  );
}
