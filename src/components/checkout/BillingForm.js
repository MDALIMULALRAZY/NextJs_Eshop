import React from "react";
import { Row, Col } from "react-bootstrap";

const BillingForm = () => {
  return (
    <div className="checkout-item">
      <h4>FACTURATION</h4>
      <div className="billing-form-wrap form-default">
        <form>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="f_name" className="required">
                  Nom
                </label>
                <input
                  type="text"
                  id="f_name"
                  placeholder="Nom"
                  className="form-control"
                  required
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="l_name" className="required">
                  Prénom
                </label>
                <input
                  type="text"
                  id="l_name"
                  placeholder="Prénom"
                  className="form-control"
                  required
                />
              </div>
            </Col>
          </Row>
          <div className="form-group">
            <label htmlFor="email" className="required">
              Adresse mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Adresse mail"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="com-name">Compagnie (facultatif)</label>
            <input
              type="text"
              id="com-name"
              placeholder="Compagnie"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country" className="required">
              Pays
            </label>
            <select name="country" id="country" className="form-control">
              <option value="Afghanistan">MALI</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="street-address" className="required">
              Adresse de livraison 
            </label>
            <input
              type="text"
              id="street-address"
              placeholder="Rue"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Porte (facultatif)"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="town" className="required">
              Ville
            </label>
            <input
              type="text"
              id="town"
              placeholder="Ville / Quartier"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">Région</label>
            <input
              type="text"
              id="state"
              placeholder="Région"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Adresse Postale">
              Adresse Postale (facultatif)
            </label>
            <input
              type="text"
              id="postcode"
              placeholder="Adresse Postale (facultatif)"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Numero de téléphone</label>
            <input
              type="text"
              id="phone"
              placeholder="Numero de téléphone"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ordernote">Note</label>
            <textarea
              name="ordernote"
              id="ordernote"
              cols={30}
              rows={3}
              placeholder="Note pour votre commande. Ex: concernant la livraison"
              className="form-control"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingForm;
