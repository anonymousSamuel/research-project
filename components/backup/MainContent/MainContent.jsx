import Cashflow from "../Cashflow/Cashflow";
import Bar from "../GroupbarChart/Groupbar";

export default function MainContent() {
  return (
    <>
      <div style={{ width: "100%", height: "400px", overflow: "hidden" }}>
        <Cashflow />
        <Bar />
      </div>
    </>
  );
}
