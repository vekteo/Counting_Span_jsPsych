function stimulusGenerator(runImages, level, isPractice, run) {
    let stimuli = [];
    for (let i = 0; i < level; i ++) {
        const newStimulus = {stimulus: runImages[i], data: {run: run, level: level, trial_within_level: i+1, is_practice: isPractice}}
        stimuli.push(newStimulus)
    }
    return stimuli
}