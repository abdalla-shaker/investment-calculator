import moneyBagLogo from "/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={moneyBagLogo} alt="investment calculator logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
