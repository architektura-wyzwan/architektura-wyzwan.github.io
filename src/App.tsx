import * as React from 'react';

import {HashRouter, Route, Routes} from "react-router-dom";

import MainPage from "./pages/MainPage";
import Header from './common/Header';
import Footer from './common/Footer';
import {LanguageContextProvider} from './common/Translation';
import urls from "./Urls";
import RegisterPage from "./pages/RegisterPage";
import WorkInProgressPage from "./pages/WorkInProgressPage";
import NotFoundPage from './pages/NotFoundPage';
import ScrollTop from "./common/ScrollToTop";
import PublicationsPage from "./pages/PublicationsPage";
import ArticlePage from "./pages/ArticlePage";
import AllNewsPage from "./pages/AllNewsPage";
import {aboutPage} from "./data/CurrentEdition";
import {previousEditions} from "./data/PreviousEditions";
import AgendaPage from "./pages/AgendaPage";
import ContactPage from './pages/ContactPage';
import {agenda_experiment, ExperimentGuard, publications_experiment} from "./Experiments";
import {agendaWorkInProgressPage} from "./data/AgendaWorkInProgress";
import {articles} from "./data/Articles";
import {Box} from "@mui/material";
import SponsorsPage from "./pages/SponsorsPage";
import {OrganizersPage} from "./pages/OrganizersPage";
import AllGalleryPage from "./pages/AllGalleryPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
    return (
        <HashRouter>
            <LanguageContextProvider>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}>
                    <Header/>
                    <Box sx={{flex: "1 0 auto"}}>
                        <Routes>
                            <Route path={urls.main} element={<MainPage/>}/>
                            <Route path={urls.news} element={<AllNewsPage/>}/>
                            <Route path={urls.current_edition} element={<ArticlePage article={aboutPage}/>}/>
                            <Route path={urls.previous_editions()}
                                   element={<ArticlePage articleList={previousEditions}/>}/>
                            <Route path={urls.all_galleries} element={<AllGalleryPage/>}/>
                            <Route path={urls.gallery()} element={<GalleryPage/>}/>
                            <Route path={urls.agenda} element={
                                <ExperimentGuard experiment={agenda_experiment}
                                                 alternative={<ArticlePage
                                                     article={agendaWorkInProgressPage}/>}>
                                    <AgendaPage/>
                                </ExperimentGuard>}/>
                            <Route path={urls.publications} element={
                                <ExperimentGuard experiment={publications_experiment}
                                                 alternative={<WorkInProgressPage/>}>
                                    <PublicationsPage/>
                                </ExperimentGuard>}/>
                            <Route path={urls.contact} element={<ContactPage/>}/>
                            <Route path={urls.register} element={<RegisterPage/>}/>
                            <Route path={urls.article()} element={<ArticlePage articleList={articles}/>}/>
                            <Route path={urls.organizers} element={<OrganizersPage/>}/>
                            <Route path={urls.sponsors} element={<SponsorsPage/>}/>
                            <Route path="*" element={<NotFoundPage/>}/>
                        </Routes>
                    </Box>
                    <Box sx={{flexShrink: 0}}>
                        <Footer/>
                    </Box>
                </Box>
                <ScrollTop/>
            </LanguageContextProvider>
        </HashRouter>
    );
}

export default App;
