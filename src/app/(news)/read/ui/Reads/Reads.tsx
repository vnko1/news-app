"use client";
import React, { FC } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { NotFoundComponent } from "@/components";
import { getDateArr } from "@/utils";

import { ReadsProps } from "./Reads.type";
import { Article } from "@/app/(news)/ui";

const Reads: FC<ReadsProps> = ({ reads }) => {
  if (reads) {
    const date = getDateArr(reads);
    const keys = Object.keys(reads);
    const readsArr = keys.map((key) => reads[key]);

    return date.reverse().map((readDate, i) => {
      return (
        <Accordion key={i} defaultExpanded={i === 0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {readDate}
          </AccordionSummary>
          <AccordionDetails>
            {readsArr
              .filter((read) => readDate === read.read_date)
              .map((read) => (
                <Article key={read.id} {...read} />
              ))}
          </AccordionDetails>
        </Accordion>
      );
    });
  }

  return (
    <NotFoundComponent
      classNames="cards-not-found"
      message="You haven't read any news yet"
    />
  );
};

export default Reads;
