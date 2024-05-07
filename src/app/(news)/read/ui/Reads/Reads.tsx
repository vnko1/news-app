"use client";
import React, { FC } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NotFoundComponent } from "@/components";
import { useProfileContext } from "@/context";
import { getDateArr } from "@/utils";

const Reads: FC = () => {
  const { read } = useProfileContext();
  const dates = getDateArr(read);
  console.log("🚀 ~ dates:", dates);

  //   if (!read)
  //     return (
  //       <NotFoundComponent
  //         classNames="cards-not-found"
  //         message="You haven't read any news yet"
  //       />
  //     );

  return (
    <Accordion>
      {[].map((el, id) => (
        <div key={id}>
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
        </div>
      ))}
    </Accordion>
  );
};

export default Reads;
