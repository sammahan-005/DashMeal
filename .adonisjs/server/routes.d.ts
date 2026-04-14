import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
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
    'restaurants.pending': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.validate': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.ready': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.delivered': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.history': { paramsTuple?: []; params?: {} }
    'restaurants.create': { paramsTuple?: []; params?: {} }
    'restaurants.store': { paramsTuple?: []; params?: {} }
    'restaurants.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.index': { paramsTuple?: []; params?: {} }
    'commandes.store': { paramsTuple?: []; params?: {} }
    'commandes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'home': { paramsTuple?: []; params?: {} }
    'welcome': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'menus.create': { paramsTuple?: []; params?: {} }
    'menus.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'menus.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.pending': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.history': { paramsTuple?: []; params?: {} }
    'restaurants.create': { paramsTuple?: []; params?: {} }
    'restaurants.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.index': { paramsTuple?: []; params?: {} }
    'commandes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'home': { paramsTuple?: []; params?: {} }
    'welcome': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'dashboard.index': { paramsTuple?: []; params?: {} }
    'menus.create': { paramsTuple?: []; params?: {} }
    'menus.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'menus.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.pending': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.history': { paramsTuple?: []; params?: {} }
    'restaurants.create': { paramsTuple?: []; params?: {} }
    'restaurants.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'restaurants.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.index': { paramsTuple?: []; params?: {} }
    'commandes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'menus.store': { paramsTuple?: []; params?: {} }
    'commandes.validate': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.ready': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.delivered': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
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