import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './historyAndWarStyles.css'
import { Mousewheel } from 'swiper'

export default function Formation(): JSX.Element {
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
					<section className='slideSection'>
						<h2 className='obrazovanie-name'>Образование Школы</h2>
						<div
							className='content'
							style={{ alignItems: 'center' }}>
							<div className='imageContainer'>
								<img
									src='img/history/1stslide.png'
									alt='Ул. Октябрьская'
									className='history-image'
									style={{ marginRight: '5px' }}
								/>
								<img
									src='img/history/70god.jpg'
									alt='Школа в 80-е годы'
									className='history-image'
									style={{ marginLeft: '5px' }}
								/>
							</div>

							<div
								style={{
									display: 'flex',
									flexWrap: 'wrap',
									justifyContent: 'center',
								}}>
								<p className='history-text'>
									• 30-е годы - строительство школьных зданий
									в городе.
								</p>
								<p className='history-text'>
									• 1939-1940 – построено здание школы 33
									(ныне 8).
								</p>
								<p className='history-text'>
									• Во время Великой Отечественной войны адрес
									нашей школы – Октябрьская, 13.
								</p>
							</div>
						</div>
					</section>
				</SwiperSlide>
				<SwiperSlide>
					<section className='slideSection'>
						<h2 className='obrazovanie-name'>
							Изменения в нумерации
						</h2>
						<div className='content'>
							<div className='imageContainer'>
								<img
									src='img/history/2slide.png'
									alt='Ул. Октябрьская'
									className='history-image'
									style={{ marginRight: '5px' }}
								/>
							</div>

							<div
								style={{
									display: 'flex',
									flexWrap: 'wrap',
									justifyContent: 'center',
								}}>
								<p className='history-text'>
									• 1942-1943- не ушедшие на фронт мальчики
									переведены в школу 28.
								</p>
								<p className='history-text'>
									• 1943-1944 - 1954 школа 33 стала женской,
									мальчики - в школы 1,9 (мужские) (ныне 8).
								</p>
								<p className='history-text'>
									• 1943-1944 перенумерация: школа стала № 8,
									учились в здании начальной школы 14 (угол
									Ленинградской и проспекта Победы)
								</p>
							</div>
						</div>
					</section>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
