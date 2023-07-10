import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      level: "HTML",
      count: 95,
    },
    {
      logo: "logo-css3",
      level: "CSS",
      count: 91,
    },
    {
      logo: "logo-nodejs",
      level: "JS",
      count: 80,
    },
    {
      logo: "logo-react",
      level: "REACT",
      count: 90,
    },
    {
      logo: "logo-wordpress",
      level: "WORDPRESS",
      count: 89,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-accent/10 relative">
      <div className="mt-8 text-txtcolor text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-primary">Skills</span>
        </h3>
        <p className="text-secondary mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="group relative min-w-[10rem] max-w-[16rem] bg-accent p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(195,55,100) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-white rounded-full flex items-center justify-center group-hover:text-primary">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
