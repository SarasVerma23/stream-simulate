import PropTypes from "prop-types";

const Log = ({ show, message, onClose }) => {
  if (!show) return null; // Don't render if 'show' is false

  return (
    <div className="log-overlay" onClick={onClose}>
      <div className="log-content" onClick={(e) => e.stopPropagation()}>
        <div className="logsHeader">
            <span>Logs</span>
            <button className="btn-close close-btn-custom" onClick={onClose}></button>
        </div>
        <div className="logs-msgs">
            <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

Log.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Log;
