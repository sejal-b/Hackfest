import React from "react";

export const HomePage = React.lazy(() => import('src/homePage'));
export const GithubTable = React.lazy(() => import('src/features/github'));
export const SlackTable = React.lazy(() => import('src/features/slack'));