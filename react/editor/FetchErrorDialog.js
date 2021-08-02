/**
 * @file FetchErrorDialog.js
 * @author Vladan Kudlac <vladankudlac@gmail.com>
 */

import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement(document.body);

export default class FetchErrorDialog extends Component {

	render() {
		return (
			<div>
				<Modal
					isOpen={true}
					contentLabel="Chyba komunikace se serverem"
					className={'modal'}
					overlayClassName={'overlay'}
				>

					<h2 className={'error'}><img src={'/icons/error.svg'} alt={'error'}/>서버와 통신하는 동안 오류가 발생</h2>
					<div>
						<i>{this.props.msg}</i>
						<p>다시 시도하거나 브라우저에서 페이지를 새로고침하세요.</p>
						<button onClick={() => this.props.onClose()}>닫기</button>
					</div>
				</Modal>
			</div>
		);
	}
}

FetchErrorDialog.propTypes = {
	msg: PropTypes.string,
	onClose: PropTypes.func.isRequired,
};
