
import './App.css';
import facebook from './assets/fb-icon.png';
import twitter from './assets/twit-icon.png';
import gp from './assets/gp-icon.png';
import gram from './assets/insta-icon.png';
import flicker from './assets/flic-icon.png';
import pinterest from './assets/pint-icon.png';
import logo from './assets/logo.png';
import rss from "./assets/rss-icon.png";
import mail from './assets/mail-icon.png';
import print from './assets/print-icon.png';
import pizza from './assets/choco-pizza.png';
import author from './assets/van-pic.png';
import smallLogo from './assets/small-logo.png';
function App() {
  return (

    //top bar
    <body>
      <section className = "top-bar">
          <header>
              <div className = "left">
                  <section className= "logo-top">
                      <img src= { logo } alt= "logo png"/>
                  </section>
                  <section className= "logo-text">
                      <p><span>Delicious</span><br></br>
                      THE BEST FOOD BLOG ON THE WEB.
                      </p>
                  </section>
              </div>

              <div className = "right">
                  <div className = "images-1">
                      <img src= { facebook } alt= "facebook icon"/>
                      <img src= { twitter } alt= "twitter icon"/>
                      <img src= { gp } alt= "gp icon"/>
                      <img src= { gram } alt= "instagram icon"/>
                      <img src= { flicker } alt= "flicker icon"/>
                      <img src= { pinterest } alt= "pinterest icon"/>
                  </div>
                  <div className = "images-2">
                      <img src= { rss } alt= "rss icon"/>
                      <img src= { mail } alt= "mail icon"/>
                  </div>
              </div>
              
          </header>
          <div className= "hr-bottom">
              
          </div>
      </section>

      <main>

        <section className="title-section">
            <div>
                <h1>
                Chocolate Pizza
                </h1>
                <h4>
                    POSTED ON 15 DEC 2013 / DESSERTS
                </h4>
            </div>
            <div className="print">
                <img src= { print } alt= "print icon" />
                print
            </div>
        </section>

        <section className="main-image">
            <img src= { pizza } alt= "chocolate pizza" />
        </section>

        <p className="main-par">
            For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.
        </p>

        <p className="main-par">
            Ice cream: in a small pot over medium heat, combine milk, and granulated sugar unti sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set the mixture in the fridge and wait until the fig mixture is cooled.
        </p>

        <p className="main-par">
            Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer insturctions, i.e., let spin and thicken for 20 mnutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least wto hours before serving.
        </p>
        <div className= "index-card">
            <ul className="instructions">
                <div className= "list-columns">
                    <section className= "left-list">
                        <li>1 1/2 cups milk</li>
                        <li>1/2 cup mascarpone</li>
                        <li>1/2 tsp pink salt</li>
                        <li>1 lb Black Mission Figs</li>
                        <li>1/2 cup brown sugar</li>
                        <li>2-4 tbsp water</li>
                    </section>
                    <section className= "right-list">
                        <li>1 1/2 cups heavy cream</li>
                        <li>4/3 granulated sugar</li>
                        <li>2 egg yolks</li>
                        <li>1 lemon, juiced</li>
                        <li>2 tbsp butter</li>
                        <li>1 cup honey roasted pecans, roughly chopped</li>
                    </section>
                </div>
            </ul>
        </div>
        <div class= "hr-bottom">

        </div>
    </main>

    <section className= "bottom-section">
        <section className="author">
            <div className="about">
                <img className="author-img" src= { author } alt= "author portrait"/>
                <div className="author-info">
                    <p className="author-text"><span>Vanessa Stevenson</span><br></br><br></br>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                </div>
            </div>
            <button>
                Share Recipe
            </button>
        </section>
        <footer>
            <section className="hr-logo-hr">
                <div className="hr-left">
                </div>
                <div>
                    <img src= { smallLogo} alt= "logo"/>
                </div>
                <div className="hr-right">
                </div>
            </section>
            <section>
                <p>Delicious © 2013 · All Rights Reserved.</p>
                <p>Proudly published with Ghost.</p>
            </section>
        </footer>
    </section>
    </body>
    


  );
}

export default App;
