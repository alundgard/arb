/**
 *  
 *  gup(name) :: retrieves URL parameters if provided
 *
 *  Prepares the page for MTurk on load.
 *  1. looks for a form element with id="mturk_form", and sets its METHOD / ACTION
 *    1a. All that the task page needs to do is submit the form element when ready
 *  2. disables form elements if HIT hasn't been accepted
 *
 **/

// selector used by jquery to identify your form
const form_selector = "#mturk_form";

// function for getting URL parameters
function gup(name) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if(results == null)
    return "";
  else return unescape(results[1]);
}

$(document).ready(function () {
  // Add a new hidden input element with name="assignmentId" with assignmentId as its value
  var aid_input = $("<input type='hidden' name='assignmentId' value='" + gup("assignmentId") + "'>").appendTo($(form_selector));
  var workerId_input = $("<input type='hidden' name='workerId' value='" + gup("workerId") + "'>").appendTo($(form_selector));
  var hitId_input = $("<input type='hidden' name='hitId' value='" + gup("hitId") + "'>").appendTo($(form_selector));

  // Make sure the submit form's method is POST
  $(form_selector).attr('method', 'POST');

  // Set the Action of the form to the provided "turkSubmitTo" field
  if((submit_url=gup("turkSubmitTo"))!="") {
    $(form_selector).attr('action', submit_url + '/mturk/externalSubmit');
  }
});
