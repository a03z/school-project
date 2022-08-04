export interface GraduatorI {
	id: number
	name: string
	content: string
	imageSrc: string
	achievementsModal?: boolean
}

export const graduatorsList: GraduatorI[] = [
	{
		id: 1,
		name: 'Зейфман Александр Израилевич',
		content:
			'Профессор, доктор физико-математических наук, декан факультета прикладной математики и компьютерных технологий заведующий кафедрой прикладной математики ВоГУ.',
		imageSrc: './img/vypuskniki/zeyfman.jpg',
	},
	{
		id: 2,
		name: 'Красильников Роман Леонидович',
		content: 'Доктор филологических наук, профессор ВоГУ.',
		imageSrc: './img/vypuskniki/krasilnikov.png',
	},
	{
		id: 3,
		name: 'Коршунов Александр Иванович',
		content:
			'Генеральный директор Вологодского оптико-механического завода.',
		imageSrc: './img/vypuskniki/korshunov.png',
		achievementsModal: true,
	},
	{
		id: 4,
		name: 'Эльперин Александр Исаакович',
		content:
			'Доктор технических наук, кандидат экономических наук, академик Российской академии проблем качества. Председатель Совета директоров ЗАО «Вологодский подшипниковый завод». Награжден орденом Почета, медалью Андрея Первозванного и медалью «За трудовую доблесть»',
		imageSrc: './img/vypuskniki/elperin.png',
	},
	{
		id: 5,
		name: 'Макаровский Максим Юрьевич',
		content: 'Директор Вологодского технического колледжа',
		imageSrc: './img/vypuskniki/makarovskiy.jpg',
	},
	{
		id: 6,
		name: 'Аверьянов Михаил Львович',
		content: 'Выпускник 2003 года, дипломат',
		imageSrc: './img/vypuskniki/averyanov.png',
	},
]
