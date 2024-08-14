import ResumeCard from "./attributes/ResumeCard";

export default function () {
return (
<>
<div className="flex justify-center mt-5">
<div className="flex flex-col">
<h1 className="text-white text-5xl text-center  ">My resume</h1>
<hr className="w-full"></hr>

<div className="flex flex-row mt-5 justify-center " id="resume">
    <ResumeCard  name={"Stachanov"} date={"may-2023 | Sep-2023"} location={"Amsterdam | Part-time"} description={"After successfully completing my internship, I received a contract offer. At STACHANOV, I primarily developed my soft skills and gained experience with test-driven development"} />    
    <ResumeCard name={"Toertje"} date={"Jan-2024 | june-2024"} location={"Amsterdam | Internship"} description={"At Toertje, I worked on the Toertje app, where I gained extensive experience with React Native (TypeScript) and Styled Components. Additionally, I represented Toertje at the Jaarbeurs in Utrecht and gained valuable experience working in a start-up environment"}  />    
    <ResumeCard name={"Brasa"} date={"june-2022 | feb-2023"} location={"Middenbeemster | Part-time"} description={"At this company, I learned to work under pressure and complete my tasks on time."} />    
    </div>    


</div>

</div>
</>
)
}