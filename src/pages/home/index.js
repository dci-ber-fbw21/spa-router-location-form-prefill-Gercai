import React, { Component } from 'react';
import './index.css';

import {
  BrowserRouter as Router,
} from "react-router-dom";

export default class HomePage extends Component {

    state= {
        queries: "",
        languages: [],
        bookType: "",
        rating: "",
    }

componentDidMount(){

    const {search} = this.props.location;
    const params = search.slice(1).split("&");
    let obj = {};

    params.forEach(
        (element) => {
            obj[element.split("=")[0]] = element.split("=")[1]
        }
    )

    this.setState({
        languages: obj.language
    })
}


    render() {

console.log(this.state.languages);

       return (
           <Router>
            <div style={{ backgroundColor: 'blue' }}>
                <div className="home-page">
                    <h1>Filters</h1>

                    <form>
                        {/* Search term */}
                        <div className="form-field">
                            <label className="form-field__label">Search</label>

                            <input
                                name="search-term"
                                type="text"/>
                        </div>

                        {/* Used */}
                        <div className="form-field">
                            <label className="checkbox-field">
                                <input name="used" type="checkbox" />
                                <span className="checkbox-field__label">Include used copies</span>
                            </label>
                        </div>

                        {/* Preferred language */}
                        <div className="form-field">
                            <label className="form-field__label">Language</label>

                            <label className="checkbox-field">
                                <input name="language" type="checkbox" />
                                <span className="checkbox-field__label">English</span>
                            </label>

                            <label className="checkbox-field">
                              
                                <input name="language" type="checkbox" checked={this.state.languages.includes("german")?true:false}/>
                              
                                <span className="checkbox-field__label">German</span>
                            </label>

                            <label className="checkbox-field">
                                <input name="language" type="checkbox" />
                                <span className="checkbox-field__label">Italian</span>
                            </label>

                            <label className="checkbox-field">
                                <input name="language" type="checkbox" />
                                <span className="checkbox-field__label">Chineese</span>
                            </label>

                            <label className="checkbox-field">
                                <input name="language" type="checkbox" />
                                <span className="checkbox-field__label">Russian</span>
                            </label>
                        </div>

                        {/* Book type */}
                        <div className="form-field">
                            <label className="form-field__label">Book type</label>

                            <label className="checkbox-field">
                                <input name="book-type" type="checkbox" />
                                <span className="checkbox-field__label">E-Book</span>
                            </label>
                            <label className="checkbox-field">
                                <input name="book-type" type="checkbox" />
                                <span className="checkbox-field__label">Paperback</span>
                            </label>
                            <label className="checkbox-field">
                                <input name="book-type" type="checkbox" />
                                <span className="checkbox-field__label">Hardcover</span>
                            </label>
                        </div>

                        {/* Rating */}
                        <div className="form-field">
                            <label className="form-field__label">Rating</label>
                            <label className="radio-field">
                                <input
                                    name="customer-rating"
                                    type="radio"
                                />
                                <span className="radio-field__label">1 and up</span>
                            </label>

                            <label className="radio-field">
                                <input
                                    name="customer-rating"
                                    type="radio"
                                />
                                <span className="radio-field__label">2 and up</span>
                            </label>

                            <label className="radio-field">
                                <input
                                    name="customer-rating"
                                    type="radio"
                                />
                                <span className="radio-field__label">3 and up</span>
                            </label>

                            <label className="radio-field">
                                <input
                                    name="customer-rating"
                                    type="radio"
                                />
                                <span className="radio-field__label">4 and up</span>
                            </label>

                            <label className="radio-field">
                                <input
                                    name="customer-rating"
                                    type="radio"
                                />
                                <span className="radio-field__label">5 and up</span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            </Router>
        )
    }
}
