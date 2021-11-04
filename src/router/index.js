import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(/* webpackChunkName: "Register" */ '../views/Register.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/setup',
    name: 'Profile Setup',
    component: () => import('../views/ProfileSetup.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/setup-shelter',
    name: 'Shelter Setup',
    component: () => import('../views/ShelterSetup.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ "../views/Profile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/shelter-profile/:id",
    name: "ShelterProfile",
    component: () => import("../views/ShelterProfile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/discover",
    name: "Discover",
    component: () => import("../views/Discover.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/matches",
    name: "Match list",
    component: () => import("../views/MatchList.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/animals",
    name: "Animal list",
    component: () => import("../views/AnimalList.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/pet/:id",
    name: "pet",
    component: () => import("../views/Pet.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-animal",
    name: "Add Animal",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Addanimal.vue"),
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath },
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some((record) => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next()
        } else {
          next({ name: 'Profile' })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    } else {
      next({ name: 'Profile' })
    }
  } else {
    next()
  }
})

export default router
