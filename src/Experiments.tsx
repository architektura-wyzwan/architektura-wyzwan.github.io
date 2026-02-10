import * as React from "react";

export type Experiment = {
    enabled: boolean;
}

export type ExperimentGuardProps = {
    experiment: Experiment,
    enabled: React.ReactNode;
    disabled?: React.ReactNode;
}

export function ExperimentGuard(props: ExperimentGuardProps) {
    if (!props.experiment.enabled) {
        return <>{props.disabled !== undefined ? props.disabled : null}</>;
    } else {
        return (<>{props.enabled}</>);
    }
}

export const publications_experiment: Experiment = {
    enabled: true,
}
export const speakers_experiment: Experiment = {
    enabled: false,
}
export const important_dates_experiment: Experiment = {
    enabled: false,
}
export const agenda_experiment: Experiment = {
    enabled: false,
}
