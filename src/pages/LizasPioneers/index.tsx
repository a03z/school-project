import { useState } from 'react'
import Modal from 'react-modal'
import './lizaAndPioneers.css'

export default function LizasPioneers(): JSX.Element {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	return (
		<div className='content-drujina'>
			<h1 className='page-title'>
				Пионерская дружина имени Лизы Чайкиной
			</h1>
			<p className='text-drujina'>
				Под руководством пионервожатых участвовала во Всесоюзных
				пионерских маршах, проводилось много интересных дел, работал
				Совет Друзей октябрят, проводилась тимуровская работа, интересно
				проходили сборы дружины, смотры строя и песни, соревнование
				пионерских отрядов.
			</p>
			<div className='header'>
				<a
					onClick={() => {
						setIsModalOpen(true)
					}}
					className='more-btn'>
					Больше информации
				</a>
				<Modal
					closeTimeoutMS={500}
					isOpen={isModalOpen}
					onRequestClose={() => {
						setIsModalOpen(false)
					}}
					className='liza'
					overlayClassName='modalOverlay'>
					<h2 className='drujina-more__title'>
						Чайкина Елизавета Ивановна (1918-1941),
					</h2>
					<h4 className='drujina-more__text'>
						один из руководителей подполья в Великую Отечественную
						войну, Герой Советского Союза.
						<br />
						С 1939 секретарь Пеновского РК ВЛКСМ (ныне Тверская
						обл.).
						<br />
						Казнена фашистами.
					</h4>
					<button
						type='button'
						onClick={() => {
							setIsModalOpen(false)
						}}
						className={'closeModal-btn'}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							version='1'
							viewBox='0 0 24 24'>
							<path d='M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z'></path>
						</svg>
					</button>

					<img
						src='../../../public/img/history/drujina/liza.jpg'
						className='history-image__portrait'
						id='liza-portrait'
					/>

					<div
						className='drujina-more__text'
						style={{ textAlign: 'center' }}>
						Участница партизанского движения в годы Великой
						Отечественной войны, Герой Сов. Союза. Член КПСС с 1939.
						Была первой девушкой-комсомолкой в родной деревне,
						организатором коме, ячейки. Работала счетоводом в
						колхозе, заведующей избой-читальней, в редакции районной
						газеты. С 1939 секретарь Пеновского райкома ВЛКСМ. С
						началом оккупации немецко-фашистскими войсками
						Калининской обл. в Великую Отечеств, войну Чайкина —
						секретарь подпольного райкома ВЛКСМ и один из
						организаторов партизанского отряда, участвовала в его
						боевых действиях. В ноябре 1941 с газетой «Правда»
						обошла ряд населенных пунктов, рассказывая советским
						людям о торжественном заседании и параде в Москве в
						честь 24й годовщины Великого Октября. По доносу
						предателя была схвачена фашистами. Гитлеровцы подвергли
						отважную партизанку жестоким пыткам, добиваясь сведений
						о партизанском отряде. Несмотря на жестокие
						издевательства, Ч. не выдала партизан врагу. Фашисты
						расстреляли её. За героический подвиг Ч. было присвоено
						звание Героя Сов. Союза. Её преданность Родине, мужество
						и самоотверженность стали вдохновляющим примером для
						всех советских людей в борьбе против немецко-фашистских
						захватчиков. Имя Чайкиной присвоено предприятиям,
						школам, пионерским дружинам, улицам. В г. Калинин —
						Музей комсомольской славы им. Чайкиной. В поселке Пено
						ей установлен памятник.
					</div>
				</Modal>
			</div>
			<img
				src='/public/img/history/drujina/lineyka.jpg'
				className='history-image__drujina'
			/>
		</div>
	)
}