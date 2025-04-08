export default function UserInput({ formData, handleInputChange }) {
    return (
        <div id="user-input">
            <form id="input-form">
                <div className="input-group">
                    <div>
                        <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
                        <input
                            type="number"
                            id="initial-investment"
                            name="initialInvestment"
                            value={formData.initialInvestment} // Value from App.jsx
                            onChange={handleInputChange} // Handler from App.jsx
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
                        <input
                            type="number"
                            id="annual-investment"
                            name="annualInvestment"
                            value={formData.annualInvestment} // Value from App.jsx
                            onChange={handleInputChange} // Handler from App.jsx
                            required
                        />
                    </div>
                </div>
                <div className="input-group">
                    <div>
                        <label htmlFor="expected-return">EXPECTED RETURN</label>
                        <input
                            type="number"
                            id="expected-return"
                            name="expectedReturn"
                            value={formData.expectedReturn} // Value from App.jsx
                            onChange={handleInputChange} // Handler from App.jsx
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="duration">DURATION</label>
                        <input
                            type="number"
                            id="duration"
                            name="duration"
                            value={formData.duration} // Value from App.jsx
                            onChange={handleInputChange} // Handler from App.jsx
                            required
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}