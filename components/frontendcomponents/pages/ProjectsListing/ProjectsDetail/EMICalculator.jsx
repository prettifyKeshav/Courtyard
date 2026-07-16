"use client"
import { useModalStore } from '../../../../../store/modelStore'
import React, { useState, useMemo } from 'react'

// Converts a polar coordinate (angle around a circle) to x/y for SVG paths
const polarToCartesian = (cx, cy, r, angleDeg) => {
    const angleRad = ((angleDeg - 180) * Math.PI) / 180.0
    return {
        x: cx + r * Math.cos(angleRad),
        y: cy + r * Math.sin(angleRad),
    }
}

// Builds an SVG arc path between two angles (0-180) on a half-circle
const describeArc = (cx, cy, r, startAngle, endAngle) => {
    const start = polarToCartesian(cx, cy, r, endAngle)
    const end = polarToCartesian(cx, cy, r, startAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`
}

const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState(5000)
    const [interestRate, setInterestRate] = useState(9)
    const [tenure, setTenure] = useState(5)
    const openEnqui = useModalStore((state) => state.openEnquire);

    const { emi, interestAmt, totalPayable, loanPercent } = useMemo(() => {
        const principal = Number(loanAmount) || 0
        const monthlyRate = (Number(interestRate) || 0) / 12 / 100
        const months = (Number(tenure) || 0) * 12

        let calculatedEmi = 0
        if (monthlyRate === 0) {
            calculatedEmi = months > 0 ? principal / months : 0
        } else {
            const factor = Math.pow(1 + monthlyRate, months)
            calculatedEmi = (principal * monthlyRate * factor) / (factor - 1)
        }

        const total = calculatedEmi * months
        const interest = total - principal

        return {
            emi: Math.round(calculatedEmi),
            interestAmt: Math.round(interest),
            totalPayable: Math.round(total),
            loanPercent: total > 0 ? (principal / total) * 100 : 0,
        }
    }, [loanAmount, interestRate, tenure])

    // Gauge geometry
    const cx = 150
    const cy = 150
    const r = 110
    const strokeWidth = 32
    const splitAngle = (loanPercent / 100) * 180

    return (
        <section>
            <div className="project-detail-secH">
                <div className="container">
                    <div className="heading">
                        <h2>EMI Calculator</h2>
                    </div>

                    <div className="emi-calculator">
                        <div className="emi-calculator__inputs">
                            <div className="emi-calculator__field">
                                <div className="emi-calculator__field-top">
                                    <label>Loan Amount</label>
                                    <input
                                        type="number"
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(e.target.value)}
                                    />
                                </div>
                                <input
                                    type="range"
                                    min="1000"
                                    max="10000000"
                                    step="1000"
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(e.target.value)}
                                    className="emi-calculator__slider"
                                />
                            </div>

                            <div className="emi-calculator__field">
                                <div className="emi-calculator__field-top">
                                    <label>Interest Rate (p.a)</label>
                                    <input
                                        type="number"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(e.target.value)}
                                    />
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    step="0.1"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                    className="emi-calculator__slider"
                                />
                            </div>

                            <div className="emi-calculator__field">
                                <div className="emi-calculator__field-top">
                                    <label>Tenure (years)</label>
                                    <input
                                        type="text"
                                        readOnly
                                        value={`${tenure} years`}
                                    />
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    step="1"
                                    value={tenure}
                                    onChange={(e) => setTenure(e.target.value)}
                                    className="emi-calculator__slider"
                                />
                            </div>

                            <div className="emi-calculator__result">
                                <label>Equated Monthly Installments (EMI)</label>
                                <div className="emi-calculator__result-row">
                                    <button className="emi-calculator__cta" onClick={openEnqui}>
                                        <span>Get a call back</span>
                                    </button>
                                    <span className="emi-calculator__emi-value">
                                        ₹{emi.toLocaleString('en-IN')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="emi-calculator__chart-card">
                            <p className="emi-calculator__chart-title">
                                Break-up of Total Payment
                            </p>

                            <svg
                                viewBox="0 0 300 170"
                                className="emi-calculator__gauge"
                            >
                                {/* background track (interest portion) */}
                                <path
                                    d={describeArc(cx, cy, r, 0, 180)}
                                    fill="none"
                                    stroke="#D9D9D9"
                                    strokeWidth={strokeWidth}
                                />
                                {/* filled portion (loan amount) */}
                                <path
                                    d={describeArc(cx, cy, r, 0, splitAngle)}
                                    fill="none"
                                    stroke="#C09F59"
                                    strokeWidth={strokeWidth}
                                    strokeLinecap="butt"
                                />
                            </svg>

                            <div className="emi-calculator__breakdown">
                                <div className="emi-calculator__breakdown-row">
                                    <span>Loan Amt</span>
                                    <span>₹ {loanAmount.toLocaleString ? loanAmount.toLocaleString('en-IN') : loanAmount}</span>
                                </div>
                                <div className="emi-calculator__breakdown-row">
                                    <span>Interest Amt</span>
                                    <span>₹ {interestAmt.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="emi-calculator__breakdown-row emi-calculator__breakdown-row--total">
                                    <span>Total Payable</span>
                                    <span>₹ {totalPayable.toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EMICalculator