import { useState } from "react";
import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import Row from "./components/Row.jsx";

import { calculateInvestmentResults } from "./util/investment.js";

const INVESTMENT_DATA = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [investment, setInvestment] = useState(INVESTMENT_DATA);

  const infos = calculateInvestmentResults(investment);

  const inputIsValid = investment.duration >= 1;

  const handleOnChange = (title, e) => {
    setInvestment((oldData) => {
      const calculatedData = {
        ...oldData,
        [title]: +e.target.value,
      };

      return calculatedData;
    });
  };

  return (
    <>
      <Header />
      <main id="user-input">
        <div className="input-group">
          <Input
            title="initialInvestment"
            label="initial investment"
            value={investment.initialInvestment}
            handleChange={handleOnChange}
          />
          <Input
            title="annualInvestment"
            label="annual investment"
            value={investment.annualInvestment}
            handleChange={handleOnChange}
          />
        </div>

        <div className="input-group">
          <Input
            title="expectedReturn"
            label="expected return"
            value={investment.expectedReturn}
            handleChange={handleOnChange}
          />
          <Input
            title="duration"
            label="duration"
            value={investment.duration}
            handleChange={handleOnChange}
          />
        </div>
      </main>
      <section>
        {!inputIsValid && (
          <p className="center">Please enter a valid Duration.</p>
        )}
        {inputIsValid && (
          <table id="result">
            <thead>
              <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
              </tr>
            </thead>
            <tbody>
              {infos.map((info) => {
                return (
                  <tr key={info.year}>
                    <Row
                      year={info.year}
                      investmentValue={info.valueEndOfYear}
                      interest={info.interest}
                      totalInterest={info.totalInterest}
                      investedCapital={info.totalInvestmentInYear}
                    />
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
}

export default App;
