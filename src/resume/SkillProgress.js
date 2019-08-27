import React from 'react';
import '../css/progress.css';
import '../css/load-animation.css';

class SkillProgress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: props.skill,
            percent: props.percent
        }
    }

    render() {
        const percentage = this.state.percent + '%';
        return (
            <li className='wow fadeInDown'>
                <p className="skill-label" data-value={this.state.percent}>
                    {this.state.skill}
                </p>
                <span>
                    <progress max='100' value={this.state.percent} className='html5'>
                        <div className='progress-bar'>
                            <span style={{ width: {percentage} }}>{this.state.percent}%</span>
                        </div>
                    </progress>
                </span>
                <hr className='skill-separator' />
            </li>
        );
    }
}

export default SkillProgress;
