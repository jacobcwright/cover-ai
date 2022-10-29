// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CoverLetterRequests, Users } = initSchema(schema);

export {
  CoverLetterRequests,
  Users
};