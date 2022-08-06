import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import '../SchoolHistory/historyAndWarStyles.css'
import { Mousewheel } from 'swiper'

export default function SchoolInWarTimes(): JSX.Element {
	return (
		<>
			<Swiper
				modules={[Mousewheel]}
				mousewheel
				direction='vertical'
				autoHeight
				slidesPerView={1}
				style={{ maxHeight: '700px' }}>
				<SwiperSlide style={{ maxHeight: '800px' }}>
					<section>
						<div
							className='content-vov'
							style={{ alignItems: 'center' }}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-around',
									alignItems: 'center',
								}}>
								<img
									src='img/history/VOV1.png'
									className='history-image__vov'
									alt='hospital'
								/>
							</div>
							<ul className='historyListStyles history-text'>
								<li>
									В сентябре 1941 года был сформирован
									эвакогоспиталь № 1538. Со дня своего
									основания госпиталь находился в двух
									зданиях: в трехэтажном кирпичном здании
									педагогического института по улице
									Маяковского (ныне ул. С. Орлова),
									<b>
										6 и в здании школы № 33 (ныне школа № 8)
										по адресу: набережная Свободы (ныне ул.
										Мира), 22.
									</b>
									В этих помещениях располагались 3
									терапевтических и 4 хирургических отделения.
								</li>
							</ul>
						</div>
						<h1 className='clubs-name'>
							Школа во время Великой Отечественной войны.
						</h1>
					</section>
				</SwiperSlide>
				<SwiperSlide>
					<section>
						<div
							className='content-vov'
							style={{ alignItems: 'center' }}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-around',
									alignItems: 'center',
								}}>
								<img
									src='img/history/VOV2.png'
									className='history-image__vov'
									alt='train patients'
								/>
							</div>

							<ul className='history-text'>
								<li>
									В трудные военные годы лозунг был «Все для
									фронта, все для победы!» А в городе часто не
									было света, учились в три смены, сидели с
									керосиновыми лампами. Бойцы писали
									школьникам так: «Учитесь, ребята, мы стоим
									на защите Родины, а вы отличными оценками
									бьете с тыла врага»
								</li>
							</ul>
						</div>
						<h1 className='clubs-name'>
							А вы отличными оценками бьете с тыла врага...
						</h1>
					</section>
				</SwiperSlide>
				<SwiperSlide>
					<section>
						<div
							className='content-vov'
							style={{ alignItems: 'center' }}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-around',
									alignItems: 'center',
								}}>
								<img
									src='img/history/VOV3.jpg'
									className='history-image__vov'
									alt='group teachers and students photo'
								/>
							</div>
							<ul className='historyListStyles'>
								<li className='history-text'>
									Все учителя и ученики работали в
									эвакогоспитале, собирали вещи для раненых,
									читали им, устраивали для них концерты.
									Некоторые учителя ушли на фронт.p
								</li>
								<li className='history-text'>
									Первый директор школы Лазарев Георгий
									Константинович был взят на фронт. На
									оккупированных территориях работала Надежда
									Васильевна Бойцова, во время войны в школе
									работала Гуниp на Валентина Константиновна,
									учитель физики, Марюкова Екатерина
									Борисовна, учитель русского языка и
									литературы
								</li>
							</ul>
						</div>
						<h1 className='clubs-name'>Учителя на войне</h1>
					</section>
				</SwiperSlide>
				<SwiperSlide>
					<section>
						<div
							className='content-vov'
							style={{ alignItems: 'center' }}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-around',
									alignItems: 'center',
								}}>
								<img
									src='img/history/uchitelya/valentina.jpg'
									className='vov-image__portrait'
									alt='Valentina Kichigina'
								/>
								<div>
									<span>Учитель физкультуры,</span>
									<br />
									<span>
										участник Великой Отечественной войны
									</span>
									<h4>Кичигина Валентина Павловна</h4>
								</div>
							</div>
							<ul className='historyListStyles'>
								<li className='history-text'>
									«Наш 106-й батальон был сформирован в
									Вологде 10 марта 1942 года. Прошел от
									Вологды до Кенигсберга. Боевая задача –
									слежение за воздушным пространством. Не раз
									сами попадали под бомбежки, посты вырезались
									власовскими головорезами. Посты 106
									батальона охраняли «Дорогу жизни» на Ладоге.
								</li>
								<li className='history-text'>
									Мало нас осталось, все чаще узнаем о смерти
									боевых товарищей,» - вспоминает
									В.П.Кичигина.
								</li>
								<li className='history-text'>
									После войны Валентина Павловна много лет
									проработала учителем средней школы №8 г.
									Вологды
								</li>
							</ul>
						</div>
					</section>
				</SwiperSlide>
				<SwiperSlide>
					<section>
						<div
							className='content-vov'
							style={{ alignItems: 'center' }}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-around',
									alignItems: 'center',
								}}>
								<img
									src='img/history/uchitelya/smirnova.jpg'
									className='vov-image__portrait'
									alt='nina smirnova'
								/>
								<div>
									<span>Учитель начальных классов.</span>
									<h4>Смирнова Нина Ивановна</h4>
								</div>
							</div>

							<ul className='historyListStyles'>
								<li className='history-text'>
									Ее боевой путь начался 23 января 1943 года.
									Добровольцем записалась в Волховстрое в
									службы, обеспечивающие прохождение поездов в
									Ленинград. Их задача была восстановить
									разрушенные мосты, железнодорожные пути.
								</li>
								<li className='history-text'>
									Награждена медалью Георгия Жукова, знаком
									«Фронтовик 1941 – 1945», медалью 55-летия
									Победы.
								</li>
								<li className='history-text'>
									Закончила Вологодское педагогическое
									училище. Работала учителем в 28 школе, затем
									долгие годы в школе №8.
								</li>
							</ul>
						</div>
					</section>
				</SwiperSlide>
				<SwiperSlide>
					<section>
						<div
							className='content-vov'
							style={{ alignItems: 'center' }}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-around',
									alignItems: 'center',
								}}>
								<img
									src='img/history/uchitelya/chezlov.jpg'
									className='vov-image__portrait'
									alt='nikolay chezlov'
								/>
								<div>
									<span>
										Учитель русского языка и литературы.
									</span>
									<h4>Чезлов Николай Васильевич</h4>
								</div>
							</div>

							<ul className='historyListStyles'>
								<li className='history-text'>
									Николай Васильевич родился в 1927 году. В
									1941 году призван в ряды РККА. Вернулся в
									1945, участвовал в боевых действиях, трижды
									ранен, отморозил ноги . После возвращения с
									войны стал учителем. Долгое время работал в
									20 школе г.Вологды, затем несколько лет в
									восьмой, где он работал в осноPвном с
									«трудными» детьми. По воспоминаниям коллег,
									был щедрым человеком, веселым, энергичным,
									заводным, любил рыбалку, экскурсии, поездки.
									Везде о нем отзываются как о человеке
									большой души.
								</li>
								<li className='history-text'>
									В школе №8 он работал недолго, но оставил о
									себе добрую память. Он умер в октябре 2002
									года.
								</li>
							</ul>
						</div>
					</section>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
