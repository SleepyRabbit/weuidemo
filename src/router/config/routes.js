/**
 * Created by houenxing on 17/8/14.
 */
import list from '../../components/list'
import detail from '../../components/detail'
import about from '../../components/about'

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
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '*',
    redirect: {path: '/list'},
  }
]
