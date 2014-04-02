module.exports = function (ast, rework) {

  var newSels = [];
  var allSels = [];

  ast.rules.forEach(function visit(rule) {
    rule.selectors.forEach(function (allSel) {
      if (allSel.match(/^\(.+?\)/)) {
        allSel  = allSel.slice(1, -1);
      }
      Array.prototype.push.apply(allSels, [allSel]);
    });
  });

  ast.rules.forEach(function visit(rule) {
    if (rule.rules)  {
      rule.rules.forEach(visit);
    }

    if (!rule.selectors) return;

    rule.selectors.forEach(function (sel) {
      if (sel.match(/^\(.+?\)/)) {
        var s = sel.slice(1, -1);
        Array.prototype.push.apply(newSels, [s]);
        if (check(s)) {
          rule.selectors = [s];
        } else {
          throw new Error('rework-binding: Compile Error !!');
        }
      }
    });
  });

  function check(sel) {
    var counter = 0;
    if (allSels.length > 0) {
      for (var i = 0; i < allSels.length; i++) {
        if (allSels[i] == sel) {
          counter++;
        }
      }
      if (counter > 1) {
        return false;
      } else {
        return true;
      }
    }
  }
};
