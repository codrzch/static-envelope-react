import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./index.css";

function Stamp() {
  /* Image Source: http://hddfhm.com/images/clipart-postage-stamp-4.png */
  return <div className="stamp">
    <img src="http://hddfhm.com/images/clipart-postage-stamp-4.png" alt="stamp" />
  </div>;
}

function AddressLabel({ mailingLabel, className }) {
  let { name, addressLine1, addressLine2 } = mailingLabel;
  return (
    <div className={`mailing-label ${className}`}>
      <div className="name">{name}</div>
      <div className="addressLine1">{addressLine1}</div>
      <div className="addressLine2">{addressLine2}</div>
    </div>
  );
}
AddressLabel.propTypes = {
  mailingLabel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired
  }).isRequired
};

function Envelope({ toPerson, fromPerson }) {
    return (
        <div className="envelope">
            <AddressLabel className="to-label" mailingLabel={fromPerson} />
            <AddressLabel className="from-label" mailingLabel={toPerson} />
            <Stamp />
        </div>
    );
}
Envelope.propTypes = {
    toPerson: PropTypes.object,
    fromPerson: PropTypes.object
};

let returnLabel = {
    name: "Recipient Reciperson",
    addressLine1: "42 Wallaby Way",
    addressLine2: "Sydney, NSW"
};

let recipientLabel = {
    name: "Sendy Senderson",
    addressLine1: "123 Isentit St",
    addressLine2: "Sender City, CA"
};

ReactDOM.render(
    <Envelope toPerson={recipientLabel} fromPerson={returnLabel} />,
    document.getElementById('root')
);
