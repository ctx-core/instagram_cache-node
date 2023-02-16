import { medium_href_a_ } from '../medium_href_a_/index.js'
import { s3__medium_pathname_a__put } from '../s3__medium_pathname_a__put/index.js'
/**
 * @param options{import('../medium_href_a_').medium_href_a__opts_T}
 * @returns {Promise<void>}
 */
export async function webdriver__scrape__cache__put(options = {}) {
	const medium_pathname_a = await medium_href_a_(options)
	console.info('medium_pathname_a.length', medium_pathname_a.length)
	await s3__medium_pathname_a__put(medium_pathname_a)
}
export {
	webdriver__scrape__cache__put as put_webdriver_scrape_cache,
}
