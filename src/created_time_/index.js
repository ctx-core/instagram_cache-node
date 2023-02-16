import { JSDOM } from 'jsdom'
/**
 * @param medium{import('@ctx-core/instagram').Medium}
 * @returns {number}
 */
export function created_time_(medium) {
	const dom = new JSDOM(medium.html)
	const time = dom.window.document.querySelector('time')
	const datetime = time.getAttribute('datetime')
	return new Date(datetime).getTime()
}
