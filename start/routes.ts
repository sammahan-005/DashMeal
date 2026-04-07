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
const Welcome = ()=> import('#controllers/welcomes_controller')

router.on('/').render('pages/home').as('home')

router.get('/welcome', [Welcome, 'index']).as('welcome').use(middleware.auth()).use(middleware.silentAuth())



router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())
  .use(middleware.silentAuth())

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy'])
    
  })
  .use(middleware.auth())

router
  .group(() => {
    router.get('dashboard', [Dashboard, 'index'])
    router.resource('menus', Menus).except(['index'])
    //.use('*' , [middleware.restaurantOwner()])
    router.get('restaurants/pending/:id', [Restaurant, 'pending']).as('restaurants.pending') 
    router.post('commandes/:id/validate', [Commandes, 'validate']).as('commandes.validate')
    router.get('commandes/history', [Commandes, 'history']).as('commandes.history')
    router.resource('restaurants', Restaurant).except(['index'])
    router.resource('commandes', Commandes).except(['create', 'edit', 'update'])
        
       
  })
  .use(middleware.auth())
  .use(middleware.silentAuth())


// returns swagger in YAML
router.get("/swagger", async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger);
});

// Renders Swagger-UI and passes YAML-output of /swagger
router.get("/docs", async () => {
  //return AutoSwagger.default.ui("/swagger", swagger);
  //return AutoSwagger.default.scalar("/swagger"); //to use Scalar instead. If you want, you can pass proxy url as second argument here.
  // return AutoSwagger.default.rapidoc("/swagger", "view"); to use RapiDoc instead (pass "view" default, or "read" to change the render-style)
});  