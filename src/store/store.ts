import { createApi, createEvent, createStore } from 'effector'

export const $isMenuOpen = createStore<boolean>(false)
export const { openMenu, closeMenu } = createApi($isMenuOpen, {
	openMenu: (menuState) => true,
	closeMenu: (menuState) => false,
})
