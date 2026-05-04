import { Detail } from '@raycast/api'
import { useFetch, usePromise } from '@raycast/utils'
import { clerk } from './auth'
import { CLERK_DOMAIN } from './config'

interface UserInfo {
  name?: string
  email?: string
}

export default function Hello() {
  const { data: token, isLoading: isAuthLoading } = usePromise(() => clerk.authorize(), [], {
    failureToastOptions: { title: 'Authentication failed' },
  })

  const { data: user, isLoading: isUserLoading } = useFetch<UserInfo>(`${CLERK_DOMAIN}/oauth/userinfo`, {
    headers: { Authorization: `Bearer ${token ?? ''}` },
    execute: !!token,
    failureToastOptions: { title: 'Could not fetch profile' },
  })

  const name = user?.name ?? user?.email ?? null

  return <Detail isLoading={isAuthLoading || isUserLoading} markdown={name ? `# Hello, ${name}!` : ''} />
}
