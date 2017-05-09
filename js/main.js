var app = new Vue({
  el: '#app',
  data: {
    minLen: 0,
    maxLen: 20,
    words: [],
    regex: '',
    sorting: 'Alphabetical',
    order: 'Normal'
  }
})

document.getElementById('regex').addEventListener('change', function(evt) {
  updateOutput(app.regex)
})

document.getElementById('sorting').addEventListener('change', function(evt) {
  sort(app.sorting, app.order)
})

document.getElementById('order').addEventListener('change', function(evt) {
  sort(app.sorting, app.order)
})

function matches(text, regex) {
  match = text.match(regex)
  if (!match) {
    return false
  } else {
    return match[0] == text
  }
}

function updateOutput() {
  var output = []
  for (var word of words) {
    if (matches(word, app.regex)) {
      output.push(word)
    }
  }
  app.words = output
  sort(app.sorting, app.order)
}

function sort(type, direction) {
  var sorted
  if (type.toLowerCase() == 'alphabetical') {
    sorted = app.words.sort()
  } else if (type.toLowerCase() == 'length') {
    sorted = app.words.sort(function(a, b) {
      return b.length - a.length
    })
  } else {
    sorted = []
  }

  if (direction.toLowerCase() == 'reversed') {
    sorted.reverse()
  }

  app.words = sorted
}
