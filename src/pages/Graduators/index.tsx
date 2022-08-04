import { useState } from 'react'
import Modal from 'react-modal'
import Achievements from './Achievements/AchievementsKorshunov'
import './graduators.css'
import { GraduatorI, graduatorsList } from './model'
Modal.setAppElement('#root')

export default function Graduators(): JSX.Element {
	const [openedModal, setOpenedModal] = useState<number>(0)
	const [achievementsModal, setAchievementsModal] = useState<boolean>(false)
	const closeModal = () => {
		setOpenedModal(0)
	}

	return (
		<div>
			<section className='graduators section'>
				<h1 className='page-title'>Известные выпускники школы.</h1>
				<div className='graduator-content'>
					<div className='graduators-list'>
						{graduatorsList.map((graduator: GraduatorI) => {
							return (
								<div key={graduator.id}>
									<a
										onClick={() => {
											setOpenedModal(graduator.id)
										}}
										className='more-info__btn'>
										<div className='graduator-item'>
											<p>{graduator.name}</p>
											<img
												src={graduator.imageSrc}
												alt='Avatar'
												className='image'
											/>
										</div>
									</a>
									<Modal
										closeTimeoutMS={200}
										isOpen={openedModal === graduator.id}
										onRequestClose={() => {
											closeModal()
										}}
										className='more-info'
										overlayClassName='modalOverlay'>
										<h3>{graduator.name}</h3>
										<p className='more-info__text'>
											{graduator.content}
										</p>

										{graduator.achievementsModal && (
											<>
												<a
													onClick={() => {
														setAchievementsModal(
															true
														)
													}}
													className='achivkiBtn'>
													Награды Александра Ивановича
												</a>
												<Modal
													closeTimeoutMS={500}
													isOpen={achievementsModal}
													onRequestClose={() => {
														setAchievementsModal(
															false
														)
													}}
													className='more-info achivki'
													overlayClassName='modalOverlay'>
													<h1
														style={{
															textAlign: 'center',
														}}>
														Александр Иванович
														награжден:
													</h1>
													<Achievements />
												</Modal>
											</>
										)}
									</Modal>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		</div>
	)
}
