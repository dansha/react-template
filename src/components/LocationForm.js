import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

let LocationForm = (props) => {
    const { handleSubmit, onClose, categories } = props;
    let cats = [];
    categories.map(cat => cats.push(<option value={cat.name} key={cat.id}>{cat.name}</option>));
    return (
        <form onSubmit={handleSubmit}>
            <Field name="name" type="text" component={renderField} label="Name" />
            <Field name="address" type="text" component={renderField} label="Address" />
            <Field name="lat" type="text" component={renderField} label="Lat" />
            <Field name="lon" type="text" component={renderField} label="Lon" />
            <div>
                <label>Category</label>
                <div>
                    <Field name="category" component="select">
                        {cats}
                    </Field>
                </div>
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose} >close</button>
        </form>
    );
}



const validate = values => {
    const errors = {};
    if (!values.name)
        errors.name = 'Requierd';
    if (!values.address)
        errors.address = 'Requierd';
    if (!values.lat)
        errors.lat = 'Requierd';
    if (!values.lon)
        errors.lon = 'Requierd';
    

    return errors;
}

LocationForm.propTpes = {
    handleSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
    categories: PropTypes.array.isRequired
}

LocationForm = reduxForm({
    form: 'LocationForm',
    validate
})(LocationForm);

export default LocationForm;
