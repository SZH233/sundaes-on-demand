import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import { Row } from "react-bootstrap";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../../utilities/AlertBanner";
import { pricePerItem } from "../../constants";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const { totals } = useOrderDetails();

  useEffect(() => {
    axios
      .get(`http://localhost:3080/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        // TODO: handle error response
        setError(true);
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  if (error) {
    return <AlertBanner />;
  } else {
    const optionItems = items.map((item) => {
      return (
        <ItemComponent
          key={item.name}
          name={item.name}
          image={item.imagePath}
        />
      );
    });

    return (
      <>
        <h2>{title}</h2>
        <p>{formatCurrency(pricePerItem[optionType])} each</p>
        <p>{title} total: {formatCurrency(totals[optionType])}</p>
        <Row>{optionItems}</Row>
      </>
    );
  }
}
