import React, { Component,PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

class CategoryForm extends Component {
    
    render() {
        const { handleSubmit,onClose } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="CategoryName">Category Name</label>
                    <Field name="CategoryName" component="input" type="text" />
                </div>
                
                <button type="submit">Submit</button>
                <button  type="button" onClick={onClose} >close</button>
            </form>
        );
    }
}

CategoryForm.propTpes = {
    handleSubmit  : PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

CategoryForm = reduxForm({
    form: 'CategoryForm' 
})(CategoryForm);

export default CategoryForm;
