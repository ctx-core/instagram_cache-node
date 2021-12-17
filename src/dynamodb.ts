import { AttributeValue, DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'
import { medium_ } from '@ctx-core/instagram'
import { medium_pathname_a_ } from '@ctx-core/instagram_cache'
import { created_time_ } from './created_time_.js'
const dynamoDB = new DynamoDBClient({})
const TableName = 'instagram_media.js'
export async function put_all_media():Promise<void[]> {
	const current_medium_pathname_a = await medium_pathname_a_()
	const promise_a = [] as Promise<void>[]
	for (let i = 0; i < current_medium_pathname_a.length; i++) {
		const pathname = current_medium_pathname_a[i]
		const Item = await _Item(pathname)
		promise_a.push(put(pathname, Item))
	}
	return await Promise.all(promise_a)
	async function put(_pathname:string, Item:dynamodb_Item_I|undefined):Promise<void> {
		const putItemCommand = new PutItemCommand({
			TableName,
			Item,
			ConditionExpression: 'attribute_not_exists(pathname)',
		})
		try {
			await dynamoDB.send(putItemCommand)
			console.debug('success!', Item)
		} catch (err:any) {
			if (err.code != 'ConditionalCheckFailedException') {
				throw err
			}
		}
	}
}
export async function _Item(pathname:string):Promise<dynamodb_Item_I> {
	const medium = await medium_(pathname)
	const created_time:number = created_time_(medium)
	const info:Record<string, any> = {}
	copy('title')
	copy('thumbnail_url')
	copy('thumbnail_width')
	copy('thumbnail_height')
	return {
		pathname: {
			S: pathname
		},
		created_time: {
			N: created_time.toString()
		},
		info: {
			M: info
		}
	}
	function copy(key:string) {
		if (medium[key]) info[key] = medium[key]
	}
}
export interface dynamodb_Item_I {
	[key:string]:AttributeValue
}
