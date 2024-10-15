import React, { useEffect, useState } from "react";

import styles from "./Faqs.module.css";

import Faq from "./Faq";
import useFetch from "./useFetch";
function Faqs() {
  const { isLoading, isErr, faqs, faqId, handleToggle } =
    useFetch("/data.json");
  return (
    <div className={styles["home-container"]}>
      {isLoading && <p>Data is loading...</p>}
      {isErr && <p>{isErr}</p>}
      {faqs &&
        faqs.map((faq) => {
          return (
            <Faq
              key={faq.id}
              {...faq}
              onToggle={() => handleToggle(faq.id)}
              isOpen={faq.id === faqId}
            />
          );
        })}
    </div>
  );
}

export default Faqs;
