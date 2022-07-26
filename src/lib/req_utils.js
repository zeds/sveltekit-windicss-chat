import {browser} from '$app/env'
import { writable, get } from "svelte/store";

/**
browserGet
browserSet
strapi_get
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

/**
 *
 *
 * @export
 * @param {*} fetch
 * @param {*} url
 * @param {*} method
 * @param {*} body
 * @return {*} 
 */
export async function generic_api(fetch, url, method,  body) {

  try {
    let headers = {}
    if(!(body instanceof FormData)) {
      headers['Content-Type'] = 'application/json'
      body = JSON.stringify(body)
    }
    console.log('url=',url)
    console.log('method=',method)
    console.log('body=',body)

    const res = await fetch(url, {
      method: method,
      body,
      headers
    })

    if(res.ok) {
      try {
        const json = await res.json()
        return json
      } catch(err) {
        throw { id: '', message: 'Any unknown error has occured'}
      }
    }
  } catch(err) {
    throw customError ? err : {id: '', message: 'An unknown error has occured' }
  }
}
