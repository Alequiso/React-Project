import PropTypes from 'prop-types'

function Item({ marca, lancamento}) {
    return(
        <>
        <li>
            {marca} - {lancamento}</li>
        </>
    )
}
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento:PropTypes.number
}

Item.defaultProps = {
    marca: 'Ta faltando zé',
    lancamento: 0,
}
export default Item