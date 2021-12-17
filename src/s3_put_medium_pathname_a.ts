import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import type { MetadataBearer } from '@aws-sdk/types'
import type { medium_pathname_a_opts_T } from '@ctx-core/instagram_cache'
const Bucket = process.env.S3_BUCKET as string
export async function s3_put_medium_pathname_a(
	medium_pathname_a:string[],
	opts:medium_pathname_a_opts_T = {}
):Promise<MetadataBearer> {
	const {
		region = 'us-east-1',
		MEDIUM_PATHNAME_A_KEY = process.env.MEDIUM_PATHNAME_A_KEY as string,
	} = opts
	const s3 = new S3Client({ region })
	return await s3.send(new PutObjectCommand({
		Bucket,
		Key: MEDIUM_PATHNAME_A_KEY,
		Body: JSON.stringify(medium_pathname_a)
	}))
}
export {
	s3_put_medium_pathname_a as put__arr__pathname__medium
}
