import { Card } from "react-bootstrap";

export const CustomCard = ({ title, ide1, ide2, ide3, text }) => {
  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>
          <div className="d-flex">
            <div className="tag rounded-pill mx-2">
              {ide1}
            </div>
            <div className="tag rounded-pill mx-2">
              {ide2}
            </div>
            <div className="tag rounded-pill mx-2">
              {ide3}
            </div>
          </div>
        </Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}