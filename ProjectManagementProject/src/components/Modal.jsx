import {useImperativeHandle, useRef} from 'react';
import {createPortal} from 'react-dom';
import Button from './Button.jsx';

const Modal = function Modal({ref, children, buttonCaption}) {
    const dialogRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        };
    });
    
    return createPortal(
        <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-sm shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
}

export default Modal;