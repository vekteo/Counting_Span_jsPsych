/* 
Created by Teodora Vekony (vekteo@gmail.com)
MEMO Team (PI: Dezso Nemeth)
Lyon Neuroscience Research Center
Universite Claude Bernard Lyon 1

Github:https://github.com/vekteo/Counting_Span_jsPsych
*/

const imagesInstruction = ["../static/images/cspan_instrux1.bmp", "../static/images/cspan_instrux2.bmp"]
const imagesPractice1 = ["../static/images/cspanp1.bmp", "../static/images/cspanp2.bmp"];
const imagesPractice2 = ["../static/images/cspanp3.bmp", "../static/images/cspanp4.bmp"];
const imagesPractice3 = ["../static/images/cspanp5.bmp", "../static/images/cspanp6.bmp"];
const imagesRun1_2 = ["../static/images/cspan1.bmp","../static/images/cspan2.bmp"];
const imagesRun1_3 = ["../static/images/cspan3.bmp","../static/images/cspan4.bmp","../static/images/cspan5.bmp"];
const imagesRun1_4 = ["../static/images/cspan6.bmp","../static/images/cspan7.bmp", "../static/images/cspan8.bmp", "../static/images/cspan9.bmp"];
const imagesRun1_5 = ["../static/images/cspan10.bmp","../static/images/cspan11.bmp", "../static/images/cspan12.bmp", "../static/images/cspan13.bmp", "../static/images/cspan14.bmp"];
const imagesRun1_6 = ["../static/images/cspan15.bmp","../static/images/cspan16.bmp", "../static/images/cspan17.bmp", "../static/images/cspan18.bmp", "../static/images/cspan19.bmp", "../static/images/cspan20.bmp"];

const imagesRun2_2 = ["../static/images/cspan21.bmp","../static/images/cspan22.bmp"];
const imagesRun2_3 = ["../static/images/cspan23.bmp","../static/images/cspan24.bmp","../static/images/cspan25.bmp"];
const imagesRun2_4 = ["../static/images/cspan26.bmp","../static/images/cspan27.bmp", "../static/images/cspan28.bmp", "../static/images/cspan29.bmp"];
const imagesRun2_5 = ["../static/images/cspan30.bmp","../static/images/cspan31.bmp", "../static/images/cspan32.bmp", "../static/images/cspan33.bmp", "../static/images/cspan34.bmp"];
const imagesRun2_6 = ["../static/images/cspan35.bmp","../static/images/cspan36.bmp", "../static/images/cspan37.bmp", "../static/images/cspan38.bmp", "../static/images/cspan39.bmp", "../static/images/cspan40.bmp"];

const imagesRun3_2 = ["../static/images/cspan41.bmp","../static/images/cspan42.bmp"];
const imagesRun3_3 = ["../static/images/cspan43.bmp","../static/images/cspan44.bmp","../static/images/cspan45.bmp"];
const imagesRun3_4 = ["../static/images/cspan46.bmp","../static/images/cspan47.bmp", "../static/images/cspan48.bmp", "../static/images/cspan49.bmp"];
const imagesRun3_5 = ["../static/images/cspan50.bmp","../static/images/cspan51.bmp", "../static/images/cspan52.bmp", "../static/images/cspan53.bmp", "../static/images/cspan54.bmp"];
const imagesRun3_6 = ["../static/images/cspan55.bmp","../static/images/cspan56.bmp", "../static/images/cspan57.bmp", "../static/images/cspan58.bmp", "../static/images/cspan59.bmp", "../static/images/cspan60.bmp"];

