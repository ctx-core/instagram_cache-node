import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { import_meta_env_ } from 'ctx-core/env'
const Bucket = import_meta_env_().S3_BUCKET
export async function s3__medium_pathname_a__put(medium_pathname_a, opts = {}) {
	const {
		region = 'us-east-1',
		MEDIUM_PATHNAME_A_KEY = import_meta_env_().MEDIUM_PATHNAME_A_KEY,
	} = opts
	const s3 = new S3Client({
		region
	})
	return await s3.send(new PutObjectCommand({
		Bucket,
		Key: MEDIUM_PATHNAME_A_KEY,
		Body: JSON.stringify(medium_pathname_a)
	}))
}
export {
	s3__medium_pathname_a__put as s3_put_medium_pathname_a,
	s3__medium_pathname_a__put as put__arr__pathname__medium,
}
