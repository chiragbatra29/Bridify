import React, { Suspense, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Feeds from "../../containers/HomePage/feeds";
import Header from "./Header";
import LogoutModal from "./LogoutModal";
import { ROUTES } from "../../constants/routes";
import {logout} from '../../store/actions/auth'
import Footer from "./Footer";

const DefaultLayout = (props: any) => {
  const dispatch = useDispatch()
  const isLogin = localStorage.getItem("isLogin");
  const [modal, setModal] = useState(false);

  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );


  const signOut = (e: any) => {
    localStorage.clear()
    props.history.push('/login');
    dispatch(logout())
  };
  const toggleModal = () => setModal(!modal);


  return (
    <div className="app">
      <LogoutModal logout={signOut} />
      <Header logout={toggleModal} />
      <div className="app-body">
        <main className="main">
          <Suspense fallback={loading()}>
            {isLogin ? (
              <Switch>
                <Route
                  path='/'
                  exact={true}
                  render={() => <Feeds />}
                />
                <Redirect from="*" to={ROUTES.FEED} />
              </Switch>
            ) : (
                <Redirect from="*" to={ROUTES.LOGIN} />
              )}
          </Suspense>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default DefaultLayout;
