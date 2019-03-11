import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
        <header className="header">
            <div className="container container-palette top-bar overflow top-bar-black t-overflow affix-menu">
                <div className="container">
                    <div className="clearfix">
                        <div className="pull-left logo"><Link to='/'>IMFO</Link></div>      
                        <div className="top-bar-btns ">
                            <ul className="nav-items">
                                <li><Link className="btn btn-custom-primary" to='/signin'>Login</Link></li>
                                <li><Link className="btn btn-custom-primary" to='/signup'>Signup</Link></li>
                            </ul>
                            <button type="button" className="navbar-toggle" id="navigation-toogle">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        
                        <div className="pull-right navigation-wrapper">
                            <a href="" className="button-close"></a> 
                            <div className="logo"><a href="#">Local</a></div>
                            <ul className="nav navbar-nav nav-items default-menu" id="main-menu">
                                <li className="dropdown active">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#"> Homepage
                                        <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="active"><a href="homepage-search-top.html">Search on Top</a></li>
                                        <li><a href="homepage-fullwide-search.html">Full Wide Search</a></li>
                                        <li><a href="homepage-side-mapsearch.html">Map by Side Search</a></li>
                                        <li><a href="homepage-slider-top.html">Slider Top</a></li>
                                        <li><a href="homepage-video.html">Video Page</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#"> Map examples
                                        <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="map-side-list.html">Side with List</a></li>
                                        <li><a href="map-side-grid.html">Side With Grid</a></li>
                                        <li><a href="map-small.html">Small Map</a></li>
                                        <li><a href="map-geo.html">SVG Geo Regions</a></li>
                                        <li><a href="map-top-search.html">Map Top Search</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#"> Categories
                                        <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="homepage-realestates.html">Real Estate</a></li>
                                        <li><a href="homepage-yacht-market.html">Yacht Market</a></li>
                                        <li><a href="homepage-cars.html">Car Dealer</a></li>
                                        <li><a href="homepage-jobs.html">Job Finder</a></li>
                                        <li><a href="homepage-business.html">Business Directory</a></li>
                                        <li><a href="homepage_classified.html">Classified Portal</a></li>
                                        <li><a href="homepage-shop.html">Basic shop</a></li>
                                        
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#"> About
                                        <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="how_it-works.html">How it works</a></li>
                                        <li><a href="pricing.html">Pricing</a></li>
                                        <li><a href="offers.html">Offers</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#"> Pages
                                        <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="page_image-gallery.html">Basic with Gallery</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="page_edit.html">Add Listing</a></li>
                                        <li><a href="mylistings.html">My Listings</a></li>
                                        <li><a href="listing.html">Listing Preview</a></li>
                                        <li><a href="page_faq.html">FAQ</a></li>
                                        <li><a href="page_featured.html">Featured</a></li>
                                        <li><a href="page_agents.html">Agents</a></li>
                                        <li><a href="page_profile.html">Agent Profile</a></li>
                                        <li className="dropdown dropdown-submenu">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Blog<span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="blog-grid.html">Blog Grid</a></li>
                                                <li><a href="blog-grid-side.html">Blog Grid Sidebar</a></li>
                                                <li><a href="blog-default.html">Blog standard</a></li>
                                                <li><a href="blog-preview.html">Open Post</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="page_cart.html">Cart</a></li>
                                        <li><a href="component_accordions.html">Components</a></li>
                                        <li><a href="page_invoice.html">Invoice</a></li>
                                        <li><a href="page_contact.html">Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </header>
    )
  }
}
export default Navbar;