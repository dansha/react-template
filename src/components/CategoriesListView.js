import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';
import EditCategory from './CategoryForm';
import CategoryView from './CategoryView';
import TopNav from './TopNavView'

class CategoriesListView extends Component {

    render() {
        const { onAddClicked, onDeleteClicked, onEditClicked, onCloseFormClicked, onSaved, categoriesList, showForm,formInitalValues} = this.props;
        let rows = [];
        if (categoriesList) {
            categoriesList.forEach((category) => {
                rows.push(<CategoryView category={category} key={category.id} onClicked={this.props.onRowClicked} />);
            });
        }
        return (
            <div>
                <TopNav onAdd={onAddClicked} onDelete={onDeleteClicked} onEdit={onEditClicked} />
                <div className="container" >
                    <div className="row">
                        <table className="table" id="categoriesTable">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <Modal show={showForm} onHide={onCloseFormClicked} >
                            <Modal.Header closeButton>
                                <Modal.Title>Category</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <EditCategory onSubmit={onSaved} onClose={onCloseFormClicked} initialValues={formInitalValues} />
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    };
}

CategoriesListView.propTypes={
    onAddClicked: PropTypes.func.isRequired,
    onDeleteClicked:PropTypes.func.isRequired,
    onEditClicked:PropTypes.func.isRequired,
    onCloseFormClicked: PropTypes.func.isRequired,
}

export default CategoriesListView;