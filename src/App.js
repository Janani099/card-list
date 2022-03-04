import "./styles.css";
import { PriceList } from "./PriceList";

import { useState } from "react";

export default function App() {
  const [price, setprice] = useState([]);

  return (
    <div className="price">
      <ul>
        <PriceList />
      </ul>
    </div>
  );
}
