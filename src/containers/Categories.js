import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CategoriesView from '../components/CategoriesListView';
import * as actions from '../actions';

const getSelectedCategory = state => {
    const selected = state.categories.list.filter((category => category.selected));
    return selected[0];
}

const mapStateToProps = (state) => {
    console.log(state)
    let initalValues = {};

    if (state.categories.showAdd)
        initalValues = {};
    if (state.categories.showEdit) {
        const currentCategoy = getSelectedCategory(state);
        if (currentCategoy) {
            initalValues = {
                CategoryName: currentCategoy.name,
                CategoryId: currentCategoy.id
            };
        }
    }
    return ({
        showForm: state.categories.showAdd || state.categories.showEdit,
        categoriesList: state.categories.list,
        formInitalValues: initalValues
    });
}



const mapDispatchToProps = (dispatch) => {
    return {
        onAddClicked: () => {
            dispatch(actions.addCategory());
        },
        onDeleteClicked: () => {
            dispatch(actions.deleteCurrentCategory());
        },
        onEditClicked: () => {
            dispatch(actions.editCategory());
        },

        onCloseFormClicked: () => {
            dispatch(actions.closeCategoryForm());
        },
        onShowAdd: () => {

        },
        onSaved: (values) => {
            dispatch(actions.saveCategory(values));
            //todo repalce with thunk (async)
            dispatch(actions.closeCategoryForm())
        },
        onRowClicked: (id) => {
            dispatch(actions.setCategory(id));
        },
        onDeleteCategory: () => {
            console.log('a')
            dispatch(actions.deleteCategory());
        }

    }
}

const Categories = connect(mapStateToProps, mapDispatchToProps)(CategoriesView);
Categories.contextTypes = {
    store: React.PropTypes.object.isRequired
}

export default Categories;