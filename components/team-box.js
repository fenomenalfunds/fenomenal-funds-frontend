import React, {Component} from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import styles from './../styles/components/team-box.module.scss';
import TeamMember from "./team-member";
import ClearOverlay from "./clear-overlay";
import {useState} from "react";

class TeamBox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
			title: '',
			text: '',
			subtitle: '',
			image: null
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClick = (name, subtitle, text, image) => {
		return this.setState({
			open: true,
			title: name,
			subtitle: subtitle,
			text: text,
			image: image
		})
	}

	handleClose = () => {
		return this.setState({
			open: false,
			title: '',
			subtitle: '',
			text: '',
			image: null
		})
	}

render() {
	const {title, members, variant} = this.props;

	return <section className={`${styles.teamBox} ${variant && styles.alt}`}>
			<h2 className={styles.title}>{title}</h2>

			<div className={styles.members}>
				{_.map(members, (member, key) => {
					return <TeamMember
							key={key}
							name={member.fullname}
							slug={member.username}
							position={member.position}
							image={member.photo}
							func={() => this.handleClick(member.fullname, member.position, member.about, member.photo)}
					/>
				})}
			</div>

			<ClearOverlay
					open={this.state.open}
					title={this.state.title}
					text={this.state.text}
					image={this.state.image}
					func={this.handleClose}
			/>
		</section>
	}
}

TeamBox.propTypes = {
	title: propTypes.string.isRequired,
	members: propTypes.array.isRequired,
	variant: propTypes.bool
}

TeamBox.defaultProps = {
	title: 'Please add title',
	members: [],
	variant: true
}

export default TeamBox;