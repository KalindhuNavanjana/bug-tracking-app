import React from "react";
import PropTypes from "prop-types";

const HistoryItem = ({item}) => {
    return (
        <div className='history-item'>
            <div className='history-item-header'>
                <span className='history-item-date'>{Date(item.timestamp)}</span>
                <span className='history-item-user'>By: Me</span>
            </div>
            <div className='history-item-status'>
                <span className='history-item-status-value'>{item.state}</span>
            </div>
        </div>
    );
};

HistoryItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default HistoryItem;
