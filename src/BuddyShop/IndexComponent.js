import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import NavBarComponent from './NavBarComponent';
import FashionComponent from './FashionComponent';
import DetailsComponent from './DetailsComponent';
import FootWearComponent from './FootwearComponent';
import ElectronicsComponent from './ElectronicsComponent';
import CategoriesComponent from './CategoriesComponent';
import ProductsComponent from './ProductsComponent';

export default class IndexComponent extends React.Component{
    render(){
        return(
            <Router>
                <HeaderComponent/>
                <div className='row' style={{height:'400px'}}>
                    <div className='col-3'>
                        <NavBarComponent/>
                    </div>
                    <div className='col-9'>
                        <Switch>
                            <Route exact path='/' >
                            <HomeComponent/>
                            </Route>
                            <Route path='/home'>
                                <Redirect to='/'/>
                            </Route>
                            <Route  path='/electronic' >
                            <ElectronicsComponent/>
                            </Route>
                            <Route  path='/fashion' >
                            <FashionComponent/>
                            </Route>
                            <Route  path='/footwear' >
                            <FootWearComponent/>
                            </Route>
                            <Route path='/details/:id/:name/:price'>
                                <DetailsComponent/>
                            </Route>
                            <Route path='/categories'>
                                <CategoriesComponent/>
                            </Route>
                            <Route path='/products/:id'>
                                <ProductsComponent/>
                            </Route>
                        </Switch>
                    </div>
                </div>
                <FooterComponent/>
            </Router>
        )
    }
}