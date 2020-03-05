import React from 'react';
import { Router, Switch, Route} from "react-router-dom";
import { createBrowserHistory } from 'history';
import AddExpenesPage from "../components/AddExpenesPage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashBoard from "../components/ExpenseDashBoard";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashBoard} />
                <PrivateRoute path="/create" component={AddExpenesPage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>


    </Router>

);
export default AppRouter;












