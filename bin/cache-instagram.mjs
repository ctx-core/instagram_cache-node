#!/usr/bin/env node
import { param_r_ } from '@ctx-core/cli-args'
import { put_webdriver_scrape_cache } from '../dist/index.js'
const { reload, help } = param_r_({
	reload: '-r, --reload',
	help: '-h, --help',
})
if (help) {
	console.info(`
Usage: cache-instagram [-r, --reload]

Options:

-h, --help		This help message
-r, --reload  Reload full cache
	`)
}
put_webdriver_scrape_cache(options)
