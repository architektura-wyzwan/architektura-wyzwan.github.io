import * as React from 'react';

import {HashRouter, Route, Routes} from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import MainPage from "./pages/main/MainPage";
import Header from './layout/header/Header';
import Footer from './layout/Footer';
import urls from "./Urls";
import RegisterPage from "./pages/RegisterPage";
import WorkInProgressPage from "./pages/WorkInProgressPage";
import NotFoundPage from './pages/NotFoundPage';
import ScrollTop from "./components/ScrollToTop";
import PublicationsPage from "./pages/PublicationsPage";
import ArticlePage from "./pages/ArticlePage";
import NewsPage from "./pages/NewsPage";
import {aboutPage} from "./data/CurrentEdition";
import {previousEditions} from "./data/PreviousEditions";
import AgendaPage from "./pages/AgendaPage";
import ContactPage from './pages/ContactPage';
import {agenda_experiment, ExperimentGuard, publications_experiment} from "./Experiments";
import {agendaWorkInProgressPage} from "./data/AgendaWorkInProgress";
import {articles} from "./data/Articles";
import {Box, Typography, useMediaQuery} from "@mui/material";
import SponsorsPage from "./pages/SponsorsPage";
import {OrganizersPage} from "./pages/OrganizersPage";
import GalleryPickerPage from "./pages/GalleryPickerPage";
import GalleryPage from "./pages/GalleryPage";
import {LanguageContextProvider} from './hooks/UseLanguage';
import {Article} from './layout/Article';
import Layout from "./layout/Layout";
import theme from "./Theme";

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    return (
        <HashRouter>
            <ThemeProvider theme={theme} defaultMode={prefersDarkMode.valueOf() ? "dark" : "light"}>
                <CssBaseline/>
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
                                <Route path={urls.news} element={<NewsPage/>}/>
                                <Route path={urls.current_edition} element={<Article article={aboutPage}/>}/>
                                <Route path={urls.previous_editions()}
                                       element={<ArticlePage articleList={previousEditions}/>}/>
                                <Route path={urls.all_galleries} element={<GalleryPickerPage/>}/>
                                <Route path={urls.gallery()} element={<GalleryPage/>}/>
                                <Route path={urls.agenda} element={
                                    <ExperimentGuard experiment={agenda_experiment}
                                                     enabled={<AgendaPage/>}
                                                     disabled={<Article article={agendaWorkInProgressPage}/>}/>}/>
                                <Route path={urls.publications} element={
                                    <ExperimentGuard experiment={publications_experiment}
                                                     enabled={<PublicationsPage/>}
                                                     disabled={<WorkInProgressPage/>}/>}/>
                                <Route path={urls.contact} element={<ContactPage/>}/>
                                <Route path={urls.register} element={<RegisterPage/>}/>
                                <Route path={urls.article()} element={<ArticlePage articleList={articles}/>}/>
                                <Route path={urls.organizers} element={<OrganizersPage/>}/>
                                <Route path={urls.sponsors} element={<SponsorsPage/>}/>
                                <Route path={"text_test"} element={<Test/>}/>
                                <Route path="*" element={<NotFoundPage/>}/>
                            </Routes>
                        </Box>
                        <Box component="footer" sx={{flexShrink: 0}}>
                            <Footer/>
                        </Box>
                    </Box>
                    <ScrollTop/>
                </LanguageContextProvider>
            </ThemeProvider>
        </HashRouter>
    );
}

function Test() {
    return (
        <Layout>
            <Typography variant="h1">Responsive h1</Typography>
            <Typography variant="h2">Responsive h2</Typography>
            <Typography variant="h3">Responsive h3</Typography>
            <Typography variant="h4">Responsive h4</Typography>
            <Typography variant="h5">Responsive h5</Typography>
            <Typography variant="h6">Responsive h6</Typography>
            <Typography variant="subtitle1">Responsive subtitle1</Typography>
            <Typography variant="subtitle2">Responsive subtitle2</Typography>
            <Typography variant="body1">Responsive body1</Typography>
            <Typography variant="body2">Responsive body2</Typography>
            <Typography variant="very_bold">Responsive very_bold</Typography><br/>
            <Typography variant="bold">Responsive bold</Typography><br/>
            <Typography variant="bolder">Responsive bolder</Typography><br/>
            <Typography variant="regular">Responsive regular</Typography><br/>
            <Typography variant="lighter">Responsive lighter</Typography><br/>
            <Typography variant="light">Responsive light</Typography><br/>
            <Typography variant="very_light">Responsive very_light</Typography><br/>
        </Layout>
    );
}

export default App;
