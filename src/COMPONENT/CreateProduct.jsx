import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { sample } from '../App'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const CreateProduct = () => {
  const nav = useNavigate()
  const { product, setproduct } = useContext(sample)
  const [input, setinput] = useState("")
  const getInput = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
  }
  console.log(input);

  const submit = (e) => {
    e.preventDefault();
    setproduct(input !== "" ? [...product, input] : product);

    setTimeout(() => {
      nav( input!==""?'/tables':"");
    }, 3000);

  };
  const notify = () => {
    if (input === "") {
      toast.error('Please fill in all fields');
    } else {
      toast.success('Product created successfully');
    }
  }
  return (
    <div className="create-product-container">

      <h2 className="page-title">Create Product</h2>
      <Form className='w-50 m-auto mt-5' onSubmit={submit} >
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>Id</Form.Label>
          <Form.Control 
          type="number" 
          placeholder="Enter Id" 
          onChange={getInput} 
          name="id" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter Title" 
          onChange={getInput} 
          name="title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter Category" 
          onChange={getInput} 
          name="category" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control 
          type="number" 
          placeholder="Enter Price" 
          onChange={getInput} 
          name="price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicStock">
          <Form.Label>Stock</Form.Label>
          <Form.Control 
          type="number" 
          placeholder="Enter Stock" 
          onChange={getInput} 
          name="stock" />
        </Form.Group>

        <Button onClick={notify} variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default CreateProduct;
