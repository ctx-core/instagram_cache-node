import { import_meta_env_ } from '@ctx-core/env'
import { medium_pathname_a__new } from '@ctx-core/instagram_cache'
import { sleep } from '@ctx-core/sleep'
import webdriver from 'selenium-webdriver'
/**
 * @param opts{import('./index.d.ts').medium_href_a__opts_T}
 * @returns {Promise<string[]>}
 */
export async function medium_href_a_(opts = {}) {
	const {
		INSTAGRAM_NAME = import_meta_env_().INSTAGRAM_NAME,
		reload,
	} = opts
	const current_medium_pathname_a = reload ? [] : await medium_pathname_a__new()
	const current_media_set = new Set(current_medium_pathname_a)
	const chrome_Capabilities = webdriver.Capabilities.chrome()
	chrome_Capabilities.set('chromeOptions', {
		args: [
			'--headless'
		]
	})
	const driver = new webdriver.Builder().forBrowser('chrome').withCapabilities(chrome_Capabilities).build()
	await driver.get(`https://www.instagram.com/${INSTAGRAM_NAME}/`)
	let medium_href_a = current_medium_pathname_a
	let iteration = {
		href_a_length: 0,
		iteration_count: 0
	}
	do {
		await driver.executeScript('window.scrollBy(0, window.innerHeight)')
		const href_a = JSON.parse(await driver.executeScript(`
function compact(array) {
	if (!array) return array
	for (let i = array.length; i >= 0; --i) {
		if (array[i] == null) {
			array.splice(i, 1)
		}
	}
	return array
}
return JSON.stringify(
	compact(
		Array.from(
			document.querySelectorAll('[href*="/p/"]')
		).map(a => a.href && new URL(a.href).pathname)
	)
)
		`.trim()))
		medium_href_a = [
			...new Set([
				...href_a,
				...medium_href_a
			])
		]
		if (iteration.href_a_length != medium_href_a.length) {
			iteration = {
				href_a_length: medium_href_a.length,
				iteration_count: 0
			}
		} else {
			iteration.iteration_count += 1
		}
		if (current_set_any_(href_a)) break
		await sleep(500)
		console.debug({
			'medium_href_a.length': medium_href_a.length
		})
	} while (iteration.iteration_count < 10)
	await driver.quit()
	return medium_href_a
	function current_set_any_(href_a) {
		for (let i = 0; i < href_a.length; i++) {
			if (current_media_set.has(href_a[i])) return true
		}
		return false
	}
}
export { medium_href_a_ as _arr__href__medium }
