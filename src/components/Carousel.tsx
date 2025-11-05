import React, {useCallback, useEffect, useState} from 'react';
import {Box, IconButton, useMediaQuery, useTheme} from '@mui/material';
import {KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';
import useWindowDimensions from "../hooks/UseWindowDimensions";

interface CarouselProps {
    autoPlay?: boolean;
    autoPlayInterval?: number;
    hideButtons?: boolean;
    numberOfSlides?: number | { xs: number, sm: number, md: number, lg: number, xl: number };
    space: number;
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    nodeList: (React.ReactNode | ((currentId: number, numberOfSlides: number) => React.ReactNode))[];
    containerHeight: any;
}

export function Carousel({
                             nodeList,
                             autoPlay = false,
                             hideButtons = false,
                             autoPlayInterval = 5000,
                             space,
                             justifyContent = 'center',
                             numberOfSlides = 1,
                             containerHeight,
                         }: CarouselProps) {

    const [activeIndex, setActiveIndex] = useState(0);
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchesLg = useMediaQuery(theme.breakpoints.up('lg'));
    const matchesXl = useMediaQuery(theme.breakpoints.up('xl'));
    const numberOfElements = nodeList.length;

    let matchedNumberOfSlides: number;
    if (typeof numberOfSlides === 'number') {
        matchedNumberOfSlides = numberOfSlides;
    } else if (matchesXl) {
        matchedNumberOfSlides = numberOfSlides?.xl;
    } else if (matchesLg) {
        matchedNumberOfSlides = numberOfSlides?.lg;
    } else if (matchesMd) {
        matchedNumberOfSlides = numberOfSlides?.md;
    } else if (matchesSm) {
        matchedNumberOfSlides = numberOfSlides?.sm;
    } else {
        matchedNumberOfSlides = numberOfSlides?.xs;
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % (numberOfElements - matchedNumberOfSlides + 1));
    };
    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + numberOfElements - matchedNumberOfSlides + 1) % (numberOfElements - matchedNumberOfSlides + 1));
    };


    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(handleNext, autoPlayInterval);
        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, handleNext]);

    const [width, setWidth] = useState(null);
    const windowDimensions = useWindowDimensions();
    const div = useCallback((node: any) => {
        if (node !== null) {
            setWidth(node.getBoundingClientRect().width);
        }
    }, [windowDimensions]);
    // @ts-ignore
    const widthOfImagePx = (width - space * (matchedNumberOfSlides - 1)) / matchedNumberOfSlides;

    return (
        <Box
            ref={div}
            sx={{
                position: 'relative',
                width: '100%',
                height: containerHeight,
                overflowX: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: space + "px",
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${(widthOfImagePx + space) * activeIndex}px)`,
                }}
            >
                {nodeList.map((item, _) => (
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: justifyContent,

                        width: widthOfImagePx + 'px',
                    }}>
                        {typeof item === 'function' ?
                            item(activeIndex, matchedNumberOfSlides) :
                            item
                        }
                    </Box>
                ))}
            </Box>

            <IconButton
                sx={{
                    display: hideButtons ? 'none' : 'initial',
                    position: 'absolute',
                    left: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                    },
                }}
                onClick={handlePrev}
            >
                <KeyboardArrowLeft/>
            </IconButton>

            <IconButton
                sx={{
                    display: hideButtons ? 'none' : 'initial',
                    position: 'absolute',
                    right: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                    },
                }}
                onClick={handleNext}
            >
                <KeyboardArrowRight/>
            </IconButton>
        </Box>
    );
}
