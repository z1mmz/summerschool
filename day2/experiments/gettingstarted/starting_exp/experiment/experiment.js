var timeline = {
  "timeline": [
    {
      "type": ["instructions"],
      "pages": ["Welcome! Use the arrow buttons to browse these instructions", "In this experiment you will solve some equations <\/br> It is very <i>important<\/i> that you do your best ", "Press the 'forward' button to begin!"],
      "key_forward": [39],
      "key_backward": [37],
      "allow_backward": true,
      "allow_keys": true,
      "show_clickable_nav": true,
      "button_label_previous": ["backward"],
      "button_label_next": ["forward"],
      "post_trial_gap": [1000]
    },
    {
      "type": ["html-button-response"],
      "stimulus": ["13 + 23 = 36"],
      "choices": ["true", "false"],
      "margin_vertical": ["0px"],
      "margin_horizontal": ["8px"],
      "response_ends_trial": true,
      "post_trial_gap": [500]
    },
    {
      "type": ["html-button-response"],
      "stimulus": ["2 + 2 = 5"],
      "choices": ["true", "false"],
      "margin_vertical": ["0px"],
      "margin_horizontal": ["8px"],
      "stimulus_duration": [500],
      "response_ends_trial": true,
      "post_trial_gap": [500]
    }
  ]
};

jsPsych.init(
{
  "timeline": [timeline],
  "on_finish": function() {
    var data = jsPsych.data.get().csv();
    var file = 'xprmntr_local_name';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: file, filedata: data}));
  }
}
);
