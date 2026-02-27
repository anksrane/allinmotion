/* Path: src\components\layout\ProjectsWrapper\ProjectsWrapper.jsx */

import React from "react";
import {VideoCard} from "../../index";
import {ReactangleLink} from "../../index";
import styles from "./ProjectsWrapper.module.css";

import { ProjectImg2 } from "../../../assets";
import { projects } from "./projectsData";

function ProjectsWrapper() {
  const chunkedProjects = [];

  for (let i = 0; i < projects.length; i += 2) {
    chunkedProjects.push(projects.slice(i, i + 2));
  }

  return (
    <>
      <section className={styles.wrapper}>
        {chunkedProjects.map((rowItems, rowIndex) => (
          <div
            key={rowIndex}
            className={`${styles.row} ${
              rowIndex % 2 === 0 ? styles.rowNormal : styles.rowReverse
            }`}
          >
            {rowItems.map((item) => {
              if (item.type === "video") {
                return (
                  <VideoCard
                    key={item.id}
                    image={ProjectImg2}
                    title={item.title}
                    tags={item.tags}
                    youtubeUrl={item.youtubeUrl}
                  />
                );
              }

              if (item.type === "cta") {
                return (
                  <ReactangleLink
                    key={item.id}
                    to={item.to}
                    text={item.text}
                    icon={item.icon}
                  />
                );
              }

              return null;
            })}
          </div>
        ))}
      </section>
    </>
  );
}

export default ProjectsWrapper;