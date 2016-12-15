import React from 'react';

const CategoryView= (props) =>{
    const {category, onClicked} = props;
    return (
    <tr onClick={ () => onClicked(category.id)  } className={category.selected?"warning":""}>
        <th scope="row">{category.id}</th>
        <td>{category.name}</td>
    </tr>
    );
};

export default CategoryView;