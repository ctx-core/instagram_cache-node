import type { AttributeValue } from '@aws-sdk/client-dynamodb'
export declare function put_all_media():Promise<void[]>;
export declare function _Item(pathname:string):Promise<dynamodb_Item_I>;
export interface dynamodb_Item_I {
	[key:string]:AttributeValue;
}
