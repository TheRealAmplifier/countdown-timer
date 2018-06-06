	// time in milliseconds
	const second = 1000;
	const minute = 1000 * 60;
	const	hour = 1000 * ( 60 * 60 );
	const day = 1000 * ( 60 * 60 ) * 24;

	// set end date
	let endDate = new Date('Jun 24, 2018 00:00:00').getTime();

	// interval (each second) and update screen;
	setInterval( () => {
		calculateTime();
	}, 1000 );

	// calculate function
	const calculateTime = () => {
		let currentTime = new Date().getTime();
		let remaining = endDate - currentTime;

		const dayContainer = document.querySelector('.days');
		const hourContainer = document.querySelector('.hours');
		const minuteContainer = document.querySelector('.minutes');
		const secondContainer = document.querySelector('.seconds');

		dayContainer.innerText = Math.floor( remaining / day );
		hourContainer.innerText = Math.floor( ( remaining % day ) / hour );
		minuteContainer.innerText = Math.floor( ( remaining % hour ) / minute );
		secondContainer.innerText = Math.floor( ( remaining % minute ) / second );
	}