import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
          <div className="nav-bar row">
            <div className="col-md-4 col-xs-12">
              <img className="img-responsive" src="/logo.png" width="202" height="48"/>
            </div>
            <div className="col-xs-6 col-md-offset-6 col-md-1">
             <iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fthefidgetguide.com&layout=button&size=small&mobile_iframe=true&appId=1754926664753974&width=59&height=20" width="59" height="20" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true"></iframe>
            </div>
            <div className="col-xs-6 col-md-1">
              <a className="twitter-share-button"
                href="https://twitter.com/intent/tweet?text=Get%20cheap%20fidget%20spinners!"
                data-size="small"
              >
                Tweet
              </a>
            </div>
          </div>
          <div className="header row">
              <div className="col-md-12">
                <div className="row header-title">
                  THE TOP PICKS
                </div>
                <div className="row">
                <div className="col-xs-12 col-md-4">
                  <div className="row figet-spinner-img">
                    <div className="col-md-12">
                      <div className="fidget-number">1</div>
                      <img src="/fidget-spinner-1.png" alt="fidget spinner"/>
                    </div>
                  </div>
                  <div className="row figet-spinner-title">
                    Chillax Fidget Spinner
                  </div>
                  <div className="row description">
                    This newest version contains low friction bearings with round edges to ensure smooth rotation. Beautiful finishing and sleek design. Also available in White.
                  </div>
                  <div className="row buy-now">
                    <button className="btn btn-default btn-buy">Buy now!</button>
                  </div>
                </div>
                <div className="col-xs-12 col-md-4">
                  <div className="row figet-spinner-img">
                    <div className="col-md-12">
                      <div className="fidget-number">2</div>
                      <img src="/fidget-spinner-2.png" alt="fidget spinner"/>
                    </div>
                  </div>
                  <div className="row figet-spinner-title">
                    ATESSON Fidget Spinner
                  </div>
                  <div className="row description">
                    Stainless steel with a high quality metal base, guaranteed to last. Incredible color and spin effect. Comes with a case!
                  </div>
                  <div className="row buy-now">
                    <button className="btn btn-default btn-buy">Buy now!</button>
                  </div>
                </div>
                <div className="col-xs-12 col-md-4">
                  <div className="row figet-spinner-img">
                    <div className="col-md-12">
                      <div className="fidget-number">3</div>
                      <img src="/fidget-spinner-3.png" alt="fidget spinner"/>
                    </div>
                  </div>
                  <div className="row figet-spinner-title">
                    roma Anti-Anxiety Fidget Spinner
                  </div>
                  <div className="row description">
                    Subtle and smooth design. Made with impact-resistant plastic. Contains ceramic ball bearings that ensure one of the fastest spins
                  </div>
                  <div className="row buy-now">
                    <button className="btn btn-default btn-buy">Buy now!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="info row">
            <div className="col-md-12">
              <div className="title row">
                What are fidget spinners?
              </div>
              <div className="description row">
                A fidget spinner is a type of toy, whose marketers claim it relieves stress. A basic fidget spinner consists of a bearing in the center of a design made from any of a variety of materials including brass, stainless steel, titanium, copper and plastic. The toy has been advertised as helping people who have trouble with focusing or fidgeting (such as those with ADHD, autism, or anxiety) by acting as a release mechanism for nervous energy or psychological stress. Experts were divided on this claim, with some supporting it while others disputed its scientific basis and argued the toy may actually be more distracting.
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
