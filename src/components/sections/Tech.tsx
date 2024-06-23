import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <>
    <div className="flex justify-center " style={{fontWeight:'600' ,fontSize:'30px'}}>
          <h1>Skills</h1>
     </div>
     <br />
      <div className="flex flex-row flex-wrap justify-center gap-10">
       
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <h2 className="ms-3">{technology.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
