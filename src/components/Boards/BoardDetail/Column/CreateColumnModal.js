import React, { useState } from 'react';
import Modal from '../../../../common/Modals/Modal';
import Button from '../../../../common/Buttons/Button';
import IconButton from '../../../../common/Buttons/IconButton';
import Input from '../../../../common/Inputs/Input';
import { ReactComponent as XIcon } from '../../../../assets/img/icons/x-24.svg';

const CreateColumnModal = ({ toggleShowCreateColumnModal, addColumn }) => {
  const [values, setValues] = useState({ name: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    addColumn(values);
    toggleShowCreateColumnModal();
  };
  return (
    <Modal toggleShowModal={toggleShowCreateColumnModal}>
      <form onSubmit={handleSubmit}>
        <div className="bg-white">
          <div className="text-left sm:mt-0">
            <div className="flex justify-between px-10 pt-8">
              <h3 className="text-xl font-medium tracking-tight text-gray-800 leading-6">Create Column</h3>
              <IconButton backgroundType="white" size="small" action={toggleShowCreateColumnModal}>
                <XIcon />
              </IconButton>
            </div>
            <div className="px-10 pt-6 pb-12 text-left">
              <Input
                labelText="Column Name"
                ariaLabel="Column Name"
                name="name"
                value={values.name}
                changeHandler={handleInputChange}
                type="text"
                isRequired
                color="offWhite"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-4 bg-gray-100 space-x-2 space-x-reverse sm:px-10 sm:flex sm:flex-row-reverse">
          <Button text="Save" type="submit" color="primary" size="small"></Button>
          <Button
            text="Cancel"
            type="button"
            color="tertiary"
            size="small"
            action={toggleShowCreateColumnModal}></Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateColumnModal;
