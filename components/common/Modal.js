import React, { useState } from "react";
import {
  Col,
  Media,
  Row,
  Modal,
  ModalBody,
  Input,
  Form,
  Button,
  ModalHeader,
} from "reactstrap";
import offerBanner from "../../public/assets/images/Offer-banner.png";

const ModalComponent = ({ isOpen, toggle, url }) => {

  console.log("URL recibida en el componente:", url);
  
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="theme-modsal modal-lg"
      centereds
    >
      <div>
        <ModalBody className="modal1">
          <Row className="compare-modal">
            <Col lg="12">
              <div className="modal-bg">
                <iframe
                  width="100%"
                  height="400"
                  src={url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video"
                />
              </div>
            </Col>
          </Row>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default ModalComponent;
