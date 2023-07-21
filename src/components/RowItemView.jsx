import PropTypes from "prop-types";

export const RowItemView = ({
  id,
  product,
  price,
  quantity,
  handlerDeleteItem,
}) => {
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handlerDeleteItem(id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
RowItemView.propTypes = {
  id: PropTypes.number.isRequired,
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  handlerDeleteItem: PropTypes.func.isRequired,
};
