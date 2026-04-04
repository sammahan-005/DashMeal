import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'welcome': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'menus.create': { paramsTuple?: []; params?: {} }
    'menus.store': { paramsTuple?: []; params?: {} }
    'menus.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'menus.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'menus.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'menus.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.create': { paramsTuple?: []; params?: {} }
    'restaurants.store': { paramsTuple?: []; params?: {} }
    'restaurants.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.index': { paramsTuple?: []; params?: {} }
    'commandes.store': { paramsTuple?: []; params?: {} }
    'commandes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'welcome': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'menus.create': { paramsTuple?: []; params?: {} }
    'menus.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'menus.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.create': { paramsTuple?: []; params?: {} }
    'restaurants.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.index': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'welcome': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'menus.create': { paramsTuple?: []; params?: {} }
    'menus.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'menus.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.create': { paramsTuple?: []; params?: {} }
    'restaurants.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.index': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'menus.store': { paramsTuple?: []; params?: {} }
    'restaurants.store': { paramsTuple?: []; params?: {} }
    'commandes.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'menus.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'menus.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'menus.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}