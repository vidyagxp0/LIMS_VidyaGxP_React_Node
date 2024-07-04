import React, { useState } from 'react';
import { TiArrowRightThick, TiArrowLeftThick } from 'react-icons/ti';
import { CModal, CModalHeader, CModalTitle, CModalBody, CFormInput, CButton, CModalFooter, CFormTextarea } from '@coreui/react';

const WorkSheetModal = (_props) => {
	const [leftArray, setLeftArray] = useState(["Description"]);
	const [rightArray, setRightArray] = useState([]);

	const moveRight = () => {
		let leftElement = document.getElementsByClassName("check-left");
		for (let index = 0; index < leftElement.length; index++) {
			if (leftElement[index].checked) {
				let data = leftElement[index].value;
				let left = leftArray.filter((value) => value !== data);
				setLeftArray(left);
				rightArray.push(data);
				setRightArray([...rightArray]);
				break; // Important
			}
		}
	};

	const moveLeft = () => {
		let rightElement = document.getElementsByClassName("check-right");
		for (let index = 0; index < rightElement.length; index++) {
			if (rightElement[index].checked) {
				let data = rightElement[index].value;
				let right = rightArray.filter((value) => value !== data);
				setRightArray(right);
				leftArray.push(data);
				setLeftArray([...leftArray]);
				break; // Important
			}
		}
	};

	const clicked = (event) => {
		let checkboxes = document.querySelectorAll(".check-left, .check-right");
		checkboxes.forEach((checkbox) => {
			checkbox.checked = false;
		});
		let allLabels = document.querySelectorAll(".labels");
		allLabels.forEach((label) => {
			label.classList.remove("clicked");
		});

		let label = event.target;
		label.classList.add("clicked");
		label.checked = true;
	};

	return (
		<CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
			<CModalHeader>
				<CModalTitle>Add Worksheets</CModalTitle>
			</CModalHeader>
			<CModalBody>
				<p>Add information about Worksheet</p>
				<CFormInput className="mb-3" type="text" label="Type" placeholder="Worksheet" readOnly />
				<CFormInput className="mb-3" type="text" label="Name" placeholder="Name" />
				<label htmlFor="drag-drop" className="">User Defined Worksheet fields</label>
				<div className="d-flex" id="drag-drop">
					<div className="w-100 m-3">
						<h5>Available</h5>
						<div className="shadow p-2 rounded border overflow-y-auto" style={{ height: "350px" }}>
							<ul className="list-group">
								{leftArray.map((data) => (
									<li key={data} className="bg-light rounded my-1 px-3 py-1 text-dark">
										<input type="checkbox" value={data} id={data} className="check-left d-none" />
										<label className="labels cursor-pointer bg-light" htmlFor={data} onClick={clicked}>
											{data}
										</label>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="m-auto justify-content-center">
						<button className="btn shadow py-1 px-3 mt-5 text-warning fs-4" onClick={moveRight}>
							<TiArrowRightThick />
						</button>
						<button className="btn shadow py-1 px-3 mt-2 text-warning fs-4" onClick={moveLeft}>
							<TiArrowLeftThick />
						</button>
					</div>
					<div className="w-100 m-3">
						<h5>Selected</h5>
						<div className="shadow p-2 rounded border overflow-y-auto" style={{ height: "350px" }}>
							<ul className="list-group">
								{rightArray.map((data) => (
									<li key={data} className="bg-light rounded my-1 px-3 py-1 text-dark">
										<input type="checkbox" value={data} id={data} className="check-right d-none" />
										<label className="labels cursor-pointer bg-light" htmlFor={data} onClick={clicked}>
											{data}
										</label>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<h5>Uniformity of Dosage Units:</h5>
				<CFormInput className="mb-3" type="text" label="GTP No:" placeholder="GTP No" />
				<CFormInput className="mb-3" type="text" label="Method Validation No:" placeholder="Method Validation No" />
				<CFormTextarea className="mb-3" type="text" label="Description:" placeholder="Description" />
			</CModalBody>
			<CModalFooter>
				<CButton color="light" onClick={_props.closeModal}>Back</CButton>
				<CButton className="bg-info text-white">Submit</CButton>
			</CModalFooter>
		</CModal>
	);
}

export default WorkSheetModal;
