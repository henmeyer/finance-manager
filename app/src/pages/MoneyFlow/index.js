import { useState } from "react";

const MoneyFlow = () => {
  const [operation, setOperation] = useState("income");

  return (
    <div>
      <input
        id="income"
        name="selectOperation"
        type="radio"
        value={operation}
        onChange={() => setOperation("income")}
        checked
      />
      <label for="income">Income</label>
      <input
        id="outcome"
        name="selectOperation"
        type="radio"
        value={operation}
        onChange={() => setOperation("outcome")}
      />
      <label for="outcome">Outcome</label>
    </div>
  );
};

export default MoneyFlow;
