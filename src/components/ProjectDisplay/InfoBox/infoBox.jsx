import React from 'react';

export default function InfoBox({ title, value }) {
    console.log(title);
	return (
		<div className="info-box">
			<button type="button" class="btn btn-primary">
				{title} <span class="badge badge-light">{value}</span>
			</button>
		</div>
	);
}
