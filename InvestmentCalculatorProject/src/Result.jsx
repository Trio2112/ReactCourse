import {calculateInvestmentResults, formatter} from "./util/investment.js";

function calculateTotalInterest(annualData, year) {
    // Calculate the total interest earned up to the given year
    return annualData.slice(0, year).reduce((total, data) => total + data.interest, 0);
}

export default function Result({ formData }) {
    // Calculate the data for each year
    const input = {
        "initialInvestment": parseFloat(formData.initialInvestment),
        "annualInvestment": parseFloat(formData.annualInvestment),
        "expectedReturn": parseFloat(formData.expectedReturn),
        "duration": parseInt(formData.duration)
    };
    
    const annualData = calculateInvestmentResults(input);
    
    return (
        <>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capitol</th>
                    </tr>
                </thead>
                <tbody>
                    {annualData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(calculateTotalInterest(annualData, data.year))}</td>
                            <td>{formatter.format(data.annualInvestment * (index + 1) + parseFloat(input.initialInvestment))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}