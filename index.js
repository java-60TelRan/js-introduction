import {testframework} from './testframework.js'
testframework('mergeObjects testing', 'const obj1={x:2, y:3}; const obj2={z:1, i:-10}; const obj3 = {x:10, y:30}',
  ['mergeObjects(obj1, obj2)','mergeObjects(obj1,obj3,true)', 'mergeObjects(obj1,obj3,false)'],
  [{x:2, y:3, z:1, i:-10},
    {x:2, y:3},
    {x:10, y:30}
  ]
)

