import { useEffect, useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import Card from "./Card";

interface GithubContributionsProps {
    username: string;
}

export default function GithubContributions({ username }: GithubContributionsProps) {

    const selectLastSixMonths = (contributions: any) => {
        const currentDate = new Date();
        const sixMonthsAgoDate = new Date();
        sixMonthsAgoDate.setMonth(currentDate.getMonth() - 4);

        return contributions.filter((activity: any) => {
            const activityDate = new Date(activity.date);
            return activityDate >= sixMonthsAgoDate && activityDate <= currentDate;
        });
    };

    return (
        <Card>
            <GitHubCalendar username={username} hideTotalCount={true} transformData={selectLastSixMonths} style={{ margin: "auto" }} />
        </Card>
    );
}