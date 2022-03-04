import React from 'react';
import "./Modal.css"
export function Modal(props) {
    
	const handleClose = (evt)=>{
		 console.log(evt.target.matches('.modal-open'))
		 const hasRemover = evt.target.matches('.modal-open') || evt.target.matches('.modal__close-btn');
		if(hasRemover){
			props.elModal.current.classList.remove('modal-open')
		}
	}
	return (
		<>
			<div ref={props.elModal} className="modal" onClick={handleClose}>
                <div className="modal__inner">
                    <h1>Modal</h1>
			        <button className='modal__close-btn'>Close</button>
                </div>
            </div>
		</>
	);
}