function expStart(subject, session) {

    /*************** VARIABLES ***************/

    let timeline = [];
    let quitRun1 = 0;
    let quitRun2 = 0;
    let quitRun3 = 0;
    const subjectId = subject;
    const sessionNumber = session;

    /* timeline elements */

    const instructions = {
        type: "instructions",
        pages: [
            `<h1>${language.welcomePage.welcome}</h1><br><p>${language.welcomePage.clickNext}</p>`,
            `<p><strong>${language.instruction1.blueCircles}</p><p>${language.instruction1.memorize}</p><p>${language.instruction1.nextImage}</p><p>${language.instruction1.questionMark}</strong></p>`,
            `<img style="width: 800px" src="../static/images/cspan_instrux1.bmp"/><p><p><strong>${language.instruction2.example}</strong></p>`,
            `<img style="width: 800px" src="../static/images/cspan_instrux2.bmp"/><p><p><strong>${language.instruction3.example}</strong></p>`,
            `<h1>?</h1><br><p><strong>${language.instruction4.example}</strong></p><br><p><strong>${language.instruction4.practiceStart}</strong></p>`,
        ],
        data: {test_part: "instruction"},
        show_clickable_nav: true,
        button_label_next: language.button.next,
        button_label_previous: language.button.previous
    }

    const practiceStart = {
        type: "html-keyboard-response",
        stimulus: `<p><strong>${language.task.practiceStart}</strong></p>`,
        data: {test_part: "practice_start"}
    };  


    const taskStart = {
        type: "html-keyboard-response",
        stimulus: `<p><strong>${language.task.firstStart}</strong></p>`,
        data: {test_part: "start_task"}
    };  

    const newRun = {
        type: "html-keyboard-response",
        stimulus: `<p><strong>${language.task.secondStart}</strong></p>`,
        data: {test_part: "new_run"},
    };  

    const newRun2 = {
        type: "html-keyboard-response",
        stimulus: `<p><strong>${language.task.thirdStart}</strong></p>`,
        data: {test_part: "new_run"},
    };  

    const endTask = {
        type: "html-keyboard-response",
        stimulus: `<p><strong>${language.end.end}</strong></p><br><p><strong>${language.end.thankYou}</strong></p><br>`,
        data: {test_part: "end"},
        trial_duration: 3000,
        response_ends_trial: true,
        on_finish: function(data) {
            data.counting_span = (jsPsych.data.get().select('run1_last_correct').sum() + jsPsych.data.get().select('run2_last_correct').sum() + jsPsych.data.get().select('run3_last_correct').sum())/3
        }
    };  

    const practiceStimuli1 = stimulusGenerator(imagesPractice1, 2, 1, 0);
    const practiceStimuli2 = stimulusGenerator(imagesPractice2, 2, 1, 0);
    const practiceStimuli3 = stimulusGenerator(imagesPractice3, 2, 1, 0);

    const run1level2Stimuli = stimulusGenerator(imagesRun1_2, 2, 0, 1);
    const run1level3Stimuli = stimulusGenerator(imagesRun1_3, 3, 0, 1);
    const run1level4Stimuli = stimulusGenerator(imagesRun1_4, 4, 0, 1);
    const run1level5Stimuli = stimulusGenerator(imagesRun1_5, 5, 0, 1);
    const run1level6Stimuli = stimulusGenerator(imagesRun1_6, 6, 0, 1);
    
    const run2level2Stimuli = stimulusGenerator(imagesRun2_2, 2, 0, 2);
    const run2level3Stimuli = stimulusGenerator(imagesRun2_3, 3, 0, 2);
    const run2level4Stimuli = stimulusGenerator(imagesRun2_4, 4, 0, 2);
    const run2level5Stimuli = stimulusGenerator(imagesRun2_5, 5, 0, 2);
    const run2level6Stimuli = stimulusGenerator(imagesRun2_6, 6, 0, 2);

    const run3level2Stimuli = stimulusGenerator(imagesRun3_2, 2, 0, 3);
    const run3level3Stimuli = stimulusGenerator(imagesRun3_3, 3, 0, 3);
    const run3level4Stimuli = stimulusGenerator(imagesRun3_4, 4, 0, 3);
    const run3level5Stimuli = stimulusGenerator(imagesRun3_5, 5, 0, 3);
    const run3level6Stimuli = stimulusGenerator(imagesRun3_6, 6, 0, 3);

    const trial = {
        type: 'image-keyboard-response',
        stimulus: jsPsych.timelineVariable('stimulus'),
        data: jsPsych.timelineVariable('data'),
        stimulus_height: 500,
        choices: ['space', 'p'],
        response_ends_trial: true,
        on_finish: function (data) { 
            data.test_part = "stimulus"
        }
    }

    const questionStimulus = {
        type: "html-keyboard-response",
        stimulus: `<h1>?</h1><br><p><strong>${language.task.nowTell}</strong></p>`,
        data: {test_part: "question"},
        on_finish: function (data) {
            if (data.key_press == 83 && jsPsych.data.get().last(2).values()[0].run == 1) {
                quitRun1 = 1;
                data.correct = 0;
                data.run1_last_correct = jsPsych.data.get().last(2).values()[0].level-1
            } else if (data.key_press == 83 && jsPsych.data.get().last(2).values()[0].run == 2) {
                quitRun2 = 1;
                data.correct = 0;
                data.run2_last_correct = jsPsych.data.get().last(2).values()[0].level-1
            } else if (data.key_press == 83 && jsPsych.data.get().last(2).values()[0].run == 3) {
                quitRun3 = 1;
                data.correct = 0;
                data.run3_last_correct = jsPsych.data.get().last(2).values()[0].level-1
            } else if (jsPsych.data.get().last(2).values()[0].run == 1 && jsPsych.data.get().last(2).values()[0].level == 6) {
                data.run1_last_correct = 6;
                data.correct = 1;
            }
            else if (jsPsych.data.get().last(2).values()[0].run == 2 && jsPsych.data.get().last(2).values()[0].level == 6) {
                data.run2_last_correct = 6;
                data.correct = 1;
            }
            else if (jsPsych.data.get().last(2).values()[0].run == 3 && jsPsych.data.get().last(2).values()[0].level == 6) {
                data.run3_last_correct = 6;
                data.correct = 1;
            }
            else { 
                data.correct = 1;
            }
        }
    };  

    
    /*************** TIMELINE ***************/

    //practice

    const practice1 = {
        timeline: [trial],
        timeline_variables: practiceStimuli1,
        randomize_order: false
    }

    const practice2 = {... practice1, timeline_variables: practiceStimuli2}
    const practice3 = {... practice1, timeline_variables: practiceStimuli3}

    //run1

    const run1level2 = {
        timeline: [trial],
        timeline_variables: run1level2Stimuli,
        conditional_function: function(){
            if (quitRun1 == 1){
            return false;
            }  else {
            return true
            }
        }
    }

    const run1level3 = {...run1level2, timeline_variables: run1level3Stimuli}
    const run1level4 = {...run1level2, timeline_variables: run1level4Stimuli}
    const run1level5 = {...run1level2, timeline_variables: run1level5Stimuli}
    const run1level6 = {...run1level2, timeline_variables: run1level6Stimuli}


    const questionRun1 = {
        timeline: [questionStimulus],
        conditional_function: function(){
            if (quitRun1 == 1){
            return false;
            }  else {
            return true
            }
        }
    }

    //run2

    const run2level2 = {
        timeline: [trial],
        timeline_variables: run2level2Stimuli,
        conditional_function: function(){
            if (quitRun2 == 1){
            return false;
            }  else {
            return true
            }
        }
    }

    const run2level3 = {...run2level2, timeline_variables: run2level3Stimuli}
    const run2level4 = {...run2level2, timeline_variables: run2level4Stimuli}
    const run2level5 = {...run2level2, timeline_variables: run2level5Stimuli}
    const run2level6 = {...run2level2, timeline_variables: run2level6Stimuli}

    const questionRun2 = {
        timeline: [questionStimulus],
        conditional_function: function(){
            if (quitRun2 == 1){
            return false;
            }  else {
            return true
            }
        }
    }

    //run3

    const run3level2 = {
        timeline: [trial],
        timeline_variables: run3level2Stimuli,
        conditional_function: function(){
            if (quitRun3 == 1){
            return false;
            }  else {
            return true
            }
        }
    }

    const run3level3 = {...run3level2, timeline_variables: run3level3Stimuli}
    const run3level4 = {...run3level2, timeline_variables: run3level4Stimuli}
    const run3level5 = {...run3level2, timeline_variables: run3level5Stimuli}
    const run3level6 = {...run3level2, timeline_variables: run3level6Stimuli}

    const questionRun3 = {
        timeline: [questionStimulus],
        conditional_function: function(){
            if (quitRun3 == 1){
            return false;
            }  else {
            return true
            }
        }
    }

    jsPsych.data.addProperties({subject: subjectId});
    jsPsych.data.addProperties({session: sessionNumber});
    timeline.push({type: "fullscreen", fullscreen_mode: true}, instructions, practiceStart,  practice1, questionRun1, practice2, questionRun1, practice3, questionRun1, taskStart, run1level2, questionRun1, run1level3, questionRun1, run1level4, questionRun1, run1level5, questionRun1, run1level6, questionRun1);
    timeline.push(newRun, run2level2, questionRun2, run2level3, questionRun2, run2level4, questionRun2, run2level5, questionRun2, run2level6, questionRun2);
    timeline.push(newRun2, run3level2, questionRun3, run3level3, questionRun3, run3level4, questionRun3, run3level5, questionRun3, run3level6, questionRun3, endTask);
    timeline.push({type: "fullscreen", fullscreen_mode: false})

    /*************** EXPERIMENT START AND DATA UPDATE ***************/

    jsPsych.init({
        timeline: timeline,
        preload_images: [imagesInstruction, imagesPractice1, imagesPractice2, imagesPractice3, imagesRun1_2, imagesRun1_3, imagesRun1_4, imagesRun1_5, imagesRun1_6, imagesRun2_2, imagesRun2_3, imagesRun2_4, imagesRun2_5, imagesRun2_6, imagesRun3_2, imagesRun3_3, imagesRun3_4, imagesRun3_5, imagesRun3_6],
        on_close: function(){
            jsPsych.data.get().localSave("csv", `CS_Subject_${subjectId}_Session_${sessionNumber}_quitted_output.csv`);
        },
        on_finish: function() {
        jsPsych.data.get().localSave("csv", `CS_Subject_${subjectId}_Session_${sessionNumber}_output.csv`);
        }
    });
}