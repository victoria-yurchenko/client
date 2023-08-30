import { Icon } from '@iconify/react';
import React from 'react';
import './../../App.css'

export default function NewsLetter() {
  return (
    <div id="newsletter" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="newsletter">
							<p>Sign Up for the <strong>NEWSLETTER</strong></p>
							<form>
								<input className="input" type="email" placeholder="Enter Your Email"/>
								<button className="newsletter-btn"><i><Icon icon="fa:envelope"/></i> Subscribe</button>
							</form>
							<ul className="newsletter-follow">
								<li>
									<a className='nav-link' href="#"><i><Icon icon="fa:facebook"/></i></a>
								</li>
								<li>
									<a className='nav-link' href="#"><i><Icon icon="fa:twitter"/></i></a>
								</li>
								<li>
									<a className='nav-link' href="#"><i><Icon icon="fa:instagram"/></i></a>
								</li>
								<li>
									<a className='nav-link' href="#"><i><Icon icon="fa:pinterest"/></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}
