// here is where you can write the multiple test cases for the challenge


export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge('SELLS kOOL GADGETS iN wiNTER GEAR'), 'kiwi', 'SELLS kOOL GADGETS iN wiNTER GEAR')
  
  test(challenge('OWNS A mEMBERSHiP FOR THE cROCS MARkET'), 'mick', 'OWNS A mEMBERSHiP FOR THE cROCS MARkET')
  
  test(challenge('JEREMY sPeNDING vACATION TIMe, AnD caRING FOR SWEEt KIDs?'), 'sevencats', 'JEREMY sPeNDING vACATION TIMe, AnD caRING FOR SWEEt KIDs?')

}