import React, { Component } from 'react'

export default class Harian extends Component {
  render() {
    return (
      <div className="row">
        <div className="card col-md-5">
            <div class="card-body text-left">
              <h4 class="card-title">Title</h4>
              <p class="card-text">Body</p>
            </div>
        </div>
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-12">
              <div class="card text-left">
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Body</p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div class="card text-left">
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Body</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
