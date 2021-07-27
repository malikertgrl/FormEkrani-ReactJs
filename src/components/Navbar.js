import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return(
        <h1>{props.title}</h1>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Default Props"
}
// aşağıda şekildeki gibi de tanımlanabilir.
// const Navbar =() => {
//     return(
//         <h1 style = {{color:"red", textAlign:"center"}} >Merhaba React</h1>
//     )
// }

export default Navbar;