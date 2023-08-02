import { Icon } from '@iconify/react'
import React from 'react'

export default function Account() {
    return (
        <div>
            <a href="#">
                <i><Icon icon="fa:user-o" /></i>
                <span> My Account</span>
            </a>
        </div>
    )
}
