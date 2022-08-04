import { useState } from 'react'
import Modal from 'react-modal'
import { TeacherI, teachersList } from './model'
import './teachers.css'

export default function Teachers(): JSX.Element {
	const [openedModal, setOpenedModal] = useState<number>(0)

	const closeModal = () => {
		setOpenedModal(0)
	}

	return (
		<div>
			<section className='teachers'>
				<h1 className='clubs-name'>Учителя школы.</h1>
				<div className='teacher-content'>
					<div className='teacher-list'>
						{teachersList.map((teacher: TeacherI) => {
							return (
								<div key={teacher.id}>
									<a
										onClick={() => {
											setOpenedModal(teacher.id)
										}}
										className='more-info__btn'>
										<div className='teacher-item'>
											<p>{teacher.name}</p>
											<h5>{teacher.post}</h5>
											<img
												src={teacher.imageSrc}
												alt='Avatar'
												className='teacher-image'
											/>
										</div>
									</a>
									<Modal
										closeTimeoutMS={200}
										isOpen={openedModal === teacher.id}
										onRequestClose={() => {
											closeModal()
										}}
										className='more-info teachers-info'
										overlayClassName='modalOverlay'>
										<button
											type='button'
											onClick={() => {
												closeModal()
											}}
											className={'closeModal-btn'}>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												version='1'
												viewBox='0 0 24 24'>
												<path d='M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z'></path>
											</svg>
										</button>
										{teacher.getModalContent()}
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
