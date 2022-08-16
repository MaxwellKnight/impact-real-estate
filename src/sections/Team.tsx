import React from 'react'
import AgentCard from '../components/AgentCard'

interface AgentInterface {
    firstName: string,
    lastName: string,
    desc: string,
    isSelected: false
}

interface PropsInterface {
    agents: AgentInterface[]
}

const Team: React.FC = () => {

    return (
        <section className="team container--wide" id="team" data-type="inverted">
            <h1 className="team__heading heading inverted">הנבחרת</h1>
            <div className="team__cards-container flex">
                <AgentCard />
                <AgentCard />
                <AgentCard />
            </div>

            <p className="team__text"></p>
        </section>
    )
}

export default Team