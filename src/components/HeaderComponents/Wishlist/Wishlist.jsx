import { Icon } from '@iconify/react'
import React from 'react'

export default function Wishlist() {
    return (
        <div>
            <a href="#">
                <i><Icon icon="fa:heart-o" /></i>
                <span>Your Wishlist</span>
                <div class="qty">2</div>
            </a>
        </div>
    )
}
