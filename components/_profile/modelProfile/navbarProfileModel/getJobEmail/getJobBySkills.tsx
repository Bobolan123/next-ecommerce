'use client'

import FormGetJobBySkills from "./formGetJobEmail";
import { getAllSkills } from "./actions/getJobEmailServerActions";

export default async function GetJobBySkills() {
  const skills  = await getAllSkills()
  return <div>
    <FormGetJobBySkills skills = {skills}/>
    
  </div>;
}
