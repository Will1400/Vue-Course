import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './pages/TeamsFooter.vue';

import UsersList from './pages/UsersList.vue';
import UsersFooter from './pages/UsersFooter.vue';

import NotFound from './pages/NotFound.vue';

const router = createRouter({
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      name: 'users',
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log(to, from);
        next();
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  history: createWebHistory(),
  linkActiveClass: 'active',

  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

// eslint-disable-next-line no-unused-vars
router.beforeEach(function(to, from, next) {
  // if (to.meta.needsAuth) {
  //   next(confirm('Needs confirmation'));
  // } else {
  next();
  // }
});

export default router;
