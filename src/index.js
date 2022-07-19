import isEmail from 'validator/lib/isEmail'
import tripleMe from './tripleMe'

console.log(isEmail('john@GMAIL.COM'));

console.log(tripleMe(300))

if(module.hot) {
    module.hot.accept()
}