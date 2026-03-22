/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'
import AutoSwagger from "adonis-autoswagger";
import swagger from "#config/swagger";



const Menus = ()=> import('#controllers/menus_controller')
const Commandes = ()=> import('#controllers/commandes_controller')
const Dashboard = ()=> import('#controllers/dashboard_controller')
const Restaurant = ()=> import('#controllers/restaurants_controller')

router.on('/').render('pages/home').as('home')

router.on('/welcome').render('pages/welcome').as('welcome')


router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy'])
    
  })
  .use(middleware.auth())

router
  .group(() => {
    router.get('dashboard', [Dashboard, 'index'])
    router.resource('menus', Menus).use('*' , [middleware.restaurantOwner()])
    router
      .group(() => {
        router.resource('restaurants', Restaurant).except(['index'])
        router.resource('commandes', Commandes).except(['create', 'edit', 'show', 'update'])
      })  
  })
  .use(middleware.auth())


// returns swagger in YAML
router.get("/swagger", async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger);
});

// Renders Swagger-UI and passes YAML-output of /swagger
router.get("/docs", async () => {
  return AutoSwagger.default.ui("/swagger", swagger);
  // return AutoSwagger.default.scalar("/swagger"); to use Scalar instead. If you want, you can pass proxy url as second argument here.
  // return AutoSwagger.default.rapidoc("/swagger", "view"); to use RapiDoc instead (pass "view" default, or "read" to change the render-style)
});  