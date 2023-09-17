import CarouselsReco from 'components/CarouselsReco'
import React, { Fragment } from 'react'


function RiverineEcology() {
    return (
        <Fragment>
            <div className="heading">
                <h1 className='text-3xl flex justify-center items-center bg-blue-200'>Hello this is riverine ecology page!!!</h1>
                
            </div>
            <div className="carousel border-2 border-green-500">
                <CarouselsReco />
            </div>

            <div className="info">
                <h1>INTRODUCTION</h1>
                    <p>The Himalaya has the largest concentration of glaciers outside
the polar caps with coverage area of 33000 km2, providing 86000,000
m3 of water through seven of Asia's great rivers - the Ganga, the
Indus, the Brahmaputra, the Salween, the Mekong, the Yangtze
and the Huang-Ho. The exposed un-assorted glaciatedsediments throughout the upper Himalaya evinces that the mountain
is very fragile system. It is estimated that the Himalayan mountains
cover a surface area of permanent snow and ice in the region is
about 97,020 km2 with 12,930 km2 volume.
</p>
            </div>

        </Fragment>
    )
}

export default RiverineEcology
