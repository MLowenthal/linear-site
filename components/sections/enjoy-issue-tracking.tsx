"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Endorsements by
            <br />
            people whose opinions matter
          </>
        }
        image=""
        text=""
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Value Add.",
            text: "Max brings structure and gravitas to any role. He immediately makes an impact on anything he touches.",
            source: "— Previous Co-Founder"
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Does More With Less.",
            text: "I have rarely seen someone produce results with such limited resources.",
            source: "— Current Manager"
          },
          {
            icon: WorkflowsIcon,
            title: "Structured Thinker",
            text: "Max has a rare ability to organize data and thoughts into a way thats both impactful and simple.",
            source:"— Previous Manager"
          },
          {
            icon: CustomViewsIcon,
            title: "Analytical Rigor.",
            text: "Max produces some of the best analytical data, forecasts, and analysis I recieve.",
            source: "— Previous Executive Leader"
          },
          {
            icon: DiscussionIcon,
            title: "Great Collaborator.",
            text: "Working with Max is fun because he brings a human element to business.",
            source: "— Previous Peer"
          },
          {
            icon: IssuesIcon,
            title: "Organizational Excellence.",
            text: "Everything Max touches becomes more organized. Its a huge benefit at a start-up.",
            source: "— Past Cross-Functional Partner"
          },
        ]}
      />
      
    </Features>
  );
};
