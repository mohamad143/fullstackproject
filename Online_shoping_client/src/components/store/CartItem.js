import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useWepContext } from "../../context/WepContext";
import FormatCurrency from "./FormatCurrency";
const CartItem = ({ id, quantity }) => {
  const { removeFromCart,StoreitemData } = useWepContext();
  const item = StoreitemData.find((i) => i.id === id);
 
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.img_Url}
        alt="cart-img"
        style={{ width: "125px", height: "125px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          
          {item.name_Item }{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {FormatCurrency(item.price_Item)}
        </div>
      </div>
      <div>{FormatCurrency(item.price_Item * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
