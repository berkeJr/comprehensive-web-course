// 92.Template Literal

/*

- Şimdi de JavaScript'e EcmaScript6 ile gelen "Template Literal" özelliğine bakalım. Bu özellik stringleri daha özenli bir 
  şekilde yazmamızı sağlıyor. 
  
*/


// Örneğin 2 tane string 1 tane de number olsun. 

const name = "Berke Sayın";
const department = "Yazılım";
const salary = 10000;

// Şimdi bu 3 değişkeni bir stringde tutmak istiyoruz. Eski yöntemle şu şekilde yazarız.
// const info = "İsim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary + "\n";
// console.log(info);


// const info = `İsim: ${name}\nDepartman: ${department}\nMaaş: ${salary}`;

// ${} => Bu ifadenin içerisine daha önce tanımlanan değişken adı yazılır.

// console.log(info);



// Web sayfasında bir liste oluşturmak için;
const html = "<ul> " + 
             "<li>" + name + "</li>" +
             "<li>" + department + "</li>" +
             "<li>" + salary + "</li>" +
             "</ul>";

// document.body.innerHTML = html;

// Eski yöntemle yukarıdaki şekilde oluşturabiliriz.



const team = "Liverpool";
const subject = "Football";
const league = "England";


// Template Literal ile bu şekilde oluşturabiliriz.
const html2 = `
      <ul>
       <li>${team}</li>
       <li>${subject}</li>
       <li>${league}</li>
      </ul>
     `;

document.body.innerHTML = html2;

