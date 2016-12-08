import React from 'react';

const Locations = () => (

    <div className="container">
        <div className="row">
            <table className="table " id="locationTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Long</th>
                        <th>Lat</th>
                        <th>Category</th>
                        <th>Map</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Habima</td>
                        <td>Kikar HaBima 1-3</td>
                        <td>32.072624</td>
                        <td>34.779286</td>
                        <td>Culture</td>
                        <td><button className="btn btn-primary">map</button></td>
                    </tr>
                    <tr className="warning">
                        <th scope="row">2</th>
                        <td>Tel aviv museum</td>
                        <td>Sderot Shauel Hamelech 27</td>
                        <td>32.077674</td>
                        <td>34.786770</td>
                        <td>Culture</td>
                        <td><button className="btn btn-primary">map</button></td>
                    </tr>
                    <tr className>
                        <th scope="row">3</th>
                        <td>Tel aviv Municipality</td>
                        <td>Eben gavirol 69</td>
                        <td>32.081604</td>
                        <td>34.782264</td>
                        <td>Municipality</td>
                        <td><button className="btn btn-primary">map</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>




);

export default Locations;