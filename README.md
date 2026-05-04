# raycast-clerk-demo

A minimal Raycast extension demonstrating Clerk OAuth 2.0 PKCE authentication.
Use this as a copy-paste template for any Clerk-authenticated Raycast extension.

## Setup

1. Create a Clerk OAuth Application in the [Clerk Dashboard](https://dashboard.clerk.com):
   - Navigate to Configure → OAuth Applications → Add Application
   - Add `https://raycast.com/redirect?packageName=Extension` as an allowed redirect URI
   - Copy the **Client ID**

2. Edit `src/config.ts`:
   ```ts
   export const CLIENT_ID = 'your_client_id_here'               // ← paste Client ID
   export const CLERK_DOMAIN = 'https://your-app.clerk.accounts.dev'  // ← your FAPI URL
   export const PROVIDER_NAME = 'Acme App'                       // ← name shown in OAuth UI
   ```

3. Install and run:
   ```bash
   npm install
   npm run dev
   ```

4. In Raycast: **Import Extension** → select this directory → run **Hello**

## How it works

- `src/config.ts` — the two values you replace
- `src/auth.ts` — `OAuthService` instance wrapping `OAuth.PKCEClient` for Clerk
- `src/hello.tsx` — calls `clerk.authorize()`, fetches `/oauth/userinfo`, renders greeting

## Future

This structure mirrors how built-in `@raycast/utils` providers (GitHub, Linear, Slack) are implemented.
The goal is a `OAuthService.clerk()` static method PR to `@raycast/utils`.
