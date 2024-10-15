import { useContext } from "react";
import DataContext from "./data/DataContext";

const Datastate = () => {
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const { ReportExpenses, ReportIncome } = useContext(DataContext);
  return (
    <div>
      <h2>
        Income : ${formatNumber(ReportIncome)}| Expenses: $
        {formatNumber(ReportExpenses)}
      </h2>
      <h2>
        Amount : ${formatNumber(Math.abs(ReportExpenses-ReportIncome))}
      </h2>
    </div>
  );
};
export default Datastate;
