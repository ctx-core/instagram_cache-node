import { JSDOM } from 'jsdom'
import type { Medium } from '@ctx-core/instagram'
export function created_time_(medium:Medium):number {
	const dom = new JSDOM(medium.html)
	const time = dom.window.document.querySelector('time')!
	const datetime = time.getAttribute('datetime')!
	return new Date(datetime).getTime()
}
