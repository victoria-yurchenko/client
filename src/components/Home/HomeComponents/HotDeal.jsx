import React from 'react';
import { useEffect } from 'react';
import ShowCounter from '../../HelperComponents/ShowCounter';
import { useState } from 'react';

export default function HotDeal() {

	const [deadline, setDeadline] = useState(null);

	useEffect(() => {
		fetch('http://localhost:5089/api/maestro/gethotdeals')
			.then(responce => responce.json().then(data => {
				setDeadline(new Date(Date.parse(data.finishesAt)));
			}))
			.catch(error => console.log(error));
	}, []);

	const handleShopNow = () => {
		window.location.replace(`http://localhost:3000/hotdeals`);
	};

	return (
		<>
			{
				deadline !== null
					?
					<div id="hot-deal" className="section" style={{ marginTop: '100px' }}>
						<div className="contaisner">
							<div className="row">
								<div className="col-md-12">
									<div className="hot-deal">
										<ShowCounter
											targetDate={deadline}
										/>
										<h2 className="text-uppercase">hot deal this week</h2>
										<p>New Collection Up to 50% OFF</p>
										<a className="primary-btn cta-btn" href="#" style={{textDecoration: 'none'}} onClick={handleShopNow}>Shop now</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					: <></>
			}
		</>
	)
}
