export const func = {
	/**
	 * @description Set Cookie
	 * @example Global.functions.setCookie('cookie-name');
	 * @param name -> string
	 * @param value -> string|array
	 * @param time -> expiration date
	 * @param path -> path
	 */
	setCookie: function(name, value, time = '01 Jan 1970 00:00:00 UTC', path = '/') {
		const ua = window.navigator.userAgent;

		// IE 10 and lower versions
		// const msie = ua.indexOf('MSIE');

		// IE 11
		const trident = ua.indexOf('Trident/');

		if (!(trident > 0)) {
			time = '';
		}

		document.cookie = name + '=' + JSON.stringify(value) + '; expires=' + time + '; path=' + path + ';';
	},

	/**
	 * @description Get Cookie
	 * @example Global.functions.readCookie('cookie-name');
	 * @param name -> string
	 */
	readCookie: function(name) {
		const nameEQ = name + '=';
		const ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) === 0) {
				return JSON.parse(
					c.substring(nameEQ.length, c.length)
				);
			}
		}
		return null;
	},

	/**
	 * @description Delete Cookie
	 * @example Global.functions.deleteCookie('cookie-name');
	 * @param name -> string
	 */
	deleteCookie: function(name) {
		document.cookie = name + '=; Path=/; Expires=Thu, 20 Jun 1989 00:00:01 GMT;';
	},
}