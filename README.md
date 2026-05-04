# raycast-clerk-demo

A minimal Raycast extension demonstrating sign in with Clerk via OAuth 2.0 PKCE.
Use this as a copy-paste template for any Clerk-authenticated Raycast extension.

## Setup

1. Create a Clerk OAuth Application in the [Clerk Dashboard](https://dashboard.clerk.com):
   - Navigate to Configure → OAuth Applications → Add Application
   - Add `https://raycast.com/redirect?packageName=Extension` as an allowed redirect URI
   - Enable scopes: `profile`, `email`, `offline_access`
   - Copy the **Client ID**

2. Edit `src/config.ts`:
   ```ts
   export const CLIENT_ID = 'your_client_id_here'
   export const CLERK_DOMAIN = 'https://your-app.clerk.accounts.dev'
   export const PROVIDER_NAME = 'Your App'
   ```

3. Install and run:
   ```bash
   npm install
   npm run dev
   ```

4. In Raycast: **Import Extension** → select this directory → run **Acme App**

## How it works

- `src/config.ts` — the three values you replace (client ID, FAPI URL, app name)
- `src/auth.ts` — `OAuthService` wrapping `OAuth.PKCEClient` for Clerk's OAuth endpoints
- `src/app.tsx` — `usePromise` calls `clerk.authorize()`, `useFetch` hits `/oauth/userinfo`, renders greeting
