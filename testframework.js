function test(testObj) {
    //testObj structure {script: <string containg script text>, expected: <any type>}
    //returns resultObj with structure {script: <string containg script text>,
    //  expectedJSON: <JSON string containing expected result>,
    //  actualJSON: <JSON string containing actual result>, result: <string containing either 'passed'
    //  or 'failed'}
    const expectedJSON = JSON.stringify(testObj.expected);
    let evalRes;
    try {
      evalRes = eval(testObj.script);
    } catch (error) {
      evalRes = error;
    }
    const actualJSON = JSON.stringify(evalRes);
    const result = expectedJSON === actualJSON ? "passed" : "failed";
    const testResult = createTestResult(
      testObj.script,
      expectedJSON,
      actualJSON,
      result
    );
    return testResult;
  }
  function createTestResult(script, expectedJSON, actualJSON, result) {
    return { script, expectedJSON, actualJSON, result };
  }
  function testframework(scripts, expectedResults) {
    //input
    //scripts - array of tested scripts
    //expectedResults - array of appropriate results
    //scrpits[i] and expectedResults[i] should be consistent
    /**************************************************************** */
    //output
    const bodyElem = document.querySelector("body");
    const resultObjects = getResultObjects(scripts, expectedResults);
    const summary = getSummaryObject(resultObjects);
    const resultItems = getResultItems(resultObjects);
    const summaryLine = getSummaryLine(summary);
    bodyElem.innerHTML = `<ol> ${resultItems}</ol>${summaryLine}`;
  }
  function getResultObjects(scripts, expectedResults) {
    const res = scripts.map((script, index) =>
      test({ script, expected: expectedResults[index] })
    );
    return res;
  }
  function getSummaryObject(resultObjects) {
    const res = resultObjects.reduce(
      (acc, cur) => ({
        passed: cur.result === "passed" ? acc.passed + 1 : acc.passed,
        failed: cur.result === "failed" ? acc.failed + 1 : acc.failed,
      }),
      { passed: 0, failed: 0 }
    );
    return res;
  }
  function getResultItems(resultObjects) {
    const resItems = resultObjects.map(getResItem).join('');
    return resItems;
  }
  function getResItem(resultObject) {
    const resItem = `<li class="item ${resultObject.result === "passed" ? "item_passed" : "item_failed"}"> ${getResText(resultObject)} </li>`;
    return resItem;
  }
  function getResText(resultObject) {
    const resStr = `${resultObject.script} => expected is ${resultObject.expectedJSON}; actual is ${resultObject.actualJSON}`;
    return resStr;
  }
  function getSummaryLine(summary) {
    const summaryLine = `<div class="summary"><span class="item_passed">passed ${summary.passed}</span>
    <span class="item_failed" >failed ${summary.failed}</span></div>` ; 
    return summaryLine
    
  }