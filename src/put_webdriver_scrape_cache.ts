import { medium_href_a_, medium_href_a__opts_T } from './medium_href_a_.js'
import { s3_put_medium_pathname_a } from './s3_put_medium_pathname_a.js'
export async function put_webdriver_scrape_cache(options:medium_href_a__opts_T = {}):Promise<void> {
	const medium_pathname_a = await medium_href_a_(options)
	console.info('medium_pathname_a.length', medium_pathname_a.length)
	await s3_put_medium_pathname_a(medium_pathname_a)
}
