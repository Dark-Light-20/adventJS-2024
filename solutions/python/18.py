from re import compile, search, sub, IGNORECASE


def find_in_agenda(agenda: str, phone: str) -> dict | None:
    phone_regex_string = "\\+\\d{1,2}-\\d{3}-\\d{3}-\\d{3}"
    name_regex_string = "<[\\w\\s]+>"
    phone_regex = compile(phone_regex_string, IGNORECASE)
    name_regex = compile(name_regex_string, IGNORECASE)
    contacts = agenda.split("\n")

    def match_contact(contact: str) -> bool:
        return search(phone_regex, contact)[0].find(phone) != -1

    matched_contacts = filter(match_contact, contacts)

    def contact_info(contact: str) -> dict:
        return {
            "name": search(name_regex, contact)[0][1:-1],
            "address": sub(phone_regex, "", sub(name_regex, "", contact)).strip()
        }

    matched_contacts_info = list(map(contact_info, matched_contacts))
    if (len(matched_contacts_info) == 1):
        return matched_contacts_info[0]
    else:
        return None


if __name__ == "__main__":
    agenda = """+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York"""

    agenda1 = find_in_agenda(agenda, "34-600-123-456")
    print(agenda1)
    # { name: "Juan Perez", address: "Calle Gran Via 12" }

    agenda2 = find_in_agenda(agenda, "600-987")
    print(agenda2)
    # { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

    agenda3 = find_in_agenda(agenda, "111")
    print(agenda3)
    # null
    # Explanation: No results

    agenda4 = find_in_agenda(agenda, "1")
    print(agenda4)
    # null
    # Explanation: Too many results

"""
  Score: ★★★★★
"""
