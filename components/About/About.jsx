import Nav from "../NavBar/Nav";
import classes from "./index.module.css";
import Image from "next/image";

export default function About() {
  let allProfiles = [
    {
      name: "Christian Afriyie Darko",
      tile: "Computer Engineering Student",
      position: "Group Member",
    },
    {
      name: "Elisha Kotey",
      tile: "Computer Engineering Student",
      position: "Group Member",
    },
    {
      name: "John Anim Addo",
      tile: "Computer Engineering Student",
      position: "Group Member",
    },
  ];
  return (
    <>
      <Nav />
      <section className={classes.Container}>
        <h3 className={classes.Heading}>About.</h3>
        <h5 className={classes.SmallHeading}>Introduction</h5>
        <p className={classes.Paragraph}>
          Welcome to the About page of our Final Year Research Project website!
          As a group, we are passionate about exploring innovative solutions to
          address the challenges posed by environmental changes. Our final year
          research project focuses on leveraging the power of Artificial
          Intelligence (AI) and Machine Learning (ML) to predict forest cover
          changes in response to climate factors.
        </p>
        <div className={classes.ImageContainer}>
          <Image src="/ai.jpg" layout="fill" alt="" />
          <main className={classes.Main}>
            <span className={classes.First}>AI</span>
            <span className={classes.Second}>Machine Learning</span>
          </main>
        </div>
        <div className={classes.SmallImageContainer}>
          <Image src="/climate.jpg" layout="fill" alt="" />
          <main className={classes.Main}>
            <span className={classes.First}>Climate</span>
            <span className={classes.Second}>There Is No Planet B</span>
          </main>
        </div>
        <div className={classes.Us}>
          <div className={classes.Who}>
            <h3>Importance of the Project</h3>
            <p>
              Forests play a vital role in maintaining ecological balance,
              supporting biodiversity, and mitigating climate change. <br />
              However, they face increasing threats due to anthropogenic
              activities and changing climatic conditions. <br />
              Understanding how forests respond to climate variables is crucial
              for effective conservation and sustainable management
            </p>
          </div>
          <div className={classes.Who}>
            <h3>Project Objectives</h3>
            <p>
              Our project aims to develop a predictive model that can estimate
              the impact of precipitation, rainfall, and temperature on forest
              cover changes. Data Collection and Preprocessing: Comprehensive
              datasets encompassing climate data, forest cover data, and
              relevant geographical information are gathered. Feature
              Engineering: Essential features are identified and extracted from
              the collected data to optimize the input for our AI and ML
              algorithms. Model Development: A robust predictive model is built
              using state-of-the-art AI and ML techniques, ensuring accuracy and
              generalizability. Analysis and Interpretation: Results obtained
              from the model are analyzed to uncover valuable insights into the
              relationship between climate variables and forest cover changes.
              Practical Implications: The outcomes of our study will provide
              valuable guidance to policymakers, environmental organizations,
              and forest managers, enabling informed decisions and proactive
              measures for forest conservation.
            </p>
          </div>
          <div className={classes.Who}>
            <h3>Methodology</h3>
            <p>
              Data Collection and Preprocessing: Comprehensive datasets
              encompassing climate data, forest cover data, and relevant
              geographical information are gathered. Feature Engineering:
              Essential features are identified and extracted from the collected
              data to optimize the input for our AI and ML algorithms. Model
              Development: A robust predictive model is built using
              state-of-the-art AI and ML techniques, ensuring accuracy and
              generalizability. Analysis and Interpretation: Results obtained
              from the model are analyzed to uncover valuable insights into the
              relationship between climate variables and forest cover changes.
            </p>
          </div>
          <div className={classes.Who}>
            <h3>Implications and Impact</h3>
            <p>
              The project aims to bridge the gap between scientific knowledge
              and real-world applications. The outcomes of our study will
              provide valuable guidance to policymakers, environmental
              organizations, and forest managers, enabling informed decisions
              and proactive measures for forest conservation.
            </p>
          </div>
          <div className={classes.Who}>
            <h3>Conclusion</h3>
            <p>
              Through our research, we strive to contribute to the body of
              knowledge surrounding forest conservation and climate change
              adaptation. Our project exemplifies the potential of AI and ML
              technologies in addressing pressing environmental concerns and
              fostering sustainable development.
            </p>
          </div>
          <div className={classes.Who}>
            <h3>Call to Action</h3>
            <p>
              We invite you to explore our website further to gain a deeper
              understanding of our research objectives, methodologies, and
              outcomes. We are excited to share our findings and contribute to
              the collective efforts aimed at preserving our planet&apos;s
              precious forest resources. Thank you for visiting our website, and
              we appreciate your interest in our final year research project!
            </p>
          </div>
        </div>
        <div className={classes.Vr}>
          <div
            style={{ width: "3px", height: "100%", backgroundColor: "violet" }}
          ></div>
        </div>
        <section className={classes.Directors}>
          <h3 className={classes.DirectHeading}>Profile of Group Members</h3>
          <div className={classes.Profiles}>
            {allProfiles.map((el, i) => (
              <div className={classes.Profile} key={i}>
                <div className={classes.AnotherImageContainer}>
                  <Image src="/avatar.jpg" layout="fill" alt="" />
                </div>
                <div className={classes.Name}>{el.name}</div>
                <div className={classes.Title}>{el.tile}</div>
                <div className={classes.Position}>
                  {el.position}
                  <hr />
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* <div className={classes.Achievements}>
        <h3 className={classes.AchievHeading}>Our Achievements</h3>
        <p className={classes.AnotherParagraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          accusantium dolorum magni doloremque sequi architecto facilis aliquid
          inventore impedit quibusdam nulla aliquam, sapiente eligendi rem qui
          magnam et minus facere?
        </p>
      </div> */}
      </section>
    </>
  );
}
