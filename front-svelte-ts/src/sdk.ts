import { GraphQLClient } from 'graphql-request';
import {getSdk} from "./generated/graphql";

const client = new GraphQLClient('http://localhost:81/graphql', {
    //credentials: 'include',
    //mode: 'cors',
});
const sdk = getSdk(client);
export { sdk }
