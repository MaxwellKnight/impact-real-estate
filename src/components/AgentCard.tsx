import React from 'react'
const profile = require('../assets/images/profile-01.png')

interface AgentInterface {
    firstName: string,
    lastName: string,
    desc: string,
    isAdmin: false
}

const AgentCard: React.FC = () => {
    return (
        <div className="team__card">
            <div className="team__card__img-container">
                <img src={profile} alt="Agents image" />
            </div>
            <h2 className="team__card__agent-title">מייסד</h2>
            <p className="team__card__agent-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quod a doloribus illo perferendis deserunt itaque</p>
        </div>
    )
}

export default AgentCard