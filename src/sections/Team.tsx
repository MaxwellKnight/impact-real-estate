import React from 'react'
import AgentCard from '../components/AgentCard'

const Team: React.FC = () => {

    return (
        <section className="team" id="team">
            <h1 className="team__heading heading">הנבחרת</h1>
            <div className="team__cards-container">
                <AgentCard />
                <AgentCard />
                <AgentCard />
            </div>

            <p className="team__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eius maxime eos laborum quam, neque consectetur, cupiditate hic dolor magnam commodi fugiat odit ducimus in?.</p>
        </section>
    )
}

export default Team