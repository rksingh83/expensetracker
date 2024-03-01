import React, { useState } from "react";
import { Form, Input, message, Modal, Select } from "antd";
import Spinner from "./Spinner";
import axios from "axios";


const getUserDetails = (userId, list = [])=>{
    for(let i = 0; i < list.length; i++){
        if(list[i]._id === userId){
            return list[i];
        }
    }
     
}
function AddEditTransaction({
  setShowAddEditTransactionModal,
  showAddEditTransactionModal,
  selectedItemForEdit,
  setSelectedItemForEdit,
  getTransactions,
  userList,
}) {

  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      setLoading(true);
      const {name, userType, _id} = getUserDetails(values?.userId, userList)
      const request = {...values,userName:name, category:userType, attachedUserId:_id }
      
      if (selectedItemForEdit) {
        await axios.post("/api/transactions/edit-transaction", {
          payload: {
            ...request,
            userid: user._id,
          },
          transactionId: selectedItemForEdit._id,
        });
        getTransactions();
        message.success("Transaction Updated successfully");
      } else {

        await axios.post("/api/transactions/add-transaction", {
          ...request,
          userid: user._id,
        });
        getTransactions();
        message.success("Transaction added successfully");
      }
      setShowAddEditTransactionModal(false);
      setSelectedItemForEdit(null);
      setLoading(false);
    } catch (error) {
      message.error("Something went wrong");
      setLoading(false);
    }
  };
  return (
    <Modal
      title={selectedItemForEdit ? "Edit Transaction" : "Add Transaction"}
      visible={showAddEditTransactionModal}
      onCancel={() => setShowAddEditTransactionModal(false)}
      footer={false}
    >
      {loading && <Spinner />}
      <Form
        layout="vertical"
        className="transaction-form"
        onFinish={onFinish}
        initialValues={selectedItemForEdit}
      >
        <Form.Item label="Amount" name="amount">
          <Input type="text" />
        </Form.Item>

        <Form.Item label="Type" name="type">
          <Select>
            <Select.Option value="income">Income</Select.Option>
            <Select.Option value="expence">Expence</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Category" name="userId">
          <Select>
            {userList?.map((user) => (
              <Select.Option key={user?._id} value={user?._id}>
                {user.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Date" name="date">
          <Input type="date" />
        </Form.Item>

        <Form.Item label="Reference" name="reference">
          <Input type="text" />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input type="text" />
        </Form.Item>

        <div className="d-flex justify-content-end">
          <button className="primary" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </Modal>
  );
}

export default AddEditTransaction;
