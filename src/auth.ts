import { OAuth } from '@raycast/api'
import { OAuthService } from '@raycast/utils'
import { CLIENT_ID, CLERK_DOMAIN, PROVIDER_NAME } from './config'

const client = new OAuth.PKCEClient({
  redirectMethod: OAuth.RedirectMethod.Web,
  providerName: PROVIDER_NAME,
  providerIcon: '../assets/extension_icon.png',
  providerId: 'clerk',
  description: 'Connect with your account to continue',
})

// Register https://raycast.com/redirect?packageName=Extension as an allowed redirect URI
// in your Clerk OAuth Application settings (Clerk accepts query-param redirect URIs).
export const clerk = new OAuthService({
  client,
  clientId: CLIENT_ID,
  scope: 'profile email offline_access',
  authorizeUrl: `${CLERK_DOMAIN}/oauth/authorize`,
  tokenUrl: `${CLERK_DOMAIN}/oauth/token`,
  bodyEncoding: 'url-encoded',
})
