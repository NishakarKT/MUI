import React from "react";
import { Box } from "@mui/material";
import { Timeline, TimelineItem, TimelineConnector, TimelineSeparator, TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab";

const TimelineElem = () => {
    return (
        <Box>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent color="secondary">9:30 AM</TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary" variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>City A</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="secondary">10:00 AM</TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary" variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>City B</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="secondary">10:30 AM</TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary" variant="outlined" />
                    </TimelineSeparator>
                    <TimelineContent>City C</TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    );
};

export default TimelineElem;