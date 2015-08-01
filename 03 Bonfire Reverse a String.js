/* Bonfire: Reverse a String 
Difficulty 1/5

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global String Object String.split() Array.reverse() Array.join()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282 
*/

function reverseString(str) {
	// Create new variable, split old string character by character, reverse them, then join them
	// character by character.
  var strReverse = str.split('').reverse().join('');
  
  return strReverse;
}

reverseString('hello');