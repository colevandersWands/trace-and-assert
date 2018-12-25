/*
  pytut links will include the asserts
  same code for chromedev & pytut
*/
/*
  for conditional checks
    assert what you think it should be
    that will work perfectly
  for bodies 
    assert what you expect only for the true conditions
*/

{ console.log('--- --- if example --- ---')
  // can you reach every branch?

console.log('--- og code ---')  

{ // pytut link      

  const a = null;
  const b = null;
  const c = null;
  const d = null;
  let result = 0;            

  if (a == d) {              
    result += b;             
  } else if (b < c) {        
    result += a;             
  } else if (d === a) {      
    result += d * c;         
  } 
  if (c || a) {              
    result += d;             
  }


}
console.log('--- tracing exercises ---')

console.log('-- nulls --')  

{ // pytut link
  let expected = null;       

  const a = null;
  const b = null;
  const c = null;
  const d = null;
  let result = 0;         

  if (a == d) {                 console.assert((a == d) === false, 'a == d === ' + (a == d));
    result += b;            
  } else if (b < c) {           console.assert((b < c) === false, 'b < c === ' + (b < c));
    result += a;            
  } else if (d === a) {         console.assert((d === a) === true, '(d === a) === ' + d === a);
    result += d * c;            console.assert(result === 0, 'result += d * c: ' + result)
  } 
  if (c || a) {                 console.assert((c || a) === null, '(c || a) === ' + (c || a))
    result += d;            
  }

  console.assert(result === expected, `\n expected: ${expected} \n actual: ${result}`)
}

console.log('-- 8, 7, "e", "8" --')  

{ // pytut link
  let expected = '78';        

  const a = 8;
  const b = 7;
  const c = 'e';
  const d = '8';
  let result = 0;             

  if (a == d) {                 console.assert((a == d) === true, '(a == d) === ' + (a == d));
    result += b;                console.assert(result === 7,  'result += b === ' + result);
  } else if (b < c) {           console.assert((b < c) === false, '(b < c) === ' + (b < c));
    result += a;              
  } else if (d === a) {         console.assert((d === a) === false, '(d === a) === ' + (d === a));
    result += d * c;          
  } 
  if (c || a) {                 console.assert((c || a) === 'e', '(c || a) === ' + (c || a));
    result += d;              
  }
  
  console.assert(result === expected, `\n expected: ${expected} \n actual: ${result}`)
}



}