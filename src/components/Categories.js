import React from 'react';

const Categories = () => (

    <div className="container" >
        <div className="row">
            <table className="table" id="categoriesTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Culture</td>
                    </tr>
                    <tr className="warning">
                        <th scope="row">2</th>
                        <td>Municipality</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>



);

export default Categories;