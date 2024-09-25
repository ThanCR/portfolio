import { useState} from 'react';
import './Card.css';
import { useEffect } from 'react';

function Card({ imageURL, title, description, customClass, URL = '', }) {
  const imageWidth = 80;
  const imageHeight = 80;
  const [projectDescription, setProjectDescription] = useState(description);

  useEffect(() => {
    setProjectDescription(description)
  }, [])

  const handleRedirect = () =>{
    if(URL != ''){
      window.open(URL, '_blank');
    }
  }

  return (
    <div className={`Card ${customClass}`} onClick={handleRedirect}>
      {projectDescription === '' || projectDescription === undefined ? (
        <>
          <img className='bigger-image' src={imageURL} alt="Skill" width={imageWidth} height={imageHeight} />
          <h3 className='center'>{title}</h3>

        </>
      ) : (
        <>
          <img src={imageURL} alt="Skill" width={imageWidth} height={imageHeight} />
          <h3>{title}</h3>
          <p>{description}</p>
        </>

      )
      }
    </div>
  );
}

export default Card;
