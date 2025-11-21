// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/General/Wrapper";
import SplashScreen from "../../components/Splashscreen/Splash";

export default function SplashPage() {
 /* const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome"); 
    }, 8000); 

    return () => clearTimeout(timer); 
  }, [navigate]);
*/
  return (
    <Wrapper>
      <SplashScreen />
    </Wrapper>
  );
}

