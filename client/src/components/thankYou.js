import React from "react";
import { Row, Col } from "reactstrap";

export default _ => {
  return (
    <div>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Completado</p>
          <i className="fas fa-grin-alt thank-you-pizza"></i>
          <p className="thanks-subtext">
            Recibiras un correo con los datos de tu registro.
          </p>
        </Col>
      </Row>
    </div>
  );
};
