"use client";
import React, { FC } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { NotFoundComponent } from "@/components";
import { getDateArr } from "@/utils";

import { ReadsProps } from "./Reads.type";

const Reads: FC<ReadsProps> = ({ reads }) => {
  if (reads) {
    const dates = getDateArr(reads);
    console.log("🚀 ~ dates:", dates);

    return dates.map((el, i) => {
      return (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {el}
          </AccordionSummary>
          <AccordionDetails>
            <div className="cards-container"></div>
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
