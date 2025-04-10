import { useEffect } from 'react';

const PING_INTERVAL = 5 * 60 * 1000; // 5 minutes

function useKeepAlive() {
	useEffect(() => {
		const ping = () => {
			fetch(window.location.origin + '/')
				.then((res) => console.log('Keep-alive ping sent'))
				.catch((err) => console.error('Keep-alive ping failed', err));
		};

		ping(); // Initial ping
		const interval = setInterval(ping, PING_INTERVAL);

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);
}

export default useKeepAlive;
