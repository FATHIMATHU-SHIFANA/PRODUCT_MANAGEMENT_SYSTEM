import React, { useContext, useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import { sample } from '../App';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {
  const nav = useNavigate();
  const { product, edit, setproduct } = useContext(sample);

  const [fill] = product.filter((item) => item.id === edit);
  const [data, setdata] = useState("");

  const getValue = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submits = (e) => {
    e.preventDefault();

    const updatedProduct = product.map((item) =>
      item.id === edit ? { ...item, ...data } : item
    );

    setTimeout(() => {
      nav( data!==""?'/tables':"");
    }, 3000);

    setproduct(updatedProduct);
  };
  const notify = () => {
    if (data === "") {
      toast.error('Error: All fields are required.');
    } else {
      toast.success('Product is edited successfully');
    }
  };


  return (
    <div className="create-product-container">
      
          <h1 className="page-title ">Edit Form</h1>
          <Form className='w-50 m-auto mt-5' onSubmit={submits}>
            <Form.Group className="mb-3" controlId="formBasicId">
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Id"
                defaultValue={fill?.id}
                onChange={getValue}
                name="id"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                defaultValue={fill?.title}
                onChange={getValue}
                name="title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                defaultValue={fill?.category}
                onChange={getValue}
                name="category"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price"
                defaultValue={fill?.price}
                onChange={getValue}
                name="price"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Stock"
                defaultValue={fill?.stock}
                onChange={getValue}
                name="stock"
              />
            </Form.Group>

            <Button onClick={notify} type="submit" className="w-100 submit-btn">
              Submit
            </Button>
            <ToastContainer />
          </Form>
        
    </div>
  );
};

export default Edit;
