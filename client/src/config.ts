// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'non88xmk00'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'dev-ybowrvls.us.auth0.com', // Auth0 domain
  clientId: '8XgBioAzbDkZmhHdITCOtJlDuLzx6vF3', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
