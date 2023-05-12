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
      <div className="py-20 ">
        {props.books.map((data, index) => {
          const panel = "panel" + (index + 1).toString();
          const ariaControls = panel + "bh-content";
          const panelID = panel + "2bh-header";
          return (
            <Accordion
              expanded={expanded === panel}
              onChange={handleChange(panel)}
            >
              <AccordionSummary
                className="bg-gradient-to-r from-emerald-200 to-blue-400"
                expandIcon={<ExpandMoreIcon />}
                aria-controls={ariaControls}
                id={panelID}
              >
                <Typography className = "font-bold text-emerald-500" sx={{ width: "33%", flexShrink: 0 }}>
                  {data.title}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {data.rating}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>{data.author}</p>
                <p>
                  Read from: {data.dateStart} - {data.dateFinish}
                </p>
                <Typography>{data.review}</Typography>
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
