import React from 'react'
const profile = require('../assets/images/profile-01.png')

const AgentCard: React.FC = () => {
    return (
        <div className="team__card">
            <div className="team__card__img-container">
                <img src={profile} alt="Agents portrait" />
            </div>
            <h2 className="team__card__agent-title">יקיר אטיאס</h2>
            <p className="team__card__agent-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quod a doloribus illo perferendis deserunt itaque</p>
        </div>
    )
}

export default AgentCard