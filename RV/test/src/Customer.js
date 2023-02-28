import PropTypes from 'prop-types'
function Customer(props) {
    return (<h2>{props.cust.id}, {props.cust.name}, {props.cust.address}</h2>);
}

Customer.propTypes = {
    cust:PropTypes.shape({
        id:PropTypes.number.isRequired.isRequired,
        name:PropTypes.string,
        address:PropTypes.string,
    })
}

export default Customer;