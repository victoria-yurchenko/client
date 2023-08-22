import { Icon } from '@iconify/react';
import React from 'react';

export default function HeaderIcon({ icon, title, qti }) {
    return (
        <div>
            <a href="#" style={{ textDecoration: 'none' }}>
                <i><Icon icon={icon} /></i>
                <span style={{marginLeft: '15px'}}>{title}</span>
                {
                    qti != 0
                        ? <div className="qty">{qti}</div>
                        : <div style={{ display: 'none' }}></div>
                }
            </a>
        </div>
    )
}
