import {useRef} from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function ProjectForm({onSaveProject, onCancel}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const modalRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        //validtion
        if (enteredTitle.trim() === ''  || enteredDescription.trim() === '') {
            modalRef.current.open();
            return;
        }

        onSaveProject(
            {
                title: enteredTitle,
                description: enteredDescription,
                dueDate: enteredDueDate
            }
        );
    }

    return (
        <>
            <Modal ref={modalRef} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
                <p className="text-stone-600 mb-4">Oops... loks like you forgot to enter a value.</p>
                <p className="text-stone-600 mb-4">Please make sure you provid a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
                    <li>
                        <button
                            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={titleRef} label="Title" />
                    <Input ref={descriptionRef} label="Description" textarea />
                    <Input type="date" ref={dueDateRef} label="Due Date" />
                </div>
            </div>
        </>
    );
}