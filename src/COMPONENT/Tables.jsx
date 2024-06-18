import React, { useContext, useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { FaEdit, FaEye, FaOpencart } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { sample } from '../App';


const Tables = () => {
  const { product, setedit, setproduct } = useContext(sample);
  const [first, setfirst] = useState(null);
  const [show, setShow] = useState(false);
  const [del, setdel] = useState([]);
  const [shows, setShows] = useState(false);
  const [searchs, setsearchs] = useState('');
  const [filteredproduct, setfilteredproduct] = useState([]);
  const handleClose = () => setShow(false);
  const handleCloses = () => setShows(false);
  const nav = useNavigate();

  const openModal = (id) => {
    setfirst(id);
    setShow(true);
  };

  const filt = product.filter((item) => item.id === first);
  const filterProduct = [filt[0]];

  const openForm = (id) => {
    nav("/edit");
    setedit(id);
  };

  const openmodals = (id) => {
    setShows(true);
    setdel(id);
  };

  const handleDelete = () => {
    const updatedProductList = product.filter((item) => item.id !== del);
    setproduct(updatedProductList);
    setShows(false);

  };

  const getInpt = (e) => {
    setsearchs(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchList = product.filter((item) => item.title.toLowerCase().includes(searchs));
    setfilteredproduct(searchList);
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <FaOpencart className="table-icon" />
        <h3 className="table-title">PRODUCTS</h3>
        <Form className="search-form" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="search-input"
            aria-label="Search"
            onChange={getInpt}
            name="title"
          />
          <Link to={"/createproduct"} className="create-link">
            <Button className="create-button">Create Product</Button>
          </Link>
        </Form>
      </div>
      <Table striped bordered hover className="product-table">
        <thead className="table-head">
          <tr className="table-row">
            <th>S/No</th>
            <th>TITLE</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>STOCK</th>
            <th colSpan="3">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {(searchs.length > 0 ? filteredproduct : product).map((arg) => (
            <tr key={arg.id} className="table-row">
              <td>{arg.id}</td>
              <td>{arg.title}</td>
              <td>{arg.category}</td>
              <td>${arg.price}</td>
              <td>{arg.stock}</td>
              <td className="action-icon"><FaEye style={{ color: "green" }} onClick={() => openModal(arg.id)} /></td>
              <td className="action-icon"><FaEdit style={{ color: "blue" }} onClick={() => openForm(arg.id)} /></td>
              <td className="action-icon"><RiDeleteBin6Fill style={{ color: "red" }} onClick={() => openmodals(arg.id)} /></td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>{filterProduct[0]?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={filterProduct[0]?.thumbnail} className="modal-img" alt="" />
          <p>{filterProduct[0]?.description}</p>
          <p><strong>Price:</strong> ${filterProduct[0]?.price}</p>
          <p><strong>Stock:</strong> {filterProduct[0]?.stock}</p>
          <p><strong>Discount Percentage:</strong> {filterProduct[0]?.discountPercentage}%</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={shows} onHide={handleCloses} dialogClassName="custom-modal">
        <Modal.Body>Are you sure to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDelete}>Delete</Button>
          <Button variant="primary" onClick={handleCloses}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Tables;
