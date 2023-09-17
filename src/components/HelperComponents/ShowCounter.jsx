import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';

export default function ShowCounter({ targetDate }) {

    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return (
            <ul className="hot-deal-countdown">
                <li>
                    <div>
                        <h3 id='days'>0</h3>
                        <span>Days</span>
                    </div>
                </li>
                <li>
                    <div>
                        <h3 id='hours'>0</h3>
                        <span>Hours</span>
                    </div>
                </li>
                <li>
                    <div>
                        <h3 id='mins'>0</h3>
                        <span>Mins</span>
                    </div>
                </li>
                <li>
                    <div>
                        <h3 id='secs'>0</h3>
                        <span>Secs</span>
                    </div>
                </li>
            </ul>
        )
    }
    else {
        return (
            <ul className="hot-deal-countdown">
                <li>
                    <div>
                        <h3 id='days'>{days}</h3>
                        <span>Days</span>
                    </div>
                </li>
                <li>
                    <div>
                        <h3 id='hours'>{hours}</h3>
                        <span>Hours</span>
                    </div>
                </li>
                <li>
                    <div>
                        <h3 id='mins'>{minutes}</h3>
                        <span>Mins</span>
                    </div>
                </li>
                <li>
                    <div>
                        <h3 id='secs'>{seconds}</h3>
                        <span>Secs</span>
                    </div>
                </li>
            </ul>
        )
    }
}