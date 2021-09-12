import React from 'react'
import { Field, reduxForm } from 'redux-form'

class Header extends React.Component {
    onSubmit = (formValues) => {
        console.log(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="text" component="input" type="text" />
                <button>Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'search'
})(Header)