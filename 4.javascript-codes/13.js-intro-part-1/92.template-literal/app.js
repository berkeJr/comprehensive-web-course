//Template Literal - String oluşturmakta yeni standart

/**Bu derste JavaScript'e EcmaScript6 ile gelen template literal özelliğine bakacağız. Bu özellik stringleri daha özenli bir 
 * şekilde yazmamızı sağlıyor. */

//Örneğin 2 tane string 1 tane de number olsun. 

const name = "Mustafa Murat Coşkun";
const deparment = "Bilişim";
const salary = 4000;

//Şimdi bu 3 değişkeni bir stringde depolamak istiyoruz. 
// const a = "İsim: " + name + "\n" + "Departman: " + deparment + "\n" + "Maaş: " + salary + "\n";
//console.log(a);


const a = `İsim:${name}\nDeparman:${deparment}\nMaaş:${salary}`;
console.log(a);

