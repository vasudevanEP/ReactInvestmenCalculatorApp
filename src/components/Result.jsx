import React from 'react'
import { calculateInvestmentResults,formatter } from '../util/investment.js'

export default function Result({input}) {
    
    const results = calculateInvestmentResults(input)

    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

  return (
    <section >
        <table id='result'>
            <thead>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </thead>
            <tbody>
                {results.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;

                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}
