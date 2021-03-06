/**
 * Created by abautista on 30/08/2016.
 */
var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render: function(){
        return (
            <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
                <h1>
                    Perfect Summer!
                </h1>
                <p className = 'lead'>Find your perfect destination for this summer</p>
                    <Link to='/questionsToFulfill'>
                        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
                    </Link>
            </div>
        )}
});

module.exports = Home;
