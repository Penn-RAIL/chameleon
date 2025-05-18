import Card from 'react-bootstrap/Card';

export interface TeamMemberProps {
  name: string;
  institution: string;
  picture: string;
}

export function TeamMember({ name, institution, picture }: TeamMemberProps) {
  return (
    <Card className="member">
      <img src={picture} alt={`${name} photo`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{institution}</Card.Text>
      </Card.Body>
    </Card>
  );
}
