import NavBar from "@/components/NavBar";
import { Grid, Card, Text } from "@nextui-org/react";

interface MockItemProps {
  projectName: string;
  desc:string;
  why: string; 
  link: string;
  stack: string; 
}

const MockItem: React.FC<MockItemProps> = ({ projectName, desc, why, link, stack }) => {
  return (
    <Card css={{ h: "$24", $$cardColor: "$colors$primary" }}>
      <Card.Body>
        <Text h6 size={15} color="white" css={{ mt: 0 }}>
          {projectName}
        </Text>
        <Text h6 size={15} color="white" css={{ mt: 0 }}>
          {desc}
        </Text>
        <Text h6 size={15} color="white" css={{ mt: 0 }}>
          {why}
        </Text>
        <Text h6 size={15} color="white" css={{ mt: 0 }}>
          {link}
        </Text>
        <Text h6 size={15} color="white" css={{ mt: 0 }}>
          {stack}
        </Text>
      </Card.Body>
    </Card>
  );
};

const projects = {
  Webfolio: {
    desc: "A personal web portfolio :)",
    why: "I want to learn fullstack development so I decided to create my own website. It's really helping me learn NextJS, TypeScript, and UI/UX",
    link: "https://richrosh3.github.io",
    stack: "TypeScript, JavaScript, CSS",
  },
  "GoodReads Scraper": {
    desc: "A tool to scrape the Read shelf from your personal GoodReads account.",
    why: "I absolutely hate the UI on GoodReads, so I decided to grab all the books I read and display my reviews on this site :D",
    link: "https://github.com/Richrosh3/goodReadsWebScraperAPI",
    stack: "Python",
  },
  "Online Casino": {
    desc: "A simulated FAKE online casino with single and multiplayer functionality",
    why: "This was a group project for one of my CS classes during my senior year. Taught me so much about working on code as a team, repository management, coding practices, and git",
    link: "https://github.com/Richrosh3/online-casino",
    stack: "Python, JavaScript, HTML",
  },
  "Brake System Pausability Device": {
    desc: "A printed circuit board that monitors the throttle and brake signals of an electric vehicle. Shuts does the system if the car has met dangerous conditions of driving",
    why: "This was also a group project for an electrical engineering course during my senior year. We designed this portion of the system for an electric car that was to be entered into a Formula EV competition by the UMD Racing Team",
    link: "/content/bspd",
    stack: "",
  },
};

export default function Projects(props: any) {
  return (
    <div className="justify-between items-center bg-gradient-to-b from-slate-600 to-slate-900 p-10 w-screen h-screen">
      <NavBar />
      <div id="projects" className="border">
        <Grid.Container gap={5} justify="center" wrap="wrap">
          <Grid xs={10}>
            {Object.keys(projects).map((key) => (
              <MockItem 
                projectName= {key} 
                desc= {projects[key]["desc"]}
                why = {projects[key]["why"]}
                link = {projects[key]["link"]}
                stack = {projects[key]["stack"]}
                />
            ))}
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
