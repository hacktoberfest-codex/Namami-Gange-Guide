import { Carousel, NavBar } from 'components';
import CarouselsReco from 'components/CarouselsReco';
import React, { Fragment } from 'react';

function RiverineEcology() {

	return (
		<Fragment>
			<NavBar/>
			<div className="heading">
				<h1 className='text-3xl flex justify-center items-center bg-blue-200 py-3'>Hello this is riverine ecology page!!!</h1>

			</div>
			<div className="carousel border-2 border-green-500">
				<CarouselsReco />
			</div>

			<div className="info m-10">
				<h1 >INTRODUCTION</h1>
				<p>The Himalaya has the largest concentration of glaciers outside
					the polar caps with coverage area of 33000 km2, providing 86000,000
					m3 of water through seven of Asia's great rivers - the Ganga, the
					Indus, the Brahmaputra, the Salween, the Mekong, the Yangtze
					and the Huang-Ho. The exposed un-assorted glaciated sediments throughout the upper Himalaya evinces that the mountain
					is very fragile system. It is estimated that the Himalayan mountains
					cover a surface area of permanent snow and ice in the region is
					about 97,020 km2 with 12,930 km2 volume.
				</p>
				<br />
				<h1>GANGA BASIN</h1>
				<p>The Ganga basin drains an area of 1,086,000 km2 out of which
					861000 km2 is in India. The catchments lie in Uttar Pradesh (294,364
					km2), Madhya Pradesh (198,962 km2
					) undivided Bihar (143,961 km2),
					Rajasthan (112,490 km2
					), West Bengal (71,485 km2), Haryana (34,341
					km2
					), Himachal Pradesh (4,317 km2
					) and Delhi (1,484 km2
					). The basin
					comprises the three main physiographic regions of the Indian
					subcontinent namely:
					i. The young Himalayan fold mountains in the north with
					dense forests, as well as the sparsely forested Shiwalik Hills,
					ii. The central highland and Peninsular shield in the south
					consisting of mountains, hills and plateaus intersected by
					valleys and river plains, and in between;
					iii. The Gangetic alluvial plain.</p>
				<h3>BIODIVERSITY</h3>
				<p>It is not only the biodiversity of the rivers in general and the
					Ganga in particular that is not adequately understood or investigated,
					more significantly the role of biodiversity in the functioning of river
					ecosystems and hence, in providing various ecosystem services is
					not even appreciated. The ecosystem services of a river are not confined to providing water and fish but probably the most important
					service lies in the assimilation of wastes from their catchments
					including those from anthropogenic sources. Practically all
					components of biodiversity contribute to this waste processing
					function, and thereby result in maintaining high water quality and
					productivity.</p>
				<h4>TOXIC CHEMICALS</h4>
				<p>The river receives 260 Million Litre/day industrial wastes and
					1.3 billion litre / day Municipal sewage throughout its stretch.
					The river water is polluted with toxic
					chemicals and microbes. Indiscriminate use of organo-chlorine
					pesticides like DDT, Eldrin, Dieldrin, BHC, HCH etc both in
					agriculture and health sectors in Ganga Basin has led to bio concentration and bio-magnification of these toxic chemicals in fishes
					and other endangered animals like the Ganges dolphins.72 Use of
					DDT in agriculture was banned in 1989 with a mandate to use a
					maximum of 10,000 t/yr for the control of vector borne diseases.
					Most of these chemicals are carcinogenic and adversely affect human
					health through food chain . More number of cancer patients has
					been recorded at Mahavir Cancer Hospital in Patna from the area
					where DDT is used to control Kala-a-zar and other various diseases
					(personal Communication Kishor Kunal). Moreover, chemical
					control is not a permanent solution for vectors like mosquitoes and
					sand fly as they may become immune to the toxic chemicals.
					Increasing number of cancer patients in the areas where such toxic
					chemicals are being used is an indication of adverse effects of these
					toxics.</p>

			</div>
		</Fragment>

	)
}

export default RiverineEcology;
