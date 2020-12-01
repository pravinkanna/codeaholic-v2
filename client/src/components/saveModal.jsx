// import React, { useContext, useRef } from "react";
// import { Modal, Form, Button } from "react-bootstrap";

// import { IdeContext } from "../contexts/IdeContext";

// const { saveModalShow, setSaveModalShow } = useContext(IdeContext);

// function modalSave() {
// 	const fileNameBox = useRef(null);

// 	const hideModal = () => {
// 		setSaveModalShow(false);
// 	};

// 	const submitSave = async () => {
// 		const fileName = fileNameBox.current.value;
// 		if (loginEmail && loginPassword) {
// 			const res = await auth.login(loginEmail, loginPassword);
// 			if (res.data === "Unauthorized") {
// 				setWrongLoginCredentials(true);
// 			} else {
// 				setWrongLoginCredentials(false);
// 				setIsAuthenticated(true);
// 				setLoginModalShow(false);
// 			}
// 		} else {
// 			setWrongLoginCredentials(true);
// 		}
// 	};

// 	return (
// 		<div className="IdeModal">
// 			<Modal show={saveModalShow} className="modal" size="sm" aria-labelledby="contained-modal-title-vcenter" onHide={hideModal} centered>
// 				<Modal.Header closeButton onClick={hideModal}>
// 					<Modal.Title>Save File</Modal.Title>
// 				</Modal.Header>
// 				<Modal.Body>
// 					<Form onSubmit={submitSave}>
// 						<Form.Group controlId="formFileName">
// 							<Form.Label>File Name </Form.Label>
// 							<Form.Control ref={fileNameBox} onChange={handleSave} type="text" placeholder="Enter file name" value={fileName} />
// 						</Form.Group>
// 						<Button variant="primary" onClick={submitSave} block>
// 							Save
// 						</Button>
// 					</Form>
// 				</Modal.Body>
// 			</Modal>
// 		</div>
// 	);
// }

// export default modalSave;
