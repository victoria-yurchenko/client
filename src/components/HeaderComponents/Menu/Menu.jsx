import React from 'react';
import { Icon } from '@iconify/react';

export default function Menu() {
    return (
        <div class="menu-toggle">
            <a href="#">
                <i><Icon icon="fa:bars" /></i>
                <span>Menu</span>
            </a>
        </div>
    )
}
