import React from 'react';
import { TeamMember } from './teamMember';
import satvik from '/satvik.jpeg';
import dania from '/dania.jpg';
import tessa from '/tessa.jpg';
import rithvik from '/rithvik.jpeg';
import dana from '/dana.jpg';
import charlie from '/charlie.jpg';
import darco from '/darco.jpg';
import don from '/don.jpg';

const Team: React.FC = () => {
  return (
    <div id="meet-team">
      <h1 style={{ marginLeft: '55px' }}>Meet the Team</h1>
      <div style={{ marginTop: '15px' }}>
        <div className="all-cards">
          <div className="team-cards">
            <TeamMember
              picture={satvik}
              name="Satvik Tripathi"
              institution="University of Pennsylvania"
            />
            <TeamMember
              picture={tessa}
              name="Tessa Cook"
              institution="University of Pennsylvania"
            />
            <TeamMember
              picture={dania}
              name="Dania Daye"
              institution="Harvard Medical School"
            />
          </div>

          <div className="team-cards">
            <TeamMember
              picture={rithvik}
              name="Rithvik Sukumaran"
              institution="University of Pennsylvania"
            />
            <TeamMember
              picture={dana}
              name="Dana Alkhulaifat"
              institution="University of Pennsylvania"
            />
            <TeamMember
              picture={charlie}
              name="Charles Chambers"
              institution="University of Pennsylvania"
            />
            <TeamMember
              picture={darco}
              name="Darco Levic"
              institution="University of Pennsylvania"
            />
          </div>
          <div className="team-cards">
            <TeamMember
              picture={don}
              name="Ebubechukwu D. Enwerem"
              institution="Drexel University"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
