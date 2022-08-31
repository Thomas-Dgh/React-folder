import React, { useState } from 'react'
import './Modal.css'


export default function Modal() {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <>
            <button onClick={toggleModal} className="btn-modal">Open</button>

            {modal && (
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Hello Modal</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates sequi velit doloribus corrupti cum nostrum fugit dicta perspiciatis molestias, voluptate quod, exercitationem laboriosam nemo quasi? Dolorum amet asperiores ipsa sint dolorem incidunt cumque repudiandae iste beatae temporibus nulla sequi nobis et eius, laudantium itaque vero vel minima rem perspiciatis laborum!</p>
                            <button onClick={toggleModal} className="close-modal">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
