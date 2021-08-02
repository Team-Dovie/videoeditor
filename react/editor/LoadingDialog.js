/**
 * @file LoadingDialog.js
 * @author Vladan Kudlac <vladankudlac@gmail.com>
 */

import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.body);

export default class LoadingDialog extends Component {

	render() {
		return (
			<div>
				<Modal
					isOpen={true}
					contentLabel="Načítání"
					className={'modal'}
					overlayClassName={'overlay'}
				>

					<h2>비디오 편집기 로딩</h2>
					<div>
						<div className="loader"/>
					</div>
				</Modal>
			</div>
		);
	}
}
