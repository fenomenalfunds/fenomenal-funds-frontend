import React, {Component} from "react";
import propTypes from 'prop-types';
import styles from './../styles/main-layout.module.scss';
import Navigation from "../components/navigation";
import Grid from '@material-ui/core/Grid';
import Footer from "../components/footer";

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuActive: false
		}
		this.toggleState = this.toggleState.bind(this);
	}

	toggleState () {
		this.setState({
			menuActive: !this.state.menuActive
		})
	}

	render() {

		return <div className={styles.layout}>

			<Grid container justify="center">
				{this.props.children}
			</Grid>

			<Footer />
		</div>
	}
}

Layout.propTypes = {
	children: propTypes.node.isRequired
}

export default Layout;