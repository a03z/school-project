import './clubs.css'

export default function Clubs(): JSX.Element {
	return (
		<>
			<h1 className='clubs-name'>Туристско-краеведческий клуб</h1>
			<h2 className='clubs-item__title'>
				«Клуб путешественников»,
				<br />
				«Меридиан», «Моя Родина – СССР»
			</h2>

			<div className='clubs-list'>
				<div className='clubs-card'>
					<h3 className='clubs-item__title'>Задачи</h3>
					<ul>
						<li className='clubs-item__text'>
							Сбор материалов по претворению в жизнь Ленинских
							заветов, воспитание учащихся на примере жизни и
							деятельности В.И.Ленина, примерах революционной,
							трудовой и боевой славы советского народа.
						</li>
						<li className='clubs-item__text'>
							Пропаганда туризма и краеведения.
						</li>
						<li className='clubs-item__text'>
							Содействие организации профессиональной ориентации
							учащихся и подготовке их к труду.
						</li>
					</ul>
				</div>
				<div className='clubs-card'>
					<h3 className='clubs-item__title'>Формы работы</h3>
					<ul>
						<li className='clubs-item__text'>Совет клуба.</li>
						<li className='clubs-item__text'>
							Экспедиционные отряды по направлению «В буднях
							великих строек».
						</li>
						<li className='clubs-item__text'>
							Следопытский поиск «Трудовые династии вологжан».
						</li>
						<li className='clubs-item__text'>Конкурсы плакатов.</li>
						<li className='clubs-item__text'>
							Ведение дневников работы клуба.
						</li>
						<li className='clubs-item__text'>
							Экскурсии на предприятия города.
						</li>
						<li className='clubs-item__text'>
							Тематические просмотры фильмов в кинотеатрах города.
						</li>
						<li className='clubs-item__text'>
							Операции «Кизильник», «Зеленый друг».
						</li>
						<li className='clubs-item__text'>Беседы.</li>
						<li className='clubs-item__text'>
							Встречи с интересными людьми.
						</li>
					</ul>
				</div>
				<div className='clubs-card'>
					<h3 className='clubs-item__title'>Направления</h3>
					<ul>
						<li className='clubs-item__text'>
							Ленин и теперь живее всех живых.
						</li>
						<li className='clubs-item__text'>
							В буднях великих строек.
						</li>
						<li className='clubs-item__text'>
							В боях отстояли Отчизну свою.
						</li>
						<li className='clubs-item__text'>К тайнам природы.</li>
						<li className='clubs-item__text'>
							Знай своих земляков.
						</li>
					</ul>
				</div>
			</div>

			<h1 className='clubs-name' style={{ margin: '50px auto' }}>
				Литературный клуб
			</h1>
			<div className='clubs-list'>
				<div className='clubs-card'>
					<h3 className='clubs-item__title'>Задачи</h3>
					<ul>
						<li className='clubs-item__text'>
							Воспитание учащихся на примере жизни и деятельности
							В.И.Ленина, примерах революционной, трудовой и
							боевой славы советского народа.
						</li>
						<li className='clubs-item__text'>
							Развитие творческих способностей – декларация
							стихов, сочинение собственных.
						</li>
						<li className='clubs-item__text'>
							Обсуждение произведений советской литературы.
						</li>
					</ul>
				</div>
				<div className='clubs-card'>
					<h3 className='clubs-item__title'>Формы работы</h3>
					<ul>
						<li className='clubs-item__text'>
							Организация заседаний.
						</li>
						<li className='clubs-item__text'>
							Чтение и рецензирование конкурсных сочинений,
							стихов.
						</li>
						<li className='clubs-item__text'>
							Литературно-музыкальные композиции.
						</li>
						<li className='clubs-item__text'>Обзор книг.</li>
						<li className='clubs-item__text'>
							Читательские конференции.
						</li>
						<li className='clubs-item__text'>Вечера поэзии.</li>
						<li className='clubs-item__text'>
							Обсуждение авторских произведений детей,
							рекомендации к публикации в стенгазете.
						</li>
						<li className='clubs-item__text'>
							Операции «Кизильник», «Зеленый друг».
						</li>
						<li className='clubs-item__text'>Беседы.</li>
						<li className='clubs-item__text'>
							Встречи с интересными людьми.
						</li>
					</ul>
				</div>
				<div className='clubs-card'>
					<h3 className='clubs-item__title'>Направления</h3>
					<ul>
						<li className='clubs-item__text'>
							Комсомольцы – беспокойные сердца.
						</li>
						<li className='clubs-item__text'>
							Наш современник – человек труда.
						</li>
						<li className='clubs-item__text'>
							Делать людям хорошее – хорошо самому.
						</li>
						<li className='clubs-item__text'>
							Нужна ли человеку поэзия?
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}
