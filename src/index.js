import _ from 'lodash';
import './style.css';
// import Data from './data.xml';
// import Notes from './data.csv';
import Skeleton from './mainBody';
import submitBtn from './functionality';
import { attachPopUp } from './popup';
attachPopUp();
document.body.appendChild(Skeleton());
console.log(submitBtn());