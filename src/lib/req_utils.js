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

 /**
 * @param {string} path
 */
 export async function strapi_get(path) {
  let url = `${import.meta.env.VITE_STRAPI_DOMAIN}/api/${path}`;
  console.log('url=',url);

  const res = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    })

  const res_json = await res.json();

  return res_json.data;
}

