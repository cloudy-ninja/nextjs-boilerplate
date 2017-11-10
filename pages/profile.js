import Link from 'next/link'
import { Provider } from 'react-redux'
import { Profile } from '~/profile'
import { getStore } from '~/redux-config'

export default () =>
  <Provider store={getStore()}>
    <div>
      <h1>Hello Profile!</h1>
      <Profile />
      <Link href="/"><a>Home</a></Link>
    </div>
  </Provider>
