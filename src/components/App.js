import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions';

const mapStateToProps = (state) => {
	const dayOrder = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
	return{
		calendar : dayOrder.map((day) => ({
			day,
			meals : Object.keys(state[day]).reduce((meals,meal) => {
				meals[meal] = state[day][meal] ? state[day][meal] : null;
				return meals;
			},{})
		}))
	};
}

const mapDispatchToProps = (dispatch) => ({
	addRecipe : (data) => { dispatch(addRecipe(data)) },
	removeFromCalendar : (data) => { dispatch(removeFromCalendar(data)) }
});

class App extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				Hello World!
			</div>
		);
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);