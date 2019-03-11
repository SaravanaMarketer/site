import React from 'react';
import connectStore from '../images/store.png';
import createCampaigns from '../images/campaigns.png';
import turnAutopilot from '../images/autopilot.png';


class homeFeature extends React.Component {
    render(){
        return (
          <div id="intro" className="intro flex-split wow fadeIn">
              <div className="multi-step-container container-m">
                  <div className="flex-intro align-center">
                      <div className="text-center">
                          <h3>Get started in Minutes</h3>
                      </div>
                      <div className="row">
                          <div className="col-sm-4">
                              <p className="rl-item-icon"><img src={connectStore} /></p>
                          </div>
                          <div className="col-sm-4">
                              <p className="rl-item-icon"><img src={createCampaigns} /></p>
                          </div>
                          <div className="col-sm-4">
                              <p className="rl-item-icon"><img src={turnAutopilot} /></p>
                          </div>
                      </div>
                      <div className="rl-multi-step numbered">
                          <ul className="rl-multi-step-list">
                              <li className="rl-multi-step-item active">
                              <div className="rl-item-wrap">
                              <p className="rl-item-title">Connect your store</p>

                              </div></li>
                              <li className="rl-multi-step-item active">
                              <div className="rl-item-wrap">
                              <p className="rl-item-title">Create Campaigns</p>

                              </div></li>
                              <li className="rl-multi-step-item active">
                              <div className="rl-item-wrap">
                              <p className="rl-item-title">Turn on Autopilot</p>

                              </div></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}

export default homeFeature
