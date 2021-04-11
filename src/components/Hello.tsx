import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    enthusiamLevel?:number;
}

function Hello({name, enthusiamLevel = 1}: Props){
    if(enthusiamLevel <= 0)
        throw new Error('You could be a little more enthusiastic! :(');
    return (
      <div className="hello">
          <div className="greeting">
              Hello { name  + getExclaimationPoints(enthusiamLevel)}
          </div>
      </div>
    );
}
export default Hello;

// helpers
function getExclaimationPoints(numChars: number){
    return Array(numChars + 1).join('!');
}
