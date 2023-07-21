import PropTypes from "prop-types";

export const CompanyView = ({ title, company }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item active">{company.name}</li>
        <li className="list-group-item">{company.fiscalNumber}</li>
      </ul>
    </>
  );
};
CompanyView.propTypes = {
  company: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};
