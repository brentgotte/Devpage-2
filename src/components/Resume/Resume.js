import ResumeCard from "./attributes/ResumeCard";

const Resume = () => {
  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="flex flex-col">
          <h1 className="text-white text-5xl text-center">My resume</h1>
          <hr className="w-full"></hr>

          <div className="flex flex-row mt-5 justify-center" id="resume">
            <ResumeCard
              name={"Stachanov"}
              date={"may-2023 | Sep-2023"}
              location={"Amsterdam | Part-time"}
              description={
                "After successfully completing my internship, I received a contract offer. At STACHANOV, I primarily developed my soft skills and gained experience with test-driven development"
              }
            />
            <ResumeCard
              name={"Toertje"}
              date={"Jan-2024 | june-2024"}
              location={"Amsterdam | Internship"}
              description={
                "At Toertje, I worked on the Toertje app, where I gained extensive experience with React Native (TypeScript) and Styled Components. Additionally, I represented Toertje at the Jaarbeurs in Utrecht and gained valuable experience working in a start-up environment"
              }
            />
            <ResumeCard
              name={"Teacher"}
              date={"August-2025 | Present"}
              location={"Amsterdam | Part-time"}
              description={
                "   I am learning here what it’s like to guide first-year students and help them with any technical questions. This has taught me how to answer questions and how I can best teach someone something. I get a lot of satisfaction from this work, and I always say: you learn a subject best when you explain it yourself :)"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

Resume.displayName = "Resume";

export default Resume;