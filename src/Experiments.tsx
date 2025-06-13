import * as React from "react";

export type Experiment = {
    enabled: boolean;
}

export type ExperimentGuardProps = {
    experiment: Experiment,
    children: React.ReactNode;
    alternative?: React.ReactNode;
}

export function ExperimentGuard(props: ExperimentGuardProps) {
    if (!props.experiment.enabled) {
        return <>{props.alternative !== undefined ? props.alternative : null}</>;
    } else {
        return (<>{props.children}</>);
    }
}

export const publications_experiment: Experiment = {
    enabled: true,
}
export const speakers_experiment: Experiment = {
    enabled: true,
}
export const agenda_experiment: Experiment = {
    enabled: false,
}
