import { formatter } from "../util/investment.js";

export default function Row({
  year,
  investmentValue,
  interest,
  totalInterest,
  investedCapital,
}) {
  return (
    <>
      <th>{year}</th>
      <th>{formatter.format(investmentValue)}</th>
      <th>{formatter.format(interest)}</th>
      <th>{formatter.format(totalInterest)}</th>
      <th>{formatter.format(investedCapital)}</th>
    </>
  );
}
