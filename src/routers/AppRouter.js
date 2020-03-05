import React from 'react';
import { Router, Switch, Route} from "react-router-dom";
import { createBrowserHistory } from 'history';
import AddExpenesPage from "../components/AddExpenesPage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashBoard from "../components/ExpenseDashBoard";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashBoard} />
                <PrivateRoute path="/create" component={AddExpenesPage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>


    </Router>

);
export default AppRouter;












