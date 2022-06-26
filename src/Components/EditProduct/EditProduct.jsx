import { DivMain, DivText, Title, Action } from "./EditProductStyle";
import { useDispatch } from "react-redux";
import { RemoveCartThunk } from "../../Store/Modules/Cart/Thunk";

export default function EditProduct({ product, setEditProd }) {
  const dispach = useDispatch();

  return (
    <>
      <DivMain onClick={() => setEditProd(false)}></DivMain>
      <DivText>
        <Title>
          {product.qnt}x {product.name}
        </Title>
        <Action>Editar item</Action>
        <Action
          onClick={() => {
            dispach(RemoveCartThunk(product));
            setEditProd(false);
          }}
        >
          Remover item
        </Action>
      </DivText>
    </>
  );
}
