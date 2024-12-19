function findInAgenda(
  agenda: string,
  phone: string
): { name: string; address: string } | null {
  const phoneRegexString = "\\+\\d{1,2}(-\\d{3}){3}";
  const nameRegexString = "<[\\w\\s]+>";
  const phoneRegex = new RegExp(phoneRegexString, "gi");
  const nameRegex = new RegExp(nameRegexString, "gi");
  const removeRegex = new RegExp(
    `(${phoneRegexString})|(${nameRegexString})`,
    "gi"
  );
  const contacts = agenda.split("\n");
  const contactsInfo = contacts
    .filter((contact) => {
      const number = contact.match(phoneRegex)![0];
      return number.includes(phone);
    })
    .map((contact) => {
      const name = contact.match(nameRegex)![0].slice(1, -1);
      const address = contact.replaceAll(removeRegex, "").trim();
      return { name, address };
    });
  return contactsInfo.length === 1 ? contactsInfo[0] : null;
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

const agenda1 = findInAgenda(agenda, "34-600-123-456");
console.log(agenda1);
// { name: "Juan Perez", address: "Calle Gran Via 12" }

const agenda2 = findInAgenda(agenda, "600-987");
console.log(agenda2);
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

const agenda3 = findInAgenda(agenda, "111");
console.log(agenda3);
// null
// Explanation: No results

const agenda4 = findInAgenda(agenda, "1");
console.log(agenda4);
// null
// Explanation: Too many results

/* 
  Score: ★★★★★
*/
