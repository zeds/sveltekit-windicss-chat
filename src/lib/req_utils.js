import {browser} from '$app/env'
import { writable, get } from "svelte/store";

/**
browserGet
browserSet
**/


/**
 *
 *
 * @export
 * @param {*} key
 * @return {*} 
 */
export function browserGet(key) {
  if(browser) {
    const item = localStorage.getItem(key)
    if(item) {
      // return JSON.parse(item)
      return item
    }
  }
  return '';
}

/**
 *
 *
 * @export
 * @param {*} key
 * @param {*} value
 */
export function browserSet(key, value) {
  if(browser) {
    localStorage.setItem(key, value)
  }
}
