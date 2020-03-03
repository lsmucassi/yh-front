import React from 'react'
import Banner from '../components/home/Banner'
import Services from '../components/home/Services'
import World from '../components/home/World'
import ClientRev from '../components/more/ClientRev'

export default function Home() {
    return (
        <div>
            <Banner />
            <Services />
            <World />
            <ClientRev />
        </div>
    )
}
