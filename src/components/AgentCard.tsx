import React from 'react'

interface AgentInterface {
    firstName: string,
    lastName: string,
    desc: string,
    isAdmin: false
}

const AgentCard: React.FC = () => {
    return (
        <div className="team__card">
            <div className="card__img-container">
                <img src="" alt="Agents image" />
            </div>
            <h4 className="card__agent-name"></h4>
            <p className="card__agent-desc"></p>
        </div>
    )
}

export default AgentCard