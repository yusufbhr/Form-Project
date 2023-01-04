var Form = {
    Elements: {
        name: document.getElementById("name"),
        surname: document.getElementById("surname"),
        mail: document.getElementById("mail"),
        phone: document.getElementById("phone"),
        mesaj: document.getElementById("mesaj"),
        select: document.getElementById("select"),

    },
    Status: {
        person: [],
    },
    Actions: {
        submit: () => {
            debugger
            var el = Form.Elements;
            var list = [];
            var nl = document.querySelectorAll("input[type=text]");
            for (let i = 0; i < nl.length; i++) {
                const element = nl[i];
                list.push(element);
            }
            for (let i = 0; i < list.length; i++) {
                const element = list[i];
                if (element.value.length == 0) {
                    alert("Lütfen boş kısımları doldurunuz");
                } else if (element == el.name) {
                    var name = element.value;
                } else if (element == el.surname) {
                    var surname = element.value;
                } else if (element == el.mail) {
                    var mail = element.value;
                } else if (element == el.phone) {
                    var phone = element.value;
                } else if (element == el.mesaj) {
                    var mesaj = element.value;
                    var person = { name, surname, mail, phone, mesaj };
                    Form.Status.person.push(person);
                }

            }



        }



    },



}