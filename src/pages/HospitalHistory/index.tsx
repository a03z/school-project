import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import './hospitalHistory.css'

interface HospitalCardI {
	id: number
	text: string
}

export default function HospitalHistory(): JSX.Element {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	const cards: HospitalCardI[] = [
		{
			id: 1,
			text: 'Вологодская область являлась прифронтовой и играла роль своеобразного лечебного центра. С первых дней войны в Вологде разместилось управление одного из крупнейших в Советских Вооруженных Силах распределительно-эвакуационного пункта (РЭП-95). На него было возложено лечебно-эвакуационное обслуживание раненых и больных солдат и офицеров Ленинградского, Карельского, Волховского фронтов, а также 4-й, 7-й и 54-й отдельных армий. В сентябре 1941 года был сформирован эвакогоспиталь № 1538. Со дня своего основания госпиталь находился в двух зданиях: в трехэтажном кирпичном здании педагогического института по улице Маяковского (ныне ул. С. Орлова), 6 и в здании школы № 33 (ныне школа № 8) по адресу: набережная Свободы (ныне ул. Мира), 22. В этих помещениях располагались 3 терапевтических и 4 хирургических отделения. В 1945 году госпиталь получил еще одно здание на улице Лассаля (ныне ул. Зосимовская), 48, в котором разместилось одно отделение ЭГ № 1538, преобразованное позднее в эвакогоспиталь № 5388.',
		},
		{
			id: 2,
			text: 'Эвакогоспиталь № 1538 располагал неплохой материальной базой. В нем имелись рентгеновский, физиотерапевтический и зубоврачебный кабинеты, клинико-диагностическая лаборатория, патологоанатомический кабинет с обслуживающим персоналом. Однако врачей-специалистов не хватало. В ЭГ № 1538 работало лишь 2 хирурга, один из которых являлся заведующим хирургическим отделением, другие хирургические отделения возглавляли 2 гинеколога и отоларинголог. Имевшиеся кадры (всего в госпитале работало 456 человек) считались высококвалифицированными. Лечение стояло на должной высоте: применялись новейшие для того времени методы, широко практиковалось оперативное вмешательство. Комиссия, проверявшая работу госпиталя в декабре 1944 года, отметила: "Медицинское снабжение идет по линии Вологодского аптекоуправления с большими перебоями и в недостаточном количестве. Малое количество и отсутствие некоторых медикаментов. Нет витаминных препаратов. Рентгенопленка, шприцы и иглы отпускается в недостаточном количестве. Физиотерапевтический кабинет страдает из-за отсутствия лампочек, кварцевых горелок и спиралей. Лаборатория испытывает огромную нужду в реактивах и кислотах...". К лету 1942 года мобилизационные возможности страны были в значительной степени исчерпаны. Поэтому вышли секретные приказы о сокращении сроков лечения раненых в госпиталях. Дополнительно поступившие из Москвы инструкции существенно расширили показания о годности к несению воинской службы. В ЭГ № 1538 врачам был объявлен выговор за лечение больных, находившихся в палатах 90 и более дней. Врачи сократили средний койко-день до 21,3 суток. Госпиталь № 1538 мог принять до 1 тысячи раненых. Всех их нужно было обеспечить хорошими условиями. Материальной частью госпиталя заведовал Леонид Николаевич Дорофеев.',
		},
		{
			id: 3,
			text: 'В зимнее время возникала еще одна проблема - обеспечение госпиталя топливом. Здание № 2 из-за отсутствия транспорта вообще не имело никакого запаса топлива для центрального отопления и пользовалось только тем, что подвозилось ежедневно. А привоз зависел от положения дел в здании № 1, которое располагало транспортом (1 санитарная, 2 грузовые машины и 8 лошадей), но также испытывало постоянный дефицит топлива. Напряженным было положение с продовольствием. По утвержденным нормативам эвакогоспиталь должен был иметь 20-дневный постоянный запас продуктов. Реально такой запас имелся только по картофелю, овощам и муке. Госпиталю требовалось 200 литров молока в сутки, а городской молокозавод мог поставить не более 35-40 литров. Остальное количество заменялось сметаной и сгущенным молоком. Однако и эти трудности удавалось преодолевать. Благодаря укомплектованности аппарата продовольственной службы, квалифицированному составу поваров блюда отличались разнообразием и хорошим качеством.',
		},
		{
			id: 4,
			text: 'Несколько отделений госпиталя разместилось в школе № 33, построенной в 1940 году (корпус № 2 ЭГ № 1538). Это было новое четырехэтажное здание с центральным отоплением, канализацией, электрическим освещением. На 2, 3 и 4 этажах располагались палаты, на нижнем этаже находились приемное отделение, пищеблок, лаборатория, выполнявшая клинические и бактериологические исследования, а также подсобные помещения. Система центрального отопления действовала таким образом, что при достаточно благополучном положении на верхних этажах нижние этажи оставались холодными. Имелись отдельные помещения и палаты (№ 2 и № 3 на втором этаже), где радиаторы совсем не прогревались. Сантехническое оборудование постоянно приходило в негодность, общая душевая комната почти всегда была холодной. Не хватало стекол, и часть оконных проемов была заделана фанерой. В пищеблоке, как отмечала комиссия, "требуется провести ремонт кухонной плиты и топки очага". В 1944 году на ремонтно-строительные работы было выделено 50 тысяч рублей, но эта сумма позволила решить проблемы лишь частично. В условиях повсеместного материально-хозяйственного дефицита госпиталь испытывал нужду в самом необходимом. Недостаточно было хозяйственных инструментов и пиломатериалов, электролампочек и керосиновых ламп, стекол к ним, поэтому широко применялись самодельные коптилки. РЭП-95, снабжавший госпиталь вещами, не мог в полной мере обеспечить его бельем при интенсивном движении раненых. Смена белья проводилась регулярно, через каждые 10 дней, но комиссия отмечала, что имеющееся на больных белье было ветхим и застиранным, часто требующим дополнительного ремонта. Особенно не хватало верхней одежды: шинелей, ботинок, шапок, ремней и т. д. ',
		},
		{
			id: 5,
			text: 'Важной задачей персонала госпиталя была организация досуга находящихся на лечении воинов, что являлось одним из условий их успешного выздоровления. Здесь было много недостатков. Комиссия по проверке работы ЭГ № 1538 указала: "Досуг в госпитале организован плохо. За ноябрь месяц проведено 4 доклада, 7 бесед, 4 концерта, 22 киносеанса. Библиотечный фонд насчитывает всего 437 экземпляров книги почти что не имеет произведений русских классиков. Но эти трудности не помешали госпиталю успешно выполнять свои основные обязанности - излечение раненых и больных. В этом огромная заслуга начальника ЭГ № 1538 доктора Фельдмана и сменившего его доктора Р. Б. Зельманова, а также всего персонала госпиталя. Среди ведущих специалистов эвакогоспиталя № 1538 необходимо отметить Н. Е. Слупского, Е. В. Лескина, В. Л. Лесницкую.',
		},
		{
			id: 6,
			text: 'Лескин Евгений Васильевич родился 17 февраля 1899 года в семье священника в селе Фрол-Радушный Московской области. В 1917 году он поступил в 1-й Московский государственный университет на медицинский факультет и в 1923 году окончил его по специальности терапевт-педиатр. С июня 1923 года начал работать врачом-заместителем, а затем штатным ординатором городской детской больницы г. Ногинска и в детском отделении объединения Снегирева в Москве. В 1934 году возвратился в Москву и стал заведовать инфекционным отделением, одновременно состоял консультантом-педиатром райбольницы. В 1941 году был призван в РККА и почти сразу же определен в эвакогоспиталь № 1538 г. Вологды ординатором и начальником одного из отделений. В 1944 году был назначен ведущим терапевтом. Евгений Васильевич Лескин зарекомендовал себя как умелый специалист и чуткий человек. За заслуги в военное время в 1944 году он был награжден орденом Красной Звезды.',
		},
		{
			id: 7,
			text: 'Слупский Николай Евгеньевич родился 2 сентября 1899 года в селе Тродовичи Полоцкого уезда Витебской губернии в семье священника. После окончания в 1918 году средней школы он в 1920 году поступил в Военно-медицинскую академию, где учился до 1924 года. В 1925 году Н. Е. Слупский перешел в 1-й Ленинградский медицинский институт и окончил его в том же году, после чего стал работать в клинике профессора Джанелидзе, позднее - у профессора Грекова ассистентом на хирургическом отделении (1925 - 1929 и 1932 - 1935 годы). За это время написал 8 научных работ. С 1935 года работал главным врачом Чудовской райбольницы, одновременно являясь заведующим хирургическим отделением и директором школы медсестер. За это время написал еще 3 научные работы. 26 июня 1941 года Николай Евгеньевич был призван в Красную Армию. Первоначально работал ведущим хирургом в эвакогоспитале № 443 г. Пскова, а после эвакуации в г. Череповец был направлен в Бабаево в ЭГ № 3740. Там же при бомбежке получил ранение, но продолжал работать. Эвакуировавшись в Вологду, 9 декабря 1942 года занял пост главного хирурга в эвакогоспитале № 1538, где и проработал до окончания войны. В последний период жизни Н. Е. Слупский написал 28 научных работ, из них 9 - с новыми предложениями, а также выступил с двумя докладами на XV Международном конгрессе физиологов. Во время войны хирург Слупский работал над актуальными вопросами военной хирургии, предложил ускоренные методы лечения ранений мягких тканей, профилактики и остановки кровотечений под глухой гипсовой повязкой, способы сохранения верхних и нижних конечностей при тяжелой травме (свыше 70 случаев сохранения нижних конечностей вместо ампутации). Им были изобретены желудочный зонд для получения чистого желудочного сока у человека при механическом раздражении стенки желудка и заменитель марли в гипсовых повязках, дающий ее экономию на 50 процентов, была проведена работа по закрытию каловых кишечных свищей и т. д. Николай Евгеньевич всегда пользовался уважением больных и обслуживающего персонала. Случалось, по несколько суток не выходил из операционной. За высокие заслуги перед Родиной он был награжден орденом Трудового Красного Знамени. Жизни и деятельности этого замечательного человека посвящена "Повесть о докторе Николае Евгеньевиче" известного писателя Ю. Германа.',
		},
		{
			id: 8,
			text: 'Лесницкая Вера Леонидовна родилась 23 апреля 1898 года в г. С.-Петербурге в семье священника. В 1916 году окончила Коломенскую женскую гимназию и поступила в 1-й Медицинский институт, где училась по 1922 год. В период учебы успела поработать в качестве медсестры и фельдшера в разных госпиталях. После окончания института Вера Леонидовна исполняла обязанности врача-ординатора в клинике нервных болезней и в Институте по изучению мозга. Желая получить квалификацию нейрохирурга, в 1935 году перешла в Институт хирургической невропатологии и начала работать вначале врачом-экстерном, а с 1936 года - штатным научным сотрудником, потом - старшим научным сотрудником вплоть до мобилизации в Красную Армию 15 ноября 1941 года. С 1939 года до ноября 1941 года работала одновременно и в Институте усовершенствования врачей на кафедре нейрохирургии профессора Поленова. Во время войны В. Л. Лесницкая служила в эвакогоспитале № 1015, а затем в ЭГ № 1825 г. Череповца. Осенью 1944 года была переведена в г. Вологду для организации нейрохирургического отделения в эвакогоспитале № 1538, возглавила его и обучила этой специальности четырех молодых врачей. За 11 месяцев провела свыше 400 операций. Одновременно с врачебной практикой Вера Леонидовна активно занималась научной деятельностью. Будучи кандидатом медицинских наук, за 1938-1944 годы опубликовала в научных журналах и сборниках 12 статей. Личная жизнь В. Л. Лесницкой сложилась непросто. В 1918 году был арестован отец, дальнейшая судьба которого осталась неизвестной. Муж и ее сестра умерли в 1942 году в блокадном Ленинграде. Вера Леонидовна одна воспитывала троих детей: двух своих дочерей и племянника, сына сестры. Заслуги В. Л. Лесницкой в годы войны были отмечены орденом Красной Звезды. ',
		},
	]

	const getAOSAnimation = (cardId: number) => {
		switch (cardId) {
			case 4:
			case 7:
			case 8:
				return 'fade-down'
			case 5:
				return 'fade-right'
			case 6:
				return 'fade-left'
			default:
				return ''
		}
	}

	return (
		<>
			<h2 className='hospital-title'>
				ИСТОРИЯ ВОЛОГОДСКОГО ЭВАКОГОСПИТАЛЯ № 1538
			</h2>
			<div className='hospital-content'>
				{cards.map((card: HospitalCardI) => {
					return (
						<div
							data-aos={getAOSAnimation(card.id)}
							key={card.id}
							className={`hospital-card hospital-card${card.id}`}>
							<span className='hospital-card__number'>
								{card.id}
							</span>
							<p className='hospital-card__text'>{card.text}</p>
						</div>
					)
				})}
			</div>
		</>
	)
}
