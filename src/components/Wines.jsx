import React from "react";

function Wines() {
  return (
    <>
      <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15 wine-list">
        <h2 className="tit6 t-center">Wine List</h2>
      </section>

      <section>
        <div className="menu-container">
          <div className="menu-division">
            <h2 style={{ textAlign: "center" }}>Wine by the Glass</h2>
            <hr className="separator" />
            <div className="pour-size">5 oz/2 oz</div>
            <div className="menu-list">
              <ul className="menu-list__items">
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Cabernet</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Josh Cellars 'Reserve', North Coast California
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">12/6</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Justin, Paso Robles</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">14/7</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Whitehall Lane, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">16/8</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Mount Veeder, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">18/9</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Duckhorn Vineyards, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">20/10</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Pinot Noir</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Meiomi, Monterey-Sonoma-Santa Barbara
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">12/6</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">La Crema, Sonoma</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">14/7</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Siduri, Willamette Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">16/8</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Belle Glos ‘Dairyman’, Russian River Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">18/9</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Zinfandel</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Michael David 'Freakshow', Lodi
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">10/5</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Hartford Family Winery 'Old Vine', Russian River Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">15/7.5</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Italian</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Chianti Classico, Cecchi
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">12/6</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Baby Amarone, Allegrini 'Palazzo delle Torre'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">11/5.5</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Super Tuscan, Ruffino 'Modus'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">15/7.5</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Assorted Reds</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Merlot, Tangley Oaks, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">10/5</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Malbec, Antigal 'Uno, Argentina
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">11/5.5</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Blend, Ferrari-Carano ‘Siena’, Sonoma
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">14/7</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Blend, The Prisoner, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">18/9</span>
                  </p>
                </li>

                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Chardonnay</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Kendall Jackson, ‘Vintner’s Reserve’, Ca
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">11/5.5</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Sonoma Cutrer, ‘Russian River Ranches’, Sonoma
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">13/6.5</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Argyle Winery 'Reserve', Willamette Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">15/7.5</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Grgich Hills, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">17/8.5</span>
                  </p>
                </li>

                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Pinot Grigio</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Tommasi 'Le Rosse', Italy
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">10/5</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Santa Margherita, Italy
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">14/7</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Sauvignon Blanc</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Justin, Central Coast</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">11/5.5</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Kim Crawford, New Zealand
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">13/6.5</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Cakebread, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">15/7.5</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Assorted Whites</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Reisling, Dr. Loosen, Germany
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">10/5</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Moscato d'Asti, Risata, Italy
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">10/5</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Rose, Whispering Angel, Cotes de Provence
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">12/6</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Sparkling</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Jeio, 'Brut' Prosecco, Italy
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">10/5</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Gruet Rose, New Mexico
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">12/6</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Mumm 'Brut Prestige', Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">14/7</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="menu-division">
            <h2 style={{ textAlign: "center" }}>White Wines by the Bottle</h2>
            <hr className="separator" />
            <div className="menu-list">
              <ul className="menu-list__items">
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Chardonnay</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Kendall-Jackson ‘Vintner’s Reserve’, California
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">44</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Sonoma-Cutrer ‘Russian River Ranches’
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">52</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Fess Parker, Santa Barbara
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">55</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Argyle 'Reserve', Willamette Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">60</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Trefethen, Oak Knoll District
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">61</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Chalk Hill, Russian River Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">63</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Mer Soliel ‘Reserve’, Santa Lucia
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">67</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Cuvaison ‘Estate’, Carneros
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">68</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Grgich Hill, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">68</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Duckhorn Vineyards, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">72</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Groth, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">73</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Pine Ridge ‘Dijon Clones’, Carneros
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">74</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">ZD, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">75</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Cakebread Cellars, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">76</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Stag's Leap Cellars 'Karia', Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">78</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Frog’s Leap Winery, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">80</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Jordan, Alexander Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">81</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Rombauer, Carneros</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">83</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Flowers ‘Sonoma Coast’, Sonoma
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">87</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Paul Hobbs, Russian River Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">93</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Shafer 'Red Shoulder Ranch', Napa-Carneros
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">97</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Far Niente, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">102</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Kistler ‘Les Noisetiers’, Sonoma Coast
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">105</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Lewis Cellars 'Barcaglia Lane', Russian River Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">120</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Sauvignon Blanc</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Justin, Central Coast</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">44</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Emmolo, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">48</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Joel Gott, California</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">49</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Kim Crawford, New Zealand
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">52</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Honig, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">54</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Simi, California</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">56</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Cakebread Cellars, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">60</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Whitehall Lane, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">63</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Frog’s Leap Winery, Rutherford
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">65</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Twomey, Napa-Sonoma</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">67</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Groth, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">68</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Duckhorn Vineyards, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">75</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Merry Edwards, Russian River Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">83</span>
                  </p>
                </li>

                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Pinot Grigio</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Tommasi ‘Le Rosse’, Italy
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">40</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Kris, Italy</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">45</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Ruffino ‘Lumina’, Italy
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">51</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Santa Margherita, Italy
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">56</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Maso Canali, Italy</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">57</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Jermann, Italy</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">70</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Assorted Whites</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Blend, Conundrum, California
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">60</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Moscato d'Asti, Risata, Italy
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">40</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Moscato, Terra d’Oro, California
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">51</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Riesling, Dr. Loosen, Germany
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">40</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Riesling, Hogue, Washington
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">45</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Rose, Conundrum, California
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">50</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Rose, Domaine Serene ‘R’, Oregon
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">77</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Rose, Elouan, Oregon</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">57</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Rose, Il Poggione, ‘Brancato Rosato’ , Italy
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">60</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Rose, Meiomi, Santa Barbara-Sonoma-Monterey
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">53</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Rose, Miraval, France</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">64</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Rose, Whispering Angel, Cotes de Provence
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">48</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Viognier, Miner, Oakville
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">57</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    Champagne &amp; Sparkling
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Jeio 'Brut', Prosecco, Italy
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">40</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Astoria ‘Cuvee Lounge’, Prosecco, Italy
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">45</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Gruet Rose, New Mexico
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">48</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Santa Margherita ‘Brut’, Prosecco, Italy
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">52</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Mumm 'Brut Prestige', Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">56</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Chandon ‘Brut’, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">57</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Scharffenberger ‘Excellence’, California
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">60</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Scharffenberger 'Excellence', Brut Rose, California
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">63</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Tommasi Prosecco, Italy
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">65</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Mumm Rose, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">68</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      J Vineyards 'Cuvee 20', Russian River Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">73</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Nicolas Feuillatte 'Brut Reserve', France
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">92</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Perrier-Jouet 'Grand Brut', France
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">94</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Louis Roederer ‘Brut Premier’, France
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">95</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Veuve Cliquot ‘Brut’, France
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">103</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Moet &amp; Chandon ‘Imperial’, France
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">105</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Dom Perignon, ‘Brut’, France
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">295</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="menu-division">
            <h2 style={{ textAlign: "center" }}>Red Wines by the Bottle</h2>
            <hr className="separator" />
            <div className="menu-list">
              <ul className="menu-list__items">
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Cabernet Sauvignon</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Josh Cellars 'Reserve', North Coast, California
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">48</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Hess ‘Shirtail Ranches’, North Coast, California
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">50</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Chateau St. Michelle, Washington
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">53</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">J. Lohr, Paso Robles</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">54</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Justin, Paso Robles</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">56</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Franciscan, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">63</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Whitehall Lane, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">64</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Mount Veeder Winery, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">72</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Trefethen, Oak Knoll District
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">75</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Duckhorn Vineyards, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">80</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Stags' Leap Winery, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">85</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Pine Ridge, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">87</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Frog’s Leap ‘Estate’, Rutherford
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">88</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">ZD, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">89</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Frank Family Vineyards, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">91</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Heitz, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">92</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Groth, Oakville</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">93</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Chateau Montelena, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">95</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Grgich Hills, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">97</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Stag’s Leap Wine Cellars ‘Artemis’, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">98</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Jordan, Alexander Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">105</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Joseph Phelps, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">110</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Justin Isosceles, Paso Robles
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">113</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Chimney Rock, Stag’s Leap District
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">115</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Silver Oak, Alexander Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">120</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Miner, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">125</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Caymus, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">135</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Nickel and Nickel 'Branding Iron', Oakville
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">145</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Shafer ‘One Point Five’, Stag’s Leap District
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">150</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Paul Hobbs, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">155</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Plumpjack, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">165</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Pinot Noir</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Meiomi, Sonoma-Santa Barbara-Monterey
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">48</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Robert Mondavi 'Private Selection', California
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">50</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Erath, Oregon</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">53</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      MacMurray Ranch, Sonoma
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">55</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">La Crema, Sonoma</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">56</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Siduri, Willamette Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">64</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Belle Glos 'Dairyman', Russian River Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">72</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Archery Summit, Dundee Hills
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">74</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Spell ‘Nichole’s Blend’, Sonoma
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">75</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      J Vineyards, Russian River Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">79</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">David Bruce, Sonoma</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">83</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Paul Hobbs, Russian River Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">87</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Domaine Serene ‘Yamhill’, Willamette Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">88</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Domaine Drouhin, Willamette Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">94</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Flowers, Sonoma Coast</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">99</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Domaine Serene, ‘Evenstad Reserve’, Willamette
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">110</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Patz and Hall 'Pisoni Vineyard', Santa Lucia Highlands
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">120</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Merlot</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Tangley Oaks, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">40</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Coppola ‘Director's cut’, Sonoma
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">51</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Twomey, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">72</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Frog’s Leap Winery, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">81</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Stags’ Leap Winery, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">85</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Duckhorn Vineyards, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">89</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Plumpjack, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">101</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Pride Mountain Vineyards, Napa-Sonoma
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">103</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Zinfandel</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Michael David 'Freakshow', Lodi
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">40</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">The Federalist, Lodi</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">45</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Ravenswood ‘Lodi Old Vine’, Sonoma
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">50</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Hartford Family 'Old Vine' Russian River Valley
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">60</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      The Prisoner Wine Co. ‘Saldo’, California
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">65</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Rombauer, Napa</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">73</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Frank Family Vineyards, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">74</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Frog’s Leap Winery, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">75</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Ridge ‘Three Valleys’, Sonoma
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">77</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">Italian Reds</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Amarone, Cesari 'Classico'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">95</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Amarone, Luigi Righetti 'Capitel De Roari'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">73</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Amarone Tommasi</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">130</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Baby Amarone, Allegrini 'Palazzo Della Torre'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">44</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Barbera d'Alba, Pio Cesare
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">60</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Barbera d'Asti, Prunotto 'Fiulot'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">67</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Barbaresco, Pio Cesare
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">165</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Barolo, Pio Cesare</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">115</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">Barolo, Prunotto</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">99</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Blend, Gaja, Ca'Marcanda 'Promis'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">73</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Blend, Gaja 'Sito Moresco' Lange Rosso
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">88</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Brunello di Montalcino, Altesino 'Reserva'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">135</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Brunello di Montalcino, Banfi
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">125</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Brunello di Montalcino, Gaja
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">120</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Brunello di Montalcino, Il Poggione
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">123</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Chianti, Cecchi 'Classico'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">48</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Chianti, Ruffino 'Classico'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">63</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Chianti, Santa Margherita
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">73</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Chianti, Villa Cafaggio 'Classico'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">52</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Sangiovese, Rocco Della Macie 'Rubizzo'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">53</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Super Tuscan, Banfi 'Excelsus'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">115</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Super Tuscan, Banfi 'Summus'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">99</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Super Tuscan, Ruffino 'Modus'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">60</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Super Tuscan, Villa Antinori
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">65</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Valpolicella, Le Ragose
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">73</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Valpolicella, Tommasi 'Ripasso'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">60</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    Blends and Assorted Reds
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Blend, BV, ‘Tapestry Reserve’, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">103</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Blend, Conundrum, California
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">55</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Blend, Ferrari-Carano ‘Siena’, Sonoma
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">56</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Blend, Franciscan, ‘Magnificat’, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">100</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Blend, Girard ‘Artistry’, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">84</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Blend, Stag’s Leap, ‘Hands of Time’, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">75</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Blend, The Prisoner, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">72</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Blend, Trefethen ‘Double T’, Oak Knoll
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">71</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Blend, Trefethen, 'Dragon's Tooth'
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">77</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Malbec, Antigal 'Uno', Argentina
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">44</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Malbec, Conquista ‘Reserve’, Argentina
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">55</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Malbec, Piatelli, Argentina
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">59</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Malbec, Punto ‘Final’, Argentina
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">49</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Petite Sirah, Stags’ Leap Winery, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">87</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Sangiovese, Miner ‘Gibson Ranch’, Mendocino
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">100</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Syrah, Plumpjack, Napa
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">95</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Wines;
