var Journal = require('./../js/journal.js').Journal;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newJournal = new Journal(title, body);
    $('#final').append(newJournal.entry() + "<br><h5>Word Count: " + newJournal.countWords(body) + "</h5>");
  });
});
