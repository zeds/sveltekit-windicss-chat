import {browser} from '$app/env';
import { writable, get } from "svelte/store";

export const selected_room_name = writable('');
export const selected_user_name = writable('');

