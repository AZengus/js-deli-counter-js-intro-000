function takeANumber(line,name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    var servingAnnounce = `Currently serving ${line[0]}.`
    line.shift()
    return servingAnnounce
  }
  else   {
      return 'There is nobody waiting to be served!'
    }
}

function currentLine(line) {
  if (line.length > 0) {
    var statementOpen = `The line is currently:`
    var currentLineArray = []
    for (var i = 0; i < line.length; i++) {
      currentLineArray.push(` ${i+1}. ${line[i]}`)
    }
    return statementOpen + currentLineArray
  }
  else {
    return 'The line is currently empty.'
  }
}
