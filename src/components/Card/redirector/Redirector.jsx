import { useEffect } from 'react';
import './Redirector.css';
import { useNavigate } from 'react-router-dom';

function Redirector({URL}) {

    const navigate = useNavigate();

    useEffect(() =>{
        navigate(URL)
    }, [naviate, URL])

  return (
    <div className="Redirector">
        Redirecting.....
    </div>
  );
}

export default Redirector;
