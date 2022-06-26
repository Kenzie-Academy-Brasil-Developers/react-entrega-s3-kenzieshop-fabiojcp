import { DivMain, DivLogo, Title, Search, Span, Input } from "./HeaderStyle";
import LogoImg from "../../Assets/imgs/Logo.png";
import { FaSistrix } from "react-icons/fa";

export default function Header() {

  return (
    <DivMain>
      <DivLogo background={LogoImg}>
        <Title>Podrão Bigode</Title>
      </DivLogo>

      <Search>
        <Span>{FaSistrix()}</Span>
        <Input placeholder="Busque no cardapio" />
      </Search>
    </DivMain>
  );
}
