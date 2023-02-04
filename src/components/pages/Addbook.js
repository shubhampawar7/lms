import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";


function Addbook(){
    const [modal ,setmodel]=useState(false)
    return(
        <>
        <div>
        <Modal size="lg" isOpen={modal} toggle={()=>setmodel(!modal)}>

            <ModalHeader>
                    popup
            </ModalHeader>
        </Modal>

        </div>

        </>
    );
}

export default Addbook;