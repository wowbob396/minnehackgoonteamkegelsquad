import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Sidebar from 'components/Sidebar/Sidebar';


import {style} from "variables/Variables.jsx";

import appRoutes from 'routes/app.jsx';

class App extends Component {



    render() {
        return (

                <div className="wrapper">
            
                    <NotificationSystem ref="notificationSystem" style={style}/>
                    <Sidebar {...this.props} />
                    <div id="main-panel" className="main-panel">
                        <Header {...this.props}/>
                            <Switch>
                                {
                                    appRoutes.map((prop,key) => {
                                        if(prop.name === "Notifications")
                                            return (
                                                <Route
                                                    path={prop.path}
                                                    key={key}
                                                    render={routeProps =>
                                                       <prop.component
                                                           {...routeProps}
                                                           handleClick={this.handleNotificationClick}
                                                       />}
                                                />
                                            );
                                        if(prop.redirect)
                                            return (
                                                <Redirect from={prop.path} to={prop.to} key={key}/>
                                            );
                                        return (
                                            <Route path={prop.path} component={prop.component} key={key}/>
                                        );
                                    })
                                }
                            </Switch>
                        <Footer />
                    </div>
                </div>
        );
    }
}

export default App;
