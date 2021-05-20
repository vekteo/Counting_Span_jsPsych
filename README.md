# Counting_Span_jsPsych
A Counting Span Task created with jsPsych <a href="https://link.springer.com/article/10.3758/s13428-014-0458-y">de Leeuw, J. R., 2015</a>.

<h2>Structure of the Task</h2>
Images with blue circles, blue squares and yellow circles appears on the screen. The task is to count loudly the <strong>blue circles</strong>. When the counting is over, the participant needs to memorize the result of the counting. After that, a new image with the same symbols appears on the screen, and the participants has to count the blue circles again, and memorize the result. After the presentation of a few set of symbols, the participant is asked to recall the memorized numbers. First set contains 2 images, then each subsequent set contains one more image (up to 6 images in a set).

If the participant answers correctly, the SPACE should be pressed to skip to the next set. If the participant gets the number sequence wrong, a new run must be started (by pressing S).

The result of the run is the length of the last set that was correctly called. The result of the task is the arithmetic mean of the three runs.

At the end of the task, the data are downloaded to the local machine in .csv format.

<h2>Output file</h2>
<ul>
 <li><strong>success:</strong> whether fullscreen mode was successfully started/ended (true or false)</li>
 <li><strong>trial_type:</strong> JSPSych trialtype of the given trial (fullscreen, instructions, html-keyboard-response, or image-keyboard-response)</li>
 <li><strong>trial_index:</strong> the number of the given trials (all events considered, even instructions, feedbacks!)</li>
 <li><strong>time_elapsed:</strong> the time elapsed from the start of the script in ms</li>
 <li><strong>internal_code_id:</strong> internal node id of the trial</li>
 <li><strong>browser_events:</strong> browser events during the task (fullscreenenter, fullscreenexit, blur or focus)</li>
 <li><strong>view_history:</strong> viewing history during the instruction trials</li>
 <li><strong>rt:</strong> the reaction time for the Go or NoGo trials in ms</li>
 <li><strong>stimulus:</strong> stimulus on the screen in HTML</li>
 <li><strong>key_press:</strong> number code of the key pressed</li>
 <li><strong>run:</strong> the number of the current run (0 for practice, 1-3 for the three runs)</li>
 <li><strong>level:</strong> the number of the images in the current set</li>
 <li><strong>trial_within_level:</strong> the number of currently presented images within the set</li>
 <li><strong>is_practice:</strong> whether the stimulus is presented as a practice stimulus (1 - yes, 0 - no)</li>
 <li><strong>correct:</strong> whether or not correct responses were given (1 - correct, 0 - incorrect)
 <li><strong>run1_last_correct</strong>: the number of images in the last set that the participant recalled correctly (first run)
 <li><strong>run2_last_correct</strong>: the number of images in the last set that the participant recalled correctly (second run)
 <li><strong>run3_last_correct</strong>: the number of images in the last set that the participant recalled correctly (third run)
 <li><strong>counting_span</strong>: the mean of  the scores of the three runs
 </ul>

<h2>Setting options</h2>
You can set the language of the task by modifying the varablei <strong>language</strong>. The currently available languages are enligsh (en) and hungarian (hu).

<h2>Browser requirements</h2>
Any browser except Safari and Internet Explorer.
