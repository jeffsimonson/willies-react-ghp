import React from "react";

function Food() {
  return (
    <>
      <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15 food-menu">
        <h2 className="tit6 t-center">Willie's Menu</h2>
      </section>

      <section className="menu-page">
        <div className="menu-container">
          <div className="menu-division">
            <div className="menu-list">
              <h2 className="menu-list__title">small plates</h2>
              <hr className="separator" />
              <ul className="menu-list__items">
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">calamari fritti</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">lemon garlic aioli</span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">18.95/12.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">seared ahi tuna</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      avocado, sweet soy, spicy mayo, sesame crisps
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">14.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">crab cakes</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      jumbo lump, truffle aioli, dijon mayo
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">18.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">Crespelle</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      fontina, prosciutto di Parma, chives
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">9.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">braised meatballs</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Bolognese sauce, fontina
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">13.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">scallops</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      crispy prosciutto, wild arugula, lemon, brown butter
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">15.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">beef tenderloin crostini</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      truffle aioli, chive, sea salt
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">16.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">
                      burrata and prosciutto di parma
                    </span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      grilled ciabatta, aged balsamic, arugula
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">14.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">braised lamb crostini</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Calabrian chili, cucumber, mint, arugula, goat cheese,
                      aged balsamic
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">16.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">parmesan crusted shrimp</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      lemon garlic aioli, cocktail sauce
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">18.95/12.95</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="menu-division">
            <div className="menu-list">
              <h2 className="menu-list__title">vegetables</h2>
              <hr className="separator" />
              <ul className="menu-list__items">
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">
                      caramelized brussels sprouts
                    </span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      local honey, toasted almond
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">11.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">matchstick zucchini</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      basil, almond, Parmigiano Reggiano
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">10.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">roasted cauliflower</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      chilies, lemon, Parmigiano Reggiano
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">11.95</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="menu-division">
            <div className="menu-list">
              <h2 className="menu-list__title">flatbread</h2>
              <hr className="separator" />
              <ul className="menu-list__items">
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">tomato and avocado</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">housemade mozzarella</span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">14.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">margherita</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      housemade mozzarella, basil
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">12.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">wild mushroom</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Parmigiano Reggiano, Gruyere, brie, truffle oil
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">14.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">prosciutto di parma</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      mozzarella, arugula, extra virgin olive oil, aged balsamic
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">15.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">pepperoni</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      mozzarella, jalapeno, local goat cheese
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">14.95</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="menu-division">
            <div className="menu-list">
              <h2 className="menu-list__title">pizza</h2>
              <hr className="separator" />
              <ul className="menu-list__items">
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">
                      molinari sicilian sausage and pepperoni
                    </span>
                    <span className="dots"></span>
                  </h4>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">15.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">pepperoni</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">mozzarella, oregano</span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">15.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">margherita</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      housemade mozzarella, basil
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">14.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">spicy bolognese</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      mozzarella, Parmigiano Reggiano
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">15.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">sausage</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      mozzarella, onion, fresh fennel
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">15.95</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="menu-division">
            <div className="menu-list">
              <h2 className="menu-list__title">salads</h2>
              <hr className="separator" />
              <ul className="menu-list__items">
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">ciao baby</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      organic greens, pine nuts, local goat cheese, balsamic
                      vinaigrette
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">13.95/9.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">caesar</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      Parmigiano Reggiano, grilled ciabatta croutons
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">13.95/9.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">brasiliana</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      tomato, heart of palm, celery, sweet onion, avocado, lemon
                      vinaigrette
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">14.95/10.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">basic blue</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      romaine, croutons, tomato, local bacon, red onion, blue
                      cheese dressing
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">13.95/9.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">beet caprese</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      heirloom beets, local burrata, avocado, basil, extra
                      virgin olive oil, sea salt, 12 year balsamic
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">15.95/11.95</span>
                </li>

                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">tuscan kale</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      apple, Gruyere, almond, chive, extra virgin olive oil,
                      aged balsamic
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">15.95/11.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">heirloom grain</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      spinach, avocado, fontina, tomato, lemon, extra virgin
                      olive oil
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">15.95/11.95</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="menu-division">
            <div className="menu-list">
              <h2 className="menu-list__title">fish</h2>
              <hr className="separator" />
              <ul className="menu-list__items">
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">wood grilled ahi tuna</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      wasabi mashed potatoes, Chinese mustard vinaigrette, kalbi
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">33.95</span>
                </li>

                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">walleye milanese</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      mashed potatoes, marinated tomatoes
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">31.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">pesto crusted sea bass</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      mashed potatoes, crispy onions, Thai chili beurre blanc
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">42.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">
                      herb grilled organic salmon
                    </span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      roasted heirloom potatoes and vegetables, lemon-thyme
                      sauce
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">31.95</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="menu-division">
            <div className="menu-list">
              <h2 className="menu-list__title">pasta</h2>
              <hr className="separator" />
              <ul className="menu-list__items">
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">housemade ravioli</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      ricotta, Parmigiano Reggiano, fresh herbs, tomato
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">21.95/17.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">fettuccine with chicken</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      spinach, almonds, light cream sauce
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">21.95/17.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">linguini primavera</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      roasted peppers, wild mushrooms, spinach, zucchini,
                      tomato, basil, pecorino
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">20.95/16.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">classic lasagna</h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      ricotta, mozzarella, Bolognese sauce
                    </span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">22.95</span>
                  </p>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">vegetarian</span>
                    <span className="dots"></span>
                    <span className="menu-list__item-price">19.95</span>
                  </p>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">butternut squash ravioli</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      pancetta ham, sage, browned butter, Parmigiano Reggiano
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">22.95/18.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">tortiglioni rossa</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      sausage, sweet peas, roasted peppers, Romana rossa sauce
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">23.95/19.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">spaghetti and meatballs</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">bolognese sauce</span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">20.95/16.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">risotto</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      chicken, wild mushrooms, pinto grigio, taleggio cheese,
                      Parmigiano Reggiano
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">22.95/18.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">spicy crab spaghetti</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      fresno chilies, lemon, mint, extra virgin olive oil
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">25.95/21.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">herb linguini with lamb</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      red wine, tomato, pecorino
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">24.95/20.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">linguini di mare</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      shrimp, scallops, mussels, fresh fish, saffron-tomato
                      broth
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">26.95/22.95</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="menu-division">
            <div className="menu-list">
              <h2 className="menu-list__title">burgers</h2>
              <ul className="menu-list__items">
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title"> </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      served on fresh baked buns with house-cut fries
                    </span>
                  </p>
                  <hr className="separator" />
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">wild acres turkey burger</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      butter lettuce, tomato, basil aioli
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">15.95</span>
                </li>

                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">cheeseburger</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      choice of local cheddar, fontina, Gruyere, mozzarella or
                      blue cheese
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">15.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">bella burger</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      caramelized onion, fontina, pickles, tomato, our special
                      sauce
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">15.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">ahi tuna burger</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      avocado, butter lettuce, Fresno chili aioli
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">16.95</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="menu-division">
            <div className="menu-list">
              <h2 className="menu-list__title">large plates</h2>
              <hr className="separator" />
              <ul className="menu-list__items">
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">
                      6oz revier farms filet mignon
                    </span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      roasted heirloom potatoes
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">37.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">
                      9oz revier farms filet mignon
                    </span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      roasted heirloom potatoes
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">46.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">dry aged pork chops</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      porcini-pepper crust, roasted heirloom potatoes
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">32.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">steak sandwich</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      filet mignon, roasted onions, ciabatta, horseradish aioli
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">23.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">
                      classic chicken parmigiana
                    </span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      mozzarella, spaghetti marinara
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">26.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">brick chicken</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      roasted heirloom potatoes and vegetables, lemon-thyme
                      sauce
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">26.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">
                      16oz dry aged new york strip
                    </span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">house-cut fries</span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">47.95</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="menu-division">
            <div className="menu-list">
              <h2 className="menu-list__title">Desserts</h2>
              <hr className="separator" />
              <ul className="menu-list__items">
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">Caramel Sea Salt Custard</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      caramel sauce, salted caramel popcorn
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">9.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">Classic Tiramisu</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      espresso and rum soaked lady finger cookies layered with
                      mascarpone-vanilla cream
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">9.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">Limonetta Bella</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      graham cracker-pecan crust, lemon cream cheese filling,
                      lemon curd, whipped cream, candied almonds
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">9.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">Pumpkin Butter Cake</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      vanilla gelato, caramel sauce, cinnamon candied pecans
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">9.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">
                      House-Made Gelato &amp; Sorbetto
                    </span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      one large scoop or three scoop sampler
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">5.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">Warm Vanilla Cake</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      bourbon caramel apples, vanilla gelato
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">9.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">Crème Brûlée</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      vanilla bean, organic cream
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">9.95</span>
                </li>
                <li className="menu-list__item">
                  <h4 className="menu-list__item-title">
                    <span className="item_title">Budino</span>
                    <span className="dots"></span>
                  </h4>
                  <p className="menu-list__item-desc">
                    <span className="desc__content">
                      warm flourless chocolate cake, Tahitian vanilla gelato,
                      chocolate fudge sauce
                    </span>
                  </p>
                  <span className="dots"></span>
                  <span className="menu-list__item-price">10.95</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Food;
