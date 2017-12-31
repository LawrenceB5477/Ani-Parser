function parseAni(string) {
  var currentSection = {name: "", values: []};
  var sections = [];
  string.split(/\r?\n/).forEach((line, lineNo) => {
    var match;
    if (/^\s*(;.*)?$/.test(line)) {
      return;
    } else if (match = line.match(/^\[(.*)\]$/)) {
      currentSection = {name:match[0], values: []};
      sections.push(currentSection);
    } else if (match = line.match(/^(\w+)=(.*)$/)) {
      currentSection.values.push({name: match[1], value: match[2]});
    } else {
      throw new Error("Invalid INI format at line: " + (lineNo + 1));
    }
  });
  return sections;
}
