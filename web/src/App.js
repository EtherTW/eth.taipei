import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// locale
import { addLocaleData, IntlProvider } from 'react-intl';
import enUS from './locales/en-US';
import zhHANT from './locales/zh-Hant';

import './App.css';
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import Home from './containers/Home';
// import Counter from './components/About';

addLocaleData(zhHANT.data);
addLocaleData(enUS.data);

export class App extends Component {
  getLocale =() => {
    const lang = localStorage.getItem('lang');
    switch (lang) {
      case 'zh':
        return zhHANT;
      case 'en':
        return enUS;
      default:
        return zhHANT;
    }
  }

  render() {
    const locale = this.getLocale();
    return (
      <IntlProvider locale={locale.locale} messages={locale.messages}>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/about" component={About} /> */}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
