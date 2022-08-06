export interface MenuLinkI {
	id: number
	path: string
	additionalClassName: string
	text: string
}

export const menuLinks: MenuLinkI[] = [
	{
		id: 0,
		path: '/',
		additionalClassName: 'backtomain',
		text: 'На главную',
	},
	{
		id: 1,
		path: '/formation',
		additionalClassName: '',
		text: 'Образование школы',
	},
	{
		id: 2,
		path: '/school-in-war-times',
		additionalClassName: '',
		text: 'Школа в годы Великой Отечественной войны',
	},
	{
		id: 3,
		path: '/hospital-history',
		additionalClassName: '',
		text: 'История эвакогоспиталя',
	},
	{
		id: 4,
		path: '/teachers',
		additionalClassName: '',
		text: 'Учителя школы',
	},
	{
		id: 5,
		path: '/graduators',
		additionalClassName: '',
		text: 'Ими гордится школа: выпускники',
	},
	{
		id: 6,
		path: '/liza-and-pioneers',
		additionalClassName: '',
		text: 'История пионерской дружины имени Елизаветы Чайкиной',
	},
	{
		id: 7,
		path: '/clubs',
		additionalClassName: '',
		text: 'Клубное движение',
	},
]
