import { Button, Card } from "react-bootstrap";

type ProjectProps = {
  projectImg: string;
  projectUrl: string;
  projectDesc: string;
};

function Project({ projectImg, projectUrl, projectDesc }: ProjectProps) {
  return (
    <Card className='bg-dark text-white card-container shadow-lg my-3'>
      <Card.Img src={projectImg} alt='Card image' className='darker' />
      <div className='centered d-flex flex-column justify-content-center'>
        <p className='text-center'>{projectDesc}</p>
        <Button
          href={projectUrl}
          className='btn btn-lg purple-btn-solid rounded-pill px-4'
        >
          Visit App
        </Button>
      </div>
    </Card>
  );
}

export default Project;
