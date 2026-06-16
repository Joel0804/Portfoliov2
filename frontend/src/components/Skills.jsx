import { useEffect, useState } from "react"
import axios from 'axios' 
function Skills(){
        const [skills, setskills] = useState([]) 
        useEffect(()=>{
          axios.get("http://127.0.0.1:8000/api/skills/")         
          .then(res => setskills(res.data))   
        },[])
        return (
  <section id="skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skills.map((skill) => (
        <div key={skill.id} data-aos="fade-up">
          {skill.name}
        </div>
      ))}
    </div>
  </section>
)
}

export default Skills