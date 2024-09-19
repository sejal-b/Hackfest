import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import {GithubTable, HomePage, SlackTable} from "src/router/routes/routes";
import ResultsLoading from "src/components/NonIdealState/resultsLoading";


const Router = () => {
    return (
    <React.Suspense fallback={<ResultsLoading />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/github" element={<GithubTable />} />
                <Route path="/slack" element={<SlackTable />} />
            </Routes>
    </React.Suspense>
    );
};

export default Router;
