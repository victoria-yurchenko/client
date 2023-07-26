import React from 'react';
import { Icon } from '@iconify/react';

export default function () {
    return (
        <div className="item search right" tabIndex="0">
            <div className="search-group">
                <input type="text" />
                <i className="material-icons search-icon">
                    <Icon icon="uil:search" />
                </i>
            </div>
        </div>
    )
}
