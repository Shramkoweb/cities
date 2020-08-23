import * as React from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

import PageLayout from "../page-layout/page-layout";
import {Operation} from "../../reducer/data/data";
import {getGroupingFavoritesByCities} from "../../reducer/data/selector";
import FavoritesList from "../favorites-list/favorites-list";
import Header from "../header/header";

interface FavoritesPageProps {
  favorites: any,
  onLoadFavorites: any,
  cities: any,
}

class FavoritesPage extends React.PureComponent<FavoritesPageProps> {
  componentDidMount() {
    const {onLoadFavorites} = this.props;

    onLoadFavorites();
  }

  render() {
    const {favorites, cities} = this.props;

    return (
      <PageLayout pageClasses={cities.length === 0 ? [`page--favorites-empty`] : [``]}>
        <Header/>
        {
          cities.length !== 0 ?
            <main className="page__main page__main--favorites">
              <div className="page__favorites-container container">
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    <FavoritesList favorites={favorites} cities={cities}/>
                  </ul>
                </section>
              </div>
            </main>
            : <main className="page__main page__main--favorites page__main--favorites-empty">
              <div className="page__favorites-container container">
                <section className="favorites favorites--empty">
                  <h1 className="visually-hidden">Favorites (empty)</h1>
                  <div className="favorites__status-wrapper">
                    <b className="favorites__status">Nothing yet saved.</b>
                    <p className="favorites__status-description">Save properties to narrow down search or plan yor future
                      trips.</p>
                  </div>
                </section>
              </div>
            </main>
        }
        <footer className="footer container">
          <Link to="/" className="footer__logo-link">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </PageLayout>
    );
  }
}


const mapStateToProps = (state) => {
  const favorites = getGroupingFavoritesByCities(state);

  return {
    cities: Object.keys(favorites),
    favorites: favorites || {},
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites: () => dispatch(Operation.loadFavorites()),
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
