import * as React from "react";

class AmountInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.amountInput = React.createRef();
        this.focusAmountInput = this.focusAmountInput.bind(this);
    }

    handleChange(event) {
        this.props.onAmountChange(event.target.value);
    }

    focusAmountInput() {
        this.amountInput.current.focus();
    }

    render() {
        const hasErrorClass = this.props.displayError ? 'has-error' : '';
        return (
            <div className="row">
                <div className={`form-group col-md-3 ${hasErrorClass}`}>
                    <label htmlFor="amount-input">Amount</label>
                    <div className="input-group">
                        <input type="text" id="amount-input" className="form-control" value={this.props.amount}
                               onChange={this.handleChange} placeholder="e.g. 1.23" ref={this.amountInput} />
                        <span className="input-group-addon">PLN</span>
                    </div>
                    {this.props.displayError ? <span className='help-block'>Amount field is required</span> : ''}
                </div>
            </div>
        )
    }
}

export default AmountInput;