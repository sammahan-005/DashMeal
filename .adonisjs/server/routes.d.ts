import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'menus.index': { paramsTuple?: []; params?: {} }
    'menus.create': { paramsTuple?: []; params?: {} }
    'menus.store': { paramsTuple?: []; params?: {} }
    'menus.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'menus.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'menus.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'menus.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.index': { paramsTuple?: []; params?: {} }
    'commandes.create': { paramsTuple?: []; params?: {} }
    'commandes.store': { paramsTuple?: []; params?: {} }
    'commandes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'menus.index': { paramsTuple?: []; params?: {} }
    'menus.create': { paramsTuple?: []; params?: {} }
    'menus.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'menus.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.index': { paramsTuple?: []; params?: {} }
    'commandes.create': { paramsTuple?: []; params?: {} }
    'commandes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'menus.index': { paramsTuple?: []; params?: {} }
    'menus.create': { paramsTuple?: []; params?: {} }
    'menus.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'menus.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.index': { paramsTuple?: []; params?: {} }
    'commandes.create': { paramsTuple?: []; params?: {} }
    'commandes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'menus.store': { paramsTuple?: []; params?: {} }
    'commandes.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'menus.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'menus.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'menus.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commandes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}