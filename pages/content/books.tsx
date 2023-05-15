import * as React from "react";
import { NextPage, GetStaticProps } from "next";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavBar from "@/components/NavBar";

const Books: NextPage<{
  books: {
    author: string;
    dateFinish: string;
    dateStart: string;
    rating: string;
    review: string;
    title: string;
  }[];
}> = (props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="justify-between items-center bg-gradient-to-b from-slate-600 to-slate-900 p-10 w-screen h-max">
      <NavBar />
      <div className="flex flex-row pt-5 border-b-2 border-white pb-2">
        <div className="w-1/3 h-full">
          <p className = "font-bold font-sans text-[#b3f2ff] text-3xl pl-3">Title</p>
        </div>
        <div className="w-1/3"></div>
        <div className="w-1/3 justify-center text-center">
          <p className = "font-bold font-sans text-[#b3f2ff] text-3xl">Score</p>
        </div>
      </div>
      <div className="pt-3 ">
        {props.books.map((data, index) => {
          const panel = "panel" + (index + 1).toString();
          const ariaControls = panel + "bh-content";
          const panelID = panel + "2bh-header";

          if (data.rating == "did not like it") {
            data.rating = "1";
          } else if (data.rating == "it was ok") {
            data.rating = "2";
          } else if (data.rating == "liked it") {
            data.rating = "3";
          } else if (data.rating == "really liked it") {
            data.rating = "4";
          } else if (data.rating == "it was amazing") {
            data.rating = "5";
          }

          let [review, overallScore] = data.review.split("Overall Score: ");

          return (
            <Accordion
              expanded={expanded === panel}
              onChange={handleChange(panel)}
              className="bg-inherit shadow-sm shadow-[#b3f2ff]/50"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={ariaControls}
                id={panelID}
              >
                <Typography
                  className="font-bold font-sans text-[#b3f2ff] text-lg"
                  sx={{ width: "84%", flexShrink: 0 }}
                >
                  {data.title}
                </Typography>
                <Typography className="font-sans text-[#b3f2ff] text-med">
                  {overallScore}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="font-sans text-[#b3f2ff] text-sm">
                <p className="pb-2">{data.author}</p>
                <p className="pb-5">
                  Read from: {data.dateStart} - {data.dateFinish}
                </p>
                <Typography className="font-mono text-[#b3f2ff] text-med">
                  {review}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const books = (await import("../../static/bookReviews.json")).Books;

  return {
    props: { books },
  };
};

export default Books;
