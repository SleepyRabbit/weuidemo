/**
 * Created by houenxing on 17/8/14.
 */
import list from '@/components/list'
import detail from '@/components/detail'

export default [
  {
    path: '/',
    redirect: {path: '/list'}
  },
  {
    path: '/list',
    name: 'list',
    component: list,
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail,
  },
]
